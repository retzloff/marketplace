<template>
  <div class='container-fluid'>
    <div class='row'>
      <div class='col-12'>
        <h1><router-link :to='{name: "home"}'>MTA Components</router-link></h1>
      </div>
    </div>

    <div class='row' id="app">
      <div class='col-3'>
        <ul class="list-group">
          <router-link to='/application-bar' tag='li' class='list-group-item justify-content-between'><a>Application Bar</a></router-link>
          <router-link to='/classification-bar' tag='li' class='list-group-item justify-content-between'><a>ClassificationBar</a><i class="fa fa-check"></i></router-link>
          <router-link to='/navigation-bar' tag='li' class='list-group-item justify-content-between'><a>NavigationBar</a></router-link>
          <router-link to='/user-bar' tag='li' class='list-group-item justify-content-between'><a>UserBar</a></router-link>
          <router-link to='/table-contents-navigation' tag='li' class='list-group-item justify-content-between'><a>TableOfContentsNavigation</a></router-link>
          <router-link to='/info-panel-list' tag='li' class='list-group-item justify-content-between'><a>InfoPanelList</a><i class="fa fa-check"></i></router-link>
          <router-link to='/info-panel' tag='li' class='list-group-item justify-content-between'><a>InfoPanel</a><i class="fa fa-check"></i></router-link>
          <router-link to='/position-list' tag='li' class='list-group-item justify-content-between'><a>PositionList</a><i class="fa fa-check"></i></router-link>
          <router-link to='/position-list-item' tag='li' class='list-group-item justify-content-between'><a>PositionListItem</a><i class="fa fa-check"></i></router-link>
          <router-link to='/position-detail' tag='li' class='list-group-item justify-content-between'><a>PositionDetail</a><i class="fa fa-check"></i></router-link>
          <router-link to='/position-detail-list' tag='li' class='list-group-item justify-content-between'><a>PositionDetailList</a><i class="fa fa-check"></i></router-link>
          <router-link to='/match-bar' tag='li' class='list-group-item justify-content-between'><a>MatchBar</a></router-link>
          <router-link to='/meta-bar' tag='li' class='list-group-item justify-content-between'><a>MetaBar</a></router-link>
          <router-link to='/person-list' tag='li' class='list-group-item justify-content-between'><a>PersonList</a></router-link>
          <router-link to='/person-list-item' tag='li' class='list-group-item justify-content-between'><a>PersonListItem</a></router-link>
          <router-link to='/person-detail' tag='li' class='list-group-item justify-content-between'><a>PersonDetail</a></router-link>
          <router-link to='/detail-content-section' tag='li' class='list-group-item justify-content-between'><a>DetailContentSection</a></router-link>
          <router-link to='/detail-list-section' tag='li' class='list-group-item justify-content-between'><a>DetailListSection</a></router-link>
          <router-link to='/competency-list' tag='li' class='list-group-item justify-content-between'><a>CompetencyList</a></router-link>
          <router-link to='/competency-list-item' tag='li' class='list-group-item justify-content-between'><a>CompetencyListItem</a></router-link>
          <router-link to='/facet-group' tag='li' class='list-group-item justify-content-between'><a>FacetGroup</a></router-link>
          <router-link to='/facet' tag='li' class='list-group-item justify-content-between'><a>Facet</a></router-link>
          <router-link to='/external-links' tag='li' class='list-group-item justify-content-between'><a>ExternalLinks</a></router-link>
          <router-link to='/shortcuts' tag='li' class='list-group-item justify-content-between'><a>Shortcuts</a></router-link>
          <router-link to='/pager' tag='li' class='list-group-item justify-content-between'><a>Pager</a></router-link>
          <router-link to='/list-result-summary' tag='li' class='list-group-item justify-content-between'><a>ListResultSummary</a></router-link>
        </ul>
      </div>

      <div class='col-9'>
          <router-view></router-view>
      </div>
    </div>

  </div>

</template>