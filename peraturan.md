---
layout: single-page-md
title: Peraturan KSN 2020 Bidang Informatika
key: rules
---

Perbedaan dengan [Peraturan Kompetisi OSN Informatika 2019](https://osn2019.toki.id/peraturan.html) ditandai dengan <span style="color:red">warna merah</span>.

<span style="color:red">Pastikan untuk membaca juga <a href="/peraturan-daring.html">Peraturan Kompetisi Daring</a>.</span>


### A. Teknis Umum

1. KSN 2020 Bidang Informatika terdiri atas **1 hari uji coba** dan **2 hari kompetisi**.
1. Hasil pada hari uji coba **tidak** termasuk dalam penilaian.
1. Pada setiap hari kompetisi, terdapat **3 buah soal** yang diujikan selama **5 jam**.
1. Setiap peserta mendapatkan jatah sebanyak **50 kali pengumpulan** untuk setiap soal.
1. Bahasa pemrograman yang diperbolehkan adalah **C**, **C++**, dan **Pascal**.
1. Selama kompetisi, peserta hanya dapat melihat nilai diri sendiri.

<br>

### B. Tipe Soal

1. Terdapat **3 tipe soal** yang mungkin diujikan: **batch**, **interactive**, dan **output-only**. Mungkin saja terdapat tipe soal yang tidak diujikan.

1. Pada soal bertipe *batch*:
   1. Peserta membuat sebuah program yang membaca masukan kasus uji dari **stdin** dan mencetak jawaban ke **stdout**.
   1. Program harus mengeluarkan jawaban dalam batas waktu dan memori yang dinyatakan pada soal.
   1. Contoh soal: [Online Ojek, OSN 2018](https://tlx.toki.id/problems/osn-2018-1/C).

1. Pada soal bertipe *interactive*:
   1. Peserta membuat sebuah program yang berinteraksi dengan program juri: program juri memberikan keluaran ke **stdout**, yang menjadi masukan **stdin** untuk program peserta, kemudian program peserta memberikan keluaran ke **stdout**, dan seterusnya, untuk mencapai tujuan tertentu yang dinyatakan pada soal.
   1. Program harus mengeluarkan jawaban dalam batas waktu dan memori yang dinyatakan pada soal.
   1. Contoh soal: [Detecting Gold, OSN 2019](https://tlx.toki.id/problems/osn-2019-2/B).

1. Pada soal bertipe *output-only*:
   1. Peserta diberikan seluruh masukan dari kasus-kasus uji soal.
   1. Peserta menjawab dengan mengirimkan beberapa **berkas keluaran** yang sudah dikompres.
   1. Peserta **tidak harus** membuat program untuk menghasilkan berkas-berkas keluaran (boleh dikerjakan secara manual).
   1. Contoh soal: [OSN Excursion, OSN 2019](https://tlx.toki.id/problems/osn-2019-1/C).

<br>

### C. Penilaian Soal

1. Terdapat **2 jenis penilaian**: **standar** dan **kreatif**. Soal dengan penilaian kreatif akan dinyatakan secara eksplisit pada soal.

1. Pada penilaian standar:
   1. Untuk soal bertipe *batch* dan *interactive*:
      1. Setiap soal terdiri atas **beberapa subsoal** dengan bobot nilai yang bervariasi.
      1. Setiap soal terdiri atas **beberapa kasus uji** yang dikelompokkan ke dalam **beberapa test group**.
      1. Setiap *test group* termasuk ke dalam satu atau lebih subsoal.
      1. Untuk mendapatkan nilai pada suatu subsoal, peserta harus menyelesaikan **seluruh test group** yang termasuk pada subsoal yang bersangkutan, _kecuali_ dinyatakan lain pada soal.
      1. Untuk menyelesaikan sebuah *test group*, peserta harus menyelesaikan **seluruh kasus uji** pada *test group* yang bersangkutan.
      1. Setiap soal mungkin memiliki beberapa **subsoal terbuka** yang mana isi kasus-kasus ujinya diberikan kepada peserta, sehingga memungkinkan dikerjakan secara manual.

   1. Untuk soal bertipe *output-only*:
      1. Setiap soal terdiri atas **beberapa kasus uji** dengan bobot nilai yang bervariasi.
      1. Untuk mendapatkan nilai pada suatu kasus uji, peserta harus menyelesaikan kasus uji tersebut.

1. Pada penilaian kreatif:
   1. Penilaian akan diberikan relatif terhadap hasil yang diperoleh solusi juri.
   1. Rumus penilaian bervariasi untuk setiap soal, dan akan dinyatakan secara eksplisit pada soal.

   1. Contoh soal:
      - *Batch*: [Membaca, OSN 2012](https://tlx.toki.id/problems/osn-2012-2/D).
      - *Interactive*: [Cat Rumah, OSN 2014](https://tlx.toki.id/problems/osn-2014-1/B).
      - *Output-only*: [Tourism in Palembang, OSN 2016](https://tlx.toki.id/problems/osn-2016-2/C).

<br>

### D. Penilaian Peserta

1. Pada soal bertipe *batch* dan *interactive*:
   1. Pada penilaian kreatif, untuk setiap pengumpulan, nilai pada suatu subsoal adalah nilai minimum di antara seluruh kasus uji yang dicakup pada subsoal tersebut.
   1. Nilai akhir pada suatu subsoal adalah **nilai maksimum** subsoal tersebut di antara seluruh pengumpulan.
   1. Nilai peserta pada suatu soal merupakan jumlah nilai akhir seluruh subsoalnya.

   Sebagai contoh, jika pengumpulan pertama mendapatkan nilai 30 pada subsoal pertama dan nilai 0 pada subsoal kedua, dan pengumpulan kedua mendapatkan nilai 0 pada subsoal pertama dan nilai 40 pada subsoal kedua, maka nilai peserta pada soal ini adalah 70.
1. Pada soal bertipe *output-only*:
   1. Nilai akhir pada suatu kasus uji adalah **nilai maksimum** kasus uji tersebut di antara seluruh pengumpulan.
   1. Nilai peserta pada suatu soal merupakan jumlah nilai akhir seluruh kasus ujinya.
1. Total nilai peserta adalah total nilai yang didapatkan pada **seluruh soal** pada **seluruh hari kompetisi**.
1. Peserta akan diurutkan peringkat berdasarkan total nilai (semakin besar, semakin bagus).
1. Dua peserta yang memiliki total nilai yang **sama** akan mendapat peringkat yang **sama**.
1. Waktu pengumpulan **tidak berpengaruh** sama-sekali pada peringkat peserta.

<br>

### E. Sistem Grading

1. Sistem *grading* yang digunakan adalah [TLX](https://tlx.toki.id).
1. Besarnya berkas *source code* yang boleh dikumpulkan untuk setiap soal maksimum **300 KB**.

1. Untuk setiap kasus uji, balasan *grader* yang mungkin adalah:
   1. **AC** (Accepted): program berhasil menyelesaikan kasus uji dalam batas waktu dan memori.
   1. **WA** (Wrong Answer): program berhenti dalam batas waktu dan memori, namun menghasilkan keluaran yang salah.
   1. **RTE** (Runtime Error): program *crash* atas melebihi batas memori.
   1. **TLE** (Time Limit Exceeded): program melebihi batas waktu.
   1. Skipped: *grading* tidak dilakukan karena sudah ada kasus uji lain dalam *test group* yang sama yang tidak mendapatkan AC.

<br>

### F. Klarifikasi

1. Peserta dapat mengajukan klarifikasi <span style="color:red">~~soal~~</span> selama kompetisi berlangsung.
1. Setiap klarifikasi <span style="color:red">yang berhubungan dengan soal</span> hanya akan dijawab dengan salah satu dari balasan berikut:
   - Ya
   - Tidak
   - Baca soal lebih teliti
   - Tidak ada komentar
   - Baca pengumuman

<br>

### <span style="color:red">~~G. Lain-Lain~~</span>

<span style="color:red">Peraturan pelaksanaan kompetisi secara daring lebih didetailkan di bagian <a href="/peraturan-daring.html">Peraturan Kompetisi Daring</a>.</span>
