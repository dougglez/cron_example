const Cron = require('cron').CronJob;

new Cron({
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
  start: true,
  timeZone: 'America/Los_Angeles'
});
