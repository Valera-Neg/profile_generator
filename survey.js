const readline = require('readline');

const profile = {
  nickName: '',
  activity: '',
  favouriteMusic: '',
  favouriteMealTime: '',
  favouriteFood: '',
  favouriteSport: '',
  superPow: ''
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });
  

rl.question('What your name? ', (answer) => {
  profile.nickName = answer;
  console.log(`Hi! ${answer}`);
  
  rl.question('What is your favourite activity? ', (answer) => {
    profile.activity = answer;
    console.log(`So you like ${answer}`);

    rl.question(`What do you listen to while doing that?  `, (answer) => {
      profile.favouriteMusic = answer;
      console.log(`Good choice to listen to ${answer} `);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)?  `, (answer) => {
        profile.favouriteMealTime = answer;
        console.log(`Ok, ${answer}, go on...`);

        rl.question(`What's your favourite thing to eat for that meal?  `, (answer) => {
          profile.favouriteFood = answer;
          console.log(`Unfortunatly I'm a machine and never try ${answer}, as well as any other food.`);


          rl.question(`Which sport is your absolute favourite?  `, (answer) => {
            profile.favouriteSport = answer;
            console.log(`Saw ${answer} on TV, quite interesting.\n\rAnd last question:`);

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!?  `, (answer) => {
              profile.superPow = answer;
              console.log(`Wow ...${answer} it's cool!`);


              rl.question(`Push Enter to see your profile which we created for you! `, (answer) => {
                console.log('******************************************************');
                console.log(`Hi! I'm ${profile.nickName}. I love ${profile.activity}.
                \rWhen I'm doing ${profile.activity} I like to listen to ${profile.favouriteMusic}.
                \rAlso love ${profile.favouriteMealTime} and my favourite food on ${profile.favouriteMealTime} - 
                \r${profile.favouriteFood}. Love ${profile.favouriteSport}. ${profile.superPow} it what I'm cool in it!`)
               
                rl.close()
              });
            });

          });
        });
  
      });
    });

  });
});