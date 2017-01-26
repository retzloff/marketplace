<template>
  <div>
    <h2>Position List</h2>
    <hr />

    <div class='row'>
      <div class='col-12'>
        <table class='table table-striped'>
          <tbody v-if="positions.length">
            <tr v-for="position in positions">
             <div class='media m-2'>
              <div class='media-body'>
                <div class='row'>
                  <div class='col-12 text-right'>{{ position.location }}</div>
                </div>
                <div class='row'>
                  <div class='col-1'>
                    <div class='h3 text-center'>{{ position.payGrade }}</div>        
                  </div>
                  <div class='col-11'>
                    <a href="#" class='h3'>{{position.jobTitle }}</a>
                    <div class='text-muted pb-2'>{{ position.jobcodeTitle }} | {{ position.supLevel }}</div>
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
    
  </div>
</template>


<script>
export default {
  data () {
    return {
      positions: [
      {
      "id": 1,
      "photoUrl": "",
      "location": "Tucson-AZ-EDM",
      "payGrade": "04",
      "jobTitle": "GEOINT Imagery Analyst",
      "city": "Tucson",
      "state": "AZ",
      "facility": "EDM",
      "jobcodeTitle": "Financial Advisor",
      "supLevel": "Team Leader"
    },
    {
      "id": 2,
      "photoUrl": "",
      "location": "Tucson-AZ-EDM",
      "payGrade": "04",
      "jobTitle": "GEOINT Whatever",
      "city": "Tucson",
      "state": "AZ",
      "facility": "EDM",
      "jobcodeTitle": "Financial Advisor",
      "supLevel": "Team Leader"
    },
    {
      "id": 3,
      "photoUrl": "",
      "location": "Tucson-AZ-EDM",
      "payGrade": "04",
      "jobTitle": "GEOINT Somthing",
      "city": "Tucson",
      "state": "AZ",
      "facility": "EDM",
      "jobcodeTitle": "Financial Advisor",
      "supLevel": "Team Leader"
    }
      ]
    }
  }
}
</script>