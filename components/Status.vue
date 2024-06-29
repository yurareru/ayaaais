<script setup lang="ts">
defineProps<{
  label: string;
  value: boolean;
}>();
</script>
<template>
  <div class="flex duration-200">
    <div
      class="p-2 border-y-2 border-s-2 rounded-s-full text-slate-200 w-28 text-center"
    >
      {{ label }}
    </div>
    <div
      class="p-2 border-2 rounded-e-full text-slate-200 w-20 text-center"
      :class="value ? 'border-lime-500 bg-lime-500' : 'border-red-400'"
    >
      <b :class="value ? 'text-lime-900' : 'text-red-400'">{{
        value ? "Open" : "Closed"
      }}</b>
    </div>
  </div>
</template>
