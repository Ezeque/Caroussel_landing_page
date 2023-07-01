<template>
    <div class="d-flex pl-2" style="flex-direction: column;">
        <div class="d-flex mb-5">
            <PlayerButton />
            <div class="ml-2">Let's See <br> How We Did It</div>
        </div>
        <TagComponent class="mb-2">WEB ANALYTICS</TagComponent>
        <TagComponent class="mb-2">EMAIL MARKETING</TagComponent>
        <TagComponent>SEO 2.0</TagComponent>
    </div>
</template>
    
<script setup>
import PlayerButton from './PlayerButton.vue';
import TagComponent from './TagComponent.vue';
</script>
<style scoped>
* {
    color: white;
}
</style>