# 🤖 AwangBot78-Web

> Simple marketplace page untuk bot WhatsApp. Built with Hono + Cloudflare Workers + D1.

**Domain:** `awangbot.mykira.workers.dev`  
**GitHub:** https://github.com/awangazman78/awangbot78-web

---

## 📦 Stack

- **Hono** - Lightweight web framework
- **Cloudflare Workers** - Serverless runtime
- **Cloudflare D1** - SQLite database
- **Tailwind CDN** - Styling (no build needed)

---

## 🚀 Setup & Deploy

### 1. Install Wrangler CLI
```bash
npm install -g wrangler
```

### 2. Login ke Cloudflare
```bash
wrangler login
```

### 3. Create D1 Table (Jalankan sekali sahaja)
```bash
wrangler d1 execute awangbot78 --remote --command="CREATE TABLE IF NOT EXISTS orders (id TEXT PRIMARY KEY, nama TEXT NOT NULL, phone TEXT NOT NULL, produk TEXT NOT NULL, status TEXT DEFAULT 'pending', created_at TEXT NOT NULL)"
```

Atau visit: `https://awangbot.mykira.workers.dev/api/setup`

### 4. Deploy
```bash
npx wrangler deploy
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Homepage marketplace |
| POST | `/api/order` | Create new order |
| GET | `/api/orders` | List all orders (admin) |
| GET | `/api/setup` | Create database table |

### POST /api/order
```json
{
  "nama": "Ahmad",
  "phone": "0123456789",
  "produk": "Bot Pro - RM35"
}
```

Response:
```json
{
  "success": true,
  "id": "uuid-here"
}
```

---

## 📱 Features

- ✅ Mobile-first design (max-w-sm)
- ✅ 3 product cards (Basic RM15, Pro RM35, Premium RM99)
- ✅ Order popup form (Nama + No HP + Jenis Bot)
- ✅ Save orders to D1 database
- ✅ Telegram link in footer
- ✅ Dark theme, big buttons, easy to tap

---

## 🗄️ Database Schema

```sql
CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  nama TEXT NOT NULL,
  phone TEXT NOT NULL,
  produk TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TEXT NOT NULL
);
```

---

## 📄 License

MIT
