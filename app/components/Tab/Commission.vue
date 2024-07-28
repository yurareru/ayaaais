<script lang="ts" setup>
useHead({
  title: 'Commission Information',
})

const termsAndConditions = [
  'Saya berhak menolak pesananan jika merasa tidak nyaman dan tidak mampu untuk menerima.',
  'Pembayaran penuh dilakukan setelah sketsa di setujui oleh klien.',
  'Harus menyertakan referensi yang jelas.',
  'Pengembalian hanya bisa dilakukan ketika dalam kondisi saya tidak mampu melanjutkan hasil kerja saya, dan klien hanya akan menerima pengembalian biaya sebesar 50% dari total pembelian namun jika sudah sampai tahap half rendering klien hanya mendapatkan pengembalian sebesar 30%',
  'Revisi yang merubah total atau sebagian besar hasil kerja akan dikenakan setengah biaya dari harga pembelian (tidak dibayar full hanya setengah saja, misalnya bust up IDR 60.000 namun terkena revisi maka setelahnya hanya perlu membayar IDR 30.000, dan jika revisinya merubah dari bust up ke half body (selama masih di anggap sebagai revisi besar-besaran) hanya akan dikenakan biaya IDR 50.000)',
  'Kesulitan pada proses menggambar bisa saja memakan waktu yang lebih lama dan akan berpengaruh pada tambahan biaya sebesar 10% dari total pembelian.',
]

const doList = [
  'Female',
  'Original Character',
  'Fanart',
  'Detailed Character',
  'Heavy Gore',
  'Kemonomimi',
]

const dontList = ['Male', 'Furry', 'NSFW', 'LGBT', 'Old People', 'Mecha']
const priceList = {
  'Bust up': 'IDR 60.000',
  'Half body': 'IDR 100.000',
  'Knee up': 'IDR 140.000',
  'Full body': 'IDR 170.000',
  'Character sheet*': 'IDR 220.000',
  Background: 'IDR 15.000 - IDR 100.000',
  'Commercial purpose': '2x',
  Couple: '2x',
}
const clarificationList = [
  'Character sheet: Full body (front, back, side), aset tambahan berupa detail karakter dan gratis 1 bust up.',
]

const noteList = [
  'Revisi dan simpel color background tidak akan dikenai biaya.',
  'Semua sudah termasuk detailing dan fully rendered.',
  'Waktu pengerjaan bervariasi namun rata-rata bisa menghabiskan waktu selama 5 hari - 1 bulan tergantung dari pesanan dan pengerjaannya.',
  'Hasil akan dikirimkan melalui Google Drive, bisa dalam bentuk JPG atau PNG, 350 DPI, Transparan atau background jika dengan latar belakang.',
]
</script>
<template>
  <div class="min-h-screen">
    <div>
      <h1 class="text-center underline">Commission</h1>
      <h2 class="text-center font-normal">Please read carefully</h2>
      <div class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] mt-4">
        <ul class="text-slate-300 list-disc">
          <li v-for="(value, index) in termsAndConditions" :key="index">
            {{ value }}
          </li>
        </ul>
      </div>
      <div
        class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] mt-4 md:grid space-y-8 md:space-y-0 grid-cols-2 gap-8 [&_ul]:list-disc md:[&_ul]:list-none"
      >
        <div>
          <h2 class="md:justify-end text-2xl flex items-center gap-2">
            <Icon
              name="material-symbols:check"
              class="md:order-1 bg-lime-500 rounded-full"
            />Do's
          </h2>
          <ul class="text-slate-300 md:text-right text-lg space-y-1 mt-2">
            <li v-for="(value, index) in doList" :key="`${value}-${index}`">
              {{ value }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl flex items-center gap-2">
            <Icon
              name="material-symbols:close"
              class="bg-red-500 rounded-full p-1"
            />Don't
          </h2>
          <ul class="text-slate-300 text-lg space-y-1 mt-2">
            <li v-for="(value, index) in dontList" :key="`${value}-${index}`">
              {{ value }}
            </li>
          </ul>
        </div>
      </div>
      <h1 class="text-center text-4xl mt-4">Price List</h1>
      <div class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem] mt-4">
        <table class="text-slate-300 w-full [&_td]:p-2 [&_td]:border">
          <tr v-for="(value, key, index) in priceList" :key="`${key}-${index}`">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </table>
        <ul class="mt-2 text-slate-300">
          <li v-for="(value, index) in clarificationList" :key="index">
            *<i>{{ value }}</i>
          </li>
        </ul>
        <ul class="text-slate-300 mt-6 space-y-2 list-disc">
          <li v-for="(value, index) in noteList" :key="index">{{ value }}</li>
          <li>
            <ul class="space-y-2 md:space-y-0 md:flex gap-4">
              <li>Pembayaran melalui:</li>
              <li class="flex items-center">
                <NuxtImg
                  src="/assets/BRI.png"
                  alt="BRI Logo"
                  class="mr-2 w-6"
                  width="24"
                />
                <span class="text-[#00529c] font-bold">BRI</span>
              </li>
              <li class="flex items-center">
                <NuxtImg
                  src="/assets/DANA.png"
                  alt="DANA Logo"
                  class="mr-2 w-6"
                  width="24"
                />
                <span class="text-[#118ee9] font-bold">DANA</span>
              </li>
              <li class="flex items-center">
                <NuxtImg
                  src="/assets/ShopeePay.png"
                  alt="ShopeePay Logo"
                  class="mr-2 w-6"
                  width="24"
                />
                <span class="text-[#ee4d2d] font-bold">ShopeePay</span>
              </li>
              <li class="flex items-center">
                <NuxtImg
                  src="/assets/gopay.png"
                  alt="GoPay Logo"
                  class="mr-2 w-6"
                  width="24"
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
