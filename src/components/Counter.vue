<template>
  <div class="flex items-center justify-center space-x-4 text-white">
    <button
      class="h-12 w-12 rounded-md bg-slate-700 p-2 text-2xl shadow-md transition-transform duration-200 hover:-translate-y-1"
      @click="decrement"
    >
      -
    </button>
    <div class="text-8xl">
      {{ counter }}
    </div>
    <button
      class="h-12 w-12 rounded-md bg-slate-700 p-2 text-2xl shadow-md transition-transform duration-200 hover:-translate-y-1"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const counter = ref(0)

  const increment = () => counter.value++
  const decrement = () => !!counter.value && counter.value--
</script>
