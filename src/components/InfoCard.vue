<template>
    <div id="info-card-wrapper">
        <div id="style-div" :style="{ backgroundColor: cardColor, color: 'black', fontWeight: 'bold' }"></div>
        <div id="main-div" :style="{ backgroundColor: cardColor, color: 'black', fontWeight: 'bold' }">
            <div style="color: black; margin-bottom: 3em; font-weight: bold;">
                <slot name="header"></slot>
            </div>
            <div style="color: black;">
                <slot name="bottom"></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import defineProps from 'vue'
defineProps({
    cardColor: {
        type: String,
        default: "white"
    }
})
</script>
<style scoped>
#main-div {
    border-radius: 20px;
    border-top-right-radius: 0;
    padding: 1.5em;
    padding-bottom: 0.5em;
    width: 100%;
    height: 13em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#style-div {
    border-radius: 10px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 0;
    padding: 0.6em;
    position: relative;
    top: 0.5em;
    width: 30%;
}

#info-card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>