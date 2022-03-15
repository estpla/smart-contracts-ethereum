import { defineAppSetup } from '@slidev/types';
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineAppSetup(({ app }) => {
  app.use(createPinia());
  app.use(Toast, {});
});
