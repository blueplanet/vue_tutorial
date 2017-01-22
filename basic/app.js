var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You load the page on ' + new Date()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'task1' },
      { text: 'task2' },
      { text: 'task3' },
      { text: 'task4' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'hello vue.js'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
