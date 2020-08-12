<template>
  <div class="relative">
    <CardsContainerNav
      class="invisible md:visible"
      :leftNavShow="leftNavShow"
      :rightNavShow="rightNavShow"
      @left-nav-clicked="scrollLeft"
      @right-nav-clicked="scrollRight"
    />

    <div class="px-4 w-full h-full flex flex-col md:px-20 xl:px-72">
      
      <h1 class="px-4 py-4 font-bold text-5xl text-gray-800 tracking-normal uppercase">
        Modular Showcase (Click to see Mini Demo)
      </h1>

      <div
        class="relative flex overflow-hidden md:flex-row md:overflow-x-scroll"
        ref="cardscontainer"
        @scroll="scrollHandler"
      >
        <CardsContainerBody class="mt-12 flex flex-col w-full md:flex-row" @popup="$emit('popup')" />
      </div>

    </div>
  </div>
</template>

<script>
import CardsContainerNav from "@/components/CardsContainerNav.vue";
import CardsContainerBody from "@/components/CardsContainerBody.vue";

export default {
  components: {
    CardsContainerNav,
    CardsContainerBody,
  },
  data() {
    return {
      leftNavShow: false,
      rightNavShow: true,
    };
  },
  methods: {
    scrollHandler() {
      this.$refs.cardscontainer.scrollLeft > 0
        ? (this.leftNavShow = true)
        : (this.leftNavShow = false);

      this.$refs.cardscontainer.scrollLeft ===
      this.$refs.cardscontainer.scrollLeftMax
        ? (this.rightNavShow = false)
        : (this.rightNavShow = true);
    },
    scrollRight() {
      let currentPosition = this.$refs.cardscontainer.scrollLeft;
      this.$refs.cardscontainer.scroll({
        left: currentPosition + 500,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (currentPosition !== this.$refs.cardscontainer.scrollLeft - 500) {
          this.rightNavShow = false;
        }
      }, 400);
    },
    scrollLeft() {
      let currentPosition = this.$refs.cardscontainer.scrollLeft;
      this.$refs.cardscontainer.scroll({
        left: currentPosition - 500,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
</style>