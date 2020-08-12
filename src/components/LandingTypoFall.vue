<template>
  <div>
    <div class="relative w-full mt-2 flex justify-evenly text-gray-800 font-bold overflow-hidden">
      <transition-group name="falling" tag="div" class="flex">
        <div v-for="(letter,index) in sequence" :key="'key'+index+''+letter" class>
          <p class="inline-block leading-none hover:text-gray-100 hollow" :class="addedClass">
            {{letter}}
          </p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
function timeWait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds);
  });
}
export default {
  props: {
    word: String,
    addedClass: String,
    milliSecPerChar: Number,
  },
  data() {
    return {
      sequence: [],
    };
  },

  async mounted() {
    let wordsArray = this.word.split("");
    let waitSeconds = this.milliSecPerChar || 100;
    console.log(wordsArray);
    for (let i of wordsArray) {
      await timeWait(waitSeconds);
      if (i === " ") {
        this.sequence.push(".");
      } else {
        this.sequence.push(i);
      }
    }
  },
};
</script>

<style scoped>
.falling-enter-active {
  transform: translateY(0px);
  transition: all 0.4s ease-out;
}
.falling-enter {
  transform: translateY(-30px);
  opacity: 0;
}

.hollow {
  transition: all 0.4s;
}
.hollow:hover {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
.outlined {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>