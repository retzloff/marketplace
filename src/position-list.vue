<template>
  <div>
    <h2>Position List</h2>
    <hr />
    <div class='container-fluid'>
<table class="table table-striped">
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
                <a href="#" class='h3'>{{ jobTitle }}</a>
                <div class='text-muted pb-2'>{{ jobcodeTitle }} | {{ supLevel }}</div>
                <div class="text-right">
                  <a class='text-uppercase mr-3' href='#'>SHARE</a>
                  <a class='text-uppercase' href='#'>FOLLOW</a>
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
                <a href="#" class='h3'>{{ jobTitle }}</a>
                <div class='text-muted pb-2'>{{ jobcodeTitle }} | {{ supLevel }}</div>
                <div class="text-right">
                  <a class='text-uppercase mr-3' href='#'>SHARE</a>
                  <a class='text-uppercase' href='#'>FOLLOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </tr>
    <tr>
        <div class='media m-2' >
          <div class='media-body'>
            <div class='row'>
              <div class='col-12 text-right'>{{ location }}</div>
            </div>
            <div class='row'>
              <div class='col-1'>
                <div class='h3 text-center'>{{ payGrade }}</div>        
              </div>

              <div class='col-11'>
                <a href="#" class='h3'>{{ jobTitle }}</a>
                <div class='text-muted pb-2'>{{ jobcodeTitle }} | {{ supLevel }}</div>
                <div class="text-right">
                  <a class='text-uppercase mr-3' href='#'>SHARE</a>
                  <a class='text-uppercase' href='#'>FOLLOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </tr>
  </tbody>
      </table>
    

  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      "id": 1,
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