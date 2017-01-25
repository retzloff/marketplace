<template>
  <div>
    <h2>Position List Item</h2>
    <hr />
    <div class='container-fluid'>

      <ul class='list-unstyled list-group'>
        <li class='media list-group-item'>
          <img class='d-flex align-self-center mr-3' v-bind:src="photoUrl" />
          <div class='media-body'>
            <div class='row'>
              <div class='col-12 text-right'>{{ location }}</div>
            </div>
            <div class='row'>
              <div class='col-1'>
                <div class='h3 text-center'>{{ payGrade }}</div>        
              </div>

              <div class='col-11'>
                <div class='h3'>{{ jobTitle }}</div>
                <div class='text-muted pb-2'>{{ jobcodeTitle }} | {{ supLevel }}</div>
                <div class="text-right">
                  <a class='text-uppercase mr-3' href='#'>SHARE</a>
                  <a class='text-uppercase' href='#'>FOLLOW</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      "id": 1,
      "photoUrl": "",
      "payGrade": "04",
      "jobTitle": "GEOINT Imagery Analyst",
      "city": "Tucson",
      "state": "AZ",
      "facility": "EDM",
      "jobcodeTitle": "Financial Advisor",
      "supLevel": "Team Leader"
    }  
  },
  computed: {
   location: function() {
      return ([this.city, this.state, this.facility].join(' - '))
    }
  }
}
</script>