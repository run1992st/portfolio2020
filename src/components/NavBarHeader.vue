<template>
  <div
    class="w-full px-4 relative py-6 flex items-center justify-between shadow-xs bg-gray-25 lg:px-40 xl:px-72"
  >
    <section name="logowordcontainer" class="flex">
      <SvgLogoCompany class="w-8 h-8 md:h-16 md:w-16" />
      <NavBarHeaderFullname />
    </section>

    <section name="profile-button" class="flex items-center text-gray-700 hover:text-gray-500">
      <a
        @click="$emit('change-navbar-state')"
        class="py-4 font-bold text-sm tracking-wide md:visible"
        href="#"
      >
        <span class="hidden md:inline-flex items-center" name="button-largescreen">
          <p class="text-xl font-semibold hover:cursor-pointer">Profile</p>
          <SvgChevronDown class="ml-1 h-4 w-4" />
        </span>
        <span class="block md:hidden" name="button-mobilescreen">
          <SvgBurgerMenu class="h-8 w-8 text-gray-700 fill-current"/>
        </span>
      </a>
    </section>
  </div>
</template>

<script>
import SvgLogoCompany from "@/components/svg-components/SvgLogoCompany.vue";
import SvgChevronDown from "@/components/svg-components/SvgChevronDown.vue";
import SvgBurgerMenu from "@/components/svg-components/SvgBurgerMenu.vue";
import NavBarHeaderFullname from "@/components/NavBarHeaderFullname.vue";

export default {
  components: {
    SvgLogoCompany,
    SvgChevronDown,
    SvgBurgerMenu,
    NavBarHeaderFullname,
  },
};
</script>

<style>
</style>