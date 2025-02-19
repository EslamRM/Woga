<template>
  <div class="text-center">
    <div class="w-full text-3xl px-4 xl:px-32 mb-6">
      <p class="tracking-wide">
        {{ $t("section1desc1") }}
        <span class="text-secondary">{{ $t("section1desc2") }}</span>
        {{ $t("section1desc3") }}
      </p>
    </div>
    <div
      class="flex flex-col items-center gap-16 lg:flex-row justify-center mx-4 xl:mx-32"
    >
      <div class="w-full lg:w-1/3 xl:w-1/4 md:my-8">
        <div class="flex flex-col justify-between items-stretch">
          <p class="text-justify">{{ $t("paragraph") }}</p>
        </div>
      </div>
      <div
        class="w-full lg:w-1/2 relative border-4 border-[#45494C] rounded-[20px] p-3"
      >
        <Video />
        <div
          class="w-24 h-24 bg-secondary rounded-full absolute -top-[30px] -right-[30px]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Add your script logic here
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
