<template>
    <div class="bg-slate-100 min-h-[100vh]">
        <Header />
        <SearchPanel />
        <TransactionDisplay />
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
};
</script>
