import { ContractFactory, ethers } from 'ethers';
import { defineStore } from 'pinia';
import { contractData } from '../contracts/contract';
import { useConsoleStore } from './console';
import { useWalletStore } from './wallet';

export const useContractStore = defineStore('contract', {
  state: () => {
    return {
      contract: null,
      deployed: false,
    };
  },
  actions: {
    async deploy() {
      console.log('ContractStore deploy');
      if (this.deployed) return;

      const store = useWalletStore();
      const signer = store.provider.getSigner();

      const factory = new ContractFactory(contractData.abi, contractData.byteCode, signer);

      // If your contract requires constructor args, you can specify them here
      const contract = await factory.deploy();

      await store.getBalance();

      const consoleStore = useConsoleStore();
      consoleStore.addMessage(`Smart Contract deployed at: ${contract.address}`);

      this.contract = contract;
      this.deployed = true;

      contract.on('newContractRegistered', (id) => {
        consoleStore.addMessage(`newContractRegistered event received: ${id}`);
      });
    },
    async addContract(id, data) {
      await this.contract.addContract(id, data);

      const store = useWalletStore();
      await store.getBalance();

      const consoleStore = useConsoleStore();
      consoleStore.addMessage(`addContract: ${id} ${data}`);
    },
    async getContract(id) {
      return await this.contract.getContractById(id);
    },
  },
});
