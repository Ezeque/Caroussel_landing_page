<template>
  <div>
    <IndexPage />
    <VRow>
      <VCol cols="12" md="6">
        <MainTitle />
      </VCol>
      <VCol cols="12" md="5">
        <MainCaroussel />
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
import IndexPage from './navbar/IndexPage.vue';
import MainTitle from './MainTitle.vue';
import MainCaroussel from './MainCaroussel.vue';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.v-row {
  margin-top: 2em;
  justify-content: space-between;
}</style>
