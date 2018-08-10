var Vue = require('vue/dist/vue.common');

Vue.component('blog-post', {
    props: ['post'],
    template: `<div class="blog-post">
                    <h3>{{ post.title }}</h3>
                    <button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
                    <div v-html="post.content"></div>
                </div>`
});