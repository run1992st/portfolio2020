<template>
  <div
    draggable="true"
    class="relative h-24 mt-6 md:mt-24 my-12 mx-4 p-4 md:h-108 bg-gray-25 shadow-md md:bg-white rounded-xl md:shadow-lg cursor-pointer hover:bg-gray-300 transition-all ease-in duration-200"
    @click="openUrl(link)"
    @mouseenter="handleHover"
    @mouseleave="handleHoverOut"
  >
    <SvgLoading class="relative flex mx-auto w-full h-full" v-if="loading" />
    <section name="card-layout" class="flex flex-shrink-0 md:flex-col md:w-64 w-full h-full">
      <section name="logo-container" v-if="!loading" class="absolute w-20 h-10 border-none rounded-md z-10">
        <SvgLogoJS :animated="animated" class="absolute w-15 h-15" v-if="logo==='js'" />
        <SvgLogoVue :animated="animated" class="absolute w-15 h-15" v-if="logo==='vue'" />
        <SvgLogoMongodb :animated="groupAnimated" class="absolute w-15 h-15" v-if="logo==='mongodb'" />
        <SvgLogoNodejs :animated="groupAnimated" class="absolute w-15 h-15" v-if="logo==='nodejs'" />
        <SvgLogoMocha :animated="groupAnimated" class="absolute w-15 h-15" v-if="logo==='mocha&chai'" />
        <SvgLogoTailwind :animated="animated" class="absolute w-15 h-15" v-if="logo==='tailwind'" />
        <SvgLogoAi :animated="animated" class="absolute w-15 h-15" v-if="logo==='illustrator'" />
        <SvgLogoD3 :animated="animated" class="absolute w-15 h-15" v-if="logo==='d3'" />
        <SvgLogoAuth :animated="animated" class="absolute w-15 h-15" v-if="logo==='auth'" />
        <SvgLogoTooling :animated="animated" class="absolute w-15 h-15" v-if="logo==='tooling'" />
      </section>
      <section name="desctiption" v-if="!loading" class="hidden md:block mt-20 mx-2 z-10">
        <h1
          class="mt-2 text-6xl text-gray-700 tracking-wider font-bold md:ml-0 md:text-5xl md:text-gray-800 md:tracking-wide"
        >
          <slot name="title"></slot>
        </h1>
        <p class="hidden md:block mt-3 text-gray-700">
          <slot name="description"></slot>
        </p>
      </section>
      <section name="link"
        class="pr-4 flex w-full h-full items-end justify-end font-bold text-5xl tracking-wide text-gray-800 md:text-white"
      >
        <span class="mr-2 z-0" v-show="link">
          <svg id="Forward" viewBox="0 0 20 20" class="w-8 h-8 text-gray-25 fill-current">
            <path
              d="M12,11.874v4.357l7-6.69l-7-6.572v3.983c-8.775,0-11,9.732-11,9.732C3.484,12.296,7.237,11.874,12,11.874z"
            />
          </svg>
        </span>
        <p class="font-bold text-lg">{{hostName?hostName:""}}</p>
      </section>
    </section>
  </div>
</template>

<script>
import SvgLoading from "@/components/svg-components/SvgLoading.vue";
import SvgLogoJS from "@/components/svg-components/SvgLogoJS.vue";
import SvgLogoVue from "@/components/svg-components/SvgLogoVue.vue";
import SvgLogoMongodb from "@/components/svg-components/SvgLogoMongodb.vue";
import SvgLogoNodejs from "@/components/svg-components/SvgLogoNodejs.vue";
import SvgLogoMocha from "@/components/svg-components/SvgLogoMocha.vue";
import SvgLogoTailwind from "@/components/svg-components/SvgLogoTailwind.vue";
import SvgLogoAi from "@/components/svg-components/SvgLogoAi.vue";
import SvgLogoD3 from "@/components/svg-components/SvgLogoD3.vue";
import SvgLogoAuth from "@/components/svg-components/SvgLogoAuth.vue";
import SvgLogoTooling from "@/components/svg-components/SvgLogoTooling.vue";

export default {
  components: {
    SvgLoading,
    SvgLogoJS,
    SvgLogoVue,
    SvgLogoMongodb,
    SvgLogoNodejs,
    SvgLogoMocha,
    SvgLogoTailwind,
    SvgLogoAi,
    SvgLogoD3,
    SvgLogoAuth,
    SvgLogoTooling,
  },
  data() {
    return {
      animated: false,
    };
  },
  props: {
    source: String,
    loading: Boolean,
    logo: String,
    groupAnimated: Boolean,
    link: String,
  },
  computed: {
    hostName() {
      if (this.link === "Show Gallery") {
        return "Show Gallery";
      } else if (!this.link) {
        return "";
      } else {
        let extractHost = this.link.match(new RegExp("https://(\\w+)."))[1];
        return extractHost[0].toUpperCase() + extractHost.slice(1);
      }
    }
  },
  methods: {
    // Group animation of MongoDB, Node and Mocha together for it have the same external link
    handleHover() {
      this.logo === "nodejs" ||
      this.logo === "mocha&chai" ||
      this.logo === "mongodb"
        ? this.$emit("groupAnimated")
        : (this.animated = true);
    },
    handleHoverOut() {
      this.logo === "nodejs" ||
      this.logo === "mocha&chai" ||
      this.logo === "mongodb"
        ? this.$emit("groupAnimated")
        : (this.animated = false);
    },

    openUrl(link) {
      if (link === "Show Gallery") {
        return;
      }
      window.open(link, "_blank");
      window.focus();
    },
  },
};
</script>

<style>
</style>