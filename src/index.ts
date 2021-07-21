import { App } from 'vue';
import VueResize from './resize/VueResize.vue';

const install = (app: App) => {
    app.component('VueResize', VueResize);
};

export { VueResize };

export default Object.assign(VueResize, { install });
