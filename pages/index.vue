<template>
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
      <div class="my-4 border border-slate-100" />
      <div
        class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-center space-x-2"
      >
        <button @click="$router.push('/about')" class="btn">About Me</button>
        <button @click="$router.push('/portfolio')" class="btn">
          Portfolio
        </button>
        <button @click="$router.push('/commission')" class="btn">
          Commission
        </button>
        <button @click="$router.push('/oc')" class="btn">
          Original Characters
        </button>
      </div>
    </div>
  </div>
</template>
