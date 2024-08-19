<script setup lang="ts">
const tab = ref(-1)
const prevTab = ref(-1)
const setTab = async (n: number) => {
  prevTab.value = tab.value
  tab.value = n
  if (tab.value === prevTab.value) return (showMenu.value = false)
  await nextTick()
  scrollToElTab()
  showMenu.value = false
}
const scrollToTop = () => (y.value = 0)
const elTab = ref<HTMLElement | null>(null)
const scrollToElTab = () =>
  elTab.value?.scrollIntoView({ block: 'start', behavior: 'smooth' })

const { name } = storeToRefs(useGeneralStore())

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
const body = ref<HTMLElement | null>(null)
const { height } = useWindowSize()
const { y } = useScroll(body, { behavior: 'smooth' })

const statuses = {
  'Art Trade': false,
  Collab: false,
  Commission: false,
}
</script>
<template>
  <div ref="body" class="overflow-y-scroll h-screen md:snap-y snap-mandatory">
    <div class="flex justify-center items-center min-h-screen py-8 snap-start">
      <div class="bg-glass rounded-3xl p-8 w-96 md:w-[40rem]">
        <div class="space-y-4 md:space-y-2">
          <NuxtImg
            src="/assets/avatar.png"
            format="webp"
            width="144"
            class="border-[5px] border-dashed rounded-full border-slate-100 mx-auto md:mx-0"
            preload
            alt="avatar"
          />
          <h1 class="text-center md:text-left">Ayaa AIs</h1>
          <h2
            class="tracking-widest flex items-center justify-center md:justify-normal"
          >
            <Icon name="material-symbols:brush" class="mr-1" />
            ILLUSTRATOR
          </h2>
          <p class="max-w-96 break-words text-center md:text-left pb-4">
            Helloooowww and welcome (人´∀｀)｡ﾟ+
          </p>
          <div
            class="flex flex-col md:flex-row md:space-x-2 items-center justify-center space-y-4 md:space-y-0"
          >
            <StatusItem
              v-for="(value, label, index) in statuses"
              :key="`${label}-${index}`"
              :label="label"
              :value="value"
            />
          </div>
        </div>
        <ContactsList />
        <div class="my-4 border border-slate-100" />
        <div
          class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-center space-x-2"
        >
          <button
            class="btn"
            :class="tab === 2 ? 'bg-rose-400 border-rose-400' : ''"
            @click="setTab(2)"
          >
            Commission Info
          </button>
        </div>
      </div>
    </div>
    <div ref="elTab" class="min-h-screen relative snap-start pb-4">
      <Transition name="slide-down" appear>
        <nav
          v-if="(y >= height && height !== Infinity) || !isMediumScreen"
          class="bg-glass p-2 text-slate-100 sticky md:fixed top-0 w-full z-10 flex items-center justify-between transition-all duration-500 overflow-hidden"
          :style="`height: ${navbarHeight}px;`"
          :class="y >= height && height !== Infinity ? '' : 'md:hidden'"
        >
          <div />
          <Transition name="fade">
            <ul
              v-if="showMenu || isMediumScreen"
              class="text-center duration-300 md:space-y-0 items-center absolute left-1/2 -translate-x-1/2 w-max select-none"
              :class="showMenu ? 'space-y-2' : 'flex'"
            >
              <li
                class="px-4 py-2 cursor-pointer rounded-full"
                :class="tab === 1 ? 'bg-rose-400 border-rose-400' : ''"
                @click="setTab(1)"
              >
                About
              </li>
              <li
                class="px-4 py-2 cursor-pointer rounded-full"
                :class="tab === 2 ? 'bg-rose-400 border-rose-400' : ''"
                @click="setTab(2)"
              >
                Commission
              </li>
              <li
                class="px-4 py-2 cursor-pointer rounded-full"
                :class="tab === 3 ? 'bg-rose-400 border-rose-400' : ''"
                @click="setTab(3)"
              >
                Artworks
              </li>
            </ul>
          </Transition>
          <Icon
            v-if="!showMenu && !isMediumScreen"
            name="material-symbols:menu-rounded"
            class="text-4xl text-slate-100 hover:text-slate-800 hover:bg-slate-100 p-2 rounded-full duration-200"
            @click="showMenu = true"
          />
          <Icon
            v-if="showMenu && !isMediumScreen"
            name="material-symbols:close"
            class="text-4xl text-slate-100 hover:text-slate-800 hover:bg-slate-100 p-2 rounded-full duration-200"
            @click="showMenu = !showMenu"
          />
        </nav>
      </Transition>
      <div
        class="flex items-center min-h-[calc(100vh-5rem)] flex-col overflow-hidden md:pt-14"
      >
        <Transition
          :name="
            prevTab == -1 || !isMediumScreen
              ? 'slide-up'
              : tab > prevTab
              ? 'slide-left'
              : 'slide-right'
          "
          appear
          mode="out-in"
        >
          <TabAbout v-if="tab === 1" />
          <TabCommission v-else-if="tab === 2" />
          <TabArtworks v-else-if="tab === 3" />
          <TabBlank v-else-if="tab === -1" @is-intersecting="setTab(2)" />
        </Transition>
      </div>
    </div>
    <Transition name="fade">
      <FullImg v-if="name" />
    </Transition>
    <Transition name="slide" appear>
      <div
        v-if="y > height / 4"
        class="fixed bottom-4 right-4 p-4 text-4xl z-50 rounded-full text-slate-100 cursor-pointer bg-glass hover:text-rose-400 duration-500"
        @click="scrollToTop()"
      >
        <Icon name="material-symbols:keyboard-arrow-up-rounded" />
      </div>
    </Transition>
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

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease-in 0.1s;
}
.slide-left-enter-from {
  transform: translateX(100vw);
}
.slide-left-leave-to {
  transform: translateX(-100vw);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s ease-in 0.1s;
}
.slide-right-enter-from {
  transform: translateX(-100vw);
}
.slide-right-leave-to {
  transform: translateX(100vw);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-in 0.1s;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100vh);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(200%);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-200%);
}
</style>
