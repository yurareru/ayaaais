<script setup lang="ts">
const tasks = {
  'full image preview': true,
  'paginate artworks': true,
  'better tab navigation': true,
  'favicon or logo': false,
  'fix grammar lol': false,
  'early migration to nuxt v4': true,
  'commission ingfo tab': false,
  'original characters tab': false,
  'sort artworks': false,
  'parallax?': false,
  'multidirectional tab sliding animation?': false,
}
</script>
<template>
  <div class="bg-[#313338] h-screen p-8">
    <h1>To do:</h1>
    <ul class="text-slate-300 space-y-2 *:space-x-2 *:*:select-none">
      <li v-for="(v, k, index) in tasks" :key="index">
        {{ v ? '✅' : '❌' }}
        <label :for="index.toString()"> {{ k }} </label>
      </li>
    </ul>
  </div>
</template>
