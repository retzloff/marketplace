<template>
  <div>
    <h2>Person Detail</h2>
    <hr />

    <div class='row'>
      <div class='col-12'>
        <div class='media'>
          <img class='d-flex align-self-center mr-3' v-bind:src="photoUrl" />
          <div class='media-body'>
            <div claass='row'>
              <div class='text-right'>{{ location }}</div>
              <div class='h3'>{{payGrade}} {{ fullName }}</div>
              <div class='text-muted pb-2'>{{ jobcodeTitle }} | {{ supLevel }}</div>
              <div class='text-right'>
                <button class='btn btn-primary text-uppercase'>Impersonate</button>
                <a class='text-uppercase' href='http://to.the.peoplesoft.com/'>Make Assignment</a>
              </div>
            </div>
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
