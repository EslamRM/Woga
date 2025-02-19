<template>
    <div class="relative">
        <div class="w-full text-center text-3xl my-11">
            <p>{{ $t("contactus1") }}<span class="text-secondary">{{ $t("contactus2")
                    }}</span></p>
        </div>
        <div class="mb-6 bg-gray-100">
            <div class="mx-auto max-w-4xl py-8 px-6 relative">
                <form class="mt-8 grid sm:grid-cols-2 gap-11">
                    <div>
                        <div>
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
                                <span>{{ $t('name') }}</span>
                            </label>
                            <input @change="name_valid = false" v-model="name" type='text'
                                class="w-full rounded-lg py-2.5 px-4 mt-2 text-sm outline-none" />
                            <span v-if="name_valid"
                                class="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                {{ name_valid }}
                            </span>
                        </div>
                        <div class="mt-4">
                            <label class="text-sm flex justify-start items-center gap-2">
                                <svg id="Group_35862" data-name="Group 35862" xmlns="http://www.w3.org/2000/svg"
                                    width="18" height="18" viewBox="0 0 26 23.401">
                                    <path id="Fill_1" data-name="Fill 1"
                                        d="M26,9.286a6.561,6.561,0,0,1-6.539,6.578H6.565A6.561,6.561,0,0,1,0,9.312V9.3S.008,3.545.018.651a.648.648,0,0,1,1.05-.51C4.157,2.592,9.681,7.06,9.75,7.119a5.287,5.287,0,0,0,3.289,1.157A5.217,5.217,0,0,0,16.328,7.1c.069-.045,5.469-4.38,8.6-6.87a.65.65,0,0,1,1.054.507C26,3.613,26,9.286,26,9.286"
                                        transform="translate(0 7.537)" fill="#77c36b" opacity="0.4" />
                                    <path id="Fill_4" data-name="Fill 4"
                                        d="M24.665,3.476A6.546,6.546,0,0,0,18.885,0H5.911A6.546,6.546,0,0,0,.131,3.476a1.123,1.123,0,0,0,.287,1.4L10.071,12.6a3.674,3.674,0,0,0,2.314.818h.026a3.674,3.674,0,0,0,2.314-.818l9.652-7.721a1.123,1.123,0,0,0,.287-1.4"
                                        transform="translate(0.654)" fill="#77c36b" />
                                </svg>
                                <span>{{ $t('email') }}</span>
                            </label>
                            <input @change="email_valid = false" v-model="email" type='email'
                                class="w-full rounded-lg py-2.5 px-4 mt-2 text-sm outline-none" />
                            <span v-if="email_valid"
                                class="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                {{ email_valid }}
                            </span>
                        </div>
                        <div class="mt-4">
                            <label class="text-sm flex justify-start items-center gap-2">
                                <svg id="Call" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 26 26">
                                    <path id="Call-2" data-name="Call"
                                        d="M21.017,16.093a2.963,2.963,0,0,0-2.176.572c-.626.365-1.818,1.331-2.5,1.084A15.511,15.511,0,0,1,8.135,9.74c-.251-.7.711-1.9,1.073-2.53A3.036,3.036,0,0,0,9.775,5.02C9.611,4.229,7.495,1.536,6.746.8A2.486,2.486,0,0,0,5.228,0C3.276-.082,1.1,2.522.714,3.145c-.958,1.328-.952,3.1.016,5.239C3.064,14.142,11.892,22.83,17.67,25.251A6.983,6.983,0,0,0,20.588,26a3.794,3.794,0,0,0,2.276-.714C23.359,25,26.07,22.713,26,20.709a2.523,2.523,0,0,0-.79-1.516c-.731-.755-3.407-2.935-4.192-3.1"
                                        transform="translate(0 0)" fill="#77c36b" />
                                </svg>
                                <span>{{ $t('phonenumber') }}</span>
                            </label>
                            <input @change="phone_number_valid = false" v-model="phone_number" type='tel'
                                class="w-full rounded-lg py-2.5 px-4 mt-2 text-sm outline-none" />
                            <span v-if="phone_number_valid"
                                class="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                {{ phone_number_valid }}
                            </span>
                        </div>
                        <div class="mt-4">
                            <label class="text-sm flex justify-start items-center gap-2">
                                <svg id="Work" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 25.987 25.737">
                                    <path id="Fill_1" data-name="Fill 1"
                                        d="M0,0C.065,3.039.247,8.238.273,8.811A6.046,6.046,0,0,0,1.565,12.15,4.8,4.8,0,0,0,5.58,13.923c2.413.013,5.073.013,7.656.013s5.11,0,7.236-.013a4.853,4.853,0,0,0,4.016-1.773,5.869,5.869,0,0,0,1.266-3.338c.026-.482.156-6.126.234-8.811Z"
                                        transform="translate(0 11.802)" fill="#77c36b" opacity="0.4" />
                                    <path id="Fill_4" data-name="Fill 4"
                                        d="M0,.975V2.657a.975.975,0,1,0,1.95,0V.975A.975.975,0,1,0,0,.975"
                                        transform="translate(12.019 16.424)" fill="#77c36b" />
                                    <path id="Fill_6" data-name="Fill 6"
                                        d="M16.215,17.052a.974.974,0,0,1-.945-.734,2.344,2.344,0,0,0-2.283-1.76,2.374,2.374,0,0,0-2.313,1.764.981.981,0,0,1-.944.718,1.018,1.018,0,0,1-.132-.009A22.306,22.306,0,0,1,.438,13.626.972.972,0,0,1,0,12.811V8.306a4.962,4.962,0,0,1,4.962-4.95H7.52A3.847,3.847,0,0,1,11.315,0h3.357a3.845,3.845,0,0,1,3.8,3.356h2.57a4.955,4.955,0,0,1,4.949,4.95v4.506a.978.978,0,0,1-.436.814,22.286,22.286,0,0,1-9.2,3.418A1.04,1.04,0,0,1,16.215,17.052Zm-4.9-15.1A1.9,1.9,0,0,0,9.491,3.356h7A1.9,1.9,0,0,0,14.672,1.95Z"
                                        transform="translate(0 0)" fill="#77c36b" />
                                </svg>
                                <span>{{ $t('company') }}</span>
                            </label>
                            <input v-model="company" type='text'
                                class="w-full rounded-lg py-2.5 px-4 mt-2 text-sm outline-none" />
                        </div>
                    </div>
                    <div>
                        <div class="">
                            <label class="text-sm flex justify-start items-center gap-2">
                                <svg id="Chat" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 26 25.961">
                                    <path id="Fill_1" data-name="Fill 1"
                                        d="M13.026,0A13,13,0,0,0,0,13a13.728,13.728,0,0,0,1.755,6.487,1.359,1.359,0,0,1,.091,1.17L.975,23.569a.811.811,0,0,0,1.066,1.014l2.626-.78a2.216,2.216,0,0,1,1.938.468A12.982,12.982,0,1,0,13.026,0"
                                        fill="#77c36b" opacity="0.4" />
                                    <path id="Combined_Shape" data-name="Combined Shape"
                                        d="M11.987,1.664A1.664,1.664,0,1,1,13.65,3.329,1.658,1.658,0,0,1,11.987,1.664ZM5.994,1.651A1.664,1.664,0,1,1,7.658,3.329,1.679,1.679,0,0,1,5.994,1.651ZM0,1.664a1.664,1.664,0,0,1,3.327,0A1.677,1.677,0,0,1,1.664,3.329,1.676,1.676,0,0,1,0,1.664Z"
                                        transform="translate(5.317 11.349)" fill="#77c36b" />
                                </svg>
                                <span>{{ $t('message') }}</span>
                            </label>
                            <textarea @change="message_valid = false" v-model="message" rows="10"
                                class="w-full rounded-lg px-4 mt-2 text-sm pt-3 outline-none"></textarea>
                            <span v-if="message_valid"
                                class="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                {{ message_valid }}
                            </span>
                        </div>
                        <button @click.prevent="useContact"
                            class="mt-8 text-white bg-secondary rounded-full text-sm px-6 py-3">
                            {{ $t('submit') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
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
            name: "",
            email: "",
            message: "",
            company: "",
            phone_number: "",
            name_valid: false,
            email_valid: false,
            message_valid: false,
            showNotification: false,
            phone_number_valid: false,
            notificationTitle: "",
            notificationDesc: "",
            notificationColor: "",
            notificationDuration: 5000
        }
    },
    computed: {
        ...mapState(authStore, [
            'access',
            'refresh_token'
        ])
    },
    methods: {
        showNotify(title, desc, color) {
            this.notificationTitle = title;
            this.notificationDesc = desc;
            this.notificationColor = color;
            this.showNotification = true;
            setTimeout(() => {
                this.showNotification = false;
            }, this.notificationDuration);
        },
        showSuccess(message = "Operation completed successfully") {
            this.showNotify("Success", message, "success");
        },
        showError() {
            this.showNotify("Error", this.non_field_errors ? this.non_field_errors : "An error occurred", "error");
        },
        async useContact() {
            const config = useRuntimeConfig();
            const baseURL = config.public.baseURL;
            const { refresh } = authStore()
            const headers = new Headers()
            headers.append("Authorization", "Bearer " + this.access);
            const formdata = new FormData()
            formdata.append("name", this.name)
            formdata.append("email", this.email)
            formdata.append("message", this.message)
            formdata.append("company", this.company)
            formdata.append("phone_number", this.phone_number)
            try {
                const response = await fetch(baseURL + 'contact/', {
                    method: 'POST',
                    headers: headers,
                    body: formdata
                });
                const data = await response.json();
                if (data.code === 'token_not_valid' && this.refresh_token) {
                    await refresh();
                    const newResponse = await fetch(baseURL + 'contact/', {
                        method: 'POST',
                        headers: headers,
                        body: formdata
                    });
                    const newData = await newResponse.json();
                    if (newData.success) {
                        this.showSuccess("Message Received, We Will Contact Soon!")
                        this.email = ""
                        this.name = ""
                        this.company = ""
                        this.phone_number = ""
                        this.message = ""
                    } else {
                        data.email ? this.email_valid = data.email[0] : "";
                        data.name ? this.name_valid = data.name[0] : "";
                        data.message ? this.message_valid = data.message[0] : "";
                        data.phone_number ? this.phone_number_valid = data.phone_number[0] : "";
                    }
                } else {
                    if (data.success) {
                        this.showSuccess("Message Received, We Will Contact Soon!")
                        this.email = ""
                        this.name = ""
                        this.company = ""
                        this.phone_number = ""
                        this.message = ""
                    } else {
                        data.email ? this.email_valid = data.email[0] : "";
                        data.name ? this.name_valid = data.name[0] : "";
                        data.message ? this.message_valid = data.message[0] : "";
                        data.phone_number ? this.phone_number_valid = data.phone_number[0] : "";
                    }
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },
    }
}
</script>