<template>
    <div class="bg-white mt-5 h-[16vh] p-5 m-5 rounded-xl shadow-md">
        <div class="flex flex-col items-center justify-center">
            <label for="tokenSearch" class="mb-2 text-lg font-medium"
                >Search a Token</label
            >
            <div class="space-x-2 w-[20%] flex justify-center">
                <input
                    type="text"
                    id="tokenSearch"
                    class="p-2 border rounded-md outline-none"
                    placeholder="Enter token name or address..."
                />
                <button
                    class="p-2 w-[20%] bg-blue-500 hover:bg-blue-600 text-white rounded-md duration-150 ease-in-out"
                >
                    <i class="fa-solid fa-search"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script></script>
