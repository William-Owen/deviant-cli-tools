const prompts = require('prompts');
const moment = require('moment');

// Menu

(async () => {

  const menuResponse = await prompts({
    type: 'select',
    name: 'option',
    message: 'Choose a tool',
    choices: [
      { title: 'Discord Timestamp', description: 'Generate a quick discord timestamp', value: 'discordTimestamp' },
      { title: 'Hello World', value: 'helloWorld', },
    ],
    initial: 0
  });

  switch (menuResponse.option) {

    case "discordTimestamp": 

      // Discord Timestamp

      (async () => {

        const response = await prompts({
          type: 'date',
          name: 'date',
          message: 'Please enter the event date.',
          initial: new Date(),
        });

        console.log(`\nThis event will start ${moment(response.date).format('dddd, MMMM D, YYYY [at] HH:mm')} (${moment(response.date).fromNow()})\n<t:${Math.floor(new Date(response.date).getTime() / 1000)}:F> (<t:${Math.floor(new Date(response.date).getTime() / 1000)}:R>) your time.`);

      })();
      
      break;

    case "helloWorld":

      // Hello World

      (async () => {

        const response = await prompts({
          type: 'confirm',
          name: 'confirm',
          message: 'Hello World',
          initial: false
        });

        console.log(`Hello World`);

      })();
      
      break;

  }

})();

