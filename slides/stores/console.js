import { defineStore } from 'pinia';

export const useConsoleStore = defineStore('console', {
  state: () => {
    return {
      messages: ['Line1', 'Line2', 'Line3'],
    };
  },
  actions: {
    addMessage(message) {
      this.messages.push(message);
    }
  },
});
