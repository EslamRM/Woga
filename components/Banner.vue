<template>
    <div class="mx-4 md:mx-0 flex flex-col lg:flex-row justify-center items-center relative lg:-mt-16">
        <div class="flex flex-col justify-center items-center mt-24 lg:mt-0 ml-11">
            <div class="mb-5 text-center lg:text-left">
                <p class="text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-2 text-[#45494C] tracking-wider">{{ $t("title") }}</p>
                <p class="text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#45494C] tracking-wide">{{ $t("title2") }}<span class="text-secondary">{{
                    $t("success") }}</span> {{
        $t("title3") }}</p>
            </div>
            <SvgTitleSvg />
        </div>
        <figure class="w-full md:w-auto bg-[url('/images/banner-back.png')] bg-contain bg-no-repeat bg-right-bottom transform rtl:scale-x-[-1]">
            <NuxtImg format="webp" src="/images/banner-sm.png" class="w-full h-auto lg:h-full" />
        </figure>
    </div>
</template>
  
<script>
export default {
    name: 'Banner',
}
</script>
  