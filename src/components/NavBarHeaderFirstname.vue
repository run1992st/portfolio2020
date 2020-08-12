<template>
  <transition name="ascend" mode="out-in">
    <div
      v-if="firstname"
      key="eng"
      class="font-bold text-4xl tracking-wider"
    >RON</div>
    <div
      v-if="firstname===false"
      key="thai"
      class="font-thai font-bold text-4xl tracking-extra"
    >รัญชน์</div>
  </transition>
</template>

<script>
export default {
    props:{
        firstname:Boolean
    }
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