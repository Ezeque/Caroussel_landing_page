<template>
    <div class="pink-card">
        <h3 class="title">YOUR <br> BUSINESS <br> BOOST</h3>
        <div style="width: 90%">
            <div class="demo-call-wrapper">
                <input placeholder="Book Demo Call" id="demo-call" type="email"/>
                <button>
                    <ArrowRightCircleIcon style="width:2em; fill: black;"/>
                </button>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import { ArrowRightCircleIcon } from '@heroicons/vue/24/solid';
import '@splidejs/vue-splide/css';
</script>
<style scoped>
* {
    color: white;
}
.title{
    width: 100%;
    margin-left: 2em;
    margin-top: 0.5em;
    color: rgba(0, 0, 0, 0.8)
}

.pink-card {
    background-color: pink;
    height: 20em;
    width: 100%;
    border-radius: 20px;
    background-image: url("@/assets/woman.png");
    background-size: contain;
    background-position: center bottom;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.demo-call-wrapper{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.5);
    color: rgba(0, 0, 0, 0.8);
}

button{
    display: flex !important;
    justify-content: center;
    align-items: center;
}
#demo-call{
    width: 90%;
    padding: 0.5em;
    color: black;
    font-weight: bold;
}

#demo-call::placeholder{
    color: black;
    font-weight: bold;
}

#demo-call:focus{
    box-shadow: none !important;
    border: none;
    outline: 0;
}
</style>