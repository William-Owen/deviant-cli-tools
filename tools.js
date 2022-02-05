const prompts = require('prompts');
const moment = require('moment');

(async () => {

  const response = await prompts({
    type: 'date',
    name: 'date',
    message: 'Please enter the event date.',
    initial: new Date(),
  });

  console.log(`\nThis event will start ${moment(response.date).format('dddd, MMMM D, YYYY [at] HH:mm')} (${moment(response.date).fromNow()})\n<t:${Math.floor(new Date(response.date).getTime() / 1000)}:F> (<t:${Math.floor(new Date(response.date).getTime() / 1000)}:R>)`);

})();