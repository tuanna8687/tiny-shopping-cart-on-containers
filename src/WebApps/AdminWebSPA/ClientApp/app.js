
var Vue = require('vue/dist/vue.common');
require('./Components/button-counter.component');
var componentA = require('./Components/component-a');
require('./Components/blog-post.component');

new Vue({
    el: '#vuecomponent',
    data: {
        posts: [
            { id: 1, title: 'Hello everyone'},
            { id: 2, title: 'I\'m Vue'},
            { id: 3, title: 'It\'s so difficult'}
        ],
        postFontSize: 1,
        latestPostId: 3
    },
    methods: {
        onEnlargeText: function(amount) {
            this.postFontSize = this.postFontSize + amount;
        },
        addNewPostHandler: function() {
            this.latestPostId++;
            this.posts.splice(1, 0, { id: this.latestPostId, title: 'Default post'});
        }
    },
    components: {
      'component-a': componentA
    }
});