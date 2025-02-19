<template>
    <div class="relative">
        <NuxtImg format="webp" src="/images/nine.png" class="w-64 absolute rtl:left-0" />
        <div class="w-full text-center text-3xl mb-11 mt-24 lg:mt-32">
            <p>{{ $t("section3desc") }}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-center items-center w-full relative">
            <div class="w-full lg:w-1/2 text-center">
                <p class="w-full lg:w-[45%] ml-auto rtl:mr-auto text-2xl font-semibold">{{ $t("becomeseller") }}</p>
                <p class="mt-5 w-full lg:w-80 ml-auto rtl:mr-auto">{{ $t("becomesellerdesc") }}</p>
            </div>
            <div class="w-full lg:w-1/2">
                <NuxtImg format="webp" src="/images/twophone.png" class="w-full lg:w-[50rem]" />
            </div>
        </div>
    </div>
</template>