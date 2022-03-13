<script setup lang="ts">
import { useWalletStore } from "../stores/wallet";

const store = useWalletStore();
</script>

<template>
  <div class="wallet">
    <div v-if="!store.connected">
      <button
        @click="store.connect()"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Connect Wallet
      </button>
    </div>
    <div v-else @click="store.disconnect()">
      <div>
        {{ store.network }} - {{ store.address }} - {{ store.balance }} ETH
      </div>
    </div>
  </div>
</template>

<style scoped>
.wallet {
  text-align: right;
}
</style>
