<template>
  <div class="absolute flex items-center justify-between min-w-full min-h-full md:px-12 xl:px-48">
    <span
      class="opacity-75 z-10 transition-all duration-75"
      @click.stop="$emit('left-nav-clicked')"
    >
      <SvgNavLeft class="h-16 w-16 text-gray-200 fill-current cursor-pointer hover:text-gray-500" />
    </span>
    <span
      class="opacity-75 z-10 transition-all duration-75"
      @click.stop="$emit('right-nav-clicked')"
    >
      <SvgNavRight class="h-16 w-16 text-gray-200 fill-current cursor-pointer hover:text-gray-500" />
    </span>
  </div>
</template>

<script>
import SvgNavLeft from "@/components/svg-components/SvgNavLeft.vue";
import SvgNavRight from "@/components/svg-components/SvgNavRight.vue";
export default {
  components: {
    SvgNavLeft,
    SvgNavRight,
  },
  props: {
    leftNavShow: Boolean,
    rightNavShow: Boolean,
  },
};
</script>

<style>
</style>