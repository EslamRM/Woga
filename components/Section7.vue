<template>
    <div class="relative">
        <div class="w-full text-center text-3xl mb-11 -mt-24">
            <p>{{ $t("section7title") }}<span class="text-secondary">{{ $t("section7title2")
            }}</span></p>
        </div>
        <NuxtImg format="webp" src="/images/Intersection3.png" class="w-72 absolute right-0" />
        <NuxtImg format="webp" src="/images/Intersection5.png" class="w-72 absolute left-0 bottom-0" />
        <div class="flex flex-col lg:flex-row justify-center items-center w-full relative">
            <div class="w-full lg:w-1/2">
                <NuxtImg format="webp" src="/images/wg.png" class="w-full lg:w-[40rem]" />
            </div>
            <div class="w-full lg:w-1/3 flex flex-col items-center justify-center">
                <div>
                    <SvgGoogleplay />
                </div>
                <div>
                    <SvgAppStore />
                </div>
            </div>
        </div>
    </div>
</template>