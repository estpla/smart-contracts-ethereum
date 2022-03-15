import { defineStore } from 'pinia';

export const useConsoleStore = defineStore('console', {
  state: () => {
    return {
      messages: [],
    };
  },
  actions: {
    addMessage(message) {
      this.messages.push(message);
    }
  },
});
