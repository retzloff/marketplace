<template>
  <div>
    <h2>PersonList</h2>
    <hr />
    
    <table class='table table-striped'>
      <tbody>
        <tr>
          <div class='media m-2'>
            <div class='media-body'>
              <div class='row'>
                <div class='col-12 text-right'>{{ location }}</div>
              </div>
              <div class='row'>
                <div class='col-1'>
                  <div class='h3 text-center'>{{ payGrade }}</div>        
                </div>

                <div class='col-11'>
                  <a href="#" class='h3'>{{ fullName }}</a>
                  <div class='text-muted pb-1'>{{ jobcodeTitle }} | {{ supLevel }}</div>
                  <div>
                    <a class='' href='#'>Impersonate</a> | 
                    <a class='' href='http://to.the.peoplesoft.com/'>Make Assignment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </tr>
        <tr>
          <div class='media m-2'>
            <div class='media-body'>
              <div class='row'>
                <div class='col-12 text-right'>{{ location }}</div>
              </div>
              <div class='row'>
                <div class='col-1'>
                  <div class='h3 text-center'>{{ payGrade }}</div>        
                </div>

                <div class='col-11'>
                  <a href="#" class='h3'>{{ fullName }}</a>
                  <div class='text-muted pb-1'>{{ jobcodeTitle }} | {{ supLevel }}</div>
                  <div>
                    <a class='' href='#'>Impersonate</a> | 
                    <a class='' href='http://to.the.peoplesoft.com/'>Make Assignment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </tr>
        <tr>
          <div class='media m-2'>
            <div class='media-body'>
              <div class='row'>
                <div class='col-12 text-right'>{{ location }}</div>
              </div>
              <div class='row'>
                <div class='col-1'>
                  <div class='h3 text-center'>{{ payGrade }}</div>        
                </div>

                <div class='col-11'>
                  <a href="#" class='h3'>{{ fullName }}</a>
                  <div class='text-muted pb-1'>{{ jobcodeTitle }} | {{ supLevel }}</div>
                  <div>
                    <a class='' href='#'>Impersonate</a> | 
                    <a class='' href='http://to.the.peoplesoft.com/'>Make Assignment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </tr>
      </tbody>
    </table>

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
