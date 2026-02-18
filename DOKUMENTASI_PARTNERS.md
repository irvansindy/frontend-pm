# Dokumentasi Halaman Partners

## Deskripsi
Halaman Partners adalah fitur manajemen partner yang memungkinkan pengguna untuk melihat daftar partner, menambah partner baru, mengedit, dan menghapus partner. Halaman ini menggunakan struktur dashboard dengan navbar dan sidebar.

## Struktur File

### 1. Pages
- **`src/pages/Partners.jsx`** - Halaman utama partner yang mengelola state dan logika CRUD

### 2. Components
- **`src/components/partners/PartnerTable.jsx`** - Component untuk menampilkan tabel daftar partner
- **`src/components/partners/PartnerModal.jsx`** - Component modal untuk form tambah/edit partner
- **`src/components/partners/PartnerModal.css`** - Styling untuk modal

### 3. Data Partner
Setiap partner memiliki struktur data berikut:
```javascript
{
  id: number,
  name: string,              // Nama partner
  company: string,           // Nama perusahaan
  contact_person: string,    // Nama kontak
  email: string,            // Email
  phone: string,            // Nomor telepon
  address: string,          // Alamat
  city: string,             // Kota
  country: string,          // Negara
  status: string,           // Status: 'active', 'inactive', 'suspended'
  join_date: string         // Tanggal bergabung (format: YYYY-MM-DD)
}
```

## Fitur

### 1. Menampilkan Daftar Partner
- Tabel dengan kolom: Partner Name, Contact, Email, Phone, Status, Join Date, Actions
- Design menggunakan glassmorphism sesuai template
- Status ditampilkan dengan badge berwarna
- Avatar dengan inisial nama

### 2. Menambah Partner Baru
- Klik tombol "Add Partner"
- Modal form akan terbuka
- Isi semua field yang diperlukan (ditandai dengan *)
- Validasi form otomatis
- Klik "Add Partner" untuk menyimpan

### 3. Mengedit Partner
- Klik tombol edit (✎) pada baris yang ingin diedit
- Modal akan terbuka dengan data partner yang sudah terisi
- Ubah data yang diperlukan
- Klik "Update Partner" untuk menyimpan perubahan

### 4. Menghapus Partner
- Klik tombol delete (✕) pada baris yang ingin dihapus
- Konfirmasi akan muncul
- Klik OK untuk menghapus

## Validasi Form
Validasi yang dilakukan pada form:
- **Name**: Required
- **Company**: Required
- **Contact Person**: Required
- **Email**: Required dan harus format email yang valid
- **Phone**: Required
- **Address, City, Country**: Optional
- **Status**: Default 'active'
- **Join Date**: Default tanggal hari ini

## Styling
- Design menggunakan CSS yang sudah ada di template (glassmorphism)
- Modal menggunakan overlay dengan backdrop blur
- Responsive untuk desktop dan mobile
- Warna status:
  - Active: Hijau (Emerald)
  - Inactive: Kuning (Warning)
  - Suspended: Biru (Info)

## Routing
Halaman dapat diakses melalui:
- URL: `/partners`
- Menu Sidebar: "Partners" (dalam Main Menu)

## Integrasi API
Saat ini menggunakan sample data. Untuk mengintegrasikan dengan API:

1. Ganti inisialisasi data di `useEffect` pada `Partners.jsx`
2. Gunakan `apiFetch` dari `src/utils/apiFetch.js` untuk API calls
3. Update handler `handleSubmit`, `handleDelete` untuk menggunakan API

Contoh:
```javascript
// GET
const partners = await apiFetch('/api/partners');

// POST
await apiFetch('/api/partners', {
  method: 'POST',
  body: formData
});

// PUT
await apiFetch(`/api/partners/${id}`, {
  method: 'PUT',
  body: formData
});

// DELETE
await apiFetch(`/api/partners/${id}`, {
  method: 'DELETE'
});
```

## Features yang Dapat Ditambahkan
- [ ] Search/filter partner
- [ ] Sorting kolom tabel
- [ ] Pagination
- [ ] Export data ke CSV/Excel
- [ ] Import data dari file
- [ ] Bulk delete
- [ ] Status change action
- [ ] Detail partner view
