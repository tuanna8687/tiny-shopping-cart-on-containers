// Define a new component called todo-item
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
  });

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
});