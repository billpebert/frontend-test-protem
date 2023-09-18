<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <section class="grid mx-auto lg:h-screen lg:grid-cols-2 max-w-screen-2xl">
    <div class="bg-primary">
      <div class="px-4 pb-14 lg:p-[100px] pt-[150px] lg:pr-0 h-full my-auto flex flex-col justify-center">
        <p class="font-nunito font-black text-5xl md:text-[72px] md:leading-[78px] mb-4 text-white">
          Let's Keep Your <br class="hidden md:block">
          Data Safe
        </p>
        <p class="mb-6 text-base font-semibold text-white max-w-[530px] leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus. Lorem ipsum dolor sit amet.
        </p>
        <div>
          <RouterLink to="/" class="btn-secondary">Know More</RouterLink>
        </div>
      </div>
    </div>
    <div class="bg-secondary px-4 py-14 md:p-[100px] md:pt-[150px]">
      <div>
        <img src="@/assets/images/protem-hero.webp" class="max-w-[674px] w-full" alt="">
      </div>
    </div>
  </section>
</template>