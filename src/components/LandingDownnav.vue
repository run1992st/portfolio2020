<template>
  <transition name="fall">
    <div v-if="show" class="flex flex-col items-center justify-evenly flex-shrink-0 flex-grow-0">
      <div class="text-2xl font-semibold text-gray-700">View My Stack</div>
      <div
        class="mt-4 flex justify-center items-center h-20 w-20 rounded-full bg-white shadow-md hover:bg-gray-200"
      >
        <span id="arrow-down" class="flex flex-col items-center justify-start">
          <svg viewBox="0 0 40 40" class="absolute h-12 y-12 text-gray-800 fill-current">
            <line
              class="line"
              stroke="#282828"
              stroke-width="2"
              stroke-miterlimit="10"
              x1="19"
              y1="4"
              x2="19"
              y2="27"
            />
          </svg>
          <svg class="arrow fill-current h-10 w-10 text-gray-800">
            <polygon points="19,36.4 8.2,24.9 10.9,24.9 19,33.5 27.1,24.9 29.8,24.9 " />
          </svg>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<style scoped>
#arrow-down {
  animation: slide 1.3s ease-in-out;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}
.line {
  stroke-dasharray: 32;
  animation: draw 0.8s ease-in-out;
  animation-direction: reverse;
  animation-iteration-count: infinite;
}
.arrow {
  animation: slide 0.5s ease-in-out;
  animation-delay: 0.8s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}

@keyframes slide {
  from {
    margin-top: 7px;
  }
  to {
    margin-top: 16px;
  }
}
@keyframes draw {
  to {
    opacity: 100%;
    stroke-dashoffset: 32;
  }
}

.fall-enter-active {
  /* transform: translateY(-50px); */
  transform: translateY(0px);
  transition: all 1s ease-in;
  transition-delay: 500;
}
.fall-enter {
  transform: translateY(-50px);
  opacity: 0;
}
</style>