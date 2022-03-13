<script setup lang="ts">
import { useContractStore } from "../stores/contract";
import { useWalletStore } from "../stores/wallet";

const contractStore = useContractStore();
const walletStore = useWalletStore();
</script>

<template>
  <div v-if="walletStore.connected && contractStore.deployed">
    <slot />
  </div>
</template>
