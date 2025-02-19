<template>
    <div class="flex flex-col lg:flex-row gap-24 items-center justify-around my-32 py-11 relative">
        <NuxtImg format="webp" src="/images/Intersection 2.png" class="w-1/2 absolute right-0 -z-10" />
        <div class="flex flex-col justify-center items-start">
            <div class="mb-5 ">
                <p class="text-4xl font-semibold mb-2 text-[#45494C]">{{ $t("welecome") }}</p>
            </div>
            <SvgTitleSvg />
        </div>
        <form action="" method="post" class="flex flex-col items-start justify-center gap-3 w-[90%] md:w-1/3">
            <div class="w-full">
                <label class="text-sm flex justify-start items-center gap-2">
                    <svg id="Profile" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                        viewBox="0 0 20.792 25.999">
                        <path id="Fill_1" data-name="Fill 1"
                            d="M10.4,0C4.789,0,0,.884,0,4.42S4.759,8.872,10.4,8.872c5.607,0,10.4-.883,10.4-4.42S16.034,0,10.4,0"
                            transform="translate(0 17.127)" fill="#77c36b" />
                        <path id="Fill_4" data-name="Fill 4"
                            d="M6.88,13.759A6.88,6.88,0,1,0,0,6.88a6.855,6.855,0,0,0,6.88,6.88"
                            transform="translate(3.516 0)" fill="#77c36b" opacity="0.4" />
                    </svg>
                    <span>{{ $t('email') }}</span>
                </label>
                <input type='email' v-model="email" @input="restEmail"
                    class="w-full rounded-lg py-2.5 px-4 mt-2 text-sm outline-none border border-gray-400 bg-white" />
                <span v-if="email_valid"
                    class="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    {{ email_valid }}
                </span>
            </div>
            <div class="w-full">
                <label class="text-sm flex justify-start items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20.792 24.46">
                        <g id="Group_35892" data-name="Group 35892" transform="translate(-962.6 -428.904)">
                            <path id="Fill_1" data-name="Fill 1"
                                d="M15.571,16.249H5.221A5.17,5.17,0,0,1,0,11.144V5.106A5.17,5.17,0,0,1,5.221,0h10.35a5.17,5.17,0,0,1,5.221,5.106v6.037A5.17,5.17,0,0,1,15.571,16.249ZM10.39,5.712A1.071,1.071,0,0,0,9.309,6.769v2.7a1.087,1.087,0,0,0,2.174,0v-2.7A1.077,1.077,0,0,0,10.39,5.712Z"
                                transform="translate(962.6 437.115)" fill="#77c36b" />
                            <path id="Fill_4" data-name="Fill 4"
                                d="M13.509,6.6V8.4a5.079,5.079,0,0,0-1.367-.182h-.808V6.6A4.528,4.528,0,0,0,6.761,2.127,4.534,4.534,0,0,0,2.175,6.575V8.216h-.8A4.668,4.668,0,0,0,0,8.41V6.6A6.686,6.686,0,0,1,6.736,0a6.679,6.679,0,0,1,6.773,6.6"
                                transform="translate(966.241 428.904)" fill="#77c36b" opacity="0.4" />
                        </g>
                    </svg>
                    <span>{{ $t('password') }}</span>
                </label>
                <input type='password' v-model="password" @input="restPassword"
                    class="w-full rounded-lg py-2.5 px-4 mt-2 text-sm outline-none border border-gray-400 bg-white" />
                <span v-if="password1_valid"
                    class="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    {{ password1_valid }}
                </span>
            </div>
            <button @click.prevent="login" class="mt-8 text-white bg-secondary rounded-full text-sm px-6 py-3">
                {{ $t('login') }}
            </button>
            <p class="text-sm">{{ $t('youdonthaveaccount') }} <NuxtLinkLocale to="/register"><span
                        class="text-secondary">{{
                    $t("signup") }}</span></NuxtLinkLocale>
            </p>
        </form>
        <Notify v-if="showNotification" :title="notificationTitle" :description="notificationDesc"
            :color="notificationColor" :duration="notificationDuration" />
    </div>
</template>
<script>
import { mapState } from 'pinia';
import { authStore } from "~/store/auth";
export default {
    data() {
        return {
            email: "",
            password: "",
            showNotification: false,
            notificationTitle: "",
            notificationDesc: "",
            notificationColor: "",
            notificationDuration: 3000
        }
    },
    computed: {
        ...mapState(authStore, [
            'email_valid',
            'password1_valid',
            'non_field_errors',
            'details'
        ])
    },
    methods: {
        restEmail() {
            const { restEmail } = authStore()
            restEmail()
        },
        restPassword() {
            const { restPassword } = authStore()
            restPassword()
        },
        showNotify(title, desc, color) {
            this.notificationTitle = title;
            this.notificationDesc = desc;
            this.notificationColor = color;
            this.showNotification = true;
            setTimeout(() => {
                this.showNotification = false;
            }, this.notificationDuration);
        },
        showError() {
            this.showNotify("Error", this.non_field_errors || this.details ? this.non_field_errors || this.details : "An error occurred", "error");
        },
        showSuccess() {
            this.showNotify("Success", "Logged in Successfully", "success");
        },
        async login() {
            const { login } = authStore();
            const formdata = new FormData()
            formdata.append("username", this.email)
            formdata.append("password", this.password)
            await login(formdata, this.showError, this.showSuccess)
        },
    }
}
</script>