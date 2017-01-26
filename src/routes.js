const ApplicationBar = require('./components/application-bar.vue')
const ClassificationBar = require('./components/classification-bar.vue')
const FacetGroup = require('./components/facet-group.vue')
const InfoPanel = require('./components/info-panel.vue')
const InfoPanelList = require('./components/info-panel-list.vue')
const NavigationBar = require('./components/navigation-bar.vue')
const PersonDetail = require('./components/person-detail.vue')
const PersonList = require('./components/person-list.vue')
const PersonListItem = require('./components/person-list-item.vue')
const PositionDetail = require('./components/position-detail.vue')
const PositionDetailList = require('./components/position-detail-list.vue')
const PositionList = require('./components/position-list.vue')
const PositionListItem = require('./components/position-list-item.vue')
const TableOfContentsNavigation = require('./components/table-contents-navigation.vue')
const UserBar = require('./components/user-bar.vue')
const MatchBar = require('./components/match-bar.vue')
const MetaBar = require('./components/meta-bar.vue')
const Home = require('./components/home.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/application-bar', component: ApplicationBar },
  { path: '/classification-bar', component: ClassificationBar },
  { path: '/navigation-bar', component: NavigationBar },
  { path: '/user-bar', component: UserBar },
  { path: '/match-bar', component: MatchBar },
  { path: '/meta-bar', component: MetaBar },
  { path: '/table-contents-navigation', component: TableOfContentsNavigation },
  { path: '/info-panel-list', component: InfoPanelList },
  { path: '/info-panel', component: InfoPanel },
  { path: '/position-list', component: PositionList },
  { path: '/position-list-item', component: PositionListItem },
  { path: '/position-detail', component: PositionDetail },
  { path: '/position-detail-list', component: PositionDetailList },
  { path: '/facet-group', component: FacetGroup },
  { path: '/person-list', component: PersonList },
  { path: '/person-list-item', component: PersonListItem },
  { path: '/person-detail', component: PersonDetail }
]

module.exports = routes