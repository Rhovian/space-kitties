<template>
    <div class="lore-wrapper">
        <div class="lore-content-wrapper">
            lore image
        </div>
        <div class="lore-content-wrapper">
            lore text
        </div>
        <Stars />
    </div>
</template>

<script setup lang="ts">
import Stars from './Stars.vue';
</script>

<style>
    .lore-wrapper {
        width: 100%;
        height: 100vh;
        background: transparent;
        z-index: 10;
        position: relative;
    }
    .lore-content-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        width: 100%;
        border: 1px solid white;
        color: white;
    }
</style>