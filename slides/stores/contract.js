import { ContractFactory } from 'ethers';
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
      try {
        console.log('ContractStore deploy');
        if (this.deployed) return;

        const store = useWalletStore();
        const signer = store.provider.getSigner();

        const factory = new ContractFactory(
          contractData.abi,
          contractData.byteCode,
          signer
        );

        // If your contract requires constructor args, you can specify them here

        const contract = await factory.deploy();

        await store.getBalance();

        const consoleStore = useConsoleStore();
        consoleStore.addMessage(
          `Smart Contract deployed at: ${contract.address}`
        );

        this.contract = contract;
        this.deployed = true;

        contract.on('newContractRegistered', async (id) => {
          consoleStore.addMessage(
            `newContractRegistered event received: ${id}`
          );
          
          const store = useWalletStore();
          await store.getBalance();
        });
      } catch (e) {
        // const toast = useToast();
        // toast.error(e.message, {
        //   timeout: 2000,
        // });

        const consoleStore = useConsoleStore();
        consoleStore.addMessage(
          `Smart Contract deploy error: ${e.message}`
        );
      }
    },
    async addContract(id, data) {
      try {
        await this.contract.addContract(id, data);

        const store = useWalletStore();
        await store.getBalance();

        const consoleStore = useConsoleStore();
        consoleStore.addMessage(`addContract: ${id} ${data}`);
      } catch (e) {        
        let message = e.message;
        if (e.data) {
          message = e.data.message.split('revert')[1].trim();
        }

        // const toast = useToast();
        // toast.error(message, {
        //   timeout: 2000,
        // });

        const consoleStore = useConsoleStore();
        consoleStore.addMessage(
          `addContract error: ${message}`
        );
      }
    },
    async getContract(id) {
      return await this.contract.getContractById(id);
    },
  },
});
