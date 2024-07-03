<script setup lang="ts">
useHead({
  title: 'Ayaa AIs',
})
const elTab = ref<HTMLElement>()
const tab = ref(0)
const setTab = async (n: number) => {
  tab.value = n
  await nextTick()
  scrollToElTab()
  showMenu.value = false
}
const scrollToTop = () => scrollTo({ top: 0, behavior: 'smooth' })
const scrollToElTab = () => elTab.value?.scrollIntoView({ behavior: 'smooth' })
const { path } = storeToRefs(useGeneralStore())

const navbarHeight = ref(56)
const showMenu = ref(false)
watch(showMenu, () => {
  showMenu.value ? (navbarHeight.value = 200) : (navbarHeight.value = 56)
})
const isMediumScreen = useMediaQuery('(min-width: 768px)')
watch(isMediumScreen, async () => {
  if (isMediumScreen.value) {
    await nextTick()
    showMenu.value = false
  }
})
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
      <div class="flex justify-center items-center min-h-screen py-8">
        <div class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem]">
          <div class="space-y-4 md:space-y-2" v-auto-animate>
            <NuxtImg
              src="/assets/avatar.png"
              format="webp"
              width="144"
              class="border-[5px] border-dashed rounded-full border-slate-100 mx-auto md:mx-0"
              preload
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
              About
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
      <div class="min-h-screen relative" v-if="tab > 0" ref="elTab">
        <div
          class="bg-glass shadow-b-glow p-2 text-slate-100 sticky top-0 z-10 flex items-center justify-between transition-all duration-500 overflow-hidden"
          :style="`height: ${navbarHeight}px;`"
        >
          <span class="px-8" v-if="!isMediumScreen" />
          <button class="p-2" @click="scrollToTop()" v-if="isMediumScreen">
            Navbar?
          </button>
          <TransitionGroup name="fade">
            <ul
              v-if="showMenu || isMediumScreen"
              class="text-center duration-300 md:space-y-0 items-center"
              :class="showMenu ? 'space-y-2' : 'flex'"
            >
              <li
                class="px-4 py-2 cursor-pointer rounded-full"
                @click="setTab(1)"
                :class="tab === 1 ? 'bg-rose-400 border-rose-400' : ''"
              >
                About
              </li>
              <li
                class="px-4 py-2 cursor-pointer rounded-full"
                @click="setTab(2)"
                :class="tab === 2 ? 'bg-rose-400 border-rose-400' : ''"
              >
                Artworks
              </li>
              <li
                class="px-4 py-2 cursor-pointer rounded-full"
                @click="setTab(3)"
                :class="tab === 3 ? 'bg-rose-400 border-rose-400' : ''"
              >
                Commission
              </li>
              <li
                class="px-4 py-2 cursor-pointer rounded-full"
                @click="setTab(4)"
                :class="tab === 4 ? 'bg-rose-400 border-rose-400' : ''"
              >
                Original Characters
              </li>
            </ul>
          </TransitionGroup>
          <div class="md:px-8">
            <IconMenu
              @click="showMenu = true"
              v-if="!showMenu && !isMediumScreen"
              class="text-4xl text-slate-100 hover:text-slate-800 hover:bg-slate-100 p-2 rounded-full duration-200"
            />
            <IconClose
              @click="showMenu = !showMenu"
              v-else-if="showMenu && !isMediumScreen"
              class="text-4xl text-slate-100 hover:text-slate-800 hover:bg-slate-100 p-2 rounded-full duration-200"
            />
          </div>
        </div>
        <div
          class="flex items-center min-h-[calc(100vh-5rem)] my-4 flex-col overflow-x-hidden"
        >
          <Transition name="slide" appear mode="out-in">
            <TabAbout v-if="tab === 1" />
            <TabArtworks v-else-if="tab === 2" />
            <TabCommission v-else-if="tab === 3" />
            <TabOC v-else-if="tab === 4" />
          </Transition>
        </div>
      </div>
      <Transition name="fade">
        <FullImg v-if="path" />
      </Transition>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in 0.1s;
}

.slide-enter-from {
  transform: translateX(100vw);
}
.slide-leave-to {
  transform: translateX(-100vw);
}
</style>
