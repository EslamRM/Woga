<template>
    <div class="relative">
        <div class="w-full text-center text-3xl my-11">
            <p>{{ $t("customersupport") }}<span class="text-secondary">{{ $t("support")
                    }}</span></p>
        </div>
        <div class="mb-6 bg-gray-100">
            <div class="mx-auto max-w-4xl py-8 px-6 relative">
                <p class="text-xl font-semibold text-center">{{ $t('submitticket') }}</p>
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
                            <input @change="name_valid = false" type='text' v-model="name" name="name"
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
                            <input @change="email_valid = false" type='email' v-model="email" name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                class="w-full rounded-lg py-2.5 px-4 mt-2 text-sm outline-none peer" />
                            <span v-if="email_valid"
                                class="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                {{ email_valid }}
                            </span>
                        </div>
                        <div class="mt-4">
                            <label class="text-sm flex justify-start items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 28.235">
                                    <g id="Group_35889" data-name="Group 35889" transform="translate(-836.5 -1379.904)">
                                        <path id="Fill_3" data-name="Fill 3"
                                            d="M21.612,9.912c-.637,0-1.482-.014-2.533-.014a4.71,4.71,0,0,1-4.672-4.71V.648A.643.643,0,0,0,13.769,0H6.3A6.337,6.337,0,0,0,0,6.366V21.577a6.625,6.625,0,0,0,6.592,6.658h11.12A6.319,6.319,0,0,0,24,21.885V10.547a.639.639,0,0,0-.639-.647c-.6,0-1.313.011-1.749.011"
                                            transform="translate(836.5 1379.904)" fill="#77c36b" opacity="0.4" />
                                        <path id="Fill_1" data-name="Fill 1"
                                            d="M1.159.208A.674.674,0,0,0,0,.68V4.4A2.861,2.861,0,0,0,2.848,7.249c.984.011,2.351.014,3.511.011a.673.673,0,0,0,.484-1.141C5.353,4.571,2.687,1.795,1.159.208"
                                            transform="translate(853.106 1380.497)" fill="#77c36b" opacity="0.4" />
                                        <path id="Combined_Shape" data-name="Combined Shape"
                                            d="M1.051,9.153a1.051,1.051,0,0,1,0-2.1H8.737a1.051,1.051,0,0,1,0,2.1Zm0-7.052a1.051,1.051,0,1,1,0-2.1H5.829a1.051,1.051,0,1,1,0,2.1Z"
                                            transform="translate(843.177 1391.055)" fill="#77c36b" />
                                    </g>
                                </svg>
                                <span>{{ $t('subject') }}</span>
                            </label>
                            <div class="w-full rounded-lg px-4 mt-2 bg-white">
                                <select @change="subject_valid = false" v-model="subject" name="subject" id=""
                                    class="w-full rounded-lg py-2.5 text-sm outline-none">
                                    <option value="Quotations">{{ $t('quotations') }}</option>
                                    <option value="SalesOrders">{{ $t('salesorders') }}</option>
                                    <option value="PurchaseOrders">{{ $t('purchaseorders') }}</option>
                                    <option value="Invoices">{{ $t('invoices') }}</option>
                                    <option value="Projects">{{ $t('projects') }}</option>
                                    <option value="Tasks">{{ $t('tasks') }}</option>
                                    <option value="Tickets">{{ $t('tickets') }}</option>
                                    <option value="Subscriptions">{{ $t('subscriptions') }}</option>
                                </select>

                            </div><span v-if="subject_valid"
                                class="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                {{ subject_valid }}
                            </span>
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
                                <span>{{ $t('desc') }}</span>
                            </label>
                            <textarea @change="desc_valid = false" v-model="description" rows="10" name="description"
                                class="w-full rounded-lg px-4 mt-2 text-sm pt-3 outline-none"></textarea>
                            <span v-if="desc_valid"
                                class="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                {{ desc_valid }}
                            </span>
                        </div>
                        <div class="mt-5 flex items-center justify-between">
                            <span>{{ $t('attach') }}</span>
                            <span v-if="attachment">{{ attachment.name }}</span>
                            <label for="uploadFile1"
                                class="cursor-pointer bg-white text-secondary border border-secondary rounded-full text-sm px-6 py-3">
                                {{ $t('upload') }}
                                <input type="file" id='uploadFile1' class="hidden" @change="onFileChange" />
                            </label>
                        </div>
                        <div class="mt-5 flex justify-end">
                            <button @click.prevent="useSupport"
                                class="text-white bg-secondary rounded-full text-sm px-6 py-3">
                                {{ $t('submit') }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-around px-11 mb-8 mt-5">
            <div>
                <p>{{ $t('suppdesc1') }}</p>
                <p>{{ $t('suppdesc4') }}</p>
            </div>
            <div class="flex items-center justify-center mt-5 lg:mt-0">
                <NuxtLinkLocale to="/tickets">
                    <button type='button' class="text-white bg-secondary rounded-full text-sm px-6 py-3">
                        {{ $t('viewtickts') }}
                    </button>
                </NuxtLinkLocale>
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
            subject: "",
            description: "",
            attachment: "",
            name_valid: false,
            email_valid: false,
            subject_valid: false,
            desc_valid: false,
            showNotification: false,
            notificationTitle: "",
            notificationDesc: "",
            notificationColor: "",
            notificationDuration: 3000
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
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return;
            }
            this.attachment = files[0];
        },
        async useSupport() {
            const config = useRuntimeConfig();
            const baseURL = config.public.baseURL;
            const { refresh } = authStore()
            const headers = new Headers()
            headers.append("Authorization", "Bearer " + this.access);
            const formdata = new FormData()
            formdata.append("name", this.name)
            formdata.append("email", this.email)
            formdata.append("description", this.description)
            formdata.append("subject", this.subject)
            formdata.append("attachment", this.attachment)
            try {
                const response = await fetch(baseURL + 'support/', {
                    method: 'POST',
                    headers: headers,
                    body: formdata
                });
                const data = await response.json();
                if (data.code === 'token_not_valid' && this.refresh_token) {
                    await refresh();
                    const newResponse = await fetch(baseURL + 'support/', {
                        method: 'POST',
                        headers: headers,
                        body: formdata
                    });
                    const newData = await newResponse.json();
                    if (newData.success) {
                        this.$router.push({ path: this.localePath('tickets') });
                    } else {
                        data.email ? this.email_valid = data.email[0] : "";
                        data.name ? this.name_valid = data.name[0] : "";
                        data.subject ? this.subject_valid = data.subject[0] : "";
                        data.description ? this.desc_valid = data.description[0] : "";
                    }
                } else {
                    if (data.success) {
                        this.$router.push({ path: this.localePath('tickets') });
                    } else {
                        data.email ? this.email_valid = data.email[0] : "";
                        data.name ? this.name_valid = data.name[0] : "";
                        data.subject ? this.subject_valid = data.subject[0] : "";
                        data.description ? this.desc_valid = data.description[0] : "";
                    }
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },
    }
}
</script>