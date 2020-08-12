<template>
  <div class="border-t border-1 border-gray-300">
    <div class="block px-16 py-12 mt-4 justify-around text-gray-800
                md:flex">

      <span class="ml-8 flex justify-center lg:w-1/4">
        <SvgLogoCompany class="h-16 w-16 text-gray-900" />
      </span>

      <FooterSocial
        class="mx-auto my-8 w-64 flex flex-col justify-start items-start tracking-widest text-4xl font-medium
               md:mx-16 md:my-0 lg:pl-20 lg:w-1/4"
      />
      <FooterContact
        class="mx-auto w-64 flex flex-col items-start justify-start tracking-wider text-4xl font-medium
               md:mx-20 lg:w-1/4"
      />

    </div>
  </div>
</template>

<script>
import SvgLogoCompany from "@/components/svg-components/SvgLogoCompany.vue";
import FooterSocial from "@/components/FooterSocial.vue";
import FooterContact from "@/components/FooterContact.vue";
export default {
  components: { SvgLogoCompany, FooterSocial, FooterContact },
};
</script>

<style>
</style>