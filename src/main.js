const Vue = require('vue')
const VueRouter = require('vue-router')

const App = require('./app.vue')
const routes = require('./routes')

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
	router,
  el: '#app',
	render: function(createElement) {
		return createElement(App)
	}
})

// How to incorporate Font Awesome into BS4
// http://stackoverflow.com/questions/32612690/bootstrap-4-glyphicons-migration