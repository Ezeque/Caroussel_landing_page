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
    <VRow>
      <VCol cols="12" md="3">
        <TagsSection />
      </VCol>
      <VCol cols="12" md="3">
        <InfoCard card-color="#FD5E09">
          <template v-slot:header>
            UNIQUE <br> BUSINESS SOLUTIONS
          </template>
          <template v-slot:bottom>
            <img :src="require('@/assets/CarousselLogo.png')">
          </template>
        </InfoCard>
      </VCol>
      <VCol cols="12" md="3">
        <InfoCard color="#E0E0E0">
          <template v-slot:header>
            <div style="text-align: right;">
              <ArrowUpRightIcon style="width: 2em; fill: black"/>
            </div>
          </template>
          <template v-slot:bottom>
            <h1 style="color: black;">
              OUR CASE STUDIES
            </h1>
          </template>
        </InfoCard>
      </VCol>
      <VCol cols="12" md="3">
        <InfoCard card-color="#FDC959">
          <template v-slot:header>
            SUCCESSFUL <br> PROJECTS
          </template>
          <template v-slot:bottom>
            <h1 style="color: black; font-size: 4em;">700+</h1>
          </template>
        </InfoCard>
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
import IndexPage from './navbar/IndexPage.vue';
import MainTitle from './MainTitle.vue';
import MainCaroussel from './MainCaroussel.vue';
import TagsSection from './tagSection/TagsSection.vue';
import InfoCard from './InfoCard.vue';
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid';
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
}

.v-col-12{
  padding: 0.5em;
}
</style>
