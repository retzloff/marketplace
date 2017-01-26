<template>
  <div>
    <h2>PersonListItem</h2>
    <hr />
    <div class='row'>
      <div class='col-12'>

        <div class='card'>
          <div class='card-block'>
            <div class='text-right'>{{ location }}</div>
            <div class='h3'>
              {{ payGrade }}
              <a href="#">{{ fullName }}</a>
            </div>
            <div class='text-muted'>{{ jobcodeTitle }} | {{ supLevel }}</div>
            <div class='text-right'>
              <a class='text-uppercase btn btn-primary' href='#'>Impersonate</a>
              <a class='text-uppercase btn btn-secondary' href='http://to.the.peoplesoft.com/'>Make Assignment</a>
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
