<script setup lang="ts">
defineProps<{
  label: string;
  value: boolean;
}>();
</script>
<template>
  <div class="flex duration-200">
    <div
      class="p-2 border-y border-s rounded-s-full text-slate-200 w-28 text-center"
    >
      {{ label }}
    </div>
    <div
      class="p-2 border rounded-e-full text-slate-200 w-20 text-center"
      :class="
        value ? 'border-lime-500 bg-lime-500' : 'border-red-500 bg-red-500'
      "
    >
      <b :class="value ? 'text-lime-900' : 'text-red-900'">{{
        value ? "Open" : "Closed"
      }}</b>
    </div>
  </div>
</template>
