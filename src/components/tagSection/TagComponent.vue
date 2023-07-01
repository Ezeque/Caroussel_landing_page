<template>
    <div class="tag-wrapper">
        <slot>

        </slot>
    </div>
</template>
<style>
* {
    color: white;
}

.tag-wrapper {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5em;
    transition: all 0.3s ease;
}

.tag-wrapper:hover{
    color: black;
    background-color: white;
    font-weight: bold;
}
</style>