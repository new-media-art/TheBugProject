let gameState = {}

function preload () {
  // load in background and characters
  this.load.image('bg',     'assets/bgX.jpg');
  this.load.image('intro', 'assets/intro.png', { frameWidth: 680, frameHeight: 570  });
  this.load.image('page-2',    'assets/page2.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-3', 'assets/page3.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-4', 'assets/page4.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-5', 'assets/page5.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-6', 'assets/page6.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-7', 'assets/page7.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-8', 'assets/page8.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-9', 'assets/page9.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-10', 'assets/page10.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-11', 'assets/page11.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-12', 'assets/page12.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-13', 'assets/page13.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-14', 'assets/page14.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-15', 'assets/page15.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-16', 'assets/page16.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-17', 'assets/page17.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-18', 'assets/page18.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-19', 'assets/page19.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-20', 'assets/page20.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-21', 'assets/page21.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-22', 'assets/page22.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-23', 'assets/page23.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-24', 'assets/page24.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-25', 'assets/page25.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-26', 'assets/page26.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-27', 'assets/page27.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-28', 'assets/page28.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-29', 'assets/page29.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-30', 'assets/page30.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-31', 'assets/page31.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-33', 'assets/page33.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-34', 'assets/page34.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-35', 'assets/page34.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-36', 'assets/page36.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-37', 'assets/page37.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-38', 'assets/page38.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-39', 'assets/page39.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-40', 'assets/page40.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-41', 'assets/page41.png', { frameWidth: 680, frameHeight: 570 });
  this.load.image('page-42', 'assets/page42.png', { frameWidth: 680, frameHeight: 570 });

//load 1 sprite for each page

}

function create() {



  gameState.background = this.add.image(0, 0, 'bg');
  gameState.background.setOrigin(0, 0)
  renderCharacter(this, 'intro')
  initializePage(this)
  const firstPage = fetchPage(1);
  displayPage(this, firstPage)

  //animation intro

 

  //end animation intro
}

function renderCharacter(scene, key)
{
  if (gameState.character) {
    gameState.character.destroy()
  }
  gameState.character = scene.add.image(270, 340, key);
  gameState.character.setOrigin(.6, 1);
  gameState.character.setScale(.6);
}

function initializePage(scene) {
  // create options list and background
  // and saves them into gameState

  if (!gameState.options) {
    // create options list
    // if it doesn't exist
    gameState.options = [];
  }

  if (!gameState.narrative_background) {
    // create narrative background
    // if it doesn't exist
    gameState.narrative_background = scene.add.rectangle(10, 360, 430, 170, 0x000);
  gameState.narrative_background.setOrigin(0, 0);
  }
}

function destroyPage() {
  // wipe out narrative text and options

  if (gameState.narrative) {
    // destroy narrative if it exists
    gameState.narrative.destroy();
  }

  for (let option of gameState.options) {
    // destroy options if they exist
    option.optionBox.destroy();
    option.optionText.destroy();
  }
}

function displayPage(scene, page) {
  const narrativeStyle = { fill: '#ffffff', fontStyle: 'italic', align: 'center', wordWrap: { width: 340 }, lineSpacing: 8};
  
  // display general page character
  // & narrative here:
  renderCharacter(scene, page.character)
  
  gameState.narrative = scene.add.text(65, 380, page.narrative, narrativeStyle);

  // for-loop creates different options
  // need the index i for spacing the boxes
  for (let i=0; i<page.options.length; i++) {
    let option = page.options[i];

    // color in the option box
    const optionBox = scene.add.rectangle(40 + i * 130, 470, 110, 40, 0xb39c0e, 0)
    optionBox.strokeColor = 0xb39c0e;
    optionBox.strokeWeight = 2;
    optionBox.strokeAlpha = 1;
    optionBox.isStroked = true;
    optionBox.setOrigin(0, 0)

    // add in the option text
    const baseX = 40 + i * 130;
    const optionText = scene.add.text(baseX, 480, option.option, { fontSize:14, fill: '#b39c0e', align: 'center', wordWrap: {width: 110}});
    const optionTextBounds = optionText.getBounds()

    // centering each option text
    optionText.setX(optionTextBounds.x + 55 - (optionTextBounds.width / 2));
    optionText.setY(optionTextBounds.y + 10 - (optionTextBounds.height / 2));

    // add in gameplay functionality
    // for options here
  optionBox.setInteractive()
  
  optionBox.on('pointerup', function() {
    const newPage = this.option.nextPage;
    if (newPage != undefined) {
      destroyPage();
      displayPage(scene, fetchPage(newPage));
    }
  }, { option })

  optionBox.on('pointerover', function() {
    this.optionBox.setStrokeStyle(2, 0xffe014, 1);
    this.optionText.setColor('#ffe014');
  }, { optionBox, optionText });

  optionBox.on('pointerout', function() {
    this.optionBox.setStrokeStyle(1, 0xb38c03, 1);
    this.optionText.setColor('#b39c0e');
  }, { optionBox, optionText });

  gameState.options.push({
    optionBox,
    optionText
  })

  }
}

const config = {
  type: Phaser.WEBGL,
  parent: 'phaser-game',
  backgroundColor: 0xfea0fd,
  width: 450,
  height: 550,
  scene: {
    preload,
    create,
  }
};

const game = new Phaser.Game(config);

function fetchPage(page) {


    const pages = [
         
      {
        character: 'intro',
        page: 1,
        narrative: '',
        options: [
          { option: 'start',   nextPage: 100 },
        ]
      },
          
        {
          character: 'page-2',
          page: 100,
          narrative: 'Human caused Climate Change and nuclear war destroyed the Earth.',
          options: [
            { option: 'Next',   nextPage: 101 },
          ]
        },
    
        {
          character: 'page-3',
          page: 101,
          narrative: 'Only cockroaches like you survived.',
          options: [
            { option: 'Next',   nextPage: 2 },
          ]
        },
     
        {
          character: 'page-4',
          page: 2,
          narrative: 'You live in the only known colony in what little is left of a long forgotten city.',
          options: [
            { option: 'Next',     nextPage: 3 },   
          ]
        },
     
        {
          character: 'page-5',
          page: 3,
          narrative: 'You just found out of the existence of a seed bank that could make the world come alive again!',
          options: [
            { option: 'Next',   nextPage: 4 },
            
          ]
        },
     
        {
          character: 'page-6',
          page: 4,
          narrative: 'You are so exited that you want to leave immediately. But going unprepared is dangerous.',
          options: [
            { option: 'Go anyway.',   nextPage: 5 },
            { option: 'Ask for help.',   nextPage: 6 },
            { option: 'Go to the Adventure Store first.',   nextPage: 7 },
          ]
        },
     
        {
          character: 'page-8',
          page: 6,
          narrative: 'You find your good friend Grompf repairing it\'s house.',
          options: [
            { option: 'Next',   nextPage: 202 },
            
          ]
        },
    
        {
          character: 'page-9',
          page: 202,
          narrative: 'Grompf says it can help you find the seed bank if you help it finish the job first.',
          options: [
            { option: 'Don\’t have time. You go on.',   nextPage: 8 },
            { option: 'You help it.',   nextPage: 9 },
          ]
        },
     
        {
          character: 'page-10',
          page: 9,
          narrative: 'Great job! The house looks great. Grumpf is so happy that it will help you find the seed bank.',
          options: [
            { option: 'Next',   nextPage: 10 },
            
          ]
        },
     
        {
          character: 'page-11',
          page: 10,
          narrative: 'On your way out you meet Kriki. It says it wants to join in the adventure.',
          options: [
            { option: 'Next',   nextPage: 204 },
            
          ]
        },
        
        {
          character: 'page-12',
          page: 204,
          narrative: 'Grumpf and you know Kriki is a bit crazy.  Grumpf says it is up to you.',
          options: [
            { option: 'No.',   nextPage: 11 },
            { option: 'Yes.',   nextPage: 12 },
          ]
        },
     
        {
          character: 'page-13',
          page: 12,
          narrative: 'Kriki wants a drink at The Red Roach to celebrate first!',
          options: [
            { option: 'OK. Just one drink.',   nextPage: 13 },
            { option: 'NO! ', nextPage: 14 }
          ]
        },
     
        {
          character: 'page-14',
          page: 14,
          narrative: 'As you walk out of the city and you tell your friends how you found out about the seed bank...',
          options: [
            { option: 'Next',   nextPage: 210 },
          ]
        },
    
        {
          character: 'page-15',
          page: 210,
          narrative: 'Kriki realizes that he knows exactly where it is located!',
          options: [
            { option: 'Next',   nextPage: 15 },
          ]
        },
    
        {
          character: 'page-16',
          page: 15,
          narrative: 'On your way to the seed bank Grompf finds a huge screwdriver.',
          options: [
            { option: 'Next', nextPage: 150 },
          
          ]
        },
     
        {
          character: 'page-17',
          page: 150,
          narrative: 'Between the three you could take it with you.  Who knows, it could be useful. ',
          options: [
            { option: 'You say no, it is too heavy', nextPage: 16 },
            { option: 'Good idea. You never know!', nextPage: 17 },
          ]
        },

        {
          character: 'page-38',
          page: 16,
          narrative: 'You get lost in the desert and end up dying of thirst.',
          options: [
            { option: 'Play again',   nextPage: 1 },
          ]
        },
     
        {
          character: 'page-18',
          page: 17,
          narrative: 'You finally reach the seed bank!  Good job!',
          options: [
            { option: 'Next',  nextPage: 18 },
          ]
        },
     
        {
         character: 'page-19',
         page: 18,
         narrative: 'You try to get in . . . But the door is locked!',
         options: [
           { option: 'Use the screwdriver!',  nextPage: 19 },
           { option: 'Climb to the top!.',   nextPage: 36 },
         ]
       },
     
       {
         character: 'page-20',
         page: 19,
         narrative: 'It worked! You get into the seed bank!',
         options: [
           { option: 'Next',  nextPage: 21 },
         ]
       },
     
       {
         character: 'page-21',
         page: 21,
         narrative: 'With the help of your friends you take the seeds out and you throw them into the air so they can grow!!',
         options: [
           { option: 'Next',  nextPage: 22 }, 
         ]
       },
     
       {
         character: 'page-22',
         page: 22,
         narrative: 'It will take time, but the Earth will flourish again.',
         options: [
             { option: 'Next',   nextPage: 220 },
         ]
       },
    
       {
        character: 'page-23',
        page: 220,
        narrative: '. . . But at least you tried!!',
        options: [
            { option: 'Play again',   nextPage: 1 },
        ]
      },
     
       {
         character: 'page-7',
         page: 5,
         narrative: 'You start travelling alone. You hope you will find everything you need on the way.',
         options: [
           { option: 'Next',  nextPage: 23 },   
         ]
       },
     
        {
          character: 'page-24',
          page: 23,
          narrative: 'You find an old rusty nail. It could be useful.',
          options: [
            { option: 'Take it with you.',  nextPage: 24 },
            { option: 'Leave it there.',   nextPage: 6 },
          ]
        },
     
        {
          character: 'page-25',
          page: 24,
          narrative: 'The nail turns out to be a Morphy! A vicious roach mutation. It was laying in ambush waiting for a pray.',
          options: [
            { option: 'Play again',  nextPage: 201 },
          ]
        },
    
        {
          character: 'page-25',
          page: 201,
          narrative: 'It will pin you in place with it\’s spike legs before injecting you with a radioactive venom.\nRIP',
          options: [
            { option: 'Play again',  nextPage: 1 },
          ]
        },
     
        {
          character: 'page-26',
          page: 7,
          narrative: 'On the way to the Adventure Store you see that at the The Video Game store they have Fury Roaches V... ',
          options: [
            { option: 'Next',     nextPage: 8 },
            
          ]
        },
     
        {
          character: 'page-27',
          page: 26,
          narrative: 'You buy the game and spend the rest of the week playing it locked at home, in your cave...',
          options: [
             { option: 'Play again',   nextPage: 1 },
          ]
        },
     
        {
          character: 'page-28',
          page: 8,
          narrative: 'Grompf get angry and says that he is always helping you and you never help him.',
          options: [
            { option: 'You leave anyways.', nextPage: 27 },
            { option: 'You help him.', nextPage: 9 },
          ]
        },
     
        {
          character: 'page-29',
          page: 27,
          narrative: 'Suddenly Grompf pushed you from the back.',
          options: [
            { option: 'Next', nextPage: 203 },
          ]
        },
    
        {
          character: 'page-25',
          page: 203,
          narrative: 'You fall down a hole and break your neck.  You hear the noice of hungry Murphys approaching in the dark. \nR.I.P ',
          options: [
            { option: 'Play again',     nextPage: 1 },
          ]
        },
     
        {
          character: 'page-30',
          page: 11,
          narrative: 'Kriki starts crying and begs you to let it join you.',
          options: [
            { option: 'Next', nextPage: 205 },
            
            
          ]
        },
    
        {
          character: 'page-31',
          page: 205,
          narrative: 'Kriki is crazy and annoying, but he knows the outskirts of the city well. . . ',
          options: [
            { option: 'OK, it can come', nextPage: 12 },
            { option: 'Sorry but no.', nextPage: 28 },
            
          ]
        },
     
        {
          character: 'page-33',
          page: 28,
          narrative: 'You and Grumpf start walking.',
          options: [
            { option: 'next',     nextPage: 29 },
            
          ]
        },
     
        {
          character: 'page-34',
          page: 29,
          narrative: 'Outside the city you want to go north but Grumpf insists on going south.',
          options: [
            { option: 'Next',     nextPage: 206 },
            
          ]
        },
    
        {
          character: 'page-35',
          page: 206,
          narrative: 'After a while you suspect that what he really wants is to go to McRoaches for a burger.',
          options: [
            { option: 'You decide to go north alone',    nextPage: 5 },
            { option: 'You agree to go south',     nextPage: 30 },
            { option: 'Ask for directions.',    nextPage: 207 }
          ]
        },
    
        {
          character: 'page-36',
          page: 207,
          narrative: 'You convince Grumpf to go into La Cucaracha restaurant and ask for directions.',
          options: [
            { option: 'Next',    nextPage: 20 }
          ]
        },
     
        {
          character: 'page-37',
          page: 30 ,
          narrative: 'You do end up going with Grumpf to McRoaches and are both so full after the meal that you decide to go home and go to sleep.\nGAME OVER',
          options: [
            { option: 'Play again',     nextPage: 1 },
          ]
        },
     
        {
          character: 'page-38',
          page: 13,
          narrative: 'You three get really drunk and at some point you blackout. \nGame Over',
          options: [
            { option: 'Play again',  nextPage: 1 },
            
          ]
        },
     
        {
          character: 'page-39',
          page: 31,
          narrative: 'In La Cucaracha you ask for direction and a guy called Frupondio tells you that he knows the seed bank but that it is dangerous to go there . . . ',
          options: [
            { option: 'Next',   nextPage: 33 },
            
          ]
        },
     
        {
          character: 'page-40',
          page: 33,
          narrative: 'There are a lot of Morphis in that area, it says. But if you want it can guide you there.',
          options: [
             { option: 'You accept',   nextPage: 20 },
             { option: 'You decline',   nextPage: 35 },
          ]
        },
     
        {
          character: 'page-41',
          page: 20,
          narrative: 'Frupondio takes you east and drops you off in front of the seed bank!  You thank it for the help.',
          options: [
            { option: 'Next.',   nextPage: 208 },
          ]
        },
    
        {
          character: 'page-42',
          page: 208,
          narrative: 'It wishes you good luck and gives you a screwdriver before he goes. You made it!!!',
          options: [
            { option: 'Next.',   nextPage: 34 },
          ]
        },
     
        {
          character: 'page-25',
          page: 34,
          narrative: 'Before Frupondio goes it reminds you to be careful with the Morphis, there are a lot of them in this area!',
          options: [
            { option: 'You want to go, no matter the cost.',   nextPage: 27 },
            { option: 'Morphys are scary. Ask for directions home.',   nextPage: 47 },
            
          ]
        },
     
        {
          character: 'page-38',
          page: 36,
          narrative: 'Yous slip and breack your exoskeleton in two!',
          options: [
           { option: 'Play again',  nextPage: 209 },
          ]
        },
    
        {
          character: 'page-25',
          page: 209,
          narrative: 'Before you can react one of them has pierced your exoskeleton with it\'s spike like legs before inyecting your head with radioactive venom \nGame Over',
          options: [
           { option: 'Play again',  nextPage: 1 },
          ]
        },
     
        {
          character: 'page-25',
          page: 47,
          narrative: 'On the way home you get ambushed by Morphies and die slowly while being eaten alive.\nGAME OVER',
          options: [
            { option: 'Play again',   nextPage: 1 },
          ]
        }
            ]
         
           return pages.find(function(e) { if(e.page == page) return e });
         }
    