<template>
  <div class="mt-2 flex items-center text-gray-900 font-bold">
    <transition name="scale">
      <div v-if="show" class="flex">
        <div
          class="mb-4 tracking-wide leading-none hover:text-gray-100 hollow"
          :class="addedClass"
        >{{letter}}</div>
        <div>
          <svg
            class="w-12 h-12 fill-current opacity-50 hover:opacity-100 cursor-pointer"
            @click="handleClickClose"
            viewBox="0 0 20 20"
          >
            <path
              d="m10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4-3.761-8.4-8.4-8.4zm4.789 11.461-1.729 1.729-3.06-3.061-3.061 3.06-1.729-1.729 3.062-3.06-3.061-3.061 1.729-1.728 3.06 3.06 3.061-3.061 1.729 1.729-3.062 3.061 3.061 3.061z"
              fill="#000"
            />
          </svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    handleClickClose(){
      this.show=false
      setTimeout(() => {
        this.$emit("hoverAt",false);
      }, 700);
      
    }
  },
  mounted() {
    this.show = true;
    // setTimeout(() => {
    //   this.show=false
    // }, 2500);
  },
  beforeUpdate() {},
  props: {
    letter: String,
    addedClass: String /*tailwind size*/
  }
};
</script>

<style>
.scale-enter-active {
  /* transform: translateY(-50px); */
   transform: translateX(0px);
  transform: scale3d(1, 1, 1);
  transition: all 0.8s ease-in;
}
.scale-leave-active {
  transition: all 0.7s;
  opacity: 100;
}
.scale-enter {
  transform: translateX(-500px) scale3d(0.1, 0.1, 0.1);;
  
  opacity: 0;
}
.scale-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
.hollow {
  transition: all 0.4s;
}
.hollow:hover {
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}
.outlined {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>