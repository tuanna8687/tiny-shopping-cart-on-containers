
var Vue = require('vue/dist/vue.common');
var componentA = require('./componentA');

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

new Vue({
    el: '#vuecomponent',
    components: {
      'component-a': componentA
    }
});
// debugger;
// Vue.component('component-a', {
//     props: ['name'],
//     template: '<h1>Hello {{name}}. I\'m Vue</h1>'
// });

// new Vue({ el: '#vuecomponent' });
