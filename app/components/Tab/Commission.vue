<script lang="ts" setup></script>
<template>
  <div class="min-h-screen">
    <div>
      <h1 class="text-center underline">Commission</h1>
      <h6 class="text-center font-normal">Please read carefully</h6>
      <div class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] mt-4">
        <ul class="text-slate-300 list-disc">
          <li>
            Saya berhak menolak pesananan jika merasa tidak nyaman dan tidak
            mampu untuk menerima.
          </li>
          <li>
            Klien diharap untuk bisa selalu fast respon, jika ada hambatan
            sebisa mungkin memberikan kabar untuk menghindari hal yang tidak
            diinginkan.
          </li>
          <li>
            Pembayaran penuh dilakukan setelah sketsa di setujui oleh klien.
          </li>
          <li>Harus menyertakan referensi yang jelas.</li>
          <li>
            Pengembalian hanya bisa dilakukan ketika dalam kondisi saya tidak
            mampu melanjutkan hasil kerja saya, dan klien hanya akan menerima
            pengembalian biaya sebesar 50% dari total pembelian namun jika sudah
            sampai tahap half rendering klien hanya mendapatkan pengembalian
            sebesar 30%
          </li>
          <li>
            Revisi yang merubah total atau sebagian besar hasil kerja akan
            dikenakan setengah biaya dari harga pembelian (tidak dibayar full
            hanya setengah saja, misalnya bust up IDR 60.000 namun terkena
            revisi maka setelahnya hanya perlu membayar IDR 30.000, dan jika
            revisinya merubah dari bust up ke half body (selama masih di anggap
            sebagai revisi besar- besaran) hanya akan dikenakan biaya IDR
            50.000)
          </li>
          <li>
            Kesulitan pada proses menggambar bisa saja memakan waktu yang lebih
            lama dan akan berpengaruh pada tambahan biaya sebesar 10% dari total
            pembelian.
          </li>
        </ul>
      </div>
      <div
        class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] mt-4 md:grid space-y-8 md:space-y-0 grid-cols-2 gap-8 [&_ul]:list-disc md:[&_ul]:list-none"
      >
        <div>
          <h6 class="md:justify-end text-2xl flex items-center gap-2">
            <IconCheck class="md:order-1 bg-lime-500 rounded-full" />Do's
          </h6>
          <ul class="text-slate-300 md:text-right text-lg space-y-1 mt-2">
            <li>Female</li>
            <li>Original Character</li>
            <li>Fanart</li>
            <li>Detailed Character</li>
            <li>Heavy Gore</li>
            <li>Kemonomimi</li>
          </ul>
        </div>
        <div>
          <h6 class="text-2xl flex items-center gap-2">
            <IconClose class="bg-red-500 rounded-full p-1" />Don't
          </h6>
          <ul class="text-slate-300 text-lg space-y-1 mt-2">
            <li>Male</li>
            <li>Furry</li>
            <li>NSFW</li>
            <li>LGBT</li>
            <li>Old People</li>
            <li>Mecha</li>
          </ul>
        </div>
      </div>
      <h1 class="text-center text-4xl mt-4">Price List</h1>
      <div class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] mt-4">
        <table class="text-slate-300 w-full [&_td]:p-2 [&_td]:border">
          <tr>
            <td>Bust up</td>
            <td>IDR 60.000</td>
          </tr>
          <tr>
            <td>Half body</td>
            <td>IDR 100.000</td>
          </tr>
          <tr>
            <td>Knee up</td>
            <td>IDR 140.000</td>
          </tr>
          <tr>
            <td>Full body</td>
            <td>IDR 170.000</td>
          </tr>
          <tr>
            <td>Character sheet*</td>
            <td>IDR 220.000</td>
          </tr>
          <tr>
            <td>Background</td>
            <td>IDR 15.000 - IDR 100.000</td>
          </tr>
          <tr>
            <td>Commercial purpose</td>
            <td>3x</td>
          </tr>
          <tr>
            <td>Couple</td>
            <td>2x</td>
          </tr>
        </table>
        <p class="mt-2">
          *<i
            >Character sheet: Full body (front, back, side), aset tambahan
            berupa detail karakter dan gratis 1 bust up.</i
          >
        </p>
        <ul class="text-slate-300 mt-6 space-y-2 list-disc">
          <li>Revisi dan Simpel color background tidak akan dikenai biaya.</li>
          <li>Semua sudah termasuk detailing dan fully rendered.</li>
          <li>
            Waktu pengerjaan bervariasi namun rata-rata bisa menghabiskan waktu
            selama 5 hari - 1 bulan tergantung dari pesanan dan pengerjaannya.
          </li>
          <li>
            Hasil akan dikirimkan melalui Google Drive, bisa dalam bentuk JPG
            atau PNG, 350 DPI, Transparan atau background jika dengan latar
            belakang.
          </li>
          <li>
            <ul class="space-y-2 md:space-y-0 md:flex gap-4">
              <span>Pembayaran melalui:</span>
              <li class="flex items-center">
                <NuxtImg
                  src="/assets/BRI.png"
                  alt="BRI Logo"
                  class="mr-2 w-6 h-6"
                />
                <span class="text-[#00529c] font-bold">BRI</span>
              </li>
              <li class="flex items-center">
                <NuxtImg
                  src="/assets/DANA.png"
                  alt="DANA Logo"
                  class="mr-2 w-6 h-6"
                />
                <span class="text-[#118ee9] font-bold">DANA</span>
              </li>
              <li class="flex items-center">
                <NuxtImg
                  src="/assets/ShopeePay.png"
                  alt="ShopeePay Logo"
                  class="mr-2 w-6 h-6"
                />
                <span class="text-[#ee4d2d] font-bold">ShopeePay</span>
              </li>
              <li class="flex items-center">
                <NuxtImg
                  src="/assets/gopay.png"
                  alt="GoPay Logo"
                  class="mr-2 w-6 h-6"
                />
                <span class="text-[#00aed6] font-bold">GoPay</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
