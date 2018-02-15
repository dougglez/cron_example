const Cron = require('cron').CronJob;
let dayToRun = 4
let seconds = '*';
var job = new Cron({
  cronTime: `* * * * * *`,
  onTick: function() {
    /*
     * Runs every weekday (Monday through Friday)
     * at 11:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
    console.log('hello');
    console.log(new Date().getDay());
    if (new Date().getDay() === dayToRun) {
      console.log('true!!')
    }
    // go to database, find all searches with day to run as today. 
    // Run those searches (for loop/axios request)

  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
function create() {
  // post to db table
  // db table returns tha dayToRun
  job.start();
  seconds = '*/3';

}

setTimeout(create, 3000);