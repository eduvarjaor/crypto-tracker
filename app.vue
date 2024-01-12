<template>
    <div class="bg-slate-100 min-h-[100vh]">
        <Header />
        <SearchPanel
            @transactionsUpdated="updateTransactions"
            @updateLoading="handleLoading"
        />
        <TransactionDisplay :transactions="transactions" :loading="isLoading" />
    </div>
</template>

<script>
import Header from "./src/components/Header.vue";
import SearchPanel from "./src/components/SearchPanel.vue";
import TransactionDisplay from "./src/components/TransactionDisplay.vue";

export default {
    components: {
        Header,
        SearchPanel,
        TransactionDisplay,
    },
    data() {
        return {
            transactions: [],
            isLoading: false,
        };
    },
    methods: {
        updateTransactions(newTransactions) {
            this.transactions = newTransactions.reduce((acc, current) => {
                if (!acc.some((item) => item.hash === current.hash)) {
                    acc.push(current);
                }
                return acc;
            }, []);
        },
        handleLoading(isLoading) {
            this.isLoading = isLoading;
        },
    },
};
</script>
