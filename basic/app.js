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
