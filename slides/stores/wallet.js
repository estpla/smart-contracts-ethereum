import { ethers } from 'ethers';
import numeral from 'numeral';
import { defineStore } from 'pinia';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const hideAddress = (address) => address.substr(0, 4) + '...' + address.slice(-5);

export const useWalletStore = defineStore('wallet', {
  state: () => {
    return {
      connected: false,
      provider: null,
      _network: '',
      _address: '',
      _balance: null,
    };
  },
  getters: {
    network: (state) =>
      state._network
        ? state._network === 'unknown'
          ? 'Test'
          : capitalize(state._network)
        : '',
    address: (state) =>
      state._address.length > 0
        ? hideAddress(state._address)
        : '',
    balance: (state) =>
      state._balance
        ? numeral(ethers.utils.formatEther(state._balance)).format('0.0000')
        : 0,
  },
  actions: {
    async connect() {
      this.provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

      this.provider.on('accountsChanged', (code, reason) => {
        console.log('accountChanged', code, reason);
      });

      this.provider.on('network', async (newNetwork, oldNetwork) => {
        if (!oldNetwork) return;

        if (!newNetwork) {
          this.clearInfo();
          return;
        }

        await this.setConnected(newNetwork);
      });

      // MetaMask requires requesting permission to connect users accounts
      await this.provider.send('eth_requestAccounts', []);
      const network = await this.provider.getNetwork();
      await this.setConnected(network);
    },
    disconnect() {
      if (!this.provider) return;

      this.provider.removeAllListeners();
      this.clearInfo();
    },
    async setConnected(network) {
      await this.getInfo(network);
      this.connected = true;
    },
    async getInfo(network) {
      if (!this.provider) return;

      this.setNetwork(network);
      await this.getAddress();
      await this.getBalance();
    },
    clearInfo() {
      this.connected = false;
      this.provider = null;
      this._network = '';
      this._address = '';
      this._balance = null;
    },
    setNetwork(network) {
      this._network = network.name;
    },
    async getAddress() {
      if (!this.provider) return;

      const signer = this.provider.getSigner();
      this._address = await signer.getAddress();
    },
    async getBalance() {
      if (!this.provider || !this._address) return;

      this._balance = await this.provider.getBalance(this._address);
    },
  },
});
