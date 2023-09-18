<script setup>
import HeaderSection from "@/components/parts/HeaderSection.vue";
import { ref } from "vue";

const features = ref([
	{ icon: "ic-database.svg", label: "Data Stored" },
	{ icon: "ic-fingerprint.svg", label: "Fingerprint lock" },
	{ icon: "ic-bulb.svg", label: "Innovative Idea" },
	{ icon: "ic-lock.svg", label: "Password Protect" },
]);
</script>
<template>
	<section class="bg-[#fafafa] pt-[92px] pb-[123px]">
    <div class="container">
      <div class="flex flex-col items-center mb-[69px]">
        <HeaderSection label="Future of The Protem" className="text-center" />
        <div class="mt-[21px] mb-[23px]">
          <img src="@/assets/svgs/wavy-line.svg" alt="" />
        </div>
        <p class="text-grey max-w-[801px] text-sm md:text-[17px] leading-7 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit
          amet leo. Mauris feugiat erat tellus.
        </p>
      </div>

      <div class="grid md:grid-cols-2 justify-between gap-y-6 md:gap-y-[78px] gap-x-5 lg:gap-x-[109px]">
        <template v-for="(item, index) in features" :key="index">
          <div class="flex flex-row items-center gap-[22px]">
            <div class="p-[30px] bg-secondary">
              <img :src="`src/assets/svgs/${item.icon}`" class="md:w-[62px] md:h-[62px]" alt="" />
            </div>
            <div>
              <p class="mb-[11px] text-primary text-2xl font-bold font-nunito leading-[22px]">
                {{ item.label }}
              </p>
              <p class="max-w-[389px] md:leading-7 text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus
                bibendum in sit amet leo. Mauris feugiat erat tellus.
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
	</section>
</template>
