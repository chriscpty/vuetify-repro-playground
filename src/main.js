import {createApp} from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

const app = createApp(App);
app.use(vuetify)
    .use(router)
    .mount('#app');

app.config.errorHandler = function (err, instance, info) {
    console.log(err);
};
