<template>
    <div class="relative">
        <div class="w-full text-center text-3xl my-11">
            <p>{{ $t("subscribetitle") }}<span class="text-secondary">{{ $t("subscribetitle2")
            }}</span></p>
        </div>
        <div class="flex justify-center items-center w-full relative">
            <div class="flex flex-col lg:flex-row gap-5 justify-between items-center lg:rounded-full bg-[#77c36b1a] w-full lg:w-1/2 py-8 px-6 md:px-11">
                <input :placeholder="$t('emailaddress')" type="email" name="subscribe" id=""
                    class="px-8 py-3 rounded-full border-0 w-[90%] lg:w-full outline-none">
                <button type="button" class="px-4 py-3 rounded-full border-0 bg-secondary text-white">{{
                    $t("subscribebtn")
                }}</button>
            </div>
        </div>
    </div>
</template>