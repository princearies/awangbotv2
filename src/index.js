import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())

// Homepage - Single Page Marketplace
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AwangBot78 - Bot WhatsApp Murah</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: 'Segoe UI', sans-serif; }
    .modal-bg { background: rgba(0,0,0,0.6); }
  </style>
</head>
<body class="bg-gray-900 text-white min-h-screen">
  <div class="max-w-sm mx-auto px-4 py-6">
    
    <!-- Header -->
    <header class="text-center mb-8">
      <div class="text-5xl mb-2">🤖</div>
      <h1 class="text-2xl font-bold text-green-400">AwangBot78</h1>
      <p class="text-gray-400 text-sm mt-1">Bot WhatsApp Automatik & Murah</p>
    </header>

    <!-- Product Cards -->
    <div class="space-y-4">
      
      <!-- Bot Basic -->
      <div class="bg-gray-800 rounded-2xl p-5 border border-gray-700">
        <div class="flex justify-between items-start mb-3">
          <div>
            <h2 class="text-lg font-bold">⚡ Bot Basic</h2>
            <p class="text-gray-400 text-xs mt-1">Auto reply, menu simple</p>
          </div>
          <span class="bg-green-900 text-green-300 text-xs px-2 py-1 rounded-full">Starter</span>
        </div>
        <div class="flex items-end justify-between mt-4">
          <div>
            <span class="text-3xl font-bold text-white">RM15</span>
            <span class="text-gray-400 text-sm">/bulan</span>
          </div>
          <button onclick="openModal('Bot Basic', 'RM15')" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all active:scale-95">
            ORDER
          </button>
        </div>
      </div>

      <!-- Bot Pro -->
      <div class="bg-gray-800 rounded-2xl p-5 border-2 border-green-500 relative">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">🔥 POPULAR</div>
        <div class="flex justify-between items-start mb-3">
          <div>
            <h2 class="text-lg font-bold">🚀 Bot Pro</h2>
            <p class="text-gray-400 text-xs mt-1">Auto reply + group + media</p>
          </div>
          <span class="bg-yellow-900 text-yellow-300 text-xs px-2 py-1 rounded-full">Best</span>
        </div>
        <div class="flex items-end justify-between mt-4">
          <div>
            <span class="text-3xl font-bold text-white">RM35</span>
            <span class="text-gray-400 text-sm">/bulan</span>
          </div>
          <button onclick="openModal('Bot Pro', 'RM35')" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all active:scale-95">
            ORDER
          </button>
        </div>
      </div>

      <!-- Bot Premium -->
      <div class="bg-gray-800 rounded-2xl p-5 border border-gray-700">
        <div class="flex justify-between items-start mb-3">
          <div>
            <h2 class="text-lg font-bold">💎 Bot Premium</h2>
            <p class="text-gray-400 text-xs mt-1">Full feature + AI + unlimited</p>
          </div>
          <span class="bg-purple-900 text-purple-300 text-xs px-2 py-1 rounded-full">Premium</span>
        </div>
        <div class="flex items-end justify-between mt-4">
          <div>
            <span class="text-3xl font-bold text-white">RM99</span>
            <span class="text-gray-400 text-sm">/bulan</span>
          </div>
          <button onclick="openModal('Bot Premium', 'RM99')" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all active:scale-95">
            ORDER
          </button>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <footer class="text-center mt-10 pb-6">
      <a href="https://t.me/awangbot78_bot" target="_blank" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all active:scale-95">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.13-.05-.18-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
        Hubungi via Telegram
      </a>
      <p class="text-gray-500 text-xs mt-4">© 2024 AwangBot78. All rights reserved.</p>
      <a href="https://github.com/awangazman78/awangbot78-web" target="_blank" class="text-gray-500 text-xs hover:text-gray-300 mt-1 inline-block">GitHub</a>
    </footer>

  </div>

  <!-- Order Modal -->
  <div id="orderModal" class="fixed inset-0 modal-bg hidden items-center justify-center z-50 p-4">
    <div class="bg-gray-800 rounded-2xl p-6 w-full max-w-sm border border-gray-700">
      <div class="flex justify-between items-center mb-5">
        <h3 class="text-xl font-bold text-green-400">📝 Order Form</h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
      </div>
      <form id="orderForm" onsubmit="submitOrder(event)">
        <div class="space-y-4">
          <div>
            <label class="text-sm text-gray-300 mb-1 block">Nama Penuh</label>
            <input type="text" id="nama" required placeholder="Masukkan nama anda" 
              class="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 text-base">
          </div>
          <div>
            <label class="text-sm text-gray-300 mb-1 block">No. Telefon</label>
            <input type="tel" id="phone" required placeholder="01X-XXXXXXX" 
              class="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 text-base">
          </div>
          <div>
            <label class="text-sm text-gray-300 mb-1 block">Jenis Bot</label>
            <input type="text" id="produk" readonly 
              class="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-green-400 font-bold text-base">
          </div>
        </div>
        <button type="submit" id="submitBtn" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-base mt-6 transition-all active:scale-95">
          ✅ Hantar Order
        </button>
      </form>
      <div id="successMsg" class="hidden text-center py-6">
        <div class="text-4xl mb-3">✅</div>
        <p class="text-green-400 font-bold text-lg">Order Berjaya!</p>
        <p class="text-gray-400 text-sm mt-2">Kami akan hubungi anda segera via WhatsApp.</p>
        <button onclick="closeModal()" class="mt-4 bg-gray-700 text-white py-2 px-6 rounded-xl text-sm">Tutup</button>
      </div>
    </div>
  </div>

  <script>
    function openModal(produk, harga) {
      document.getElementById('produk').value = produk + ' - ' + harga;
      document.getElementById('orderModal').classList.remove('hidden');
      document.getElementById('orderModal').classList.add('flex');
      document.getElementById('orderForm').classList.remove('hidden');
      document.getElementById('successMsg').classList.add('hidden');
    }

    function closeModal() {
      document.getElementById('orderModal').classList.add('hidden');
      document.getElementById('orderModal').classList.remove('flex');
      document.getElementById('orderForm').reset();
    }

    async function submitOrder(e) {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      btn.disabled = true;
      btn.textContent = '⏳ Menghantar...';

      const data = {
        nama: document.getElementById('nama').value,
        phone: document.getElementById('phone').value,
        produk: document.getElementById('produk').value
      };

      try {
        const res = await fetch('/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        
        if (result.success) {
          document.getElementById('orderForm').classList.add('hidden');
          document.getElementById('successMsg').classList.remove('hidden');
        } else {
          alert('Gagal menghantar order. Sila cuba lagi.');
        }
      } catch (err) {
        alert('Error: ' + err.message);
      } finally {
        btn.disabled = false;
        btn.textContent = '✅ Hantar Order';
      }
    }

    // Close modal on background click
    document.getElementById('orderModal').addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  </script>
</body>
</html>`)
})

// POST /api/order - Create new order
app.post('/api/order', async (c) => {
  const { nama, phone, produk } = await c.req.json()

  if (!nama || !phone || !produk) {
    return c.json({ success: false, error: 'All fields required' }, 400)
  }

  const id = crypto.randomUUID()
  const created_at = new Date().toISOString()

  try {
    await c.env.DB.prepare(
      'INSERT INTO orders (id, nama, phone, produk, status, created_at) VALUES (?, ?, ?, ?, ?, ?)'
    ).bind(id, nama, phone, produk, 'pending', created_at).run()

    return c.json({ success: true, id })
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500)
  }
})

// GET /api/orders - List all orders (admin)
app.get('/api/orders', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM orders ORDER BY created_at DESC LIMIT 50'
    ).all()
    return c.json({ success: true, orders: results })
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500)
  }
})

// Setup endpoint - create table
app.get('/api/setup', async (c) => {
  try {
    await c.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        nama TEXT NOT NULL,
        phone TEXT NOT NULL,
        produk TEXT NOT NULL,
        status TEXT DEFAULT 'pending',
        created_at TEXT NOT NULL
      )
    `).run()
    return c.json({ success: true, message: 'Table created!' })
  } catch (err) {
    return c.json({ success: false, error: err.message }, 500)
  }
})

export default app
