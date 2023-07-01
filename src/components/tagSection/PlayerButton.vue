<template>
    <button @click="playAudio">
        <PlayIcon style="fill:black; width: 2em;" v-if="!isPlaying"/>
        <PauseIcon style="fill:black; width: 2em;" v-if="isPlaying"/>
    </button>
</template>
<script setup>
import { ref } from 'vue'
import {PlayIcon, PauseIcon} from '@heroicons/vue/24/solid'
let audio = new Audio(require("@/assets/HowWeGotHere.mp3"))
const isPlaying = ref(false)
audio.onplaying = () => {
    isPlaying.value = true
}
audio.onpause = () => {
    isPlaying.value = false
}
const playAudio = () => {
    if (isPlaying.value == true) {
        audio.pause()
    }
    else {
        audio.play()
    }
}
</script>
<style scoped>
button {
    background-color: white;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}
</style>