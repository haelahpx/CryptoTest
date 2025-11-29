# 🚀 Panduan Instalasi dan Akses Proyek Web

Panduan ini menjelaskan cara menjalankan proyek web *Crypto Dashboard* Anda menggunakan Docker Compose dan cara mengakses Antarmuka Pengguna (Frontend) serta Dokumentasi API (Swagger).

## 📋 Persyaratan

Anda harus memiliki perangkat lunak berikut yang terinstal di mesin lokal Anda:

1.  **Docker Engine**
2.  **Docker Compose**

---

## 🛠️ Langkah-Langkah Instalasi

1.  **Posisikan Diri di Direktori Proyek**

    Pastikan Anda berada di direktori utama proyek yang berisi file `docker-compose.yml`.

2.  **Bangun dan Jalankan Kontainer**

    Gunakan perintah berikut di terminal. Perintah ini akan membangun citra (_image_) dan menjalankan kedua layanan (`backend` dan `frontend`) di latar belakang (`-d`).

    ```bash
    docker compose up --build -d
    ```

3.  **Verifikasi Status Kontainer**

    Periksa apakah kontainer sudah berjalan dengan baik. Status keduanya harus menunjukkan `Up`.

    ```bash
    docker-compose ps
    ```

---

## 🔗 Cara Mengakses Proyek

Setelah kontainer berjalan, Anda dapat mengakses komponen proyek melalui _browser_:

| Komponen | Alamat Akses (URL) | Port | Keterangan |
| :--- | :--- | :--- | :--- |
| **Antarmuka Pengguna (Frontend)** | `http://localhost:8081` | 8081 | Halaman utama Pasar |
| **Dokumentasi API (Swagger UI)** | `http://localhost:3000/api-docs` | 3000 | Dokumentasi API interaktif |
| **API Backend** | `http://localhost:3000` | 3000 | Akses langsung ke server API |

---

## 🛑 Menghentikan Proyek

Untuk menghentikan dan menghapus semua kontainer serta jaringan yang dibuat oleh Docker Compose:

```bash
docker-compose down
