<template>
    <div class="faq-wrapper">
        <div class="faq-content-wrapper">
            faq
        </div>
        <Stars />
    </div>
</template>

<script setup lang="ts">
import Stars from './Stars.vue';
</script>

<style>
    .faq-wrapper {
        width: 100%;
        height: 100vh;
        background: transparent;
        z-index: 10;
        position: relative;
    }
    .faq-content-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        border: 1px solid white;
        color: white;
    }
</style>