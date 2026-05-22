# Cyber Portfolio Fullstack

Website portfolio modern futuristic untuk kebutuhan magang Web Developer.

Stack: React JS + Vite, Tailwind CSS, Framer Motion, React Icons, Axios, PHP Native, dan MySQL XAMPP.

## Struktur

```text
MyPortofolio/
├── frontend/
├── backend/
├── database/
├── index.php
└── package.json
```

## Cara Run

1. Jalankan Apache dan MySQL dari XAMPP Control Panel.
2. Buka `http://localhost/phpmyadmin`.
3. Import file `database/portfolio_db.sql`.
4. Buka portfolio lewat Apache:

```text
http://localhost/MyPortofolio/
```

Root project akan membuka hasil build di `frontend/dist/index.html`.

## Cara Run Development

Jika ingin mode development dengan Vite, buka terminal di folder utama proyek:

```bash
cd C:\xampp\htdocs\MyPortofolio
```

Install dependency frontend:

```bash
npm run install:frontend
```

Jalankan backend dan frontend sekaligus:

```bash
npm run dev
```

Perintah ini akan membuka dua terminal: satu untuk backend, satu untuk frontend.

Jika ingin menjalankan manual, jalankan backend:

```bash
npm run backend
```

Backend tersedia di:

```text
http://localhost:8000
http://localhost:8000/backend/
http://localhost:8000/backend/api/getProjects.php
http://localhost:8000/backend/api/getCertificates.php
```

Lalu buka terminal kedua untuk frontend:

```bash
npm run frontend
```

Frontend tersedia di:

```text
http://localhost:5173
```

## Konfigurasi Database

Default koneksi database ada di `backend/config/database.php`:

```php
$host = "localhost";
$user = "root";
$password = "";
$database = "portfolio_db";
```

## Konfigurasi API Frontend

Default frontend sudah mengarah ke:

```text
http://localhost:8000/backend/api
```

Jika ingin URL lain, buat file `frontend/.env`:

```bash
VITE_API_URL=http://localhost:8000/backend/api
```

## Kustomisasi

- Ubah nama, deskripsi, social media, dan skills di `frontend/src/data/profile.js`.
- Ganti CV di `frontend/public/cv-placeholder.pdf`.
- Edit data project dan certificate dari database `portfolio_db`.
- Ganti asset dummy URL dengan file lokal jika ingin offline.
