<template>
  <div class="flex flex-col md:flex-row justify-evenly items-center">
    <div>
      <LandingTypoSlide
        word="Fullstack"
        addedClass="text-7xl  md:text-8xl xl:text-10xl font-display"
      ></LandingTypoSlide>
      <LandingTypoFall
        word="Portfolio"
        v-if="flashLetter"
        class="absolute text-5xl md:text-7xl xl:text-8xl font-display z-10"
      />
    </div>
    <LandingTypoSlide word="/" addedClass="text-10xl md:text-xxxl font-display"></LandingTypoSlide>
    <LandingTypoSlide
      word="Developer"
      addedClass="text-7xl  md:text-8xl md:mt-24 xl:text-10xl outlined  font-display"
    ></LandingTypoSlide>
  </div>
</template>

<script>
import LandingTypoSlide from "@/components/LandingTypoSlide.vue";
import LandingTypoFall from "@/components/LandingTypoFall.vue";

function timeWait(s) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, s);
  });
}

export default {
  components: {
    LandingTypoSlide,
    LandingTypoFall,
  },
  data() {
    return {
      flashLetter: false,
      state: "landing",
    };
  },
  async mounted() {
    await timeWait(1600);
    this.flashLetter = true;
  },
};
</script>

<style>
</style>