// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'

var questionBuilder = new Vue({
  el: '#question-builder',
  data: {
    questions: []
  },
  mounted: {
  }
})
