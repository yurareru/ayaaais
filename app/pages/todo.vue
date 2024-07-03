<script setup lang="ts">
const tasks = {
  'full image preview': 1,
  'paginate artworks': 1,
  'better tab navigation': 1,
  'favicon or logo': 0,
  'fix grammar lol': 0,
  'early migration to nuxt v4': 1,
  'commission ingfo tab': 2,
  'original characters tab': 0,
  'sort artworks': 0,
  'parallax?': 0,
  'multidirectional tab sliding animation?': 0,
}
</script>
<template>
  <div class="bg-[#313338] h-screen p-8">
    <h1>To do:</h1>
    <ul class="text-slate-300 space-y-2 *:space-x-2 *:*:select-none">
      <li v-for="(v, k, index) in tasks" :key="index">
        {{ v === 0 ? '❌' : v === 1 ? '✅' : '⏳' }}
        <label :for="index.toString()"> {{ k }} </label>
      </li>
    </ul>
  </div>
</template>
