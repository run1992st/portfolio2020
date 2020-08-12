<template>
<transition name="paint">
 <div v-if="animated" key="animated">
    <svg class="absolute w-32 h-32 -top-16" viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
        <g transform="translate(178.06 235.01)">
          <path
            d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
            fill="#41b883"
          />
        </g>
        <g transform="translate(178.06 235.01)">
          <path
            d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
            fill="#34495e"
          />
        </g>
      </g>
    </svg>
  </div>
  <div v-if="!animated" key="draft">
    <svg class="absolute w-32 h-32 -top-16" viewBox="0 0 261.76 226.69">
      <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
        <g transform="translate(178.06 235.01)">
          <path
            d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
            fill="#222222"
            stroke="#222222"
            stroke-width="3"
          />
        </g>
        <g transform="translate(178.06 235.01)">
          <path
            d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
            fill="#fcfcfc"
            stroke="#222222"
            stroke-width="1.8"
          />
        </g>
      </g>
    </svg>
  </div>
</transition>
 
</template>

<script>
export default {
  props: ["animated"]
};
</script>

<style>
.paint-enter-active {
  /* transform: translateY(-50px); */
  opacity: 100;
  transition: all 0.4s ease-in;
}
.paint-leave-active {
  transition: all 0.4s;
  opacity: 100;
}
.paint-enter {

  opacity: 0;
}
.paint-leave-to {
  opacity: 0;
}
</style>