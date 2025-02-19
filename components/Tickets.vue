<template>
    <div class="mx-0  md:mx-11 lg:mx-24">
        <div class="w-full text-center text-3xl my-11">
            <p>{{ $t('tickets2') }} <span class="text-secondary">{{ $t('tickets') }}</span></p>
        </div>
        <div class="grid grid-cols-4 xl:grid-cols-8 text-center gap-3 text-sm">
            <div class="border border-gray-200 p-5 rounded-lg shadow-inner">
                <div class="text-3xl text-secondary font-bold">
                    {{ counts.Quotations ? counts.Quotations : "0" }}
                </div>
                <div>{{ $t('quotations') }}</div>
            </div>
            <div class="border border-gray-200 p-5 rounded-lg shadow-inner">
                <div class="text-3xl text-secondary font-bold">
                    {{ counts.SalesOrders ? counts.SalesOrders : "0" }}
                </div>
                <div>{{ $t('salesorders') }}</div>
            </div>
            <div class="border border-gray-200 p-5 rounded-lg shadow-inner">
                <div class="text-3xl text-secondary font-bold">
                    {{ counts.PurchaseOrders ? counts.PurchaseOrders : "0" }}
                </div>
                <div>{{ $t('purchaseorders') }}</div>
            </div>
            <div class="border border-gray-200 p-5 rounded-lg shadow-inner">
                <div class="text-3xl text-secondary font-bold">
                    {{ counts.Invoices ? counts.Invoices : "0" }}
                </div>
                <div>{{ $t('invoices') }}</div>
            </div>
            <div class="border border-gray-200 p-5 rounded-lg shadow-inner">
                <div class="text-3xl text-secondary font-bold">
                    {{ counts.Projects ? counts.Projects : "0" }}
                </div>
                <div>{{ $t('projects') }}</div>
            </div>
            <div class="border border-gray-200 p-5 rounded-lg shadow-inner">
                <div class="text-3xl text-secondary font-bold">
                    {{ counts.Tasks ? counts.Tasks : "0" }}
                </div>
                <div>{{ $t('tasks') }}</div>
            </div>
            <div class="border border-gray-200 p-5 rounded-lg shadow-inner">
                <div class="text-3xl text-secondary font-bold">
                    {{ counts.Tickets ? counts.Tickets : "0" }}
                </div>
                <div>{{ $t('tickets') }}</div>
            </div>
            <div class="border border-gray-200 p-5 rounded-lg shadow-inner">
                <div class="text-3xl text-secondary font-bold">
                    {{ counts.Subscriptions ? counts.Subscriptions : "0" }}
                </div>
                <div>{{ $t('subscriptions') }}</div>
            </div>
        </div>
        <div>
            <input :placeholder="$t('Search')" type="text" name="" id=""
                class="bg-gray-100 w-full sm:w-2/3 rounded-lg outline-none px-4 py-2 my-8">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="w-full rounded-lg px-4 mt-2 bg-white border border-gray-200">
                <select @change="getTickets('ordering=' + $event.target.value)" name="" id=""
                    class="w-full rounded-lg py-2.5 text-sm outline-none">
                    <option>{{ $t('sortby') }}</option>
                    <option value="Quotations">{{ $t('quotations') }}</option>
                    <option value="SalesOrders">{{ $t('salesorders') }}</option>
                    <option value="PurchaseOrders">{{ $t('purchaseorders') }}</option>
                    <option value="Invoices">{{ $t('invoices') }}</option>
                    <option value="Projects">{{ $t('projects') }}</option>
                    <option value="Tasks">{{ $t('tasks') }}</option>
                    <option value="Tickets">{{ $t('tickets') }}</option>
                    <option value="Subscriptions">{{ $t('subscriptions') }}</option>
                </select>
            </div>
            <div class="w-full rounded-lg px-4 mt-2 bg-white border border-gray-200">
                <select @change="getTickets('subject=' + $event.target.value)" name="" id=""
                    class="w-full rounded-lg py-2.5 text-sm outline-none">
                    <option>{{ $t('filterby') }}</option>
                    <option value="Quotations">{{ $t('quotations') }}</option>
                    <option value="SalesOrders">{{ $t('salesorders') }}</option>
                    <option value="PurchaseOrders">{{ $t('purchaseorders') }}</option>
                    <option value="Invoices">{{ $t('invoices') }}</option>
                    <option value="Projects">{{ $t('projects') }}</option>
                    <option value="Tasks">{{ $t('tasks') }}</option>
                    <option value="Tickets">{{ $t('tickets') }}</option>
                    <option value="Subscriptions">{{ $t('subscriptions') }}</option>
                </select>
            </div>
            <div class="w-full rounded-lg px-4 mt-2 bg-white border border-gray-200">
                <select @change="getTickets('ordering=' + $event.target.value)" name="" id=""
                    class="w-full rounded-lg py-2.5 text-sm outline-none">
                    <option>{{ $t('groupby') }}</option>
                    <option value="Quotations">{{ $t('quotations') }}</option>
                    <option value="SalesOrders">{{ $t('salesorders') }}</option>
                    <option value="PurchaseOrders">{{ $t('purchaseorders') }}</option>
                    <option value="Invoices">{{ $t('invoices') }}</option>
                    <option value="Projects">{{ $t('projects') }}</option>
                    <option value="Tasks">{{ $t('tasks') }}</option>
                    <option value="Tickets">{{ $t('tickets') }}</option>
                    <option value="Subscriptions">{{ $t('subscriptions') }}</option>
                </select>
            </div>
        </div>
        <Table :tickets="tickets" />
    </div>
</template>
<script>
import { mapState } from 'pinia';
import { authStore } from "~/store/auth";
export default {
    data() {
        return {
            tickets: null,
            counts: {},
        }
    },
    computed: {
        ...mapState(authStore, [
            'access',
            'refresh_token'
        ])
    },
    methods: {
        async getTickets(filter = "") {
            const config = useRuntimeConfig();
            const { refresh } = authStore()
            const baseURL = config.public.baseURL;
            const headers = new Headers()
            headers.append("Authorization", "Bearer " + this.access);
            try {
                const response = await fetch(baseURL + 'support/?' + filter, {
                    method: 'GET',
                    headers: headers
                });
                if (response.ok) {
                    const data = await response.json();
                    this.tickets = data;
                    this.updateCounts(data);
                } else if (response.status === 401 && this.refresh_token) {
                    await refresh();
                    await this.getTickets(filter);
                } else {
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },
        updateCounts(data) {
            this.tickets.forEach(el => {
                const key = el.subject;
                this.counts[key] = (this.counts[key] || 0) + 1;
            });
            console.log(this.counts);
        }

    },
    mounted() {
        this.getTickets()
    }
}
</script>