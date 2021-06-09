import { createApp } from 'vue'
import { createStore } from 'vuex';
import VCalendar from 'v-calendar';
import App from './App.vue'
import storeConfig from './store';
import router from './router'

const store = createStore(storeConfig);

createApp(App)
    .use(router)
    .use(store)
    .use(VCalendar, {})
    .mount('#app');
