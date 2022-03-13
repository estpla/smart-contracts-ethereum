import { ContractFactory, ethers } from 'ethers';
import { defineStore } from 'pinia';
import { contractData } from '../contracts/contract';
import { useWalletStore } from './wallet';

export const useContractStore = defineStore('contract', {
  state: () => {
    return {
      contract: null,
      deployed: false,
      events: [],
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
      console.log('contract deployed', contract);

      this.contract = contract;
      this.deployed = true;

      contract.on('newContractRegistered', (id) => {
        console.log('newContractRegistered', id);
        this.events.push(id);
      });
    },
    async addContract(id, data) {
      console.log('addContract', id, data);
      await this.contract.addContract(id, data);
    },
    async getContract(id) {
      return await this.contract.getContractById(id);
    },
  },
});
