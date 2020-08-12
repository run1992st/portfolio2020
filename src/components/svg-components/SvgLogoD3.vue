<template>
  <transition name="paint">
    <div v-if="animated" key="animated">
      <svg class="absolute -top-16 w-32 h-32" viewBox="-10 -10 116 111">
        <clipPath id="d">
          <path
            d="m0 0h7.75a45.5 45.5 0 1 1 0 91h-7.75v-20h7.75a25.5 25.5 0 1 0 0-51h-7.75zm36.251 0h32a27.75 27.75 0 0 1 21.331 45.5 27.75 27.75 0 0 1-21.331 45.5h-32a53.69 53.69 0 0 0 18.746-20h13.253a7.75 7.75 0 1 0 0-15.5h-7.75a53.69 53.69 0 0 0 0-20h7.75a7.75 7.75 0 1 0 0-15.5h-13.253a53.69 53.69 0 0 0-18.746-20z"
          />
        </clipPath>
        <linearGradient id="d3c" x1="7" x2="50" y1="64" y2="107" gradientUnits="userSpaceOnUse">
          <stop stop-color="#f9a03c" offset="0" />
          <stop stop-color="#f7974e" offset="1" />
        </linearGradient>
        <linearGradient id="d3b" x1="2" x2="87" y1="-2" y2="84" gradientUnits="userSpaceOnUse">
          <stop stop-color="#f26d58" offset="0" />
          <stop stop-color="#f9a03c" offset="1" />
        </linearGradient>
        <linearGradient id="d3a" x1="45" x2="108" y1="-10" y2="53" gradientUnits="userSpaceOnUse">
          <stop stop-color="#b84e51" offset="0" />
          <stop stop-color="#f68e48" offset="1" />
        </linearGradient>
        <g clip-path="url(#d)">
          <path d="m-100-102m-28 0v300h300z" fill="url(#d3c)" />
          <path d="m-100-102m28 0h300v300z" fill="url(#d3a)" />
          <path d="m-100-102 300 300" fill="none" stroke="url(#d3b)" stroke-width="40" />
        </g>
      </svg>
    </div>
    <div v-if="!animated" key="draft">
      <svg class="absolute -top-16 w-32 h-32" viewBox="-10 -10 116 111">
        <clipPath id="d">
          <path
            d="m0 0h7.75a45.5 45.5 0 1 1 0 91h-7.75v-20h7.75a25.5 25.5 0 1 0 0-51h-7.75zm36.251 0h32a27.75 27.75 0 0 1 21.331 45.5 27.75 27.75 0 0 1-21.331 45.5h-32a53.69 53.69 0 0 0 18.746-20h13.253a7.75 7.75 0 1 0 0-15.5h-7.75a53.69 53.69 0 0 0 0-20h7.75a7.75 7.75 0 1 0 0-15.5h-13.253a53.69 53.69 0 0 0-18.746-20z"
          />
        </clipPath>
        <linearGradient id="d3c" x1="7" x2="50" y1="64" y2="107" gradientUnits="userSpaceOnUse">
          <stop stop-color="#f9a03c" offset="0" />
          <stop stop-color="#f7974e" offset="1" />
        </linearGradient>
        <linearGradient id="d3b" x1="2" x2="87" y1="-2" y2="84" gradientUnits="userSpaceOnUse">
          <stop stop-color="#f26d58" offset="0" />
          <stop stop-color="#f9a03c" offset="1" />
        </linearGradient>
        <linearGradient id="d3a" x1="45" x2="108" y1="-10" y2="53" gradientUnits="userSpaceOnUse">
          <stop stop-color="#b84e51" offset="0" />
          <stop stop-color="#f68e48" offset="1" />
        </linearGradient>
        <g clip-path="url(#d)">
          <path
            d="m0 0h7.75a45.5 45.5 0 1 1 0 91h-7.75v-20h7.75a25.5 25.5 0 1 0 0-51h-7.75zm36.251 0h32a27.75 27.75 0 0 1 21.331 45.5 27.75 27.75 0 0 1-21.331 45.5h-32a53.69 53.69 0 0 0 18.746-20h13.253a7.75 7.75 0 1 0 0-15.5h-7.75a53.69 53.69 0 0 0 0-20h7.75a7.75 7.75 0 1 0 0-15.5h-13.253a53.69 53.69 0 0 0-18.746-20z"
            stroke="#222222"
            stroke-width="4"
          />
          <path d="m-100-102m-28 0v300h300z" stroke="#222222" stroke-width="3" fill="#FCFCFC" />
          <path d="m-100-102m28 0h300v300z" stroke="#222222" stroke-width="3" fill="#FCFCFC" />
          <path d="m-100-102 300 300" fill="none" stroke="#222222" stroke-width="40" />
        </g>
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["animated"],
};
</script>

<style scoped>
.paint-enter-active {
  transition: all 0.4s ease-in;
}
.paint-leave-active {
  transition: all 0.4s;
}
.paint-enter {
  opacity: 0;
}
.paint-leave-to {
  opacity: 0;
}
</style>