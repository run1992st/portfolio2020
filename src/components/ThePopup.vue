<template>
  <div>
    <transition name="popup">
      <div
        v-if="popup"
        key="gallery"
        class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
        @click.prevent="$emit('remove-popup')"
      >
        <PopupNav
          class="z-30"
          @left-nav-clicked="handleLeftClicked"
          @right-nav-clicked="handleRightClicked"
        />

        <div
          id="background"
          class="absolute top-0 left-0 w-full h-full min-w-screen min-h-screen bg-black opacity-75 z-10"
        ></div>
        <div class="p-12 flex-col item-center justify-center h-screen z-20">
          <img class="h-full object-scale-down rounded-sm overflow-hidden" :src="currentImagePath" alt />
          <div class="flex items-start w-full h-full z-20 opacity-75">
            <LandingTypoFall
              :milliSecPerChar="60"
              :key="currentImageCategoryName"
              :word="currentImageCategoryName"
              addedClass=" text-4xl text-gray-100 tracking-widest font-normal"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import LandingTypoFall from "@/components/LandingTypoFall.vue";
import PopupNav from "@/components/PopupNav.vue";
export default {
  components: {
    PopupNav,
    LandingTypoFall,
  },
  props: {
    images: Array,
    popup: Boolean,
  },
  data() {
    return {
      show: false,
      currentImageindex: 0,
    };
  },
  computed: {
    currentImagePath() {
      return this.images[this.currentImageindex].path;
    },
    currentImageCategoryName() {
      return this.images[this.currentImageindex].categoryName;
    },
  },
  methods: {
    handleLeftClicked() {
      if (this.currentImageindex === 0) {
        this.currentImageindex = this.images.length - 1;
      } else {
        this.currentImageindex -= 1;
      }
    },
    handleRightClicked() {
      if (this.currentImageindex === this.images.length - 1) {
        this.currentImageindex = 0;
      } else {
        this.currentImageindex += 1;
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 200);
  },
};
</script>

<style scoped>
.popup-enter-active {
  transition: all 0.8s;
}
.popup-enter-to {
  opacity: 50;
}
.popup-leave-active {
  transition: all 0.7s;
}
.popup-enter {
  opacity: 0;
}
.popup-leave-to {
  opacity: 0;
}
</style>