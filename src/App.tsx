import { useState } from 'react'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduk, setSelectedProduk] = useState('')
  const [nama, setNama] = useState('')
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const openModal = (produk: string) => {
    setSelectedProduk(produk)
    setModalOpen(true)
    setSuccess(false)
  }

  const closeModal = () => {
    setModalOpen(false)
    setNama('')
    setPhone('')
    setSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Demo only - in production this goes to /api/order on Workers
    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
    }, 1000)
  }

  const products = [
    {
      name: 'Bot Basic',
      emoji: '⚡',
      desc: 'Auto reply, menu simple',
      price: 'RM15',
      badge: 'Starter',
      badgeColor: 'bg-green-900 text-green-300',
      border: 'border-gray-700',
      popular: false,
    },
    {
      name: 'Bot Pro',
      emoji: '🚀',
      desc: 'Auto reply + group + media',
      price: 'RM35',
      badge: 'Best',
      badgeColor: 'bg-yellow-900 text-yellow-300',
      border: 'border-2 border-green-500',
      popular: true,
    },
    {
      name: 'Bot Premium',
      emoji: '💎',
      desc: 'Full feature + AI + unlimited',
      price: 'RM99',
      badge: 'Premium',
      badgeColor: 'bg-purple-900 text-purple-300',
      border: 'border-gray-700',
      popular: false,
    },
  ]

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="text-5xl mb-2">🤖</div>
          <h1 className="text-2xl font-bold text-green-400">AwangBot78</h1>
          <p className="text-gray-400 text-sm mt-1">Bot WhatsApp Automatik & Murah</p>
        </header>

        {/* Product Cards */}
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.name}
              className={`bg-gray-800 rounded-2xl p-5 border ${product.border} relative`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  🔥 POPULAR
                </div>
              )}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h2 className="text-lg font-bold">
                    {product.emoji} {product.name}
                  </h2>
                  <p className="text-gray-400 text-xs mt-1">{product.desc}</p>
                </div>
                <span className={`${product.badgeColor} text-xs px-2 py-1 rounded-full`}>
                  {product.badge}
                </span>
              </div>
              <div className="flex items-end justify-between mt-4">
                <div>
                  <span className="text-3xl font-bold text-white">{product.price}</span>
                  <span className="text-gray-400 text-sm">/bulan</span>
                </div>
                <button
                  onClick={() => openModal(`${product.name} - ${product.price}`)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all active:scale-95"
                >
                  ORDER
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 pb-6">
          <a
            href="https://t.me/awangbot78_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.13-.05-.18-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            Hubungi via Telegram
          </a>
          <p className="text-gray-500 text-xs mt-4">© 2024 AwangBot78. All rights reserved.</p>
          <a
            href="https://github.com/awangazman78/awangbot78-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs hover:text-gray-300 mt-1 inline-block"
          >
            GitHub
          </a>
        </footer>
      </div>

      {/* Order Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-sm border border-gray-700">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold text-green-400">📝 Order Form</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-white text-2xl">
                &times;
              </button>
            </div>

            {!success ? (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-300 mb-1 block">Nama Penuh</label>
                    <input
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Masukkan nama anda"
                      className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 text-base"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300 mb-1 block">No. Telefon</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01X-XXXXXXX"
                      className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 text-base"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300 mb-1 block">Jenis Bot</label>
                    <input
                      type="text"
                      readOnly
                      value={selectedProduk}
                      className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-green-400 font-bold text-base"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-base mt-6 transition-all active:scale-95 disabled:opacity-50"
                >
                  {submitting ? '⏳ Menghantar...' : '✅ Hantar Order'}
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-green-400 font-bold text-lg">Order Berjaya!</p>
                <p className="text-gray-400 text-sm mt-2">
                  Kami akan hubungi anda segera via WhatsApp.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-gray-700 text-white py-2 px-6 rounded-xl text-sm"
                >
                  Tutup
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
