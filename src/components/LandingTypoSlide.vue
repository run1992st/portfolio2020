<template>
  <div class="relative mt-2 flex items-center text-gray-900 font-bold">
    <div
      v-for="(letter,index) in word"
      @mouseover="$emit('hover-at',letter)"
      :key="'key'+index"
      class="overflow-hidden"
    >
      <transition :name="transition">
        <div v-if="show" class="flex">
          <div
            class="mb-4 tracking-wide leading-none hover:text-gray-100 hollow"
            :class="addedClass"
          >{{letter}}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    word: String,
    addedClass: String,
  },
  data() {
    return {
      transition: "fall",
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style>
.fall-enter-active {
  /* transform: translateY(-50px); */
  transform: translateX(0px);
  transition: all 1s ease-in;
}
.fall-leave-active {
  transform: translateY(-50px);
  opacity: 0;
  transition: all 0.8s;
}
.fall-enter {
  transform: translateX(-20px);
  opacity: 0;
}
fall-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
.to-white-enter-active {
  /* transform: translateY(-50px); */
  color: white;
  transition: all 1s ease-in;
}
.to-white-enter {
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