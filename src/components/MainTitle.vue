<template>
    <div>
        <div class="title-wrapper">
            <h1> UNLIMITED </h1>
            <h1> PRETENTIOUS </h1>
            <div class="d-flex align-center">
                <img :src="require('@/assets/profiles.png')" />
                <h1> IDEAS </h1>
            </div>
        </div>
        <VRow class="main-subtitle">
            <VCol cols="12" md="4">OUR SOLUTION</VCol>
            <VCol cols="12" md="4">WE PROVIDE THE FULL FUNNEL APPROACH</VCol>
        </VRow>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Montserrat:wght@300&display=swap');

h1 {
    color: white;
    font-size: 3.5em;
}

.title-wrapper {
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
}

img {
    width: auto;
    height: 100%;
}

.main-subtitle {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8em;
    display: flex;
    justify-content: space-between;
}

.v-row {
    margin-top: 0.1em;
    padding: 0 !important;
}
</style>