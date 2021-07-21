import { createApp } from 'vue';
import VueResize from '../src/index';
//@ts-ignore
import App from './App.vue';

const app = createApp(App);

app.use(VueResize).mount('#app');
