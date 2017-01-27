var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  }
})

var wvm = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot gifve you an answer until you ask a question!'
  },
  watch: {
    question: function(newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: _.debounce(
      function() {
        var vm = this
        if (this.question.indexOf('?') === -1) {
          vm.answer = 'Questions usually contain a question mark. ;-)'
          return
        }

        vm.answer = 'Thinking...'
        axios.get('https://yesno.wtf/api')
          .then(function(response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function(error) {
            vm.answer = 'Error! cound not reach the API: ' + error
          })
      },
      500
    )
  }
})

var classVm = new Vue({
  el: '#class-example',
  data: {
    isActive: true,
    hasError: false,
    activeClass: 'active',
    errorClass: 'text-danger',
    classObject: {
      active: true,
      'text-danger': false
    }
  },
  computed: {
    computedAttr: function() {
      return {
        active: this.isActive,
        'text-danger': this.hasError
      }
    }
  }
})

var ifCond = new Vue({
  el: '#if-cond',
  data: {
    showH1: true
  }
})


Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list',
  data: {
    newTodo: '',
    todos: [
      'task1',
      'task2',
      'task3'
    ]
  },
  methods: {
    addNewTodo: function() {
      this.todos.push(this.newTodo)
      this.newTodo = ''
    }
  }
})
