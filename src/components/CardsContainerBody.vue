<template>
  <div>
    <!-- Adobe Illustrator card is edge-case where the behavior when clicked is popup, not link to external site -->
    <div @click.prevent="$emit('popup')">
      <CardsContainerBodyCardlayout logo="illustrator" link="Show Gallery">
        <template v-slot:title>Adobe Illustrator & Others</template>
        <template v-slot:description>Medium proficiency in Adobe Illustrator, Adobe Photoshop, Adobe Lightroom. Also capable of art direction and photography.</template>
      </CardsContainerBodyCardlayout>
    </div>

    <!-- Create card components with v-for -->
    <CardsContainerBodyCardlayout
      v-for="description in descriptions.stack"
      :key="description.title"
      :logo="description.logo"
      :link="description.link"
      @groupAnimated="groupAnimated=!groupAnimated"
      :groupAnimated="groupAnimated"
    >
      <template v-slot:title>{{description.title}}</template>
      <template v-slot:description>{{description.description}}</template>
    </CardsContainerBodyCardlayout>
  </div>
</template>

<script>
import descriptions from "@/_helper/stack_descriptions.json";
import CardsContainerBodyCardlayout from "@/components/CardsContainerBodyCardlayout.vue";

export default {
  components: {
    CardsContainerBodyCardlayout,
  },
  data() {
    return {
      descriptions: descriptions,
      groupAnimated: false,
      popup: false,
    };
  },
};
</script>

<style>
</style>