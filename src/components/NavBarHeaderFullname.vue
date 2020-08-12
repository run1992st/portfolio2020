<template>
  <div
    name="name-container"
    class="hidden md:visible md:ml-3 md:my-1 md:flex md:flex-col md:justify-end"
  >
    <div class="h-6 overflow-hidden" @mouseenter="firstname=!firstname">
      <NavBarHeaderFirstname
        class="w-64 h-6 overflow-hidden"
        @mouseenter="firstname=!firstname"
        :firstname="firstname"
      />
    </div>
    <div class="h-6 overflow-hidden" @mouseenter="lastname=!lastname">
      <NavBarHeaderLastname :lastname="lastname" />
    </div>
  </div>
</template>

<script>
import NavBarHeaderFirstname from "@/components/NavBarHeaderFirstname.vue";
import NavBarHeaderLastname from "@/components/NavBarHeaderLastname.vue";
export default {
  components: {
    NavBarHeaderFirstname,
    NavBarHeaderLastname,
  },
  data() {
    return {
      firstname: null,
      lastname: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.firstname = true;
      this.lastname = true;
    }, 1000);
  },
};
</script>

<style>
</style>