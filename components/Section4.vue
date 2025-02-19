<template>
    <div class="relative">
        <NuxtImg format="webp" src="/images/o.png" class="w-64 absolute right-0" />
        <div class="flex flex-col lg:flex-row justify-center items-center w-full relative">
            <div class="w-full lg:w-1/2 order-2 lg:order-1">
                <NuxtImg format="webp" src="/images/onephone.png" class="w-full lg:w-[50rem]" />
            </div>
            <div class="w-full lg:w-1/3 text-center order-1 lg:order-2 my-11 lg:my-0">
                <p class="w-full lg:w-3/5 mr-auto rtl:ml-auto text-2xl font-semibold">{{ $t("login") }}</p>
                <p class="mt-5 w-full lg:w-80 mr-auto rtl:ml-auto">{{ $t("logindesc") }}</p>
            </div>
        </div>
    </div>
</template>