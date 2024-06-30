<script setup lang="ts">
const elTab = ref<HTMLElement>();
const tab = ref(0);
const setTab = async (i: number) => {
  tab.value = i;
  await nextTick();
  elTab.value?.scrollIntoView({ behavior: "smooth" });
};
const scrollToTop = () => scrollTo({ top: 0, behavior: "smooth" });
</script>
<template>
  <div>
    <NuxtImg
      src="/assets/main.jpg"
      class="object-cover h-screen w-screen fixed scale-110 -z-10"
      format="webp"
    />
    <div
      class="bg-gradient-to-br from-rose-600 to-violet-400 object-cover h-screen w-screen fixed opacity-50 -z-10"
    />
    <div>
      <div class="flex justify-center items-center h-screen">
        <div class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem]">
          <div class="space-y-4 md:space-y-2">
            <NuxtImg
              src="/assets/avatar.png"
              format="webp"
              width="144"
              class="border-[5px] border-dashed rounded-full border-slate-100 mx-auto md:mx-0"
            />
            <h1 class="text-center md:text-left">Ayaa AIs</h1>
            <h6
              class="tracking-widest flex items-center justify-center md:justify-normal"
            >
              <IconBrush class="mr-1" />ILLUSTRATOR
            </h6>
            <p class="max-w-96 break-words text-center md:text-left pb-4">
              Helloooowww and welcome (人´∀｀)｡ﾟ+
            </p>
            <div
              class="flex flex-col md:flex-row md:space-x-2 items-center justify-center space-y-4 md:space-y-0"
            >
              <Status label="Art Trade" :value="false" />
              <Status label="Collab" :value="false" />
              <Status label="Commission" :value="true" />
            </div>
          </div>
          <div class="flex items-center justify-center space-x-4 mt-4">
            <ContactLink to="https://x.com/Ayaa_Ais">
              <IconX />
            </ContactLink>
            <ContactLink to="mailto:Ayaaais001@gmail.com">
              <IconGmail />
            </ContactLink>
            <ContactLink to="https://www.patreon.com/AyaaAIs">
              <IconPatreon />
            </ContactLink>
            <ContactLink to="https://www.pixiv.net/users/107317668">
              <IconPixiv />
            </ContactLink>
            <ContactLink to="https://www.facebook.com/AyaaaAiss">
              <IconFacebook />
            </ContactLink>
            <ContactLink to="https://www.instagram.com/ayaa__ais">
              <IconInstagram />
            </ContactLink>
            <ContactLink to="https://www.tiktok.com/@ayaa_ais">
              <IconTiktok />
            </ContactLink>
          </div>
          <div class="my-4 border border-slate-100" />
          <div
            class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-center space-x-2"
          >
            <button
              @click="setTab(1)"
              class="btn"
              :class="tab === 1 ? 'bg-rose-400 border-rose-400' : ''"
            >
              About Me
            </button>
            <button
              @click="setTab(2)"
              class="btn"
              :class="tab === 2 ? 'bg-rose-400 border-rose-400' : ''"
            >
              Artworks
            </button>
            <button
              @click="setTab(3)"
              class="btn"
              :class="tab === 3 ? 'bg-rose-400 border-rose-400' : ''"
            >
              Commission
            </button>
            <button
              @click="setTab(4)"
              class="btn"
              :class="tab === 4 ? 'bg-rose-400 border-rose-400' : ''"
            >
              Original Characters
            </button>
          </div>
        </div>
      </div>
      <div class="min-h-screen" v-if="tab > 0" ref="elTab">
        <div
          class="bg-glass shadow-b-glow p-2 text-slate-100 sticky top-0 z-10"
        >
          <button class="p-2" @click="scrollToTop()">Ayaa</button>
        </div>
        <div
          class="flex justify-center items-center min-h-[calc(100vh-5rem)] my-4"
        >
          <TabAbout v-if="tab === 1" />
          <TabArtworks v-if="tab === 2" />
        </div>
      </div>
    </div>
  </div>
</template>
