<template>
    <div class="relative lg:h-[600px] overflow-hidden">
        <div class="flex flex-col lg:flex-row justify-center items-center w-full relative my-32">
            <div class="flex flex-col items-center justify-start">
                <div class="text-center">
                    <p class="w-full lg:w-1/2 text-2xl font-semibold rtl:mr-auto">{{ $t("loadinginv") }}</p>
                    <p class="mt-5 w-full lg:w-1/2 rtl:mr-auto">{{ $t("loadinginvdesc") }}</p>
                </div>
                <NuxtImg format="webp" src="/images/group3.png"
                    class="w-full hidden lg:block absolute md:top-0 xl:-top-10 -right-10" />

            </div>
            <div class="block lg:absolute right-20">
                <NuxtImg format="webp" src="/images/midimg.png" class="block lg:hidden w-full lg:w-[44rem]" />
                <!-- <NuxtImg format="webp" src="/images/phone1.png" class="hidden lg:block w-full lg:w-[44rem]" /> -->
            </div>
        </div>
    </div>
</template>