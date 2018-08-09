var Vue = require('vue/dist/vue.common');

// Register a component at global
Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        };
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times</button>'
});

module.exports = Vue;