<template>
  <div class='container-fluid'>
    <div class='row'>
      <div class='col-12'>
        <h1>MTA Components</h1>
      </div>
    </div>

    <div class='row' id="app">
      <div class='col-3'>
        <ul class="list-group">
          <li class='list-group-item list-group-item-success justify-content-between'>
            <router-link to="/application-bar">Application Bar</router-link>
             <ul class="list-group inner">
                <li class='list-group-item list-group-item-info justify-content-between'>
                  <router-link to='classification-bar'>ClassificationBar</router-link><span class="badge badge-default badge-pill">Done</span></li>
                <li class='list-group-item list-group-item-default justify-content-between'>
                  <router-link to="/navigation-bar">NavigationBar</router-link>
                </li>
                <li class='list-group-item list-group-item-default justify-content-between'>
                    <router-link to="/user-bar">UserBar</router-link>
                </li>
            </ul>
          </li>
          <li class='list-group-item list-group-item-warning justify-content-between'> 
            <router-link to='/table-contents-navigation'>TableOfContentsNavigation</router-link>
          </li>
          <li class='list-group-item list-group-item-warning justify-content-between'>
            <router-link to='/info-panel-list'>InfoPanelList</router-link>
          </li>
          <li class='list-group-item list-group-item-warning justify-content-between'>
            <router-link to='/info-panel'>InfoPanel</router-link>
          </li>
          <li class='list-group-item list-group-item-warning justify-content-between'>
            <router-link to='/position-list'>PositionList</router-link>
          </li>
          <li class='list-group-item list-group-item-warning justify-content-between'>
            <router-link to='/position-list-item'>PositionListItem</router-link>
          </li>
          <li class='list-group-item list-group-item-warning justify-content-between'>
            <router-link to='/position-detail'>PositionDetail</router-link>
          </li>
          <li class='list-group-item list-group-item-warning justify-content-between'>
            <router-link to='/match-bar'>MatchBar</router-link>
          </li>
          <li class='list-group-item list-group-item-success justify-content-between'>
             <router-link to='/meta-bar'>MetaBar</router-link>
          </li>
          <li class='list-group-item list-group-item-info justify-content-between'>
            <router-link to='/person-list'>PersonList</router-link>
          </li>
          <li class='list-group-item list-group-item-info justify-content-between'>
            <router-link to='/person-list-item'>PersonListItem</router-link><span class="badge badge-default badge-pill">WIP</span>
          </li>
          <li class='list-group-item list-group-item-info justify-content-between'>
             <router-link to='/person-detail'>PersonDetail</router-link><span class="badge badge-default badge-pill">WIP</span>
          </li>
          <li class='list-group-item list-group-item-success justify-content-between'>
            <router-link to='/detail-content-section'>DetailContentSection</router-link>
          </li>
          <li class='list-group-item list-group-item-success justify-content-between'>
            <router-link to='/detail-list-section'>DetailListSection</router-link>
          </li>
          <li class='list-group-item list-group-item-info justify-content-between'>
            <router-link to='/competency-list'>CompetencyList</router-link>
          </li>
          <li class='list-group-item list-group-item-info justify-content-between'>
            <router-link to='/competency-list-item'>CompetencyListItem</router-link>
          </li>
          <li class='list-group-item list-group-item-succes justify-content-betweens'>
            <router-link to='/facet-group'>FacetGroup</router-link>
          </li>
          <li class='list-group-item list-group-item-success justify-content-between'>
            <router-link to='/facet'>Facet</router-link>
          </li>
          <li class='list-group-item justify-content-between'>
            <router-link to='/external-links'>ExternalLinks</router-link>
          </li>
          <li class='list-group-item justify-content-between'><i>
            <router-link to='/shortcuts'>Shortcuts</router-link>
            </i>
          </li>
          <li class='list-group-item justify-content-between'><i>
            <router-link to="/pager">Pager</router-link>
            </i>
          </li>
          <li class='list-group-item justify-content-between'><i>
            <router-link to="/list-result-summary">ListResultSummary</router-link>
            </i>
          </li>
        </ul>
      </div>

      <div class='col-9'>
          <router-view></router-view>
      </div>
    </div>

  </div>

</template>