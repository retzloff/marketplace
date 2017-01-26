<template>
  <div class='container-fluid'>
    <h2>PersonDetail</h2>
    <hr />
      <div class='row'>
 
        <div class='media'>
        <img class='d-flex align-self-top mr-3' v-bind:src="photoUrl" />
        <div class='media-body'>
          <div claass='row'>
            <div class='col-10 h3'>{{ fullName }}</div>
            <div class='col-2 text-right'>{{ location }}</div>
          </div>
          <div class='text-muted pb-2'>{{ jobcodeTitle }} | {{ supLevel }}</div>
          <div>
            <button class='btn btn-primary text-uppercase'>Impersonate</button>
            <a class='text-uppercase' href='http://to.the.peoplesoft.com/'>Make Assignment</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      "id": 1,
      "photoUrl": "http://dummyimage.com/64x64.png/5fa2dd/ffffff",
      "payGrade": "04",
      "firstName": "Julia",
      "lastName": "Cruz",
      "city": "Tucson",
      "state": "AZ",
      "facility": "EDM",
      "jobcodeTitle": "Financial Advisor",
      "supLevel": "Team Leader"
    }  
  },
  computed: {
    fullName: function() {
      return `${this.firstName} ${this.lastName}` 
    },
    location: function() {
      return ([this.city, this.state, this.facility].join(' - '))
    }
  }
}
</script>
