<template>
  <div class="shadow-sm border-gray-300 border-1">
    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div class="absolute w-full h-108 flex justify-center items-center z-0">
        <LandingDrawing :show="isDrawingShow"/>
      </div>

      <div class="mb-20 min-h-full flex flex-col justify-center items-center z-10">
        <LandingTypo :show="isTypoShow"/>
      </div>

      <div class="absolute w-screen h-screen mb-24 flex items-end justify-center">
        <a href="#card-stack-section">
          <LandingDownnav :show="isDownnavShow" class="relative z-20" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import LandingDrawing from "@/components/LandingDrawing.vue";
import LandingDownnav from "@/components/LandingDownnav.vue";
import LandingTypo from "@/components/LandingTypo.vue";

export default {
  components: {
    LandingTypo,
    LandingDrawing,
    LandingDownnav,
  },
  data() {
    return {
      isDownnavShow:false,
      isTypoShow:false,
      isDrawingShow:false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isTypoShow = true
    }, 200);

    setTimeout(() => {
      this.isDrawingShow = true;
    }, 2800);

    setTimeout(() => {
      this.isDownnavShow = true;
    }, 3400);
  },
};
</script>

<style>
</style>