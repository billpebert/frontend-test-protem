<script setup>
import {RouterLink} from 'vue-router'
import HeaderSection from '@/components/parts/HeaderSection.vue';
</script>
<template>
  <section class="container bg-white py-[150px]">
    <div class="grid md:grid-cols-2 gap-x-5 gap-y-10">
      <div class="flex flex-col">
        <HeaderSection label="About The Protem"/>
        <div class="mt-[21px] mb-[23px]">
          <img src="@/assets/svgs/wavy-line.svg" alt="">
        </div>
        <p class="max-w-[596px] !leading-7 text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed dui mollis, finibus odio eget, cursus nibh. Ut accumsan, ipsum a hendrerit tempor, ex tortor consectetur tortor, at viverra leo enim at tortor. Mauris tristique purus purus, sit amet tempor lacus suscipit at. Quisque tristique orci magna, vitae tincidunt lacus maximus vitae. Lorem ipsum dolor sit amet, consectetur. 
        </p>
        <ul class="flex flex-col gap-4 mt-8 mb-9">
          <li class="flex items-center gap-3">
            <img src="@/assets/svgs/ic-check.svg" alt="">
            <p class="text-grey !leading-7">
              Nunc quis justo sed odio scelerisque.
            </p>
          </li>
          <li class="flex items-center gap-3">
            <img src="@/assets/svgs/ic-check.svg" alt="">
            <p class="text-grey !leading-7">
              Duis tristique lorem non risus dignissim.
            </p>
          </li>
        </ul>
        <div>
          <RouterLink to="/" class="btn-secondary">
            Learn More
          </RouterLink>
        </div>
      </div>
      <div>
        <img src="@/assets/anmt-dt.gif" class="max-w-[674] w-full" alt="">
      </div>
    </div>
  </section>
</template>