<template>
    <div class="overflow-x-auto">
        <table class="table-auto w-full rounded-t-full my-11 text-left">
            <thead class="bg-[#333] text-white rounded-t-full">
                <tr>
                    <th class="px-4 py-2">{{ $t('ref') }}</th>
                    <th class="px-4 py-2">{{ $t('desc') }}</th>
                    <th class="px-4 py-2">{{ $t('subject') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in tickets" :key="index" :class="{ 'bg-gray-100': index % 2 !== 0 }">
                    <td class="border px-4 py-2">{{ index + 1 }}</td>
                    <td class="border px-4 py-2">{{ item.description }}</td>
                    <td class="border px-4 py-2">{{ item.subject }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
export default {
    props: {
        tickets: Array,
    },
};
</script>
  