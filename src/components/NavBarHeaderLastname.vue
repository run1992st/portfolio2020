<template>
  <transition name="ascend" mode="out-in">
    <div
      v-if="lastname"
      key="eng"
      class="font-bold text-4xl tracking-widest"
    >RUNGSARDTHONG</div>
    <div
      v-if="lastname===false"
      key="thai"
      class="font-thai font-bold text-4xl tracking-extra"
    >รังสาดทอง</div>
  </transition>
</template>

<script>
export default {
  props: { lastname: Boolean },
};
</script>

<style scoped>
.ascend-enter-active {
  transition: all 1.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.ascend-leave-active {
  transition: all 0.7s cubic-bezier(1, 0, 0, 1);
}
.ascend-enter {
  transform: translateY(50px);
  opacity: 0;
}
.ascend-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>