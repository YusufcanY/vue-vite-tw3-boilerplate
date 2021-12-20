<template>
    <div class="flex items-center text-8xl text-white">
        <button @click="increment">
            +
        </button>
        <div class="mx-4">
            {{ counter }}
        </div>
        <button @click="decrement">
            -
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const increment = () => counter.value++;
const decrement = () => !!counter.value && counter.value--;
</script>