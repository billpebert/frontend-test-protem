<script setup>
  defineProps({
    className: String,
    label: String,
  })
</script>
<template>
  <p :class="className" class="font-nunito font-black text-primary text-4xl md:text-6xl leading-[78px]">
    {{ label }}
  </p>
</template>