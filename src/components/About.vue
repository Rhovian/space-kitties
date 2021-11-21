<template>
    <div class="about-wrapper">
        <div class="about-content-wrapper">
            about text
        </div>
        <div class="about-content-wrapper">
            about image
        </div>
        <Stars />
    </div>
</template>

<script setup lang="ts">
import Stars from './Stars.vue';
</script>

<style>
    .about-wrapper {
        width: 100%;
        height: 100vh;
        background: transparent;
        padding: 0.5em 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 10;
        position: relative;
    }
    .about-content-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        width: 100%;
        border: 1px solid white;
        color: white;
    }
</style>