const Vue = require('vue')
const VueRouter = require('vue-router')

const App = require('./app.vue')

const ApplicationBar = require('./application-bar.vue')
const ClassificationBar = require('./classification-bar.vue')
const FacetGroup = require('./facet-group.vue')
const InfoPanel = require('./info-panel.vue')
const InfoPanelList = require('./info-panel-list.vue')
const NavigationBar = require('./navigation-bar.vue')
const PersonDetail = require('./person-detail.vue')
const PersonList = require('./person-list.vue')
const PersonListItem = require('./person-list-item.vue')
const PositionDetail = require('./position-detail.vue')
const PositionList = require('./position-list.vue')
const PositionListItem = require('./position-list-item.vue')
const TableOfContentsNavigation = require('./table-contents-navigation.vue')
const UserBar = require('./user-bar.vue')
const MatchBar = require('./match-bar.vue')
const MetaBar = require('./meta-bar.vue')
const Working = require('./working.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { 
    	path: '/',
      component: Working
    },
    {
      path: '/application-bar',
      component: ApplicationBar
    },
		{
			path: '/classification-bar',
			component: ClassificationBar
		},
		{
			path: '/navigation-bar',
			component: NavigationBar
		},
		{
			path: '/user-bar',
			component: UserBar
		},
		{
			path: '/match-bar',
			component: MatchBar
		},
		{
			path: '/meta-bar',
			component: MetaBar
		},
		{
    	path: '/table-contents-navigation',
      component: TableOfContentsNavigation
    },
		{
    	path: '/info-panel-list',
      component: InfoPanelList
    },
    {
    	path: '/info-panel',
      component: InfoPanel
    },
		 {
    	path: '/position-list',
      component: PositionList
    },
		 {
    	path: '/position-list-item',
      component: PositionListItem
    },
		 {
    	path: '/position-detail',
      component: PositionDetail
    },
		{
			path: '/facet-group',
			component: FacetGroup
		},
		{
			path: '/person-list',
			component: PersonList
		},
		{
			path: '/person-list-item',
			component: PersonListItem
		},
		{
			path: '/person-detail',
			component: PersonDetail
		}
  ]
})

new Vue({
	router: router,
  el: '#app',
	render: function(createElement) {
		return createElement(App)
	}
})

