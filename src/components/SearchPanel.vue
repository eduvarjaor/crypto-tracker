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
                    placeholder="Enter token address"
                    v-model="searchInput"
                />
                <button
                    class="p-2 w-[20%] bg-blue-500 hover:bg-blue-600 text-white rounded-md duration-150 ease-in-out"
                    @click="searchToken"
                >
                    <i class="fa-solid fa-search"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import client from "../graphql/apollo-client";
import { gql } from "@apollo/client/core";

export default {
    data() {
        return {
            searchInput: "",
        };
    },
    methods: {
        async searchToken() {
            const GET_TRANSACTIONS = gql`
                query GetTransactions($address: String!) {
                    EVM(dataset: combined, network: eth) {
                        Transfers(
                            limit: { count: 20 }
                            where: {
                                Transfer: {
                                    Currency: {
                                        SmartContract: { is: $address }
                                    }
                                }
                            }
                        ) {
                            Block {
                                Hash
                                Time
                                Number
                            }
                            Transaction {
                                From
                                To
                                Hash
                                Value
                                Type
                            }
                            ChainId
                            Transfer {
                                Amount
                                Sender
                                Receiver
                                Currency {
                                    Symbol
                                    SmartContract
                                    Name
                                }
                            }
                        }
                    }
                }
            `;

            try {
                const response = await client.query({
                    query: GET_TRANSACTIONS,
                    variables: { address: this.searchInput },
                });

                const formattedTransactions = response.data.EVM.Transfers.map(
                    (transfer) => ({
                        hash: transfer.Transaction.Hash,
                        sender: transfer.Transfer.Sender,
                        receiver: transfer.Transfer.Receiver,
                        amount: transfer.Transaction.Value,
                        dateTime: this.formatDate(transfer.Block.Time),
                    })
                );

                this.$emit("transactionsUpdated", formattedTransactions);
            } catch (error) {
                console.error(error);
            }
        },
        formatDate(dateString) {
            return new Date(dateString).toLocaleString();
        },
    },
};
</script>
