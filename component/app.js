Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function() {
      this.counter += 1
      this.$emit('increment')
    }
  }
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function() {
      this.total += 1
    }
  }
})

Vue.component('parent-com', {
  template: '<div><h1>parent title</h1><my-component><p>init content</p><p>more init content</p></my-component></div>',
})

Vue.component('my-component', {
  template: '<div><h2>child title</h2><slot>display only empty slot</slot></div>'
})

new Vue({
  el: '#component-slot',
})
