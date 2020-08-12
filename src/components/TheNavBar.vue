<template>
  <div>
    <div class="relative w-full">
      <transition name="fade">
        <div key="background" v-if="main===false" class="background"></div>
      </transition>

      <transition name="curtain" mode="out-in" appear>
        <div name="main" v-if="main===true" key="main" class="absolute w-full z-50">
          <NavBarHeader @change-navbar-state="main=!main" />
        </div>

        <div name="nav" v-if="main===false" key="nav" class="absolute w-full bg-gray-25 z-50">
          <div @mouseleave="main=true" class="relative flex flex-col w-full shadow-lg">
            <NavBarHeader @change-navbar-state="main=!main" />
            <NavBarBody />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import NavBarHeader from "@/components/NavBarHeader.vue";
import NavBarBody from "@/components/NavBarBody.vue";

export default {
  name: "TheNavBar",
  components: { NavBarHeader, NavBarBody },
  data() {
    return {
      main: null,
    };
  },
  created() {
    const handleEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.main = true;
      }
    };
    document.addEventListener("keydown", handleEscape);
  },
  mounted() {
    this.main = true;
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEscape);
  },
};
</script>

<style>
.background {
  position: absolute;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  background: rgba(65, 65, 65, 0.76);
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.65s ease;
  transition-delay: 0.65s;
}
.fade-leave-active {
  transition: all 0.6s;
}

.curtain-enter-active {
  /* transform: translateY(-50px); */
  transform: translateX(0px);
  opacity: 40;
  transition: all 0.7s;
}
.curtain-leave-active {
  transform: translateY(-50px);
  opacity: 80;
  transition: all 0.7s cubic-bezier(1, 0, 0, 1);
}
.curtain-enter {
  transform: translateY(-200px);
  opacity: 100;
}
.curtain-leave-to {
  transform: translateY(-400px);
  opacity: 0;
}
</style>