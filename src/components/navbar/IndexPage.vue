<template>
    <div class="nav-bar">
        <VCol class="title" cols="12" md="3">
            <div><img width="100" :src="require('@/assets/CarousselLogo2.png')"></div>
        </VCol>
        <VCol cols="12" md="1">
            <div class="nav-item">Services</div>
        </VCol>
        <VCol cols="12" md="1">
            <div class="nav-item">About Us</div>
        </VCol>
        <VCol cols="12" md="1">
            <div class="nav-item">Cases</div>
        </VCol>
        <VCol cols="12" md="6">
            <div class="nav-item sign-up">
                Sign Up
                <ArrowRightOnRectangleIcon style="width: 1.5em;"/>
            </div>
        </VCol>
    </div>
</template>
<script setup>
import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/solid';
</script>
<style scoped>
.v-col-md-1:hover {
    border-bottom: 5px solid whitesmoke;
}

.nav-item {
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
}

.sign-up {
    justify-content: flex-end;
    font-size: medium;
}

.nav-bar {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    color: white;
    padding: 0;
    
    margin-top: 1em;
    display: flex;
}

.v-col-md-12 {
    margin: 0;
    padding: 0;
}
</style>