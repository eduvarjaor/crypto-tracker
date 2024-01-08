<template>
    <div class="bg-slate-100 min-h-[100vh]">
        <Header />
        <SearchPanel />
    </div>
</template>

<script>
import Header from "./src/components/Header.vue";
import SearchPanel from "./src/components/SearchPanel.vue";

export default {
    components: {
        Header,
        SearchPanel,
    },
};
</script>
