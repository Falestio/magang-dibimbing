# Rangkuman
## Backend
Untuk service backend saya menggunakan Express dan GraphQL. Untuk Database saya menggunakan PostgreSQL.

index.js adalah entry point dari aplikasi backend, disini terdefinisikan endpoint /graphql yang di tugaskan untuk menangani setiap query yang datang

db.js berisikan kode untuk menginisialisasi koneksi ke database

schema.js berisikan kode query dan mutation serta type dari catatan itu sendiri
terdapat 2 buah query dan 3 buah mutation
- query
    - note (mengambil data satu catatan berdasarkan id yang diberikan)
    - notes (mengambil semua catatan yang ada)
- mutation
    - addNote (menambah catatan)
    - deleteNote (menghapus catatan)
    - updateNote (modifikasi catatan)

## Frontend
Pada bagian frontend saya menggunakan Next.js 13 dan ChakraUI. Saya juga menggunakan Apollo sebagai graphql client.

lib/apolloClient.ts: inisialisasi apollo client
lib/queries.ts: berisikan semua query dan mutasi yang digunakan di aplikasi
pages/index.tsx: halaman home
pages/note/[id].tsx: halaman detail catatan
pages/_app.tsx: inisialisasi provider untuk ChakraUI dan Apollo 

# Cara menjalankan aplikasi
- Clone repository ini
- Jalankan perintah ini pada folder backend-graphql dan frontend-next
```
npm i 
```
- Inisialisasi database PostgreSQL (lihat panduan dibawah)
- Sesuaikan username dan password pada backend-graphql/db.js 
- Jalankan perintah ini pada folder backend-grpahql dan frontend-next 
```
npm run dev
```
- Aplikasi dapat diakses di http://localhost:3000

## Inisialisasi Database PostgreSQL

- Inisialisasi database

```sql
CREATE DATABASE magang-notes
\c magang-notes
```

- Membuat tabel notes

```sql
CREATE TABLE notes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL
);
```

