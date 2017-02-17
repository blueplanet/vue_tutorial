var myMixin = {
  created: function() {
    this.hello()
  },
  methods: {
    hello: function() {
      console.log('hello, from mixin!!!')
    }
  }
}

var Component = Vue.extend({
  mixins: [myMixin],
  methods: {
    hello: function() {
      console.log('overwrite with component...........')
    }
  }
})

var component = new Component({
  created: function() {
    console.log('from component !!!!!!!!!!!!!!!!')
  }
})
