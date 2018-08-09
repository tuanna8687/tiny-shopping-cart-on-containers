
//var Vue = require('vue/dist/vue.common');
var Vue = require('./Components/button-counter.component');
var componentA = require('./Components/component-a');

new Vue({
    el: '#vuecomponent',
    components: {
      'component-a': componentA
    }
});