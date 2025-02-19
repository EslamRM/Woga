<template>
    <div>
        <!-- Section 2 Description -->
        <div class="w-full text-center text-3xl my-11 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <p>
                {{ $t("section2desc1") }} {{ $t("section2desc2") }}<span class="text-secondary">{{ $t("section2desc3")
                }}</span>
            </p>
        </div>

        <!-- Content -->
        <div class="flex flex-col justify-center items-center mt-12  w-full relative">
            <!-- Phone Image -->
            <div class="block lg:absolute top-0">
                <NuxtImg format="webp" src="/images/phone.png" class="w-full sm:w-[40rem]" />
            </div>

            <!-- Features -->
            <div class="flex flex-col lg:flex-row justify-center items-center w-full text-center mt-10">
                <!-- Feature 1 -->
                <div class="flex flex-col justify-around items-center w-full text-xl">
                    <div class="bg-gray-100 w-full py-5 mt-5">
                        <p>{{ $t("businessgrowth") }}</p>
                        <p class="text-sm">{{ $t("businessgrowthdesc") }}</p>
                    </div>
                    <div class="bg-[#77c36b1a] w-full py-5 mt-5">
                        <p>{{ $t("hirenew") }}</p>
                        <p class="text-sm">{{ $t("hirenewdesc") }}</p>
                    </div>
                    <div class="bg-gray-100 s w-full py-5 mt-5">
                        <p>{{ $t("manageaccount") }}</p>
                        <p class="text-sm">{{ $t("manageaccountdesc") }}</p>
                    </div>
                </div>
                <!-- Feature 3 -->
                <div class="flex flex-col justify-around items-center w-full text-xl">

                    <div class="bg-gray-100 w-full py-5 mt-5">
                        <p>{{ $t("trackingorder") }}</p>
                        <p class="text-sm">{{ $t("trackingorderdesc") }}</p>
                    </div>
                    <div class="bg-[#77c36b1a] w-full py-5 mt-5">
                        <p>{{ $t("automatedorder") }}</p>
                        <p class="text-sm">{{ $t("automatedorderdesc") }}</p>
                    </div>
                    <div class="bg-gray-100 w-full py-5 mt-5">
                        <p>{{ $t("quickreport") }}</p>
                        <p class="text-sm">{{ $t("quickreportdesc") }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  