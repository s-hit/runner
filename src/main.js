// Vue
import { createApp } from 'vue'
import App from './App.vue'

// Element +
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// LeanCloud
import AV from 'leancloud-storage';
AV.init({
    appId: 'EK27oracrqWzxLAcfhGIMOST-MdYXbMMI',
    appKey: 'gWA7jWpfJzUM9dzLjc56bwFC'
});

createApp(App).use(ElementPlus).mount('#app')
