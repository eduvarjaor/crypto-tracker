<template>
    <div class="p-5">
        <div v-if="loading" class="loading-animation">
            <span class="ml-2">Loading...</span>
        </div>
        <div v-else class="overflow-x-auto rounded-lg shadow-md">
            <table class="min-w-full text-sm divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th
                            class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Transaction Hash
                        </th>
                        <th
                            class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Sender
                        </th>
                        <th
                            class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Receiver
                        </th>
                        <th
                            class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Amount
                        </th>
                        <th
                            class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Date/Time
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr
                        v-for="transaction in transactions"
                        :key="transaction.hash"
                    >
                        <td class="px-6 py-4 whitespace-nowrap">
                            {{ transaction.hash }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            {{ transaction.sender }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            {{ transaction.receiver }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            {{ transaction.amount }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            {{ transaction.dateTime }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ["transactions", "loading"],
};
</script>

<style>
.loading-animation {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}

.loading-animation::before {
    content: "";
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: #3498db;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
