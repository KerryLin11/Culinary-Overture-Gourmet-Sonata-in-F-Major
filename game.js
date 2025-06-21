// Talked to John about there being autoplay issues. 
// Chrome's autoplay seems to block audio.
// We were unable to resolve it.
// Works fine in a live server but not by file
// Cheers.















//* Variables

  //? HTML Elements

  const dialogueTextElement = document.getElementById('text')
  const optionButtonsElement = document.getElementById('option-buttons')
  const dialogueBoxElement = document.querySelector('.dialogueBox')
  const characterNameElement = document.querySelector('.characterName')
  const characterSprite = document.querySelector('.characterSprite')
  const characterContainer = document.querySelector('.characterContainer')
  const interactableObjects = document.querySelectorAll('.interactableObjects');
  const displayImage = document.querySelector('.displayImage');
  const displayImgElement = document.getElementById('displayImg');


    //? Scene 3 Quiz
    let startingPoints = 0;
    let quizPoints = 0;

  //? Const Objects
  const textSpeeds = {
    'default':  30, 
    'slow':     60,  
    'fast':     20, 
    'faster':   10,
    'instant':   1,
    'slower': 100,
  };

  const sceneURLs = {
    1: 'scene1.html',
    2: 'scene2.html',
    3: 'scene3.html',
    4: 'scene4.html',
    5: 'scene5.html',
    6: 'scene6.html',
    7: 'scene7.html',
  };

  const bgs = {
    //? Scene 1
    bedroomDay: 'images/bgs/bedroom.png',
    mirror: 'images/bgs/mirror.jpg',
    hallway: 'images/bgs/hallway.png',
    entrance: 'images/bgs/entrance.png',
    kitchen: 'images/bgs/kitchen.png',
    gate: 'images/bgs/gate.png',

    //? Scene 2
    car: 'images/bgs/car.png',
    carOut: 'images/bgs/carOut.png',
    coast: 'images/bgs/coast.jpg',
    alexanderRestaurant: 'images/bgs/alexanderRestaurant.png',
    alexanderRestaurantInt: 'images/bgs/alexanderRestaurantInt.png',
    seat: 'images/bgs/seat.png',
    canvas: 'images/bgs/canvas.png',

    //? Scene 3
    city: 'images/bgs/city.png',
    cityBus: 'images/bgs/cityBus.png',
    cityRestaurant: 'images/bgs/cityRestaurant.png',
    cityRestaurantInt: 'images/bgs/cityRestaurantInt.png',
    cityLeave: 'images/bgs/cityLeave.png',

    //? Scene 4
    hotel: 'images/bgs/hotel.jpg',
    hotelRoom: 'images/bgs/hotelRoom.png',
    hotelRoom2: 'images/bgs/hotelRoom2.jpg',
    lobby: 'images/bgs/lobby.png',
    hotelMorning: 'images/bgs/hotelMorning.jpg',
    burgerBar: 'images/bgs/burgerBar.png',
    burgerBarInt: 'images/bgs/burgerBarInt.png',
    burgerBarKitchen: 'images/bgs/burgerBarKitchen.png',
    train: 'images/bgs/train.png',
    park: 'images/bgs/park.png',

    //? Scene 5
    yamamotoEntrance: 'images/bgs/yamamotoEntrance.png',
    yamamotoOnsen: 'images/bgs/yamamotoOnsen.png',
    yamamotoPorch: 'images/bgs/yamamotoPorch.png',
    yamamotoRestaurant: 'images/bgs/yamamotoRestaurant.png',

    //? Scene 6
    market: 'images/bgs/market.png',
    marketFontaine: 'images/bgs/marketFontaine.png',
    marketIcecream: 'images/bgs/marketIcecream.png',
    marketNoon: 'images/bgs/marketNoon.png',
    marketExit: 'images/bgs/marketExit.png',
    marketKimura: 'images/bgs/marketKimura.png',
    marketAssistant: 'images/bgs/marketAssistant.png',
    marketDuval: 'images/bgs/marketDuval.png',
    marketYamamoto: 'images/bgs/marketYamamoto.png',
    market2: 'images/bgs/market2.png',

  };

  // Javascript automatically convert's object keys into strings (eg. character1 = 'character1')
  const sprites = {
    Local: {
      angry: 'images/sprites/Local/angry.png',
      angry2: 'images/sprites/Local/angry2.png',
      seriously: 'images/sprites/Local/seriously.png',
      clothes: 'images/sprites/Local/clothes.png',
      default: 'images/sprites/Local/default.png',
      default2: 'images/sprites/Local/default2.png',
    },
    "Random Vendor": {
      angry: 'images/sprites/Student/angry.png',
      angry2: 'images/sprites/Student/angry2.png',
      pout: 'images/sprites/Student/pout.png',
      neutral: 'images/sprites/Student/neutral.png',
      happy: 'images/sprites/Student/happy.png',
      default: 'images/sprites/Student/default.png',
      default2: 'images/sprites/Student/default2.png',
    },
    Tina: {
      disappointed: 'images/sprites/Tina/disappointed.png',
      default: 'images/sprites/Tina/default.png',
      default2: 'images/sprites/Tina/default2.png',
    },
    Child: {
      happy: 'images/sprites/Mia/happy.png',
      happy2: 'images/sprites/Mia/happy2.png',
      sad: 'images/sprites/Mia/sad.png',
      tsundere: 'images/sprites/Mia/tsundere.png',
      tsundere2: 'images/sprites/Mia/tsundere2.png',
      love: 'images/sprites/Mia/love.png',
      love2: 'images/sprites/Mia/love2.png',
      blush: 'images/sprites/Mia/blush.png',
      default: 'images/sprites/Mia/default.png',
      default2: 'images/sprites/Mia/default2.png',
    },
    Assistant: {
      happy: 'images/sprites/Assistant/happy.png',
      surprised: 'images/sprites/Assistant/surprise.png',
      nervous: 'images/sprites/Assistant/nervous.png',
      disgust: 'images/sprites/Assistant/disgust.png',
      impressed: 'images/sprites/Assistant/impressed.png',
      angry: 'images/sprites/Assistant/angry.png',
      default: 'images/sprites/Assistant/default.png',
      default2: 'images/sprites/Assistant/default2.png',
    },
    Yamamoto: {
      happy: 'images/sprites/Yamamoto/happy.png',
      happy2: 'images/sprites/Yamamoto/happy2.png',
      surprised: 'images/sprites/Yamamoto/surprise.png',
      surprised2: 'images/sprites/Yamamoto/surprise2.png',
      default: 'images/sprites/Yamamoto/default.png',
      default2: 'images/sprites/Yamamoto/default2.png',
    },
    Sebastian: {
      happy: 'images/sprites/Sebastian/happy.png',
      surprised: 'images/sprites/Sebastian/surprise.png',
      smug: 'images/sprites/Sebastian/smug.png',
      embarrassed: 'images/sprites/Sebastian/embarrassed.png',
      embarrassed2: 'images/sprites/Sebastian/embarrassed2.png',
      disappointed: 'images/sprites/Sebastian/disappointed.png',
      default: 'images/sprites/Sebastian/default.png',
      default2: 'images/sprites/Sebastian/default2.png',
    },
    Rafael: {
      happy: 'images/sprites/Rafael/happy.png',
      happy2: 'images/sprites/Rafael/happy2.png',
      surprised: 'images/sprites/Rafael/surprise.png',
      embarrassed: 'images/sprites/Rafael/embarrassed.png',
      nervous: 'images/sprites/Rafael/nervous.png',
      disappointed: 'images/sprites/Rafael/disappointed.png',
      default: 'images/sprites/Rafael/default.png',
      default2: 'images/sprites/Rafael/default2.png',
    },
    Kimura: {
      happy: 'images/sprites/Kimura/happy.png',
      happy2: 'images/sprites/Kimura/happy2.png',
      sad: 'images/sprites/Kimura/sad.png',
      surprised: 'images/sprites/Kimura/surprise.png',
      embarrassed: 'images/sprites/Kimura/embarrassed.png',
      angry: 'images/sprites/Kimura/angry.png',
      default: 'images/sprites/Kimura/default.png',
      default2: 'images/sprites/Kimura/default2.png',
    },
    Fontaine: {
      happy: 'images/sprites/Fontaine/happy.png',
      drunk: 'images/sprites/Fontaine/drunk.png',
      default: 'images/sprites/Fontaine/default.png',
      default2: 'images/sprites/Fontaine/default2.png',
    }
  };

    //! Overlays
      
      const blackOverlay = document.querySelector('.blackOverlay');
      const FXOverlay = document.querySelector('.FXOverlay')
      const magnifyItemOverlay = document.querySelector('.magnifyItemOverlay');
      const flashbackOverlay = 'images/flashbackOverlay.png';
      let flashbackInterval;

      const displayImages = {
        spaghetti: 'images/spaghetti.png',
        entree: 'images/display/entree.jpg',
        main: 'images/display/main.jpg',
        dessert: 'images/display/dessert.jpg',
        coq: 'images/display/coq.png',

        //? Quiz
        b1: 'images/display/1b.jpg',
        c1: 'images/display/1c.jpg',
        d1: 'images/display/1d.jpg',
        e1: 'images/display/1e.jpg',
        c3: 'images/display/3c.jpg',
        e3: 'images/display/3e.jpg',
      }
      const magnifyImages = {
        scroll: 'images/magnify/scrollMag.png',
        mirror: 'images/magnify/mirrorMag.png',
      };
      const FXURLS = {
        egBG: 'images/scene1.png'
      };
      const BGImages = {
        egBG: 'images/scene1.png'
      }
      
      const blackOverlayString = 'images/blackOverlay.png'

      let textTrees = {}; // Initialized in DOMContentLoaded

//* BGM

  const whiteNoise = document.getElementById("whiteNoise");
  const kitchenNoise = document.getElementById("kitchenNoise");
  const kitchen = document.getElementById("kitchen");
  const sinclairTheme = document.getElementById("sinclair");
  const assistantTheme = document.getElementById("assistant");
  const relax = document.getElementById("relax");
  const coastTheme = document.getElementById("coastTheme");
  const fontaineTheme = document.getElementById("fontaine");
  const guitar = document.getElementById("guitar");
  const drama = document.getElementById("drama");
  const city = document.getElementById("city");
  const anticipation = document.getElementById("anticipation");
  const kimuraTheme = document.getElementById("kimura");
  const night = document.getElementById("night");
  const crickets = document.getElementById("crickets");
  const duval = document.getElementById("duval");
  const hype = document.getElementById("hype");
  const finalDay = document.getElementById("finalDay");
  const tension = document.getElementById("tension");
  const calamity = document.getElementById("calamity");
  const bird = document.getElementById("bird");
  const market = document.getElementById("market");
  const persevere = document.getElementById("persevere");
  const love = document.getElementById("love");

  function resetAudio() {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}


//* Global Vars
  let currentTextID = 1;
  let currentNode;
  let currentTextTree;
  let currentSpritePath;


//* DOMContentLoaded (Loads textTrees)
  document.addEventListener('DOMContentLoaded', function() {
    startGameMusic();
    startGame(0);
    hideDisplayImage(0);
    hideSprite(0);
    
    textTrees = {
      1: textTree_1,
      2: textTree_2,
      3: textTree_3,
      4: textTree_4,
      5: textTree_5,
      6: textTree_6,
      7: textTree_7,
    };
  });

  function startGameMusic() {
    if (currentScene === 1) {
      playAudioOnTransition(sinclairTheme);
      fadeAudio(1, sinclairTheme, 3000, 0);
    } else if (currentScene === 2) {
      playAudioOnTransition(whiteNoise);
      fadeAudio(1, whiteNoise, 3000, 0);
    } else if (currentScene === 3) {
      playAudioOnTransition(whiteNoise);
      fadeAudio(1, whiteNoise, 3000, 0);
    } else if (currentScene === 4) {
      playAudioOnTransition(whiteNoise);
      fadeAudio(1, whiteNoise, 3000, 0);
    } else if (currentScene === 5) {
      playAudioOnTransition(whiteNoise);
      fadeAudio(1, whiteNoise, 3000, 0);
    } 
    
  }


//* Session Storage (for now just for testing)

  let state = {}
  let totalPoints;
  let currentScene;

  window.addEventListener("storage", (event) => {
    if (event.key === "currentScene") {
      currentScene = parseInt(event.newValue); 
    }
    if (event.key === "totalPoints") {
      totalPoints = parseInt(event.newValue); 
    }
    if (event.key === "state") {
      state = JSON.parse(event.newValue);
    }
  });

  function updateSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
  }

  function updateAllSessionStorage() {
    updateSessionStorage("currentScene", currentScene);
    updateSessionStorage("totalPoints", totalPoints);
    updateSessionStorage("state", JSON.stringify(state));
  }

  function clearSessionStorage() {
    if (sessionStorage) {
      sessionStorage.clear();
    }
  }

  function clearLocalStorage() {
    if (clearLocalStorage) {
      localStorage.clear();
    }
  }
  

//* SFX

  const clickSFX = document.getElementById("clickSFX");
  const textScrollSFX = document.getElementById("textScrollSFX");
  const carSFX = document.getElementById("carSFX");
  const knockSFX = document.getElementById("knockSFX");
  const driveSFX = document.getElementById("driveSFX");



//* Events
  document.addEventListener('keydown', dialogueBoxEventHandler);
  document.addEventListener('click', dialogueBoxEventHandler);
  optionButtonsElement.addEventListener('mouseover', unfocusButton);


//* State Managers //
  function startGame(delayTime = 0) {
    state = {};
    setTimeout(() => {

      //? Initialize Storage Variables
      currentScene = parseInt(sessionStorage.getItem("currentScene")) || 1;
      totalPoints = parseInt(sessionStorage.getItem("totalPoints")) || 0;
      state = JSON.parse(sessionStorage.getItem("state")) || {};
      updateSessionStorage("currentScene", currentScene);
      updateSessionStorage("totalPoints", totalPoints);
      updateSessionStorage("state", JSON.stringify(state));

      //? Initialize TextTree
      currentTextTree = textTrees[currentScene];
      currentTextID = 1;
      showTextID(1);

      fadeOutBlack();
    }, delayTime);
  }

  function sceneManager(){
    // Check if currentTextID is greater than currentTextTree.length
    if ((currentTextID > currentTextTree.length) && currentScene) {

      if (currentScene === 1) {
        fadeToBlack(1000)
        setTimeout(() => {
          adminChangeScene(2)
        }, 2000);
      } else if (currentScene === 2) {
        fadeToBlack(1000)
        setTimeout(() => {
          adminChangeScene(3)
        }, 2000);
      } else if (currentScene === 3) {
        fadeToBlack(1000)
        setTimeout(() => {
          adminChangeScene(4)
        }, 2000);
      }
      else if (currentScene === 4) {
        fadeToBlack(1000)
        setTimeout(() => {
          adminChangeScene(5)
        }, 2000);
      }
      else if (currentScene === 5) {
        fadeToBlack(1000)
        setTimeout(() => {
          adminChangeScene(6)
        }, 2000);
      }
      else if (currentScene === 6) {
        fadeToBlack(1000)
        setTimeout(() => {
          adminChangeScene(7)
        }, 2000);
      }
    }
  }



//* Scene Management Functions //

  //? Fade Display Image

  function showDisplayImage(duration = 500) {
    $(displayImage).fadeIn(duration);
  }

  function hideDisplayImage(duration = 500) {
    $(displayImage).fadeOut(duration);
  }
  function setDisplayImage(imageUrl) {
    displayImgElement.src = imageUrl;
  }

  //? Switch scenes

  function adminChangeScene(sceneNumber) {    
    currentScene = sceneNumber;
    updateAllSessionStorage();

    if (currentScene) {
        setTimeout(() => {
            fadeToBlack(500);
            setTimeout(() => {
                window.location.href = sceneURLs[sceneNumber];
            }, 500);
        }, 200);
    } else {
        console.error(`Scene URL not found for scene number ${sceneNumber}`);
    }
  }

  function redirectToScene(sceneNumber) {    
    if (currentScene) {
        setTimeout(() => {
            fadeToBlack(500);
            setTimeout(() => {
                window.location.href = sceneURLs[sceneNumber];
            }, 500);
        }, 200);
    } else {
        console.error(`Scene URL not found for scene number ${sceneNumber}`);
    }
  }

  //? Wait for Function

  // just for testing
  function waitForSeconds(seconds) {
    const delayUntil = Date.now() + seconds * 1000;
    while (Date.now() < delayUntil) {
      // Busy-wait loop
    }
  }

  //? Set Scene Background
  function setBG(imageUrl, duration = 1000) {
    fadeToBlack(duration);
    hideAllContainers(100,100);

    // Fixes text scrolling audio on transition
    setTimeout(() => {
        clearInterval(revealTextInterval);
        dialogueTextElement.innerHTML = currentNode.text;
        populateButtons()
    }, 25);


    setTimeout(() => {
      var img = new Image();
      img.src = imageUrl;

      // On error -> log error
      img.onerror = function() {
        console.error('Image not found:', imageUrl);
      };

      // No error -> set image
      img.onload = function() {
        document.body.style.backgroundImage = `url(${imageUrl})`;
      };


      fadeOutBlack(duration);

      setTimeout(() => {
        // showSprite();
      }, 500);
      setTimeout(() => {
        showTextbox();
      }, 1000);
      
    }, 1000);


  }


  //? Sprite Animations

      /**
   * Sets the CSS filter for character sprite.
   * @param {number} [saturation=100] - The saturation value for the sprite (0 to 100).
   * @param {number} [invert=0] - The invert value for the sprite (0 to 100).
   * @param {number} [blur=0] - The blur value for the sprite (in pixels).
   * @param {number} [grayscale=0] - The grayscale value for the sprite (0 to 100).
   * @returns {void}
   */
  function setSpriteFilter(saturation = 100, invert = 0, blur = 0, grayscale = 0) {
      characterSprite.style.filter = `saturate(${saturation}%) invert(${invert}%) blur(${blur}px) grayscale(${grayscale}%)`;
  }

  function resetSpriteFilter() {
    characterSprite.style.filter = `saturate(${100}%) invert(${0}%) blur(${0}px) grayscale(${0}%)`;
  }

  function setBackgroundFilter(saturation = 100, invert = 0, blur = 0, grayscale = 0) {
    document.body.style.filter = `saturate(${saturation}%) invert(${invert}%) blur(${blur}px) grayscale(${grayscale}%)`;
}

function resetBackgroundFilter() {
    document.body.style.filter = `saturate(100%) invert(0%) blur(0px) grayscale(0%)`;
}

  function spiralAnimation(duration = 2000, loops = 3, maxRadius = 50) {
    if (characterSprite) {
      const initialMarginTop = parseFloat($(characterSprite).css('marginTop'));
      const initialMarginLeft = parseFloat($(characterSprite).css('marginLeft'));
      const startTime = new Date().getTime();
  
      const animationLoop = () => {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        const progress = (elapsedTime % duration) / duration;
  
        const angle = 2 * Math.PI * loops * progress;
        let radius;
  
        if (progress < 0.5) {
          // Spiral out
          radius = maxRadius * (progress * 2);
        } else {
          // Spiral back in
          radius = maxRadius * ((1 - progress) * 2);
        }
  
        const marginTopValue = initialMarginTop + radius * Math.sin(angle);
        const marginLeftValue = initialMarginLeft + radius * Math.cos(angle);
  
        $(characterSprite).css({
          marginTop: marginTopValue,
          marginLeft: marginLeftValue
        });
  
        if (elapsedTime < duration) {
          requestAnimationFrame(animationLoop);
        }
      };
  
      animationLoop();
    } else {
      console.error('Character sprite element not found');
    }
  }

  // Shows flat bottom underneath sprite
  function bounceAnimation(distance = 100, duration = 1000, frequency = 1, amplitude = 50) {
    if (characterContainer) {
      const initialTransform = $(characterContainer).css('transform');
      let initialX = 0;
      let initialY = 0;
  
      if (initialTransform !== 'none') {
        const values = initialTransform.split('(')[1].split(')')[0].split(',');
        initialX = parseFloat(values[4]);
        initialY = parseFloat(values[5]);
      }
  
      const startTime = new Date().getTime();
  
      const animationLoop = () => {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        const progress = (elapsedTime % duration) / duration;
  
        const translateY = initialY - (amplitude * Math.abs(Math.sin(2 * Math.PI * frequency * progress)));
        const translateX = initialX + (distance * progress);
  
        $(characterContainer).css({
          transform: `translate(${translateX}px, ${translateY}px)`
        });
  
        if (elapsedTime < duration) {
          requestAnimationFrame(animationLoop);
        }
      };
  
      animationLoop();
    } else {
      console.error('Character container element not found');
    }
  }
  
  
  // Shows flat bottom of character sprite
  function sineAnimation(direction = 'right', distance = 100, duration = 1000, frequency = 1, amplitude = 50) {
    if (characterSprite) {
      // Fetching initial transform values
      const initialTransform = $(characterContainer).css('transform');
      let initialX = 0;
      let initialY = 0;
  
      if (initialTransform !== 'none') {
        const values = initialTransform.split('(')[1].split(')')[0].split(',');
        initialX = parseFloat(values[4]);
        initialY = parseFloat(values[5]);
      }
  
      // Fetch time at function call
      const startTime = new Date().getTime();
  
      // Perform animation loop
      const animationLoop = () => {
        // Fetch increasing values from passing time
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        const progress = (elapsedTime % duration) / duration; // Normalize elapsed time (1 = 1 second)
  
        // Calculate vertical position using sine wave function
        const translateY = initialY + amplitude * Math.sin(2 * Math.PI * frequency * progress);
  
        // Calculate horizontal position linearly (distance * progress)
        let translateX;
        if (direction === 'right' || direction === 'r') {
          translateX = initialX + (distance * progress);
        } else if (direction === 'left' || direction === 'l') {
          translateX = initialX - (distance * progress);
        }
  
        // console.log("marginLeftValue: " + marginLeftValue);
        // console.log("marginTopValue: " + marginTopValue);
        // console.log("Progress: " + progress);

        // Translate the sprite
        $(characterContainer).css({
          transform: `translate(${translateX}px, ${translateY}px)`
        });
  
        // Repeat animation loop until duration reached
        if (elapsedTime < duration) {
          requestAnimationFrame(animationLoop);
        }
      };
  
      // Start animation loop
      animationLoop();
    } else {
      console.error('Character container element not found');
    }
  }
  

  function scaredAnimation(distance = 50, duration = 200) {
    if (characterSprite) {
      let marginTopValue = '-=' + distance + 'px';

      $(characterSprite).animate(
        { marginTop: marginTopValue },
        duration / 2, // Duration for moving UP
        function() {
          // Callback: Move back DOWN after moving UP
          $(this).animate(
            { marginTop: '+=' + distance + 'px' }, // Move back down
            duration / 2
          );
        }
      );
    } else {
      console.error('Character sprite element not found');
    }
  }

  // Doesn't work well
  function spinAnimation(duration = 1000, repeatCount = 1) {
    if (characterSprite) {
      let currentCount = 0;

      function animate() {
        $(characterSprite).animate(
          { rotation: '+=360deg' }, // Rotate by 360 degrees
          {
            duration: duration,
            step: function(now) {
              $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            easing: 'linear',
            complete: function() {
              currentCount++;
              if (currentCount < repeatCount || repeatCount === -1) {
                animate(); // Repeat animation
              }
            }
          }
        );
      }
      animate(); // Start animation
    } else {
      console.error('Character sprite element not found');
    }
  }

  function shakeAnimation(distance = 10, duration = 100, repeat = 2) {
    if (characterSprite) {
      for (let i = 0; i < repeat; i++) {
        $(characterSprite).animate({ marginLeft: '+=' + distance + 'px' }, duration)
                          .animate({ marginLeft: '-=' + (distance * 2) + 'px' }, duration * 2)
                          .animate({ marginLeft: '+=' + distance + 'px' }, duration);
      }
    } else {
      console.error('Character sprite element not found');
    }
  }

  function moveLeft(distance = 250, duration = 500) {
    if (characterSprite) {
      let currentTransform = $(characterContainer).css('transform');
      let currentX = currentTransform !== 'none' ? parseFloat(currentTransform.split(',')[4]) : 0;
      let newX = currentX - distance;
  
      $(characterContainer).css('transition', `transform ${duration}ms`);
      $(characterContainer).css('transform', `translate(${newX}px, -50%)`);
    } else {
      console.error('Character sprite element not found');
    }
  }

  function moveRight(distance = 250, duration = 500) {
    if (characterSprite) {
      let currentTransform = $(characterContainer).css('transform');
      let currentX = currentTransform !== 'none' ? parseFloat(currentTransform.split(',')[4]) : 0;
      let newX = currentX + distance;
  
      $(characterContainer).css('transition', `transform ${duration}ms`);
      $(characterContainer).css('transform', `translate(${newX}px, -50%)`);
    } else {
      console.error('Character sprite element not found');
    }
  }
  

  function moveDown(distance = 100, duration = 500) {
    if (characterSprite) {
      let marginTopValue = '+=' + distance + 'px';
      $(characterSprite).animate({ marginTop: marginTopValue }, duration);
    } else {
      console.error('Character sprite element not found');
    }
  }

  function resetSpriteY(duration = 500) {
    if(characterSprite){
      $(characterSprite).animate({ marginTop: 0 }, duration);
    } else {
      console.error('Character sprite element not found');
    }
  }

  function resetSpriteX(duration = 500) {
    if (characterSprite && characterContainer) {
      // Reset the character sprite's position
      $(characterSprite).animate({ marginLeft: 0 }, duration);
  
      // Reset the character container's position
      $(characterContainer).css('transition', `transform ${duration}ms`);
      $(characterContainer).css('transform', 'translate(-50%, -50%)');
    } else {
      if (!characterSprite) {
        console.error('Character sprite element not found');
      }
      if (!characterContainer) {
        console.error('Character container element not found');
      }
    }
  }
  

  function changeSprite(spritePath, duration = 0) {
    if (characterSprite != null) {
      $(characterSprite).fadeOut(duration, function () {
        characterSprite.src = spritePath;
      });

      // If character container isn't default position, reset it to default
      if($(characterSprite).css('marginLeft') !== '0px'){
        resetSpriteX(0);
      }
    
      $(characterSprite).fadeIn(duration);
    } else {
      console.error('Character sprite element not found or not passed into the function.');
    }
  }

  function showSprite(fadeInDuration = 0){
    $(characterSprite).fadeIn(fadeInDuration);
  }
  function hideSprite(fadeOutDuration = 0){
    $(characterSprite).fadeOut(fadeOutDuration);
  }

  //? Validation Functions

  function isValidSelector(selector) {
    try {
      return document.querySelector(selector);

    } catch (error) {
      return false;
    }
  }

  function isValidImage(imagePath) {
    const img = new Image();
    img.src = imagePath;
    return img.complete && img.naturalWidth !== 0; // Checks if image's natural width exists
  }

  //? Overlay Functions

  let magnified = false;

  function demagnifyItem() {
    if ($(magnifyItemOverlay).hasClass('active')) {
      fadeOutBlack()
      fadeOutOverlay(magnifyItemOverlay);

      if(currentSpritePath !== null) showSprite(250);
      showTextbox(250);
    }
    magnified = false;
  }

  function magnifyItem(itemURL) {
    if (hasTextLoaded) {
      hideAllContainers(50,50);


      clickSFX.play()
      setTimeout(() => {
        if (!$(magnifyItemOverlay).hasClass('active')) {
          NoOverlayToOverlay(magnifyItemOverlay, itemURL);
          $(blackOverlay).fadeTo(1000, 0.65);
        }
      }, 250);
  
      setTimeout(() => {
        magnified = true;
      }, 100);
    }
  }

  document.addEventListener('click', function() {
    if(magnified) demagnifyItem();
  });

  function fadeToOverlay(newOverlayUrl, selectedOverlay = '.FXOverlay',) {

    if (!$(selectedOverlay).hasClass('active')) {
      NoOverlayToOverlay(selectedOverlay, newOverlayUrl);
    } else {
      OverlayToOverlay(selectedOverlay, newOverlayUrl)
    }
  }

  function fadeOutOverlay(selectedOverlay = '.FXOverlay') { // Duplicate Function for easier readability
    OverlayToNoOverlay(selectedOverlay);
  }

  function NoOverlayToOverlay(selectedOverlay = '.FXOverlay', imageUrl = blackOverlay) {
    $(selectedOverlay).css('background-image', `url(${imageUrl})`).addClass('active');
  }

  function OverlayToNoOverlay(selectedOverlay) {
    $(selectedOverlay).removeClass('active');
  }

  function OverlayToOverlay(selectedOverlay, newOverlayUrl) {
    let transitionSpeed = 650

    OverlayToNoOverlay(selectedOverlay);
    let transitionDuration = parseFloat($(selectedOverlay).css('transition-duration')) * transitionSpeed;


    setTimeout(function() {
      // Execute the second function after the calculated duration
      NoOverlayToOverlay(selectedOverlay, newOverlayUrl);
    }, transitionDuration);
  }

  //? Black Overlay Functions
  function fadeToBlack(duration = 1000) {
    $(blackOverlay).fadeIn(duration);
  }

  function fadeOutBlack(duration = 1000) {
    $(blackOverlay).fadeOut(duration);
  }

  //? Dialogue Box Functions


  function textboxClickableOn() {
    dialogueBoxElement.style.cursor = 'pointer'
    dialogueBoxElement.style.backgroundColor = '#ffcdc9'
  }

  function textboxClickableOff() {
    dialogueBoxElement.style.cursor = 'auto'
    dialogueBoxElement.style.backgroundColor = '#ffcdc9'
  }

  function hideTextbox(delay = 500) { // Also removes container interactivity
    $(dialogueBoxElement).animate({
      opacity: 0,
      marginLeft: "-200px",
    }, delay, function() {
      $(this).css({
        display: 'none',
        marginLeft: 0
      });
    });
  }

  function showTextbox(delay = 500) { // Also Reveals interactivity
    $(dialogueBoxElement).css({
      display: 'block',
      opacity: 0,
    }).animate({
      opacity: 1,
    }, delay);
  }

  function hideAllContainers(spriteDelay = 1000, dialogueBoxDelay = 500) {
    hideTextbox(spriteDelay);
    hideSprite(dialogueBoxDelay);
  }

  function showAllContainers(spriteDelay = 1000, dialogueBoxDelay = 500) {
    showTextbox(spriteDelay);
    showSprite(dialogueBoxDelay);
  }

  //? Audio Functions
  function fadeAudio(newVolume, audio = sinclairTheme, duration = 3000, defaultOldVolume = audio.volume) {
        audio.volume = defaultOldVolume;
        $(audio).animate({volume: newVolume}, {
          duration: duration,
          step: function() { audio.volume = this.volume; }
        });
  }

  function playAudioOnTransition(audio) { // Bypass Chrome's autoplay restriction
    $(document).on('click', playAudio);
    let userInteracted = false

    function playAudio() { 
      if(userInteracted) return;
      audio.play();
      userInteracted = true
    }
  }


//* Dialogue Manager //

  function changeText(textID) {
    if (hasTextLoaded() === false) {
      return;
    } else {
      showTextID(textID);
    }
  }

  //? Show Text

  // Function to show text based on text ID
  function showTextID(textID) {

      // Keep track of textID
      currentTextID = textID;
      sceneManager();
      textTreeManager();
  
      // Check if textTree has finished
      if (currentTextID > currentTextTree.length) {
        console.log("Text Tree Finished");
        return;
      }

  
      // Find the node in the current text tree
      currentNode = currentTextTree.find((node) => node.id === textID);
      console.log(currentNode);
      textboxClickableOff();

      // Set characterName
      characterNameElement.innerText = currentNode.characterName;
  
      // Set character sprite if provided
      if (currentNode.characterName && Object.keys(sprites).includes(currentNode.characterName)) {
          let characterExpression = currentNode.characterExpression || "default"; // Set characterExpression to 'default' if it's empty or not provided
          const characterSpritePath = sprites[currentNode.characterName][characterExpression]; // Get spritePath based on characterName and characterExpression
  
          // If sprite is different, transition to new sprite
          if (characterSpritePath !== currentSpritePath) {
              showTextbox();
              changeSprite(characterSpritePath);
              currentSpritePath = characterSpritePath; // Update current sprite path
          }
      } else {
          // If no characterName is provided or no sprite found, hide sprite
          showTextbox(0);
          currentSpritePath = null; // Reset the current sprite path
      }
  
      // Removes all button elements
      while (optionButtonsElement.firstChild) {
          optionButtonsElement.removeChild(optionButtonsElement.firstChild);
      }
  
      // Animate text depending on textspeed field
      animateText(currentNode.textSpeed ? textSpeeds[currentNode.textSpeed] : textSpeeds['default']);
  }
  
  function hasTextLoaded() {
    // .innerHTML doesn't work for special characters

    if(currentNode){
      return dialogueTextElement.innerHTML.length === currentNode.text.length;
    } else {
      return true;
    }
}


  function dialogueBoxClickHandler(event) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.classList);

    //? Ignore clicks on interactable objects
    if(event.target.parentElement.classList.contains('interactableObject')){
      return;
    }
    //? Ignore clicks when textBox isnt shown
    if (dialogueBoxElement.style.display === 'none') {
      return;
    }
  
    if (hasTextLoaded() === true && currentNode.options.length === 0 && currentNode != null && magnified === false) {
      clickSFX.play();
      showTextID(currentTextID + 1);

      console.log("1a");
    } else if (hasTextLoaded() === true && currentNode.options.length > 0 && currentNode != null) {
      console.log("2a");

    } else if (hasTextLoaded() === false && currentNode != null) {

      clearInterval(revealTextInterval);
      dialogueTextElement.innerHTML = currentNode.text;
      populateButtons()

      console.log("3a");
    }
  }

  //? Messing with JS Events and inputManager

  function dialogueBoxEventHandler(event) {
    if (event.type === 'click' || event.key === ' ') {

      dialogueBoxClickHandler(event);
    }
  }

  function populateButtons() {
    if (currentNode.options.length > 0) {
      currentNode.options.forEach((option, index) => {
        if (showOption(option)) {
          const button = document.createElement("button");
          button.innerText = option.text;
          button.classList.add("btn");
          button.addEventListener("click", () => {
            selectOption(option);
            button.blur(); // Unfocus button after selected
          });
          optionButtonsElement.appendChild(button);

          // Adding tabindex makes the button element focusable
          button.setAttribute('tabindex', '0');

          button.addEventListener('keydown', (event) => {
            const buttons = Array.from(optionButtonsElement.querySelectorAll('button'));

            // Arrow keys and WASD Input Manager
            if ((event.key === 'ArrowDown' || event.key === 's') && index < buttons.length - 2) {
              const nextIndex = (index + 2) % buttons.length;
              buttons[nextIndex].focus();
            } else if ((event.key === 'ArrowUp' || event.key === 'w') && index >= 2) {
              const prevIndex = (index - 2 + buttons.length) % buttons.length;
              buttons[prevIndex].focus();
            } else if ((event.key === 'ArrowLeft' || event.key === 'a') && (index != 0 && index % 2 === 1)) {
              const nextIndex = (index - 1) % buttons.length;
              buttons[nextIndex].focus();
            } else if ((event.key === 'ArrowRight' || event.key === 'd') && (index != buttons.length - 1 && index % 2 === 0)) {
              const nextIndex = (index + 1) % buttons.length;
              buttons[nextIndex].focus();
            }
          });
        }
      });

      // Focus only first button
      const firstButton = optionButtonsElement.querySelector('button');
      if (firstButton) {
        firstButton.focus();
      }
    }
  }

  function unfocusButton() {
    const focusedButton = document.activeElement;
    if (focusedButton && focusedButton.classList.contains('btn')) {
      focusedButton.blur();
    }
  }


  // Reveal Text char by char
  let revealTextInterval;

  function animateText(textSpeed) {

    // Clear previous content of dialogueTextElement
    dialogueTextElement.innerHTML = "";

    const text = currentNode.text;
    let currentIndex = 0;
    revealTextInterval = setInterval(() => {

      textScrollSFX.play();

      const currentChar = text[currentIndex];
      if (currentChar === " ") {
        dialogueTextElement.textContent += " "; // element.innerText += " " doesn't work for some reason
      } else {
        dialogueTextElement.textContent += currentChar;
      }
      currentIndex++;

      // console.log(text[currentIndex]);
      // console.log('|' + dialogueTextElement.innerText + '|');

      if (currentIndex >= text.length) {
        populateButtons()
        clearInterval(revealTextInterval);
      }
    }, textSpeed);
  }


  //? ShowText Logic
  function proceedIfNoOptions() {
    clickSFX.play()
    // Increment textNodeIndex and show next text node
      showTextID(currentTextID + 1)
      // Remove the event listener after it's clicked once
      dialogueBoxElement.removeEventListener('click', proceedIfNoOptions)
      console.log("test'");
  }

  function showOption(option) {
    return option.required == null || option.required(state)
  }

  function selectOption(option) {
    clickSFX.play()
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setInventory)
    totalPoints += option.points;

    setTimeout(() => {
      showTextID(nextTextNodeId)
    }, 20);
  }


//* Dialogue Input //

  //? Helper for data input
  const reqState = (state) => (currentState) => currentState[state];


  const textTree_1 = [
  {
    id: 1,
    characterName: 'Me',
    characterExpression: '',
    text: "AH WHAT AN EXQUISITE DAY THIS IS! The sun's golden rays illuminate the world in a most spectacular formation!",
    textSpeed: 'default',
    options: [

    ]
  },
  {
    id: 2,
    characterName: 'Me',
    characterExpression: '', 
    text: 'To revel in the joys of existence and bask in the freedom of living as one pleases! Ah, truly there is no greater privilege.',
    textSpeed: 'default',
    options: [

    ]
  },
  {
    id: 3,
    characterName: '',
    characterExpression: '', 
    text: '(The room is adorned with extravagant furnishings and intricate decor)',
    textSpeed: 'fast',
    options: [

    ]
  },
  {
    id: 4,
    characterName: 'Me',
    characterExpression: '', 
    text: 'Perfection is an art form.',
    textSpeed: 'default',
    options: [

    ]
  },
  {
    id: 5,
    characterName: '',
    characterExpression: '', 
    text: '(Hugo Sinclair meticulously arranges his designer attire, each movement more precise than the last)',
    textSpeed: 'fast',
    options: [

    ]
  },
  {
    id: 6,
    characterName: 'Me',
    characterExpression: '', 
    text: 'At 08:00 I shall perform the grooming routine and take on my gentlemanly responsibilities.',
    textSpeed: 'default',
    options: [

    ]
  },
  {
    id: 7,
    characterName: '',
    characterExpression: '', 
    text: '(You wait 0 minutes and 37 seconds before your watch hits 8:00 and then move to the bathroom)',
    textSpeed: 'default',
    options: [

    ]
  },
  {
    id: 8,
    characterName: '',
    characterExpression: '', 
    text: '(You gaze upon the reflection of the floor-length mirror)',
    textSpeed: 'default',
    options: [

    ]
  },
  {
    id: 9,
    characterName: 'Me',
    characterExpression: '', 
    text: "Hm, there seems to be a bit of fog in the mirror (Click to enhance!)",
    textSpeed: 'default',
    options: [

    ]
  },
  {
    id: 10,
    characterName: '',
    characterExpression: '', 
    text: "(There he is. Hugo Sinclair in the flesh)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 11,
    characterName: 'Me',
    characterExpression: '', 
    text: '(feels satisfied)',
    textSpeed: 'default',
    options: []
  },
  {
    id: 12,
    characterName: '',
    characterExpression: '', 
    text: "(Legend has it, his taste buds are so revered, they're rumored to possess their own fan club)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 13,
    characterName: '',
    characterExpression: '', 
    text: "(Palate Paladins they're called)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 14,
    characterName: 'Me',
    characterExpression: '', 
    text: 'Flawless.',
    textSpeed: 'default',
    options: []
  },
  {
    id: 15,
    characterName: '',
    characterExpression: '', 
    text: "(Feeling satisfied with the mirror's architectural brilliance, you head downstairs)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 16,
    characterName: '???',
    characterExpression: '', 
    text: "Oh you're awake Mr Sinclair",
    textSpeed: 'default',
    options: []
  },
  {
    id: 17,
    characterName: '???',
    characterExpression: '', 
    text: "I didn't know you'd be awake so early.",
    textSpeed: 'default',
    options: []
  },
  {
    id: 18,
    characterName: '???',
    characterExpression: '', 
    text: "I'll get the food prepared for you immediately!",
    textSpeed: 'default',
    options: []
  },
  {
    id: 19,
    characterName: 'Me',
    characterExpression: '', 
    text: "IT'S YOUR FIRST DAY AS MY ASSISTANT AND YOU'RE ALREADY LATE FOR SERVICE!?",
    textSpeed: 'fast',
    options: []
  },
  {
    id: 20,
    characterName: 'Assistant',
    characterExpression: 'nervous', 
    text: "i thought you said you'd come down at 9",
    textSpeed: 'slow',
    options: []
  },
  {
    id: 21,
    characterName: 'Me',
    characterExpression: '', 
    text: "ALWAYS BE READY FOR UNFORSEEN VARIATIONS IN MY RIGOROUS WAKE UP ROUTINE! THAT'S MY NUMBER 1 MOTTO",
    textSpeed: 'fast',
    options: []
  },
  {
    id: 22,
    characterName: 'Assistant',
    characterExpression: 'surprised', 
    text: "but it's only 8:03",
    textSpeed: 'slow',
    options: []
  },
  {
    id: 23,
    characterName: 'Me',
    characterExpression: '', 
    text: "OH IT'S 8:03 YEAH? WELL I COULD'VE ATE OH... 3 DISHES BY NOW IF YOU STOPPED TALKING AND PREPARED THE DISH",
    textSpeed: 'fast',
    options: []
  },
  {
    id: 24,
    characterName: 'Assistant',
    characterExpression: 'disgust', 
    text: "OKAY I'LL BE RIGHT BACK",
    textSpeed: 'default',
    options: []
  },
  {
    id: 25,
    characterName: 'Assistant',
    characterExpression: 'disgust', 
    text: "wait that's left",
    textSpeed: 'default',
    options: []
  },
  {
    id: 26,
    characterName: 'Me',
    characterExpression: '', 
    text: "And for the record, it's actually 8:05 mister",
    textSpeed: 'default',
    options: []
  },
  {
    id: 27,
    characterName: 'Me',
    characterExpression: '', 
    text: "It's inexcusable to be inaccurate with time",
    textSpeed: 'default',
    options: []
  },
  {
    id: 28,
    characterName: '',
    characterExpression: '', 
    text: "(You go downstairs...  It's 8:09)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 29,
    characterName: 'Me',
    characterExpression: '', 
    text: "Why do all my assistants lack punctuality?",
    textSpeed: 'default',
    options: []
  },
  {
    id: 30,
    characterName: '',
    characterExpression: '', 
    text: "(You walk down the stairs in mild frustration)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 31,
    characterName: 'Me',
    characterExpression: '', 
    text: "today's youth... i...",
    textSpeed: 'default',
    options: []
  },
  {
    id: 32,
    characterName: '',
    characterExpression: '', 
    text: "(For some reason, you feel a compulsion to apologize)",
    textSpeed: 'default',
    options: [
      {
        text: 'Wait for the meal',
        setInventory: {apologize:false},
        points: -1,
        nextText: 55
      },
      {
        text: 'Stay and join your Assistant in the kitchen',
        setInventory: {apologize:true},
        points: 1,
        nextText: 33
      },
    ]
  },
  {
    id: 33,
    characterName: '',
    characterExpression: '', 
    text: "...",
    textSpeed: 'default',
    options: []
  },
  {
    id: 34,
    characterName: 'Me',
    characterExpression: '', 
    text: "i... I really had best not come...",
    textSpeed: 'default',
    options: []
  },
  {
    id: 35,
    characterName: 'Assistant',
    characterExpression: 'nervous', 
    text: "My Sinclair Sir, I've been told the food will be delivered to you in 10 minutes",
    textSpeed: 'default',
    options: []
  },
  {
    id: 36,
    characterName: 'Me',
    characterExpression: '', 
    text: "Can't it come any faster?",
    textSpeed: 'default',
    options: []
  },
  {
    id: 37,
    characterName: 'Assistant',
    characterExpression: 'default', 
    text: "It can, but the food would be undercooked then.",
    textSpeed: 'default',
    options: []
  },
  {
    id: 38,
    characterName: 'Me',
    characterExpression: '', 
    text: "(he has a point...)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 39,
    characterName: 'Me',
    characterExpression: '', 
    text: "Alright then, I shall await the meal",
    textSpeed: 'default',
    options: []
  },
  {
    id: 40,
    characterName: 'Assistant',
    characterExpression: 'happy', 
    text: "Okay! I'll be right back!",
    textSpeed: 'default',
    options: []
  },
  {
    id: 41,
    characterName: 'Assistant',
    characterExpression: 'default', 
    text: "Oh, I almost forgot, I found an something on the floor",
    textSpeed: 'default',
    options: []
  },
  {
    id: 42,
    characterName: 'Assistant',
    characterExpression: 'default', 
    text: "An invitation to a 'Culinary Carnival'",
    textSpeed: 'slow',
    options: []
  },
  {
    id: 43,
    characterName: 'Assistant',
    characterExpression: 'default2', 
    text: "I thought you'd maybe wanna join",
    textSpeed: 'default',
    options: [
      {
        text: "Tis' the hour for the consumption of artisanal flatbreads.",
        setInventory: {scroll:true},
        points: 0,
        nextText: 55
      },
      {
        text: 'Throw the invitation away',
        setInventory: {},
        points: 0,
        nextText: 51
      },
    ]
  },
  {
    id: 44,
    characterName: 'Me',
    characterExpression: '', 
    text: "kids...",
    textSpeed: 'default',
    options: []
  },
  {
    id: 45,
    characterName: '',
    characterExpression: '', 
    text: "(You've been invited to join a culinary event)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 46,
    characterName: 'Me',
    characterExpression: '', 
    text: "(For some reason, you feel guilty towards your newly appointed assistant)",
    textSpeed: 'default',
    options: [
      {
        text: 'I should apologize to him. I was acting irrationally',
        setInventory: {},
        points: 1,
        nextText: 33
      },
      {
        text: 'It is now the designated hour for the consumption of artisanal flatbreads.',
        setInventory: {scroll:true, apologize:false},
        points: -1,
        nextText: 55
      },
    ]
  },
  {
    id: 47,
    characterName: '',
    characterExpression: '', 
    text: "(A not very inconspicuously placed event invitation rests on the floor)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 48,
    characterName: 'Me',
    characterExpression: '', 
    text: "...",
    textSpeed: 'default',
    options: []
  },
  {
    id: 49,
    characterName: 'Me',
    characterExpression: '', 
    text: "what do we have here?",
    textSpeed: 'slow',
    options: []
  },
  {
    id: 50,
    characterName: 'Me',
    characterExpression: '', 
    text: "I suppose I can allocate a portion of my schedule to accommodate this",
    textSpeed: 'default',
    options: [
      {
        text: 'Pick up the scroll',
        setInventory: {scroll:true},
        points: 0,
        nextText: 55
      },
      {
        text: 'Throw the scroll away',
        setInventory: {},
        points: 0,
        nextText: 51
      },
    ]
  },
  {
    id: 51,
    characterName: 'Me',
    characterExpression: '', 
    text: "... !",
    textSpeed: 'slow',
    options: []
  },
  {
    id: 52,
    characterName: 'Me',
    characterExpression: '', 
    text: "(you gently place the scroll in the bin)",
    textSpeed: 'slow',
    options: []
  },
  {
    id: 53,
    characterName: 'Me',
    characterExpression: '', 
    text: "Littering is unacceptable",
    textSpeed: 'fast',
    options: []
  },
  {
    id: 54,
    characterName: 'Me',
    characterExpression: '', 
    text: "(You're proud of your upstanding decision making skills)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 55,
    characterName: '',
    characterExpression: '', 
    text: "(Having devoured your morning meal, you feel rejuvinated)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 56,
    characterName: 'Me',
    characterExpression: '', 
    text: "The chefs always do a splendid job",
    textSpeed: 'default',
    options: []
  },
  {
    id: 57,
    characterName: '',
    characterExpression: '', 
    text: "(That's why you hired them)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 58,
    characterName: '',
    characterExpression: '', 
    text: "(Having searched the town for all the local talent, Hugo Sinclair found himself a star lineup.)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 59,
    characterName: '',
    characterExpression: '', 
    text: "(And recently, he acquired his second michellin star for his restaurant: Monsieur Sinclair's Exquisite Dining and Grand Culinary Emporium)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 60,
    characterName: '',
    characterExpression: '', 
    text: "(Nobody in the town has ever received a culinary award of this magnitude)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 61,
    characterName: '',
    characterExpression: '', 
    text: "(Let alone receive 2 michellin stars in only 3 months since opening)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 62,
    characterName: '',
    characterExpression: '', 
    text: "(So, Hugo's been the talk of the town as THIS TOWN of all places is where the legendary food critic Hugo Sinclair decides to present HIS vision of gastronomy)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 63,
    characterName: '???',
    characterExpression: '', 
    text: "waaaiit Sinclair Sir.",
    textSpeed: 'slow',
    options: []
  },
  {
    id: 64,
    characterName: 'Assistant',
    characterExpression: 'nervous', 
    text: "Phew! I thought you'd left already",
    textSpeed: 'default',
    options: []
  },
  {
    id: 65,
    characterName: 'Assistant',
    characterExpression: 'default', 
    text: "Your chariot awaits Sir Sinclair",
    textSpeed: 'default',
    options: []
  },
  {
    id: 66,
    characterName: 'Me',
    characterExpression: '', 
    text: "Monsieur Sinclair. You shall address me as Monseiur Sinclair",
    textSpeed: 'default',
    options: []
  },
  {
    id: 67,
    characterName: 'Assistant',
    characterExpression: 'default2', 
    text: "I understand Monseiur Sinclair. Sorry about that",
    textSpeed: 'default',
    options: []
  },
  {
    id: 68,
    characterName: '',
    characterExpression: '', 
    text: "(A breeze blows the scent of retribution)",
    textSpeed: 'default',
    options: [
      {
        text: 'Apologize for the morning',
        setInventory: {apologize:true},
        points: 0,
        nextText: 69
      },
      {
        text: 'Dwell in silence',
        setInventory: {apologize:false},
        points: 0,
        nextText: 72
      },
    ]
  },
  {
    id: 69,
    characterName: 'Me',
    characterExpression: '', 
    text: "I should apologize for this morning",
    textSpeed: 'default',
    options: []
  },
  {
    id: 70,
    characterName: 'Me',
    characterExpression: '', 
    text: "It was ungentlemanly of me",
    textSpeed: 'default',
    options: []
  },
  {
    id: 71,
    characterName: 'Assistant',
    characterExpression: 'default2', 
    text: "That's ok. I'm used to it.",
    textSpeed: 'default',
    options: []
  },
  {
    id: 72,
    characterName: '',
    characterExpression: '', 
    text: "(You pause a moment and...)",
    textSpeed: 'default',
    options: [
      {
        text: 'Give your assistant a free meal at your restaurant',
        required: reqState('apologize'),
        setInventory: {assistant:true},
        points: 2,
        nextText: 73
      },
      {
        text: 'Talk about your restaurant',
        required: reqState('scroll'),
        points: 0,
        nextText: 76
      },
      {
        text: 'Enter the vehicle',
        setInventory: {},
        points: 0,
        nextText: 77
      },
    ]
  },
  {
    id: 73,
    characterName: 'Assistant',
    characterExpression: 'happy', 
    text: "Thank you so much!",
    textSpeed: 'default',
    options: []
  },
  {
    id: 74,
    characterName: 'Assistant',
    characterExpression: 'default', 
    text: "I've always wanted to dine at your restaurant Monseur Sinclair but I could never afford it",
    textSpeed: 'default',
    options: []
  },
  {
    id: 75,
    characterName: 'Assistant',
    characterExpression: 'default2', 
    text: "Now I finally get to try it out.",
    textSpeed: 'default',
    options: []
  },
  {
    id: 76,
    characterName: 'Assistant',
    characterExpression: 'disgust', 
    text: "Jeez, it's booked for weeks",
    textSpeed: 'default',
    options: []
  },
  {
    id: 77,
    characterName: '',
    characterExpression: '', 
    text: "(You set off towards Pelican Bay)",
    textSpeed: 'default',
    options: []
  },
  {
    id: 78,
    characterName: 'Assistant',
    characterExpression: 'happy', 
    text: "Enjoy the visit to Pelican Bay, Sinclair Sir",
    textSpeed: '',
    options: []
  },
  {
    id: 79,
    characterName: '',
    characterExpression: '', 
    text: "(Forgetting that he called you Sir again, Pelican Bay is a picturesque coastal town known for its serene beaches, charming waterfront, and abundant pelican sightings)",
    textSpeed: '',
    options: []
  },
  {
    id: 80,
    characterName: '',
    characterExpression: '', 
    text: "(Food journals cite the variety of acclaimed restaurants here too)",
    textSpeed: '',
    options: []
  },
  {
    id: 81,
    characterName: 'Me',
    characterExpression: '', 
    text: "Ah, Pelican Bay, indeed. Let us indulge in a thorough exploration of the myriad delights and esteemed offerings you present.",
    textSpeed: '',
    options: []
  },

  ]

  const textTree_2 = [
    {
        "id": 1,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your sleek ride glides into the picturesque coastal town, its engine whispering against the cobblestone streets)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 2,
        "characterName": "",
        "characterExpression": "",
        "text": "(You step out, the finely tailored suit commanding attention amidst the quaint surroundings)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 3,
        "characterName": "Me",
        "characterExpression": "",
        "text": "What a charming little hamlet!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 4,
        "characterName": "",
        "characterExpression": "",
        "text": "(A local, weathered by the sea, looks up from his work, eyeing you with a mixture of curiosity and wariness)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 5,
        "characterName": "???",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 6,
        "characterName": "Local",
        "characterExpression": "default2",
        "text": "You lost, city boy?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 7,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your lips curl in disgust as you attempt survey the boy's rough attire)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 8,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Hardly. I'm merely passing through",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 9,
        "characterName": "Local",
        "characterExpression": "seriously",
        "text": "(chuckles)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 10,
        "characterName": "Local",
        "characterExpression": "",
        "text": "Passing through, eh?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 11,
        "characterName": "Local",
        "characterExpression": "default2",
        "text": "Don't get many fancy pants types like yourself around here.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 12,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your gaze hardens, your tone dripping with condescension and condensation)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 13,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Consider yourself fortunate then",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 14,
        "characterName": "Me",
        "characterExpression": "",
        "text": "And you dear fellow, your attire does indeed evoke a certain rustic charm, one might suggest that it resembles the wardrobe of a scarecrow",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 15,
        "characterName": "Local ",
        "characterExpression": "",
        "text": "okay...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 16,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, dear boy, your face bears a striking resemblance to an artist's first attempt at capturing human form. One might even suggest that a child armed with a crayon could render a more flattering likeness.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 17,
        "characterName": "Local",
        "characterExpression": "clothes",
        "text": "Alright, no need to get all supercalifragilistic about it.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 18,
        "characterName": "Local",
        "characterExpression": "clothes",
        "text": "Just don't expect us to roll out the red carpet for you. You're not the type of people, that are very welcome around here.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 19,
        "characterName": "Local",
        "characterExpression": "clothes",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 20,
        "characterName": "",
        "characterExpression": "",
        "text": "You continue to stride purposefully down the quiet street.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 21,
        "characterName": "???",
        "characterExpression": "",
        "text": "(from afar) City folk. ",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 22,
        "characterName": "???",
        "characterExpression": "",
        "text": "Always in such a hurry, they forget where the rest of the world comes from.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 23,
        "characterName": "Me",
        "characterExpression": "",
        "text": ".........",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 24,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I suppose I shall venture towards the location",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 25,
        "characterName": "Me",
        "characterExpression": "",
        "text": "The restaurant is nearby",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 26,
        "characterName": "Me",
        "characterExpression": "",
        "text": "So, here it is.",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 27,
        "characterName": "Me",
        "characterExpression": "",
        "text": "The chef everybody's been praising as of late.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 28,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Let us endeavor to discern whether Alexander Fontaine's culinary prowess is as genuine as a diamond in the rough or merely a facade crafted from fool's gold",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 29,
        "characterName": "???",
        "characterExpression": "",
        "text": "Welcome Sir",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 30,
        "characterName": "???",
        "characterExpression": "",
        "text": "I trust you'll find something to your liking on our menu",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 31,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your expression remains unchanged... and to your annoyance, as does his)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 32,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Your critical eye scans the restaurant's decor with thinly veiled disdain",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 33,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(Hauntingly) We shall see, won't we...",
        "textSpeed": "slow",
        "options": []
    },
    {
      "id": 34,
      "characterName": "Me",
      "characterExpression": "",
      "text": "Alexander Fontaine",
      "textSpeed": "slow",
      "options": []
    },
    {
        "id": 35,
        "characterName": "Fontaine",
        "characterExpression": "drunk",
        "text": "(Chuckles nervously)",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 36,
        "characterName": "",
        "characterExpression": "",
        "text": "(Alexander leads you to a table at the patio)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 37,
        "characterName": "Fontaine ",
        "characterExpression": "",
        "text": "Here's your seat.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 38,
        "characterName": "",
        "characterExpression": "",
        "text": "As you sit down, you feel the urge to remark:",
        "textSpeed": "",
        "options": [
          {
            text: "Let's hope your food is more palatable than your service",
            setInventory: {bad:true},
            points: 0,
            nextText: 91
          },
          {
            text: "Hah, you sure are a charming one.",
            setInventory: {neutral:true},
            points: 0,
            nextText: 65
          },
          {
            text: "Thank you, Mr. Fontaine. I'm eager to sample your culinary creations.",
            setInventory: {good:true},
            points: 3,
            nextText: 39
          },
        ]
    },
    {
      "id": 39,
      "characterName": "Me",
      "characterExpression": "",
      "text": "Thank you, Mr. Fontaine. I'm eager to sample your culinary creations.",
      "options": []
    },
    {
        "id": 40,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "I assure you sir, our dishes never fail to disappoint",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 41,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "wait... uhm so, what would you like?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 42,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I think i'll have the three best dishes you can offer.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 43,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "... I'm sorry?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 44,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'll have the dishes best dishes you can offer. Whatever your best dishes are for Entree, Main and Desert, I'll like to order that.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 45,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "i... I'm not sure if I'm allowed t...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 46,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(mildly frustrated)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 47,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "Okay, I'll get it ready for you as soon as possible",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 48,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "wait wrong way",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 49,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 50,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "... hi",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 51,
        "characterName": "Me",
        "characterExpression": "",
        "text": "?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 52,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "uh... bye",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 53,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(what a strange character)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 54,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(I wonder how he's survived as a chef)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 55,
        "characterName": "",
        "characterExpression": "",
        "text": "(14 minutes and 2 seconds later, the appetizers are served)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 56,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "Here you are. Entree: Seafood Ceviche served with Lemon Butter sauce",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 57,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(Eyes the first dish with a critical gaze)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 58,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A promising start, Mr Fontaine. Let's see if it lives up to expectations.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 59,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(pulls out pocket watch)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 60,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, 14 minutes and 2 seconds. Not bad.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 61,
        "characterName": "",
        "characterExpression": "",
        "text": "(You take your first bite... Your expression thoughtful before turning sour)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 62,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(tilts head) The flavors are... interesting and the seasoning is far too heavy-handed. Though I must admit, the presentation is fabulous.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 63,
        "characterName": "",
        "characterExpression": "",
        "text": "(He nods. Masking his disappointment with a tight smile)",
        "textSpeed": "",
        "options": [

        ]
    },
    {
        "id": 64,
        "characterName": "",
        "characterExpression": "",
        "text": "(You gaze into the hedge contemplatively as you wait for the next course)",
        "textSpeed": "",
        "options": [
          {
            text: "Continue to Course 2",
            points: 0,
            nextText: 118
          },
        ]
    },
    {
      "id": 65,
      "characterName": "Me",
      "characterExpression": "",
      "text": "Hah, you sure are as charming as your hospitality, Mr. Fontaine",
      "options": []
    },
    {
        "id": 66,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "umm, yes. I never fail to disappoint",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 67,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "wait... uhm so, what would you like?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 68,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'll have the three best courses you have.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 69,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "... I'm sorry?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 70,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'll have the three best courses you can offer. Whatever your best courses are for Entree, Main and Desert, I'll like to order that.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 71,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "i... I'm not sure if I'm allowed to",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 72,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(amused at watching him fumble his words)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 73,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "Okay, I'll get it ready for you",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 74,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "wait wrong way",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 75,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 76,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "... hi",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 77,
        "characterName": "Me",
        "characterExpression": "",
        "text": "?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 78,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "uh... bye",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 79,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(what an interesting boy)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 80,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(how has he survived as a chef)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 81,
        "characterName": "",
        "characterExpression": "",
        "text": "(14 minutes and 2 seconds later, the appetizers are served)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 82,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "Here you are. Entree: Seafood Ceviche served with Lemon Butter sauce",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 83,
        "characterName": "",
        "characterExpression": "",
        "text": "(Hugo eyes the first dish with a raised eyebrow)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 84,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, the pinnacle of coastal cuisine, I presume?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 85,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(pulls out pocket watch)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 86,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, 14 minutes and 2 seconds. I take it you were cooking Moby Dick.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 87,
        "characterName": "",
        "characterExpression": "",
        "text": "(You take a bite, your expression exaggeratedly contemplative before breaking into a smirk.)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 88,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well, Alexander, you certainly know how to make an impression... if that impression was you announcing to your spouse, 'Darling, I've burned the soufflé again!",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 89,
        "characterName": "",
        "characterExpression": "",
        "text": "(Alexander forces a polite chuckle, hiding his irritation beneath a veneer of professionalism.)",
        "textSpeed": "",
        "options": [

        ]
    },
    {
        "id": 90,
        "characterName": "",
        "characterExpression": "",
        "text": "(You gaze into the hedge laughing as you wait for the next course)",
        "textSpeed": "",
        "options": [
          {
            text: "Continue to Course 2",
            points: 0,
            nextText: 118
          },
        ]
    },
    {
      "id": 91,
      "characterName": "Me",
      "characterExpression": "",
      "text": "Let's hope your food is more palatable than your decor, Mr. Fontaine.",
      "options": []
    },
    {
        "id": 92,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "Well I'm not very well off sir.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 93,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "What do you want to eat?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 94,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'll have the three best courses you have.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 95,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "I'm sorry?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 96,
        "characterName": "Me",
        "characterExpression": "",
        "text": "You heard me.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 97,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "ok three worst i mean best dishes coming up, sir",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 98,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I beg your pardon 'Chef' Fontaine.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 99,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "I said I really enjoy your company and will cook you a delicious feast worthy of the gods.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 100,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "definitely.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 101,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 102,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "... it'll blow your mind",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 103,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Look forward to it.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 104,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "ok leaving now, sir............................................................",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 105,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(what a ghastly zombie)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 106,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(I wonder of the brains he's consumed)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 107,
        "characterName": "",
        "characterExpression": "",
        "text": "(25 minutes and 2 seconds later, the appetizers are served)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 108,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "Here you are. Entree: Seafood Ceviche served with Lemon Butter sauce",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 109,
        "characterName": "",
        "characterExpression": "",
        "text": "(You eye the first dish with a weary sigh)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 110,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, the pinnacle of coastal cuisine, I presume?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 111,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(pulls out pocket watch)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 112,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, 25 minutes and 2 seconds. I take it you were cooking Moby Dick.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 113,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Hmm, how shall I put this delicately? It tastes like something dredged up from the depths. Perhaps a bit less sea and a bit more food next time?",
        "textSpeed": "fast",
        "options": []
    },
    {
      "id": 114,
      "characterName": "Fontaine",
      "characterExpression": "",
      "text": "My apologies. Next time, I'll be sure to ask the fish to attend culinary school before gracing your plate",
      "textSpeed": "fast",
      "options": []
    },
    {
        "id": 115,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well, Alexander, you certainly know how to make an impression... if that impression was you announcing to your spouse, 'Darling, I've burned the soufflé again!",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 116,
        "characterName": "",
        "characterExpression": "",
        "text": "(Alexander forces a tight-lipped smile, his self-control yearning to run loose as he mouths intelligible sounds)",
        "textSpeed": "",
        "options": [

        ]
    },
    {
        "id": 117,
        "characterName": "",
        "characterExpression": "",
        "text": "(You gaze into the hedge in pure bewilderment as you contemplate how this monkey's in the same industry as you)",
        "textSpeed": "",
        "options": [
          {
            text: "Continue to Course 2",
            points: 0,
            nextText: 118
          },
        ]
    },
    {
        "id": 118,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "Mains: Succulent grilled lobster, with some souteed vegetables.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 119,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(sarcastically) Ah, the pièce de résistance. Let's hope it's as captivating as it looks. and 16 minutes... and 2 seconds i see",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 120,
        "characterName": "Me",
        "characterExpression": "",
        "text": "You take a bite, your expression turning more and more surprised after each bite.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 121,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Impressive Mr Fontaine. Though I must admit, the lobster could use a touch more seasoning",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 122,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "... I'll take that into account.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 123,
        "characterName": "",
        "characterExpression": "",
        "text": "After eating a spectacular dish, you think of a compliment to give to Fontaine",
        "textSpeed": "",
        "options": [
          {
            text: "This dish is a surprising improvement from what I've had before.",
            required: reqState('bad'),
            points: 1,
            nextText: 124
          },
          {
            text: "A respectable dish",
            required: reqState('neutral'),
            points: 2,
            nextText: 126
          },
          {
            text: "Absolutely splendid",
            required: reqState('good'),
            points: 3,
            nextText: 128
          },
          {
            text: "(Start thinking about wine)",
            points: 0,
            nextText: 130
          }
        ]
    },
    {
        "id": 124,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well, Alexander, I must admit, this dish is a surprising improvement from what I've had before. Perhaps there's hope for you yet.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 125,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "Thank you, but you could've just left it at the first part",
        "textSpeed": "",
        "options": [
          {
            text: "Continue to Course 3",
            points: 0,
            nextText: 130
          }
        ]
    },
    {
        "id": 126,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A respectable dish, Alexander. You've managed to meet expectations this time",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 127,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "Thank you, wait... what do you mean by 'this time?'",
        "textSpeed": "",
        "options": [
          {
            text: "Continue to Course 3",
            points: 0,
            nextText: 130
          }
        ]
    },
    {
        "id": 128,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Absolutely splendid, Alexander! This dish exemplifies culinary excellence. You've truly outdone yourself.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 129,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "Thank you. I love cooking and it means a lot to me when people enjoy it.",
        "textSpeed": "fast",
        "options": [
          {
            text: "Continue to Course 3",
            points: 0,
            nextText: 130
          }
        ]
    },
    {
        "id": 130,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well aren't humans full of surprises.",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 131,
        "characterName": "Me",
        "characterExpression": "",
        "text": "But alas, indeed each course holds its own charm however one could argue that dessert reigns supreme.",
        "textSpeed": "default",
        "options": []
    },
    {
        "id": 132,
        "characterName": "Me",
        "characterExpression": "",
        "text": "After all, it's the sweet finale that leaves a lasting impression, ensuring our esteemed guests depart with a satisfied palate and a pleasant disposition.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 133,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "Dessert: Decadent chocolate soufflé, dusted with powdered sugar and cocoa powder",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 134,
        "characterName": "Fontaine",
        "characterExpression": "default",
        "text": "Enjoy.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 135,
        "characterName": "Me",
        "characterExpression": "",
        "text": "And now, the grand finale. Let's hope it's worth the anticipation.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 136,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(pulls out pocket watch) Ah, 4 minutes...",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 137,
        "characterName": "Me",
        "characterExpression": "",
        "text": "and 2 seconds, not slacking at all.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 138,
        "characterName": "",
        "characterExpression": "",
        "text": "You take a bite...",
        "textSpeed": "",
        "options": [
          {
            text: "It's absolutely disgusting",
            required: reqState('bad'),
            points: 3,
            nextText: 139
          },
          {
            text: "It is, quite unequivocally, a culinary abomination of the highest order!",
            points: 3,
            nextText: 139
          },
          {
            text: "It's good",
            points: 1,
            nextText: 142
          },
          {
            text: "You wish to propose marriage",
            setInventory: {fontaine:true},
            points: 3,
            nextText: 141
          },
        ]
    },
    {
        "id": 139,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It's...  it... (it's delicious)",
        "textSpeed": "",
        "options": []
    },
    {
      "id": 140,
      "characterName": "Me",
      "characterExpression": "",
      "text": "(You can't bring yourself to compliment it)",
      "textSpeed": "",
      "options": [
        {
          text: "You wish muster up the courage to compliment the dish",
          points: 0,
          nextText: 142
        },
        {
          text: "You wish to propose marriage",
          setInventory: {fontaine:true},
          points: 0,
          nextText: 141
        },
      ]
  },
    {
        "id": 141,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I wish to propose marriage... to the soufflé that is.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 142,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It's simply divine",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 143,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "I'm glad you enjoy it!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 144,
        "characterName": "",
        "characterExpression": "",
        "text": "(Mr Fontaine beams with pride as Hugo savours the dessert, satisfied with his dining experience)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 145,
        "characterName": "",
        "characterExpression": "",
        "text": "(You sit in the restaurant for a moment to gather up your thoughts)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 146,
        "characterName": "Me",
        "characterExpression": "",
        "text": "That was a surprisingly adequate meal",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 147,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your eyes dart around, taking in every detail of the decor and the lively buzz of conversation)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 148,
        "characterName": "",
        "characterExpression": "",
        "text": "(You can't help but notice the shoddy decor but the bustling environment strikes your emotions somehow)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 149,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your eyes lock on a girl colouring on a drawing canvas)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 150,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A drawing canvas in a restaurant?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 151,
        "characterName": "Me",
        "characterExpression": "",
        "text": "How absurd!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 152,
        "characterName": "",
        "characterExpression": "",
        "text": "(You watch her draw hastily on the canvas)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 153,
        "characterName": "Tina",
        "characterExpression": "disappointed",
        "text": "What are you looking at mister!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 154,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I've taken quite a liking to...",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 155,
        "characterName": "Tina",
        "characterExpression": "disappointed",
        "text": "THERES A PERVERT... PERSON HERE",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 156,
        "characterName": "Me",
        "characterExpression": "",
        "text": "no, no miss. I'm gazing upon the...",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 157,
        "characterName": "Tina",
        "characterExpression": "disappointed",
        "text": "EXCUSE ME. HELP!!! STAFF! ANYONE! HELP QUICK!!!!!!",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 158,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "What's going on here?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 159,
        "characterName": "Tina",
        "characterExpression": "disappointed",
        "text": "This man is a PERVER...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 160,
        "characterName": "Me",
        "characterExpression": "",
        "text": "neigh, I was simply gazing upon the drawing canvas over yonder.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 161,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It struck me as rather unconventional to be engaging in artistic endeavors amidst the refined ambiance of a culinary establishment, that's all.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 162,
        "characterName": "Tina",
        "characterExpression": "disappointed",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 163,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "I see",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 164,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "So this young lady say's you're a pervert and you say you were just looking at the drawing.",
        "textSpeed": "",
        "options": []
    },
    {
      "id": 165,
      "characterName": "Fontaine",
      "characterExpression": "",
      "text": "So who's telling the truth?",
      "textSpeed": "",
      "options": []
    },
    {
        "id": 166,
        "characterName": "Tina",
        "characterExpression": "disappointed",
        "text": "Me.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 167,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Excuse you, I'm a distinguished young gentleman, I would neve...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 168,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "Well since i'm the judge here, I'm going to assume both of you are telling the truth.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 169,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "Sir, it's possible you come across as suspicious to the weary eye.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 170,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "(And I 100% buy that he was just psychotically analyzing the ergonomic integrity of the canvas like a weirdo)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 171,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "So, as a punishment,",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 172,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "You must draw a self-portrait and as a reward, I won't see anything of this incident.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 173,
        "characterName": "Fontaine",
        "characterExpression": "drunk",
        "text": "(and because I'm a tad tipsy from drinking away your shenanigans)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 174,
        "characterName": "Me",
        "characterExpression": "",
        "text": "How ridiculous",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 175,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(judgingly) Why would I ever...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 176,
        "characterName": "Fontaine",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 177,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Fine.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 178,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "I'll replace the canvas",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 179,
        "characterName": "Tina",
        "characterExpression": "disappointed",
        "text": "HEY!",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 180,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "Here's an ice-cream",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 181,
        "characterName": "Tina",
        "characterExpression": "default",
        "text": "Bye Mr. Pervert",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 182,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Kids have no manners",
        "textSpeed": "default",
        "options": []
    },
    {
        "id": 183,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "Give me a second.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 184,
        "characterName": "Me",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 185,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(Well, well, Hugo, aren't we feeling adventurous today)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 186,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I guess I should click the canvas then.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 187,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Hm.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 188,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Oh what a farce. What on earth am I even doing here?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 189,
        "characterName": "",
        "characterExpression": "",
        "text": "(As you continue to doodle, a curious sensation washes over you)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 190,
        "characterName": "",
        "characterExpression": "",
        "text": "(The carefree ambiance of the seaside town and the infectious warmth of the other diners seem to seep into your very being)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 191,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well slap my knee, what a curious dilemma.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 192,
        "characterName": "Fontaine",
        "characterExpression": "drunk",
        "text": "Well, well, Is this your masterpiece Sir.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 193,
        "characterName": "",
        "characterExpression": "",
        "text": "(You feel a pang of hurt at the sarcasm, your face drooping slightly)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 194,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'll have you know, Alexander, that I'm not an artist by trade.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 195,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It is merely an exercise in creativity",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 196,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Besides, I don't see you creating anything better.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 197,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "(hehe, little does he know they used to call me chinese Bob Ross)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 198,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "Touché, Hugo. But even so, there's a certain... charm to your work.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 199,
        "characterName": "Fontaine",
        "characterExpression": "default",
        "text": "(noticing your change in expression) Well, it's certainly... unique",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 200,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "But you know what? I like it. In fact, I'll copy it and frame it near the window.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 201,
        "characterName": "",
        "characterExpression": "",
        "text": "(Alexander Fontaine takes the drawing and finds a spot on a nearby wall, placing it in a frame and hanging it up for all to see)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 202,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "There.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 203,
        "characterName": "",
        "characterExpression": "",
        "text": "(You watch the drawing being displayed, feeling a mix of emotions)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 204,
        "characterName": "",
        "characterExpression": "",
        "text": "(Despite the sting of Alexander's words, the gesture of framing the work for no other reason than to make him feel special for that single moment in time...)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 205,
        "characterName": "",
        "characterExpression": "",
        "text": "(makes you feel at peace)",
        "textSpeed": "slow",
        "options": []
    },
    {
      "id": 206,
      "characterName": "Me",
      "characterExpression": "",
      "text": "Well I suppose it's not entirely terrible.",
      "textSpeed": "",
      "options": []
    },
    {
        "id": 207,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Though I must admit, it does contain a certain... je ne sais quoi",
        "textSpeed": "",
        "options": []
    },
    {
      "id": 208,
      "characterName": "Fontaine",
      "characterExpression": "happy",
      "text": "Well who would've thought. You're capable of having fun.",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 209,
      "characterName": "Me",
      "characterExpression": "",
      "text": "...",
      "textSpeed": "slow",
      "options": []
    },
    {
      "id": 210,
      "characterName": "Fontaine",
      "characterExpression": "",
      "text": "(noticing the awkward silence)",
      "textSpeed": "fast",
      "options": []
    },
    {
      "id": 211,
      "characterName": "Fontaine",
      "characterExpression": "",
      "text": "So, what's next for you?",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 212,
      "characterName": "Me",
      "characterExpression": "",
      "text": "I shall partake in a leisurely promenade around the city to cleanse my thoughts, if you will.",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 213,
      "characterName": "Fontaine",
      "characterExpression": "",
      "text": "What makes you want a lemonade around the city?",
      "textSpeed": "default",
      "options": []
    },
    {
      "id": 214,
      "characterName": "Me",
      "characterExpression": "",
      "text": "Yes, precisely.",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 215,
      "characterName": "",
      "characterExpression": "",
      "text": "(You nod condifently, offering a wave as you head towards the door ready for the 'lemonade')",
      "textSpeed": "fast",
      "options": []
    },
    {
      "id": 216,
      "characterName": "???",
      "characterExpression": "",
      "text": "That guy definitely dresses in a top hat and monocle",
      "textSpeed": "",
      "options": []
    },
  ]

  const textTree_3 = [
    {
        "id": 1,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, the city's bustling today.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 2,
        "characterName": "",
        "characterExpression": "",
        "text": "(It isn't, you just wanted to declare something)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 3,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(With your nose slightly raised) One must find something suitably captivating amidst this pedestrian chaos",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 4,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your eyes caper around overexaggeratively)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 5,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I suppose I should nose around if you will, (you say to noone).",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 6,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It truly is incredible...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 7,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Each step we take brings us closer to an understanding of the intricate dance of ingredients, the alchemy that transforms the mundane into the sublime.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 8,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Observe, if you will, the verdant gardens that line our path, where herbs and vegetables flourish under the tender care of our skilled hands.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 9,
        "characterName": "Me",
        "characterExpression": "",
        "text": "These humble plants, nurtured by the earth, sun, and rain, are the foundations of our culinary arts. It is within these vibrant leaves and robust roots that the essence of flavor resides, waiting to be coaxed out by the deft touch of the chef.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 10,
        "characterName": "Me",
        "characterExpression": "",
        "text": "So, as we savour each bite, let us not forget the journey from farm to table, the myriad hands that played a part, and the cultural tapestry that each dish represents.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 11,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(You continue down the foot path as you savour the profundity of your brilliant soliloquy)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 12,
        "characterName": "Me",
        "characterExpression": "",
        "text": "For in the world of gastronomy,",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 13,
        "characterName": "Me",
        "characterExpression": "",
        "text": "we find a microcosm of life itself.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 14,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A reminder that the simplest pleasures are often the most profound.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 15,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your eyes dart disdainfully over the surroundings)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 16,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, what's this? Perhaps something worthy of my refined tastes?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 17,
        "characterName": "",
        "characterExpression": "",
        "text": "(You spot a display, 'Ao no Cafe' that catches your attention, though your tone remains tentative)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 18,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well, well, I spy with my little eye... something beginning with S...",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 19,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(waits a moment to build up anticipation)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 20,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Suspicious...",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 21,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Naturally, one would deduce that this establishment is none other than the Blue Café.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 22,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Any self-servient person attuned to the Japanese language would know this much. yes. yes.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 23,
        "characterName": "Me",
        "characterExpression": "",
        "text": "However, it is a well-established fact that cafés, by their very nature, do not operate during the nocturnal hours.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 24,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Thus, it presents a rather perplexing conundrum...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 25,
        "characterName": "Me",
        "characterExpression": "",
        "text": "as to why...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 26,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'm hearing the unmistakable sounds...",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 27,
        "characterName": "Me",
        "characterExpression": "",
        "text": "OF CULINARY ACTIVITY!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 28,
        "characterName": "Me",
        "characterExpression": "",
        "text": "WHAT IS PARTAKING ASMIDST THIS MYSTERY ESTABLISHMENT!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 29,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I MUST FIND OUT!",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 30,
        "characterName": "???",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 31,
        "characterName": "???",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 32,
        "characterName": "Me",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 33,
        "characterName": "???",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 34,
        "characterName": "???",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 35,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Can I help you?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 36,
        "characterName": "???",
        "characterExpression": "",
        "text": "Welcome Back Mr. Sinclair.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 37,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Do I know you?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 38,
        "characterName": "",
        "characterExpression": "",
        "text": "In that moment, you recall a memory long since departed from your past...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 39,
        "characterName": "",
        "characterExpression": "",
        "text": "The kitchen is pristine, filled with stainless steel appliances and gleaming countertops. ",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 40,
        "characterName": "",
        "characterExpression": "",
        "text": "Naomi Kimura, a renowned chef known for her exacting standards, stands at the center of the room. ",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 41,
        "characterName": "",
        "characterExpression": "",
        "text": "And Hugo Sinclair, a novice cook with aspirations of culinary greatness, nervously enters the kitchen.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 42,
        "characterName": "Kimura",
        "characterExpression": "",
        "text": "(with a stern gaze) Ah, Hugo Sinclair. I trust you're prepared for today's challenge?",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 43,
        "characterName": "Me",
        "characterExpression": "",
        "text": "*gulp* Yes, Chef Kimura. I've been practicing diligently.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 44,
        "characterName": "Kimura",
        "characterExpression": "default2",
        "text": "We shall see about that.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 45,
        "characterName": "Kimura",
        "characterExpression": "",
        "text": " Today, you will be tasked with preparing my signature dish: the Coq au Vin.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 46,
        "characterName": "Kimura",
        "characterExpression": "default2",
        "text": "It is a dish that demands precision, finesse, and an intimate understanding of flavors",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 47,
        "characterName": "Kimura",
        "characterExpression": "happy",
        "text": "Do you believe you're up for the challenge",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 48,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Yes, Chef.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 49,
        "characterName": "",
        "characterExpression": "",
        "text": "Kimura watches intently as you set to work, your movements hesitant and uncertain. You chop vegetables with shaky hands and struggle to control the heat of the stove.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 50,
        "characterName": "Kimura",
        "characterExpression": "default2",
        "text": "Your technique is amateurish, Sinclair. Your knife handling lacks finesse, and your seasoning is reckless. You must cultivate intuition and culinary finesse.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 51,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your frustration becomes palpable as you attempt to salvage the dish, but it becomes increasingly evident that you're out of your depth)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 52,
        "characterName": "",
        "characterExpression": "",
        "text": "(With a heavy heart, you present your 'dish' to Kimura)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 53,
        "characterName": "Kimura",
        "characterExpression": "default",
        "text": "(Kimura examines the dish with a critical eye, her expression unreadable)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 54,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'm sorry, Chef. I've failed",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 55,
        "characterName": "Kimura",
        "characterExpression": "surprised",
        "text": "Failed? Failed?!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 56,
        "characterName": "Kimura",
        "characterExpression": "angry",
        "text": "This isn't just a failure, Sinclair. This is an embarrassment. You've disgraced this kitchen with your incompetence",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 57,
        "characterName": "",
        "characterExpression": "",
        "text": "(You lower your gaze, unable to meet Kimura's intense stare)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 58,
        "characterName": "Kimura",
        "characterExpression": "angry",
        "text": "Get out of my kitchen before you accidentally cook a shoe and serve it as a special.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 59,
        "characterName": "",
        "characterExpression": "",
        "text": "(You nod silently, dreams of culinary greatness shattered)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 60,
        "characterName": "",
        "characterExpression": "",
        "text": "(You exit the kitchen, the weight of Kimura's humiliation heavy upon your shoulders)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 61,
        "characterName": "Kimura",
        "characterExpression": "happy2",
        "text": "It's been quite a while.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 62,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'm not the same feeble youngster I was before.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 63,
        "characterName": "Kimura",
        "characterExpression": "default2",
        "text": "You still are to me.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 64,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I will prove myself to you.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 65,
        "characterName": "Kimura",
        "characterExpression": "",
        "text": "You have already proved your incompetance.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 66,
        "characterName": "Kimura",
        "characterExpression": "happy2",
        "text": "Why would you leave my kitchen and become a critic rather than a chef? Sinclair?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 67,
        "characterName": "Kimura",
        "characterExpression": "happy",
        "text": "That alone is enough to tell me exactly what I need to know.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 68,
        "characterName": "Kimura",
        "characterExpression": "",
        "text": "However, I do love to experiment. I suppose I could task you with a challenge.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 69,
        "characterName": "Kimura",
        "characterExpression": "default2",
        "text": "I just fear you're too spineless to accept",
        "textSpeed": "",
        "options": [

        ]
    },
    {
        "id": 70,
        "characterName": "",
        "characterExpression": "",
        "text": "Do you have the courage to accept?",
        "textSpeed": "",
        "options": [
            {
                text: "You accept Kimura's challenge",
                points: 0,
                nextText: 71
            },
            {
                text: "You reject Kimura's challenge",
                points: 5,
                nextText: 116,
            },
        ]
    },
    {
        "id": 71,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well, Naomi Kimura, it seems fate has brought us together today.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 72,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I accept your challenge.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 73,
        "characterName": "Me",
        "characterExpression": "",
        "text": "What mischief do you have planned?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 74,
        "characterName": "",
        "characterExpression": "",
        "text": "(Naomi's lips curve into a confident smile, her eyes gleaming with determination.)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 75,
        "characterName": "Kimura",
        "characterExpression": "default",
        "text": "It's time for the,",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 76,
        "characterName": "Kimura",
        "characterExpression": "happy2",
        "text": "FOOD QUIZ!!!!!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 77,
        "characterName": "Kimura",
        "characterExpression": "default2",
        "text": "Your task is simple.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 78,
        "characterName": "Kimura",
        "characterExpression": "default",
        "text": "Click on the correct answers to each question. Let's see if you're as knowledgeable as you claim to be.",
        "textSpeed": "",
        "options": [
            {
                text: "I understand",
                points: 0,
                nextText: 80
            },
            {
                text: "I undernotstand",
                points: 0,
                nextText: 81,
            },
            {
                text: "Can I go to the bathroom first?",
                points: 0,
                nextText: 79
            },
            {
                text: "Ah, a challenge, my dear Naomi? How positively thrilling! PREPARAE YOURSELF to be dazzled by my UNPARALLELED EXPERTISE",
                points: 0,
                nextText: 82, 
            },
        ]
    },
    {
        "id": 79,
        "characterName": "Kimura",
        "characterExpression": "",
        "text": "Your bowels can wait Sinclair.",
        "textSpeed": "",
        "options": [
            {
                text: "Begin the Quiz",
                points: 0,
                nextText: 83
            },
        ]
    },
    {
        "id": 80,
        "characterName": "Kimura",
        "characterExpression": "",
        "text": "Good, then let's proceed",
        "textSpeed": "",
        "options": [
            {
                text: "Begin the Quiz",
                points: 0,
                nextText: 83
            },
        ]
    },
    {
        "id": 81,
        "characterName": "Kimura",
        "characterExpression": "",
        "text": "Well, that's too bad. Let's proceed.",
        "textSpeed": "",
        "options": [
            {
                text: "Begin the Quiz",
                points: 0,
                nextText: 83
            },
        ]
    },
    {
        "id": 82,
        "characterName": "Kimura",
        "characterExpression": "",
        "text": "Your stupidity might set off the smoke alarm Sinclair. Keep it down.",
        "textSpeed": "",
        "options": [
            {
                text: "Begin the Quiz (1/3)",
                points: 0,
                nextText: 83
            },
        ]
    },
    {
        "id": 83,
        "characterName": "Part 1",
        "characterExpression": "",
        "text": "Guess the Ingredient using the given prompt and image.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 84,
        "characterName": "Question 1a",
        "characterExpression": "",
        "text": "What ingredient is commonly used to add acidity and tanginess to dishes like salad dressings and marinades?",
        "textSpeed": "",
        "options": [
            {
                text: "Orange",
                points: 0,
                nextText: 85
            },
            {
                text: "Lemon",
                points: 1,
                nextText: 85,
            },
            {
                text: "Lime",
                points: 0,
                nextText: 85
            },
            {
                text: "Grapefruit",
                points: 0,
                nextText: 85, 
            },
        ]
    },
    {
        "id": 85,
        "characterName": "Question 1b",
        "characterExpression": "",
        "text": "This ingredient is made from fermented soybeans and is a staple in Asian cuisine. What is it?",
        "textSpeed": "",
        "options": [
            {
                text: "Soy Sauce",
                points: 1,
                nextText: 86
            },
            {
                text: "Fish Sauce",
                points: 0,
                nextText: 86,
            },
            {
                text: "Worcestershire Sauce",
                points: 0,
                nextText: 86
            },
            {
                text: "Hoisin Sauce",
                points: 0,
                nextText: 86, 
            },
        ]
    },
    {
        "id": 86,
        "characterName": "Question 1c",
        "characterExpression": "",
        "text": "What is the main ingredient in the popular Italian pasta sauce, pesto?",
        "textSpeed": "",
        "options": [
            {
                text: "Parsley",
                points: 0,
                nextText: 87
            },
            {
                text: "Cilantro",
                points: 0,
                nextText: 87,
            },
            {
                text: "Basil",
                points: 1,
                nextText: 87
            },
            {
                text: "Mint",
                points: 0,
                nextText: 87, 
            },
        ]
    },
    {
        "id": 87,
        "characterName": "Question 1d",
        "characterExpression": "",
        "text": "This pungent bulb is a member of the onion family and is often used to add flavor to savoury dishes. What is it?",
        "textSpeed": "",
        "options": [
            {
                text: "Shallot",
                points: 0,
                nextText: 88
            },
            {
                text: "Onion",
                points: 0,
                nextText: 88,
            },
            {
                text: "Garlic",
                points: 1,
                nextText: 88
            },
            {
                text: "Leek",
                points: 0,
                nextText: 88, 
            },
        ]
    },
    {
        "id": 88,
        "characterName": "Question 1e",
        "characterExpression": "",
        "text": "In Mexican cuisine, this ingredient is made from dried and smoked jalapeño peppers. What is it called?",
        "textSpeed": "",
        "options": [
            {
                text: "Chipotle",
                points: 1,
                nextText: 89
            },
            {
                text: "Cayenne",
                points: 0,
                nextText: 89,
            },
            {
                text: "Ancho",
                points: 0,
                nextText: 89
            },
            {
                text: "Habanero",
                points: 0,
                nextText: 89, 
            },
        ]
    },
    {
        "id": 89,
        "characterName": "Part 2",
        "characterExpression": "",
        "text": "Answer the following questions relating to worldwide cuisines.",
        "textSpeed": "",
        "options": [
            {
                text: "Continue the quiz (2/3)",
                points: 0,
                nextText: 90, 
            },
        ]
    },
    {
        "id": 90,
        "characterName": "Question 2a",
        "characterExpression": "",
        "text": "What is the national dish of Spain, consisting of rice, saffron, and various meats and vegetables?",
        "textSpeed": "",
        "options": [
            {
                text: "Risotto",
                points: 0,
                nextText: 91
            },
            {
                text: "Pad Thai",
                points: 0,
                nextText: 91,
            },
            {
                text: "Paella",
                points: 1,
                nextText: 91
            },
            {
                text: "Jambalaya",
                points: 0,
                nextText: 91, 
            },
        ]
    },
    {
        "id": 91,
        "characterName": "Question 2b",
        "characterExpression": "",
        "text": "Which popular cheese originated from the Italian city of Parma and is known for its salty and nutty flavor?",
        "textSpeed": "",
        "options": [
            {
                text: "Cheddar",
                points: 0,
                nextText: 92
            },
            {
                text: "Gouda",
                points: 0,
                nextText: 92,
            },
            {
                text: "Brie",
                points: 0,
                nextText: 92
            },
            {
                text: "Parmesan",
                points: 1,
                nextText: 92, 
            },
        ]
    },
    {
        "id": 92,
        "characterName": "Question 2c",
        "characterExpression": "",
        "text": "What is the primary ingredient in the Indian dish, samosas?",
        "textSpeed": "",
        "options": [
            {
                text: "Beef",
                points: 0,
                nextText: 93
            },
            {
                text: "Chicken",
                points: 0,
                nextText: 93,
            },
            {
                text: "Pork",
                points: 0,
                nextText: 93
            },
            {
                text: "Potatoes",
                points: 1,
                nextText: 93, 
            },
        ]
    },
    {
        "id": 93,
        "characterName": "Question 2d",
        "characterExpression": "",
        "text": "Which dessert, often associated with France, consists of layers of puff pastry and pastry cream, topped with icing?",
        "textSpeed": "",
        "options": [
            {
                text: "Tiramisu",
                points: 0,
                nextText: 94
            },
            {
                text: "Baklava",
                points: 0,
                nextText: 94,
            },
            {
                text: "Mille-feuille (Napoleon)",
                points: 1,
                nextText: 94
            },
            {
                text: "Cannoli",
                points: 0,
                nextText: 94, 
            },
        ]
    },
    {
        "id": 94,
        "characterName": "Question 2e",
        "characterExpression": "",
        "text": "What type of food is traditionally cooked in a tandoor, a cylindrical clay oven?",
        "textSpeed": "",
        "options": [
            {
                text: "Pizza",
                points: 0,
                nextText: 95
            },
            {
                text: "Barbecue",
                points: 0,
                nextText: 95,
            },
            {
                text: "Tandoori",
                points: 1,
                nextText: 95
            },
            {
                text: "Stir-fry",
                points: 0,
                nextText: 95, 
            },
        ]
    },
    {
        "id": 95,
        "characterName": "Part 3",
        "characterExpression": "",
        "text": "Guess what typically goes into the given dish.",
        "textSpeed": "",
        "options": [
            {
                text: "Continue the Quiz (3/3)",
                points: 0,
                nextText: 96, 
            },
        ]
    },
    {
        "id": 96,
        "characterName": "Question 3a",
        "characterExpression": "",
        "text": "What ingredient is commonly used in guacamole, a popular Mexican dip?",
        "textSpeed": "",
        "options": [
            {
                text: "Tomato",
                points: 0,
                nextText: 97
            },
            {
                text: "Avocado",
                points: 1,
                nextText: 97,
            },
            {
                text: "Onion",
                points: 0,
                nextText: 97
            },
            {
                text: "Jalapeño",
                points: 0,
                nextText: 97, 
            },
        ]
    },
    {
        "id": 97,
        "characterName": "Question 3b",
        "characterExpression": "",
        "text": "In Italian cuisine, what ingredient is used to make the traditional dish, caprese salad?",
        "textSpeed": "",
        "options": [
            {
                text: "Mozzarella",
                points: 0,
                nextText: 98
            },
            {
                text: "Tomato",
                points: 1,
                nextText: 98,
            },
            {
                text: "Basil",
                points: 0,
                nextText: 98
            },
            {
                text: "Balsamic Vinegar",
                points: 0,
                nextText: 98, 
            },
        ]
    },
    {
        "id": 98,
        "characterName": "Question 3c",
        "characterExpression": "",
        "text": "What ingredient is the main component of the classic French dish, coq au vin?",
        "textSpeed": "",
        "options": [
            {
                text: "Beef",
                points: 0,
                nextText: 99
            },
            {
                text: "Chicken",
                points: 1,
                nextText: 99,
            },
            {
                text: "Lamb",
                points: 0,
                nextText: 99
            },
            {
                text: "Pork",
                points: 0,
                nextText: 99, 
            },
        ]
    },
    {
        "id": 99,
        "characterName": "Question 3d",
        "characterExpression": "",
        "text": "Which ingredient is the primary protein source in sushi?",
        "textSpeed": "",
        "options": [
            {
                text: "Chicken",
                points: 0,
                nextText: 100
            },
            {
                text: "Fish",
                points: 1,
                nextText: 100,
            },
            {
                text: "Tofu",
                points: 0,
                nextText: 100
            },
            {
                text: "Seaweed",
                points: 0,
                nextText: 100, 
            },
        ]
    },
    {
        "id": 100,
        "characterName": "Question 3e",
        "characterExpression": "",
        "text": "What ingredient is the main component of the Indian dish, palak paneer?",
        "textSpeed": "",
        "options": [
            {
                text: "Paneer",
                points: 0,
                nextText: 101
            },
            {
                text: "Spinach",
                points: 1,
                nextText: 101,
            },
            {
                text: "Lentils",
                points: 0,
                nextText: 101
            },
            {
                text: "Cauliflower",
                points: 0,
                nextText: 101, 
            },
        ]
    },
    {
        "id": 101,
        "characterName": "Kimura",
        "characterExpression": "happy",
        "text": "Let's see how you did.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 102,
        "characterName": "",
        "characterExpression": "",
        "text": "Looks like you got: " + quizPoints + "/15.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 103,
        "characterName": "",
        "characterExpression": "",
        "text": " ",
        "textSpeed": "instant",
        "options": []
    },
    {
        "id": 104,
        "characterName": "Kimura",
        "characterExpression": "happy2",
        "text": "Well, aren't you just a culinary disaster waiting to happen? You're about as sharp as a spoon in a kitchen full of knives. Keep stirring, maybe one day you'll cook something edible.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 105,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, a mere blip in my culinary conquests. Just a gentle reminder to the world that even culinary geniuses have their off days.",
        "textSpeed": "",
        "options": [
            {
                text: "Conclude the Quiz",
                points: 0,
                nextText: 115
            },
        ]
    },
    {
        "id": 106,
        "characterName": "Kimura",
        "characterExpression": "happy2",
        "text": "You're like a microwave meal trying to pass for gourmet. Keep reheating those skills, darling, maybe one day they'll defrost",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 107,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A minor setback on my path to culinary greatness, no doubt. After all, even the brightest stars need a dimmer switch sometimes.",
        "textSpeed": "",
        "options": [
            {
                text: "Conclude the Quiz",
                points: 0,
                nextText: 115
            },
        ]
    },
    {
        "id": 108,
        "characterName": "Kimura",
        "characterExpression": "happy2",
        "text": "Not bad, I suppose... for someone with the culinary finesse of a toddler with a toy kitchen.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 109,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Hmm, not my finest hour, but who am I to expect perfection every time? Just a reminder to my adoring fans that even culinary gods have their occasional misfires.",
        "textSpeed": "",
        "options": [
            {
                text: "Conclude the Quiz",
                points: 0,
                nextText: 115
            },
        ]
    },
    {
        "id": 110,
        "characterName": "Kimura",
        "characterExpression": "surprised",
        "text": "Well, I suppose even a broken clock is right twice a day.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 111,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, a respectable performance, I must say. Just another feather in my chef's hat, reminding the world that Hugo Sinclair is a force to be reckoned with.",
        "textSpeed": "",
        "options": [
            {
                text: "Conclude the Quiz",
                points: 0,
                nextText: 115
            },
        ]
    },
    {
        "id": 112,
        "characterName": "Kimura",
        "characterExpression": "surprised",
        "text": "Impressive, I must admit. You've transcended mediocrity and landed squarely in the realm of adequacy. I suppose even a broken clock is right twice a day",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 113,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well, well, well, what did I tell you? Another flawless victory for the culinary maestro that is Hugo Sinclair. You're just too prideful to admit it.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 114,
        "characterName": "Kimura",
        "characterExpression": "happy",
        "text": "Speak for yourself Sinclair. I see mediocrity when I see it.",
        "textSpeed": "",
        "options": [
            {
                text: "Conclude the Quiz",
                setInventory: { kimura:true },
                points: 0,
                nextText: 115
            },
        ]
    },
    {
        "id": 115,
        "characterName": "Kimura",
        "characterExpression": "happy",
        "text": "It seems our little culinary challenge has come to an end.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 116,
        "characterName": "Kimura",
        "characterExpression": "happy2",
        "text": "Well, I'm surprisingly glad we had this reunion. I've always enjoyed chewing you out.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 117,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A mere taste of what's to come, Naomi. I'm sure our paths will cross again, and when they do, I'll be ready.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 118,
        "characterName": "Kimura",
        "characterExpression": "happy",
        "text": "We'll see about that, Hugo.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 119,
        "characterName": "Kimura",
        "characterExpression": "happy2",
        "text": "Until then, may your meals be as bland as your taste in fashion.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 120,
        "characterName": "",
        "characterExpression": "",
        "text": "(Her insult oddly attracts you)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 121,
        "characterName": "Me",
        "characterExpression": "",
        "text": "And to you, Naomi,",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 122,
        "characterName": "Me",
        "characterExpression": "",
        "text": "May your kitchen never run out of seasoning to mask your abhorrent flavor.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 123,
        "characterName": "Kimura",
        "characterExpression": "angry",
        "text": "What was that, Hugo?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 124,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I said farewell Kimura, for it is my time to depart.",
        "textSpeed": "",
        "options": []
    },
  ]

  const textTree_4 = [
    {
        "id": 1,
        "characterName": "",
        "characterExpression": "",
        "text": "(Hugo, looking visibly worn out from the day's culinary challenges aimlessly strolls around the street)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 2,
        "characterName": "",
        "characterExpression": "",
        "text": "(Visibly worn out from the day's culinary challenges, your body's movement is slowing noticably)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 3,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I suppose I should settle down somewhere.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 4,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Oh my days, where did I park?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 5,
        "characterName": "",
        "characterExpression": "",
        "text": "(You search around with no recollection of events)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 6,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well I certainly do appear to be 'in a pickle' as they say.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 7,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(You try to back where you came but end up going in a circle)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 8,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Oh Rats!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 9,
        "characterName": "",
        "characterExpression": "",
        "text": "(Not knowing what to do, you check into a local hotel)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 10,
        "characterName": "Me",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 11,
        "characterName": "",
        "characterExpression": "",
        "text": "(The lobby is quaint, with a minimalist charm that contrasts sharply with Hugo's usual taste for luxury)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 12,
        "characterName": "",
        "characterExpression": "",
        "text": "(However this time, he doesn't seem to mind)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 13,
        "characterName": "Me",
        "characterExpression": "",
        "text": "There's so much to ponder.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 14,
        "characterName": "Me",
        "characterExpression": "",
        "text": "How positively provincial. A fitting end to a day of relentless indignities.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 15,
        "characterName": "",
        "characterExpression": "",
        "text": "(You retrieve your room key from the front desk, your movements slow and tired)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 16,
        "characterName": "",
        "characterExpression": "",
        "text": "(The receptionist, a cheerful young woman, smiles brightly at you)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 17,
        "characterName": "Receptionist",
        "characterExpression": "",
        "text": "Welcome to our hotel, sir.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 18,
        "characterName": "Receptionist",
        "characterExpression": "",
        "text": "I hope you enjoy your stay.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 19,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Yes, well, thank you. (noticing her strange attire)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 20,
        "characterName": "",
        "characterExpression": "",
        "text": "(You enter the small, simply furnished room)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 21,
        "characterName": "",
        "characterExpression": "",
        "text": "(You survey it with a mixture of disdain and resignation)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 22,
        "characterName": "Me",
        "characterExpression": "",
        "text": "No egyption cotton? No silk sheets? Goodness.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 23,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(But midway through inspection, you give up and collapse onto the bed)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 24,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well, so be it.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 25,
        "characterName": "",
        "characterExpression": "",
        "text": "(The exhaustion soon overtakes the disdain)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 26,
        "characterName": "",
        "characterExpression": "",
        "text": "(Almost immediately, you fall asleep, still in your clothes)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 27,
        "characterName": "",
        "characterExpression": "",
        "text": "(You wake up disoriented. Your clothes are rumpled, and your hair is a mess)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 28,
        "characterName": "",
        "characterExpression": "",
        "text": "(You look around the room, your expression one of bewilderment)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 29,
        "characterName": "Me",
        "characterExpression": "",
        "text": "What... what is this? How did I end up in such an disgruntled state?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 30,
        "characterName": "",
        "characterExpression": "",
        "text": "(You sit up slowly, rubbing your temples, trying to piece together last night)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 31,
        "characterName": "Me",
        "characterExpression": "",
        "text": "This is not me. I don't wake up in... disarray. Is something changing within me?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 32,
        "characterName": "",
        "characterExpression": "",
        "text": "Perhaps... perhaps there's more to.",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 33,
        "characterName": "",
        "characterExpression": "",
        "text": "(You struggle to formulate your thoughts)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 34,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(defeated) I should get dressed.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 35,
        "characterName": "",
        "characterExpression": "",
        "text": "(You straighten your clothes as best you can, a small but genuine smile forming on your lips)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 36,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Time to face the day. Perhaps there’s something valuable I haven't attained in the modest life after all.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 37,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Wait, the sun's almost set already.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 38,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I must be losing my mind...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 39,
        "characterName": "Me",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 40,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I suppose I should head to Duval's now. Although I'm already plenty late.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 41,
        "characterName": "",
        "characterExpression": "",
        "text": "(Hugo approaches the Duval Brothers' Burger Bar. The sibling owned chain of Rafael and Sebastian Duval)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 42,
        "characterName": "???",
        "characterExpression": "",
        "text": "What makes you think ya think you can rock up late ay Hugo?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 43,
        "characterName": "Me",
        "characterExpression": "",
        "text": "My apologies, I... I. My train was late",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 44,
        "characterName": "Sebastian",
        "characterExpression": "default2",
        "text": "Your train ay? you ever taken one of those?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 45,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(You conjure up the memory)",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 46,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A train is a series of connected railway carriages or wagons moved by a locomotive or by integral motors.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 47,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A train (from Old French trahiner, from Latin trahere, to pull, to draw[1]) is a series of connected vehicles that run along a railway track and transport people or freight. Trains are typically pulled or pushed by locomotives or railcars[2][3] (often known simply as 'engines'), though some are self-propelled, such as multiple units. Passengers[6] and cargo are carried in railroad cars, also known as wagons. ",
        "textSpeed": "faster",
        "options": []
    },
    {
        "id": 48,
        "characterName": "Sebastian",
        "characterExpression": "disappointed",
        "text": "If you were ogling yourself in the mirror, just say so.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 49,
        "characterName": "Sebastian",
        "characterExpression": "",
        "text": "The infamous critic who thinks he knows everything. Let's see if you can actually cook, or if you're just full of hot air",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 50,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Mr. Duval, I assure you, my culinary prowess is as refined as my palate. I am here to absorb the knowledge of your esteemed kitchen.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 51,
        "characterName": "Rafael",
        "characterExpression": "happy",
        "text": "Welcome Hugo, We're pleased to have you here. I'm Rafael, and I'm sure this will be a valuable experience for you.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 52,
        "characterName": "",
        "characterExpression": "",
        "text": "(You shake Rafael's hand, feeling slightly more at ease with his friendly demeanor)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 53,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A pleasure, Rafael. I am eager to grace your kitchen with my presence and, perhaps, elevate it to new heights.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 54,
        "characterName": "",
        "characterExpression": "",
        "text": "(Sebastian rolls his eyes and turns sharply, heading towards the kitchen. He motions for Hugo to follow, his expression critical)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 55,
        "characterName": "Sebastian",
        "characterExpression": "smug",
        "text": "Enough talk. Let’s see if you can handle the basics before you start talking about elevating anything.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 56,
        "characterName": "Rafael",
        "characterExpression": "",
        "text": "(nods) Please head over with him.",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 57,
        "characterName": "Sebastian ",
        "characterExpression": "",
        "text": "Put these on. And try not to embarrass yourself.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 58,
        "characterName": "",
        "characterExpression": "",
        "text": "(You don the apron and hat, feeling the weight of Sebastian's scrutiny)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 59,
        "characterName": "Rafael",
        "characterExpression": "happy2",
        "text": "Don’t let Sebastian get to you. He’s tough because he wants the best. Focus on the task at hand, and you’ll do fine.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 60,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(You nod, taking a deep breath. You start working alongside the chefs, chopping vegetables and preparing burger patties with dramatic flair)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 61,
        "characterName": "Sebastian",
        "characterExpression": "default2",
        "text": "Your chopping is too slow. We’re not here to put on a show. Speed up, Sinclair.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 62,
        "characterName": "Rafael",
        "characterExpression": "default2",
        "text": "Like this. Let the knife do the work. You'll get the hang of it.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 63,
        "characterName": "",
        "characterExpression": "",
        "text": "(As the hours pass, you become more proficient. However, Sebastian's harsh comments continue to sting)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 64,
        "characterName": "Sebastian",
        "characterExpression": "disappointed",
        "text": "Your work is barely passable. This is a professional kitchen, not a playground for critics.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 65,
        "characterName": "",
        "characterExpression": "",
        "text": "(You try to fire back a retort but you catch the eye of Rafael mid sentence)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 66,
        "characterName": "Rafael",
        "characterExpression": "happy",
        "text": "You're doing well, Hugo, Keep at it. Remember, you have to start somewhere.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 67,
        "characterName": "Me",
        "characterExpression": "",
        "text": "But I'm already somewhere (you think to yourself) ",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 68,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(But no. I need to prove everybody wrong. I am not just a critic. I am a world-class chef as well)",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 69,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(My power is not just in my palate, it's also in my plate)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 70,
        "characterName": "Sebastian",
        "characterExpression": "default2",
        "text": "Don't let me catch you slacking Sinclair! We've not done yet.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 71,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Yes Chef.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 72,
        "characterName": "",
        "characterExpression": "",
        "text": "(The kitchen winds down as the last orders are completed)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 73,
        "characterName": "Sebastian",
        "characterExpression": "disappointed",
        "text": "(You wipe your brow, exhausted but feeling a sense of accomplishment. Sebastian approaches you, his expression unreadable)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 74,
        "characterName": "Sebastian",
        "characterExpression": "",
        "text": "You’ve managed to survive your first day. Barely. Let’s see if you can keep up tomorrow.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 75,
        "characterName": "Rafael",
        "characterExpression": "happy2",
        "text": "Good work today, Hugo. Get some rest. Tomorrow's another day to learn and improve.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 76,
        "characterName": "",
        "characterExpression": "",
        "text": "(You arrive early, determined to prove yourself)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 77,
        "characterName": "",
        "characterExpression": "",
        "text": "(Sebastian is already there, his eyes narrowing as you step in)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 78,
        "characterName": "Sebastian",
        "characterExpression": "smug",
        "text": "You're early, Sinclair. Trying to impress me?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 79,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Just eager to improve, Mr Duval. Today I will show you my true potential.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 80,
        "characterName": "",
        "characterExpression": "",
        "text": "(Rafael walks in, offering a warm smile and a cup of coffee to Hugo)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 81,
        "characterName": "Rafael",
        "characterExpression": "happy",
        "text": "Morning, Hugo. Let’s get started. Remember, take it one step at a time.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 82,
        "characterName": "",
        "characterExpression": "",
        "text": "(You nod, accepting the coffee with a grateful smile. You dive into your work, movements more confident but still marked with the occasional slip-up. Sebastian watches like a hawk, quick to point out flaws.)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 83,
        "characterName": "Sebastian",
        "characterExpression": "default2",
        "text": "Your knife skills are still lacking. Faster, more precise! And for god sake Sinclair, keep your station clear.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 84,
        "characterName": "Sebastian",
        "characterExpression": "",
        "text": "When the meal rush comes what will happen?? Messy stations slow things down, food doesn’t go, orders pile up-- disaster!! ",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 85,
        "characterName": "Sebastian",
        "characterExpression": "disappointed",
        "text": "I’ll make this easy to remember",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 86,
        "characterName": "Sebastian",
        "characterExpression": "default2",
        "text": "keep your station clear... or I WILL KILL YOU.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 87,
        "characterName": "",
        "characterExpression": "",
        "text": "(You grit your teeth, correcting your technique under Sebastian’s scrutiny)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 88,
        "characterName": "Rafael",
        "characterExpression": "default2",
        "text": "Here, like this. Use a lighter touch. And when you season, always taste.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 89,
        "characterName": "",
        "characterExpression": "",
        "text": "(Hours pass as Hugo continues to work, balancing between Sebastian’s harsh critiques and Rafael’s gentle corrections)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 90,
        "characterName": "",
        "characterExpression": "",
        "text": "(By soon, the dinner rush hits)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 91,
        "characterName": "",
        "characterExpression": "",
        "text": "(The kitchen becomes a whirlwind of activity. Hugo struggles to keep up, his movements frantic but determined)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 92,
        "characterName": "",
        "characterExpression": "",
        "text": "(Sebastian’s voice cuts through the chaos)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 93,
        "characterName": "Sebastian",
        "characterExpression": "default2",
        "text": "Keep up, Sinclair! This isn’t a leisurely stroll; it’s a race against time!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 94,
        "characterName": "Rafael",
        "characterExpression": "",
        "text": "You’re doing great, Hugo. Focus on the task at hand. You’ve got this.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 95,
        "characterName": "",
        "characterExpression": "",
        "text": "(Sweat drips from your brow as you plate your dish, taking a moment to admire your work before handing it off. Sebastian inspects it, his expression neutral)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 96,
        "characterName": "Sebastian",
        "characterExpression": "embarrassed",
        "text": "Acceptable. You're starting to show some promise, Sinclair.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 97,
        "characterName": "",
        "characterExpression": "",
        "text": "(You allow yourself a small, proud smirk, the compliment however backhanded, boosts your spirits)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 98,
        "characterName": "Rafael",
        "characterExpression": "",
        "text": "The restaurant is beginning to slow down.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 99,
        "characterName": "Rafael",
        "characterExpression": "default2",
        "text": "You can take a rest now.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 100,
        "characterName": "",
        "characterExpression": "",
        "text": "(After the kitchen closes, you take a moment to catch your breath, stumbling towards a nearby park, your body aching from the effort. Sebastian approaches, his demeanor slightly softer)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 101,
        "characterName": "Sebastian ",
        "characterExpression": "",
        "text": "You did well today, Hugo. Keep pushing yourself. You're on the right path.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 102,
        "characterName": "",
        "characterExpression": "",
        "text": "(You take a deep breath, feeling a mix of exhaustion and pride)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 103,
        "characterName": "Sebastian",
        "characterExpression": "",
        "text": "Tomorrow, we tackle more advanced techniques. Be ready.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 104,
        "characterName": "Rafael",
        "characterExpression": "happy2",
        "text": "Rest Well, Hugo. You've earned it. We'll see you tomorrow.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 105,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(nods)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 106,
        "characterName": "Me",
        "characterExpression": "",
        "text": "How have I ended up booking this place again.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 107,
        "characterName": "Me",
        "characterExpression": "",
        "text": "How have I not scrutinized other locations.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 108,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Mayhaps it's my lack of vitality.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 109,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Being a chef is much harder than I expected.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 110,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Not physically, as I am already of a muscular build.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 111,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It's the most mentally drainded I've been since culinary school.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 112,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Maybe it's favourable, I took up the pen...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 113,
        "characterName": "",
        "characterExpression": "",
        "text": "(You arrive, however, the environment is more tense than usual)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 114,
        "characterName": "Sebastian ",
        "characterExpression": "",
        "text": "Today we focus on precision.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 115,
        "characterName": "Sebastian",
        "characterExpression": "disappointed",
        "text": "Mistakes will not be tolerated.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 116,
        "characterName": "",
        "characterExpression": "",
        "text": "(You nod, steeling yourself for the rigorous session)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 117,
        "characterName": "Rafael ",
        "characterExpression": "happy",
        "text": "Remember it's about progress, not perfection.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 118,
        "characterName": "",
        "characterExpression": "",
        "text": "(You dive into your tasks)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 119,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your movements more confident, but the pressure of Sebastian's scrutiny weights heavily as his insults get sharper)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 120,
        "characterName": "",
        "characterExpression": "",
        "text": "(As he starts to get into your head, you fumble slightly with the plating of a garnish)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 121,
        "characterName": "Sebastian",
        "characterExpression": "disappointed",
        "text": "Sloppy, Sinclair. You should have mastered this by now.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 122,
        "characterName": "Sebastian",
        "characterExpression": "default2",
        "text": "That's only adequate if you're comparing to a blindfolded chimpanzee Sinclair. Are you that?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 123,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Yes Chef, you shout instinctively.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 124,
        "characterName": "Sebastian",
        "characterExpression": "default",
        "text": "What was that, Sinclair?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 125,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I said YES CHEF!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 126,
        "characterName": "Sebastian",
        "characterExpression": "surprised",
        "text": "SO YOU'RE NOT EVEN LISTENING TO ME, SINCLAIR!! UNACCEPTABLE, YOU'VE WASTED HOURS OF WORK WITH ONE CARELESS MISTAKE!",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 127,
        "characterName": "Sebastian",
        "characterExpression": "default2",
        "text": "ARE YOU EVEN TRYING OVER HERE?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 128,
        "characterName": "",
        "characterExpression": "",
        "text": "(tired and exhausted, you finally snap)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 129,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'VE BEEN GIVING IT MY ALL, SEBASTIAN!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 130,
        "characterName": "Rafael",
        "characterExpression": "happy2",
        "text": "Take a breath, Hugo. We can work through this.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 131,
        "characterName": "Me",
        "characterExpression": "",
        "text": "NO RAFAEL. MAYBE IT'S NOT ME WHO'S THE PROBLEM. MAYBE SEBASTIAN IS OVERLY VULGAR FOR NO REASON.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 132,
        "characterName": "Me",
        "characterExpression": "",
        "text": "YOU THINK BELITTLING ME MAKES ME A BETTER CHEF?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 133,
        "characterName": "Me",
        "characterExpression": "",
        "text": "IT JUST SHOWS HOW INSECURE YOU ARE",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 134,
        "characterName": "Me",
        "characterExpression": "",
        "text": "MAYBE IF YOU FOCUSED ON LEADING INSTEAD OF INSULTING, I'D ACTUALLY IMPROVE",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 135,
        "characterName": "Sebastian",
        "characterExpression": "default",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 136,
        "characterName": "Sebastian",
        "characterExpression": "",
        "text": "get out.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 137,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Fine.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 138,
        "characterName": "",
        "characterExpression": "",
        "text": "(You throw down your apron and storm out of the kitchen)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 139,
        "characterName": "",
        "characterExpression": "",
        "text": "(The Duval brothers are left in stunned silence... watching)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 140,
        "characterName": "",
        "characterExpression": "",
        "text": "(as you meander disconnectedly through the streets...)",
        "textSpeed": "",
        "options": []
    },
  ]

  const textTree_5 = [
    {
        "id": 1,
        "characterName": "Me",
        "characterExpression": "",
        "text": "ugh",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 2,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I cannot believe i'm in such a state",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 3,
        "characterName": "Me",
        "characterExpression": "",
        "text": "What have I gotten myself into.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 4,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I should just return.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 5,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I already manage a two michellin star restaurant.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 6,
        "characterName": "Me",
        "characterExpression": "",
        "text": "There's no need to be here.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 7,
        "characterName": "Me",
        "characterExpression": "",
        "text": "That's right!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 8,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'm going to leave now.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 9,
        "characterName": "",
        "characterExpression": "",
        "text": "(You hear a knock on your door)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 10,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(I thought I put the 'no room service' sign on the door)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 11,
        "characterName": "Me",
        "characterExpression": "",
        "text": "No Room Service Please.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 12,
        "characterName": "???",
        "characterExpression": "",
        "text": "It's not room service.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 13,
        "characterName": "Me",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 14,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Then who is it.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 15,
        "characterName": "???",
        "characterExpression": "",
        "text": "Sebastian Duval sent me.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 16,
        "characterName": "Me",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 17,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'm not coming back",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 18,
        "characterName": "???",
        "characterExpression": "",
        "text": "And I'm not going to convince you.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 19,
        "characterName": "???",
        "characterExpression": "",
        "text": "I just want to drink over some tea",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 20,
        "characterName": "",
        "characterExpression": "",
        "text": "(You open the door)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 21,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Yamamoto",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 22,
        "characterName": "Yamamoto",
        "characterExpression": "default2",
        "text": "Morning",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 23,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Hello",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 24,
        "characterName": "Yamamoto",
        "characterExpression": "happy",
        "text": "You always were a fiery one.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 25,
        "characterName": "Yamamoto",
        "characterExpression": "",
        "text": "Why don't you come by and visit my place?",
        "textSpeed": "",
        "options": [
            {
                text: "Go with Yamamoto",
                setInventory: { duval:true },
                points: 0,
                nextText: 26
            },
            {
                text: "You have other places to be",
                points: 0,
                nextText: 78
            },
            
        ]
    },
    {
        "id": 26,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I suppose I have some time to spare",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 27,
        "characterName": "Yamamoto",
        "characterExpression": "happy2",
        "text": "That's good to hear",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 28,
        "characterName": "Yamamoto ",
        "characterExpression": "",
        "text": "Here we are",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 29,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It's...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 30,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I... it's a nice place",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 31,
        "characterName": "Yamamoto",
        "characterExpression": "",
        "text": "Thank you.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 32,
        "characterName": "Yamamoto",
        "characterExpression": "default2",
        "text": "The days from when I was young are long gone now.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 33,
        "characterName": "Yamamoto",
        "characterExpression": "happy",
        "text": "Now I live for my tea house.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 34,
        "characterName": "",
        "characterExpression": "",
        "text": "(Yamamoto, a wise and gentle soul with a past of culinary greatness...)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 35,
        "characterName": "",
        "characterExpression": "",
        "text": "(half a decade ago, decided to give up his position and status and left the industry forever)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 36,
        "characterName": "Yamamoto",
        "characterExpression": "happy",
        "text": "Welcome, Hugo. Please, make yourself comfortable.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 37,
        "characterName": "",
        "characterExpression": "",
        "text": "(You take a seat underneath a small canopy)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 38,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Thank you for having me, Yamamoto",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 39,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I must admit, I've never experienced a traditional tea ceremony before.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 40,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I've heard tales of your legendary three Michelin-starred restaurant. It's an honor to be here.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 41,
        "characterName": "Yamamoto",
        "characterExpression": "happy2",
        "text": "The honor is mine, Hugo. The art of tea is very different from the world of Michelin stars. Here, we celebrate the simplicity of the moment",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 42,
        "characterName": "",
        "characterExpression": "",
        "text": "(Yamamoto Takahata begins the ceremony, his movements deliberate and graceful)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 43,
        "characterName": "",
        "characterExpression": "",
        "text": "(He pours hot water over the delicate tea leaves, the steam rising in ethereal wisps)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 44,
        "characterName": "Yamamoto ",
        "characterExpression": "",
        "text": "(softly to himself) Each step of the tea ceremony is infused with an essence of mindfulness. It is a dance between host and guest, a celebration of simplicity",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 45,
        "characterName": "",
        "characterExpression": "",
        "text": "(Hugo watches in quiet awe as Yamamoto prepares the tea, his expression a mixture of reverence and fascination)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 46,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(breathlessly) I’ve read about your restaurant, Yamamoto-san.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 47,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It was heralded as one of the greatest in the world.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 48,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Yet, you left it all behind for this... Why?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 49,
        "characterName": "Yamamoto",
        "characterExpression": "default",
        "text": "Success can be a double-edged sword, Hugo.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 50,
        "characterName": "Yamamoto",
        "characterExpression": "happy",
        "text": "At the height of my culinary career, I came to the realization that I haven't a clue why I continue to trudge forward day after day...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 51,
        "characterName": "Yamamoto",
        "characterExpression": "",
        "text": "And having attained all the wealth 20 combined men could ever dream of. What more am I continuing forward for.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 52,
        "characterName": "Yamamoto",
        "characterExpression": "happy",
        "text": "The tea ceremony taught me the beauty of simplicity and the value of being present in the moment.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 53,
        "characterName": "Yamamoto",
        "characterExpression": "",
        "text": "Tell me Hugo,",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 54,
        "characterName": "Yamamoto",
        "characterExpression": "default2",
        "text": "Why are you continuing forward?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 55,
        "characterName": "",
        "characterExpression": "",
        "text": "(You reflect on Yamamoto-san’s words until you quietly begin to mutter)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 56,
        "characterName": "Me",
        "characterExpression": "",
        "text": "To prove everyone wrong",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 57,
        "characterName": "Yamamoto ",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 58,
        "characterName": "Yamamoto",
        "characterExpression": "happy",
        "text": "Perfection is an illusion, Hugo. True mastery lies in embracing imperfection.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 59,
        "characterName": "Yamamoto",
        "characterExpression": "",
        "text": "How many centuries are you going to spend proving 8 billion people wrong?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 60,
        "characterName": "Yamamoto",
        "characterExpression": "default2",
        "text": "Ask yourself Hugo, do you NEED to become a world-class chef?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 61,
        "characterName": "Yamamoto",
        "characterExpression": "default",
        "text": "Whatever that answer may be, that will guide your journey forward.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 62,
        "characterName": "",
        "characterExpression": "",
        "text": "(You lay deep in thought)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 63,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Thank you, Yamamoto-san. You've given me much to think about.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 64,
        "characterName": "Yamamoto",
        "characterExpression": "happy",
        "text": "It is I who should thank you, Hugo. For it is in sharing these moments that we both grow.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 65,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Forgive my inquiry, Yamamoto-san, but is there any food available?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 66,
        "characterName": "Me",
        "characterExpression": "",
        "text": "My palate is quite intrigued by the prospect of experiencing your culinary creations.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 67,
        "characterName": "",
        "characterExpression": "",
        "text": "(Yamamoto smiles gently, his eyes twinkling with amusement)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 68,
        "characterName": "Yamamoto",
        "characterExpression": "happy2",
        "text": "Ah, Hugo-san, you have come to a traditional tea house, where the focus is on the art of tea rather than food.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 69,
        "characterName": "Yamamoto",
        "characterExpression": "happy",
        "text": "However, there happens to be a delightful food festival taking place back in the city.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 70,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A food festival you say?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 71,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Do you plan to participate, Yamamoto-san?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 72,
        "characterName": "Yamamoto",
        "characterExpression": "default2",
        "text": "No, my friend.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 73,
        "characterName": "Yamamoto",
        "characterExpression": "default",
        "text": "Prior to my departure, I participated every year fighting tooth and nail to become the best stall in the carnival.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 74,
        "characterName": "Yamamoto",
        "characterExpression": "happy",
        "text": "It's time I leave that life behind and enjoy this simpler life.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 75,
        "characterName": "",
        "characterExpression": "",
        "text": "(You nod, understanding Yamamoto's choice)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 76,
        "characterName": "Yamamoto",
        "characterExpression": "",
        "text": "I wonder,",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 77,
        "characterName": "Yamamoto",
        "characterExpression": "default2",
        "text": "were you perhaps invited to particiapate?",
        "textSpeed": "",
        "options": [
            {
                text: "I believe I was",
                required: reqState('scroll'),
                setInventory: { yamamoto:true },
                points: 0,
                nextText: 81
            },
            {
                text: "I don't recall.",
                points: 0,
                nextText: 78
            },
        ]
    },
    {
        "id": 78,
        "characterName": "Yamamoto",
        "characterExpression": "happy",
        "text": "In that case, I'll say my goodbyes",
        "textSpeed": "",
        "options": [
            {
                text: "Continue to Culinary Carnival",
                required: reqState('scroll'),
                setInventory: {},
                points: 0,
                nextText: 84
            },
            {
                text: "Head Home",
                setInventory: {},
                points: 0,
                nextText: 79
            },
        ]
    },
    {
        "id": 79,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Until next time, Yamamoto-san.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 80,
        "characterName": " ",
        "characterExpression": "",
        "text": " ",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 81,
        "characterName": "Yamamoto",
        "characterExpression": "",
        "text": "In that case, let me pass you my recommendation.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 82,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Thank you Yamamoto-san, for everything.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 83,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'll see you next time... Farewell.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 84,
        "characterName": "Me",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
  ]

  const textTree_6 = [
    {
        "id": 1,
        "characterName": "",
        "characterExpression": "",
        "text": "(You stand before a serene shrine, nestled away from the bustling world)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 2,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your expression is one of bewilderment)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 3,
        "characterName": "Me",
        "characterExpression": "",
        "text": "What serves as the purpose of this structure?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 4,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Who would spend time building this? It's just a collection of stones and old wood, nothing more.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 5,
        "characterName": "",
        "characterExpression": "",
        "text": "(You hesitate, feeling slightly out of place. The calm atmosphere starts to seep into your thoughts)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 6,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(I wonder what it is)",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 7,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(There's something about this place)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 8,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(The air feels different here, almost...)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 9,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(cleansing)",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 10,
        "characterName": "Me",
        "characterExpression": "",
        "text": "w... What is it that people usually do here?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 11,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah yes, pray.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 12,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I suppose I could try...",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 13,
        "characterName": "Me",
        "characterExpression": "",
        "text": "And as they say, embarking on the journey of experimentation, sometimes leads to profound revelations.",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 14,
        "characterName": "",
        "characterExpression": "",
        "text": "(You kneel before the shrine, almost involuntarily, and close your eyes)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 15,
        "characterName": "",
        "characterExpression": "",
        "text": "(You clasp your hands together, not quite sure what you're doing)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 16,
        "characterName": "",
        "characterExpression": "",
        "text": "(Your thoughts begin to drift)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 17,
        "characterName": "",
        "characterExpression": "",
        "text": "(You begin to feel sleepy)",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 18,
        "characterName": "Me",
        "characterExpression": "",
        "text": "W... WHAT AM I DOING HERE!?",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 19,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I... I need to",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 20,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I shall depart at once!",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 21,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(You take a look around almost out of nostalgia and take your leave)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 22,
        "characterName": "Me",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 23,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Perhaps, I need to reconsider.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 24,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Why do I chose to pursue greatness as a chef.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 25,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Is my pursuit of a culinary dynasty as shallow as wanting to be better than others.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 26,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Am I really that petty?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 27,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(You think to yourself for a second)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 28,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'm not sure.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 29,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Isn't being a chef truly important to me?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 30,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It appears I need time for introspection.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 31,
        "characterName": "",
        "characterExpression": "",
        "text": "(You continue towards the culinary carnival)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 32,
        "characterName": "",
        "characterExpression": "",
        "text": "(You arrive at the bustling Culinary Carnival)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 33,
        "characterName": "",
        "characterExpression": "",
        "text": "(The air alive with the sounds of sizzling grittles, tantalizing aromas, and the lively chatter of the patrons)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 34,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Excuse me, my good man. Could you point me in the direction of the nearest delicacy?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 35,
        "characterName": "Random Vendor",
        "characterExpression": "",
        "text": "Right this way, Sir! You can't miss the armoa of our freshly grilled kebabs!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 36,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Magnificent! And what's that tantalizing scent wafting from that stall over yonder",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 37,
        "characterName": "Random Vendor",
        "characterExpression": "default2",
        "text": "Oh that's the gourmet popcorn stand!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 38,
        "characterName": "Random Vendor",
        "characterExpression": "happy",
        "text": "I had some of their stuff earlier",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 39,
        "characterName": "Random Vendor",
        "characterExpression": "neutral",
        "text": "It was...",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 40,
        "characterName": "Random Vendor",
        "characterExpression": "angry",
        "text": "delicious...",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 41,
        "characterName": "Me",
        "characterExpression": "",
        "text": "How splendid. I shall go try it!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 42,
        "characterName": "Random Vendor",
        "characterExpression": "pout",
        "text": "Wait! You have to try our food first!",
        "textSpeed": "fast",
        "options": []
    },
    {
        "id": 43,
        "characterName": "Random Vendor",
        "characterExpression": "happy",
        "text": "These kebabs will blow your socks off",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 44,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Certainly!",
        "textSpeed": "",
        "options": []
    },
    {
      "id": 45,
      "characterName": "",
      "characterExpression": "",
      "text": "(You try the Shish Kebab)",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 46,
      "characterName": "Me",
      "characterExpression": "",
      "text": "My my, this is just spectacular. Each succulent morsel of marinated meat, flawlessly seared to a perfect char, reveals layers of intricate flavors that dance upon the palate, while the accompanying vegetables, grilled to tender perfection, provide a harmonious counterpoint.",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 47,
      "characterName": "Me",
      "characterExpression": "",
      "text": "Splendid sir, just splendid!",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 48,
      "characterName": "Random Vendor",
      "characterExpression": "happy",
      "text": "Didn't I tell you. ",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 49,
      "characterName": "Me",
      "characterExpression": "",
      "text": "Goodness, the aroma here is positively intoxicating, isn't it?",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 50,
      "characterName": "Random Vendor",
      "characterExpression": "default",
      "text": "Tell me about it! Have you tried the barbecue ribs over there? They're to die for!",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 51,
      "characterName": "Random Vendor",
      "characterExpression": "pout",
      "text": "Of course our's is better though.",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 52,
      "characterName": "Me",
      "characterExpression": "",
      "text": "Ah, I see them. Quite the line forming. And listen, the music in the background, it adds such a festive touch to the atmosphere.",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 53,
      "characterName": "Random Vendor",
      "characterExpression": "default2",
      "text": "Step right up, folks! Freshly baked pastries, hot off the grill! Get 'em while they're hot!",
      "textSpeed": "",
      "options": []
    },
    {
      "id": 54,
      "characterName": "Me",
      "characterExpression": "",
      "text": "(You continue to walk along the other food stalls)",
      "textSpeed": "",
      "options": []
    },
    {
        "id": 55,
        "characterName": "Child ",
        "characterExpression": "",
        "text": "Hey mister!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 56,
        "characterName": "Child",
        "characterExpression": "happy",
        "text": "Can you tell me where the ice cream is?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 57,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, a connoisseur in the making!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 58,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Follow me, and I'll lead you to the sweetest spot in the entire carnival.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 59,
        "characterName": "Random Vendor",
        "characterExpression": "happy",
        "text": "Bye bye, and thank you for tasting my food!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 60,
        "characterName": "",
        "characterExpression": "",
        "text": "(You lead the child towards an artisanal ice-cream stall)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 61,
        "characterName": "Me",
        "characterExpression": "",
        "text": "This stall is renowned for its exotic flavors. Each scoop, is a journey of discovery each with their own signature flair.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 62,
        "characterName": "Child",
        "characterExpression": "happy",
        "text": "Thank you mister!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 63,
        "characterName": "",
        "characterExpression": "",
        "text": "(You continue along the footpath when you notice something in the corner of your eye)",
        "textSpeed": "",
        "options": [
          {
            text: 'Your Assistant',
            required: reqState('assistant'),
            setInventory: { assistant:false },
            points: 3,
            nextText: 64
          },
          {
            text: 'Alexander Fontaine',
            required: reqState('fontaine'),
            setInventory: { fontaine:false },
            points: 3,
            nextText: 83
          },
          {
            text: 'Naomi Kimura',
            required: reqState('kimura'),
            setInventory: { kimura:false },
            points: 3,
            nextText: 103
          },
          {
            text: 'The Duval Brothers',
            required: reqState('duval'),
            setInventory: { duval:false },
            points: 3,
            nextText: 119
          },
          {
            text: 'Yamamoto Kiyotaka',
            required: reqState('yamamoto'),
            setInventory: { yamamoto:false },
            points: 3,
            nextText: 154
          },
          {
            text: "The 'Carnival Exit' sign",
            points: 0,
            nextText: 177
          },
        ]
    },
    {
        "id": 64,
        "characterName": "",
        "characterExpression": "",
        "text": "(You spot your Assistant amidst the throngs of people, their presence triggering a wave of introspection within you)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 65,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, I didn't think I'd see you here.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 66,
        "characterName": "Assistant",
        "characterExpression": "surprised",
        "text": "Ah, you scared me.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 67,
        "characterName": "Assistant",
        "characterExpression": "default",
        "text": "How was your trip Mister Sinclair?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 68,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It was... enlightening.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 69,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I... I must confess, I've been remiss in acknowledging your contributions in the past",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 70,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It was truly unbecoming of me",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 71,
        "characterName": "Assistant",
        "characterExpression": "impressed",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 72,
        "characterName": "Assistant",
        "characterExpression": "default2",
        "text": "No need to apologize sir.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 73,
        "characterName": "Assistant",
        "characterExpression": "default",
        "text": "I know the pressures you've been under",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 74,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Nonetheless, it's high time I rectify my behaviour. Please accept my sincerest apologies.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 75,
        "characterName": "",
        "characterExpression": "",
        "text": "(Overwhelmed by your change in demeanor, he offers a shy smile)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 76,
        "characterName": "Assistant",
        "characterExpression": "happy",
        "text": "You already gave me that free ticket to your restaurant",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 77,
        "characterName": "Assistant",
        "characterExpression": "",
        "text": "That's more than enough already",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 78,
        "characterName": "Assistant",
        "characterExpression": "nervous",
        "text": "Although, I think I lost it at the beach...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 79,
        "characterName": "Me",
        "characterExpression": "",
        "text": "ARE YOU SERIOUS?!?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 80,
        "characterName": "Assistant",
        "characterExpression": "disgust",
        "text": "AHHHHHHH RUN RUN RUN RUN!!!!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 81,
        "characterName": "Assistant",
        "characterExpression": "happy",
        "text": "oops other way",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 82,
        "characterName": "",
        "characterExpression": "",
        "text": "(And so, the story with your Assistant comes to an end)",
        "textSpeed": "",
        "options": [
          {
            text: "Continue",
            points: 0,
            nextText: 63,
          },
        ]
    },
    {
        "id": 83,
        "characterName": "",
        "characterExpression": "",
        "text": "(You spot Alexander Fontaine amidst the croud, his jovial demeanor unmistakeable even from a distance)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 84,
        "characterName": "",
        "characterExpression": "",
        "text": "(As you approach, he notices you instantly)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 85,
        "characterName": "Fontaine",
        "characterExpression": "default2",
        "text": "Ah, fancy seeing you here. Care to join me for a drink?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 86,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It's a pleasure, Mr Fontaine. Your enthusiasm for this carnival is infectious.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 87,
        "characterName": "Fontaine",
        "characterExpression": "default",
        "text": "How can you blame me?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 88,
        "characterName": "Fontaine",
        "characterExpression": "happy",
        "text": "Every stall offers something unique. It's a feast for my eyes and my mouth.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 89,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I couldn't agree more. Let's dive in and savor every moment of this culinary adventure!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 90,
        "characterName": "",
        "characterExpression": "",
        "text": "(After a single drink, Alexander is noticably delirious)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 91,
        "characterName": "Fontaine",
        "characterExpression": "drunk",
        "text": "ah.. ef .f meehhh",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 92,
        "characterName": "Me",
        "characterExpression": "",
        "text": ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
        "textSpeed": "slower",
        "options": []
    },
    {
        "id": 93,
        "characterName": "Me",
        "characterExpression": "",
        "text": "This man is a fool",
        "textSpeed": "slow",
        "options": []
    },
    {
        "id": 94,
        "characterName": "Fontaine",
        "characterExpression": "drunk",
        "text": "adh hguo, hic, lest mes taell you semthing.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 95,
        "characterName": "Fontaine",
        "characterExpression": "drunk",
        "text": "ist'h like a... like a symyhhopn of cosah, hic! peosilhb ywa, ouy know? Ah, f, what a glorioush mishmash of culinary delish... delish... delicacies! ",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 96,
        "characterName": "",
        "characterExpression": "",
        "text": "(He clumsily raises a half-empty glass, nearly spilling its contents, before taking a wobbly sip)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 97,
        "characterName": "Fontaine",
        "characterExpression": "drunk",
        "text": "Let'sh raishe our glasshesh to... to... hshall ew?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 98,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(Hmm, it appears Fontaine has truly embraced the spirit of the carnival, albeit with a rather... unique eloquence)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 99,
        "characterName": "",
        "characterExpression": "",
        "text": "(You clink glasses)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 100,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I suppose I should get going Alexander.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 101,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Nice seeing you around",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 102,
        "characterName": "",
        "characterExpression": "",
        "text": "(And so, your story with Alexander Fontaine comes to an end)",
        "textSpeed": "",
        "options": [
          {
            text: "Continue",
            points: 0,
            nextText: 63,
          },
        ]
        
    },
    {
        "id": 103,
        "characterName": "",
        "characterExpression": "",
        "text": "(As you turn a corner, you come face to face with Naomi Kimura, her expression a mix of surprise and mild annoyance)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 104,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Ah, Mr Kimura. So we meet again.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 105,
        "characterName": "Kimura",
        "characterExpression": "angry",
        "text": "Who you calling mister, Madame Sinclair??",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 106,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Excuse you, why, with that sharp tongue of yours, I'm surprised you haven't bitten it off!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 107,
        "characterName": "Kimura",
        "characterExpression": "default2",
        "text": "Tell me, do mirrors crack themselves to avoid the reflection of your abominable appearance?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 108,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well, Madame Kimura, if mirrors cracked at the sight of ugliness, your apartment block may require inspection of structural integrity.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 109,
        "characterName": "Kimura",
        "characterExpression": "default",
        "text": "I will end you.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 110,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I will end this conversation, cya.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 111,
        "characterName": "Kimura",
        "characterExpression": "default",
        "text": "Hold on.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 112,
        "characterName": "Kimura",
        "characterExpression": "default2",
        "text": "I just wanted to tell you,",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 113,
        "characterName": "Kimura",
        "characterExpression": "happy",
        "text": "You really surprised me with your skills back then.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 114,
        "characterName": "Kimura",
        "characterExpression": "embarrassed",
        "text": "You've been delightful.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 115,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Thank you Kimura, it means everything coming from you.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 116,
        "characterName": "Kimura",
        "characterExpression": "default2",
        "text": "Delightfully stupid. Goodbye.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 117,
        "characterName": "Me",
        "characterExpression": "",
        "text": "What a doofus gorilla she is.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 118,
        "characterName": "",
        "characterExpression": "",
        "text": "(And so, your story with Naomi Kimura comes to an end)",
        "textSpeed": "",
        "options": [
          {
            text: "Continue",
            points: 0,
            nextText: 63,
          },
        ]
    },
    {
        "id": 119,
        "characterName": "",
        "characterExpression": "",
        "text": "(You spot the brothers, Rafael and Sebastian Duval, chatting animatedly with patrons)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 120,
        "characterName": "",
        "characterExpression": "",
        "text": "(Approaching them with a mixture of apprehension and lingering resentment, you greet them with a forced smile)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 121,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Rafael, Sebastian. Fancy seeing you both here.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 122,
        "characterName": "",
        "characterExpression": "",
        "text": "(Rafael's expression brightens at the sight of Hugo, though there's a hint of nervousness in his demeanor, while Sebastian adjusts his chef's hat with mild embarrassment, his gaze avoiding Hugo's)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 123,
        "characterName": "Rafael",
        "characterExpression": "happy",
        "text": "Hugo! I've was hoping I'd see you here!",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 124,
        "characterName": "Rafael",
        "characterExpression": "happy2",
        "text": "Have you tried our burger sliders?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 125,
        "characterName": "Sebastian",
        "characterExpression": "embarrassed2",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 126,
        "characterName": "Rafael",
        "characterExpression": "happy",
        "text": "They're our latest creation.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 127,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I hadn't. Mind if I try one.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 128,
        "characterName": "Sebastian",
        "characterExpression": "disappointed",
        "text": "Here.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 129,
        "characterName": "Me",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 130,
        "characterName": "Sebastian",
        "characterExpression": "embarrassed",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 131,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I apologize.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 132,
        "characterName": "Sebastian",
        "characterExpression": "surprised",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 133,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It was my fault for lashing out and being overly prideful.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 134,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I only hope you can forgive me.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 135,
        "characterName": "Sebastian",
        "characterExpression": "happy",
        "text": "Hugo, before we go any further. I was harsh, and I know it drove you away.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 136,
        "characterName": "Sebastian",
        "characterExpression": "embarrassed",
        "text": "I'm also at fault.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 137,
        "characterName": "Sebastian",
        "characterExpression": "",
        "text": "If ya decide you would like to continue with us, we'll be waiting.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 138,
        "characterName": "Sebastian",
        "characterExpression": "disappointed",
        "text": "Just remember to show up on time.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 139,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I've a had a revelation over the past days.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 140,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I've realized the only reason I continue to pursue culinary greatness is solely out of ego.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 141,
        "characterName": "Me",
        "characterExpression": "",
        "text": "It seems like my purpose for existing up till this moment...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 142,
        "characterName": "Me",
        "characterExpression": "",
        "text": "has been entirely influenced by me comparing myself to the next person, then the next person, then the next until I've finally toppled the last tower.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 143,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I intend to stop that today.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 144,
        "characterName": "Me",
        "characterExpression": "",
        "text": "So, I won't be continuing with you both.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 145,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I hope you understand.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 146,
        "characterName": "Rafael",
        "characterExpression": "happy",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 147,
        "characterName": "Sebastian",
        "characterExpression": "embarrassed",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 148,
        "characterName": "Sebastian",
        "characterExpression": "default",
        "text": "I understand.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 149,
        "characterName": "Sebastian",
        "characterExpression": "disappointed",
        "text": "Then when you're in town, remember to drop by.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 150,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(nods)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 151,
        "characterName": "Rafael",
        "characterExpression": "happy2",
        "text": "Well then, would you like to try out our experimental range?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 152,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I'd love to.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 153,
        "characterName": "",
        "characterExpression": "",
        "text": "(And so, your story with the Duval brothers comes to an end)",
        "textSpeed": "",
        "options": [
          {
            text: "Continue",
            points: 0,
            nextText: 63,
          },
        ]
    },
    {
        "id": 154,
        "characterName": "",
        "characterExpression": "",
        "text": "(You notice Mr Yamamoto pass by amongst the crowd)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 155,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Hm, I didn't think he would be here...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 156,
        "characterName": "Me",
        "characterExpression": "",
        "text": "(You jog after him)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 157,
        "characterName": "Me",
        "characterExpression": "",
        "text": "...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 158,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Maybe it was an imposter",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 159,
        "characterName": "Me",
        "characterExpression": "",
        "text": "If he said he wasn't going to come, he probably didn't.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 160,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Yamamoto-san was never one to lie.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 161,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well, while I'm here, I may as well take a look around.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 162,
        "characterName": "",
        "characterExpression": "",
        "text": "(You notice an isolated stall)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 163,
        "characterName": "Me",
        "characterExpression": "",
        "text": "What do we have here?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 164,
        "characterName": "",
        "characterExpression": "",
        "text": "(You take a closer look)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 165,
        "characterName": "Me",
        "characterExpression": "",
        "text": "I wonder what this is doing here.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 166,
        "characterName": "Me",
        "characterExpression": "",
        "text": "A tea stall...",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 167,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Why is it so secluded from all the other stalls?",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 168,
        "characterName": "",
        "characterExpression": "",
        "text": "(You notice a sign on the back-side)",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 169,
        "characterName": "",
        "characterExpression": "",
        "text": "Constructed as per carnival winner Yamamoto Kiyotaka's request after winning 'Best Stall' seven years running.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 170,
        "characterName": "",
        "characterExpression": "",
        "text": "Yamamoto Kiyataka specialises in Sushi of which customers would often travel cities to try. When asked why he didn't want to make a sushi stall, Yamamoto answered, ",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 171,
        "characterName": "",
        "characterExpression": "",
        "text": "Sushi is an art, a dance of precision and tradition. But here, in the heart of this carnival, I sought to share a different kind of nourishment.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 172,
        "characterName": "",
        "characterExpression": "",
        "text": "The tea I serve here carries the essence of my journey, the quiet moments of reflection, the wisdom gained from the simplest of practices.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 173,
        "characterName": "",
        "characterExpression": "",
        "text": "It is a reminder that even in the midst of chaos, there is tranquility to be found.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 174,
        "characterName": "",
        "characterExpression": "",
        "text": "My sushi is for those who seek culinary mastery; my tea is for those who seek peace and understanding. ",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 175,
        "characterName": "",
        "characterExpression": "",
        "text": "Both hold their own value, but today, I offer the latter.",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 176,
        "characterName": "",
        "characterExpression": "",
        "text": "(You think over Yamamoto's words)",
        "textSpeed": "",
        "options": [
          {
            text: "Continue",
            points: 0,
            nextText: 63,
          },
        ]
    },
    {
        "id": 177,
        "characterName": "Me",
        "characterExpression": "",
        "text": "Well, I suppose it's time to depart",
        "textSpeed": "",
        "options": []
    },
    {
        "id": 178,
        "characterName": "Me",
        "characterExpression": "",
        "text": "This has been an enlightening experience.",
        "textSpeed": "",
        "options": []
    },
  ]

  // End Game
  const textTree_7 = [
    {
      id: 1,
      characterName: 'Me',
      characterExpression: '', 
      text: "Let's get back to work then shall we.",
      textSpeed: '',
      options: [

      ]
    },
    {
      id: 2,
      characterName: '',
      characterExpression: '', 
      text: "(As the day draws to a close, Hugo reflects on the whirlwind of experiences at the culinary carnival)",
      textSpeed: '',
      options: [

      ]
    },
    {
      id: 3,
      characterName: '',
      characterExpression: '', 
      text: "(his heart and mind enriched by the encounters with old friends and new acquaintances)",
      textSpeed: '',
      options: [

      ]
    },
    {
      id: 4,
      characterName: '',
      characterExpression: '', 
      text: "(However as you continue to scribble thoughts of your past dishes...)",
      textSpeed: '',
      options: [

      ]
    },
    {
      id: 5,
      characterName: '',
      characterExpression: '', 
      text: "A thought continually pops into your mind...",
      textSpeed: '',
      options: [

      ]
    },
    {
      id: 6,
      characterName: '',
      characterExpression: '', 
      text: " ",
      textSpeed: 'fast',
      options: [

      ]
    },

    {
      id: 7,
      characterName: 'Me',
      characterExpression: '', 
      text: "After I complete my work, I should ensure that I tie up any loose ends. (Write 2 reviews to finish!)",
      textSpeed: '',
      options: [

      ]
    }
  ]

  function textTreeManager() {
    if(currentScene === 1){
      if(currentTextID === 1) {
        hideSprite();
      } else if (currentTextID === 8) {
        setBG(bgs.mirror)

        setTimeout(() => {
          document.getElementById('mirror').style.display = 'block';
        }, 1000);
      } else if (currentTextID === 16) {
        setBG(bgs.hallway);
        setTimeout(() => {
          document.getElementById('mirror').style.display = 'none';
        }, 1000);
      } else if (currentTextID === 17) {
        changeSprite(sprites.Assistant.surprised, 500);
        resetAudio();
        assistantTheme.play();
      } else if (currentTextID === 19) {
        scaredAnimation();
        changeSprite(sprites.Assistant.disgust);
      } else if (currentTextID === 21) {
        scaredAnimation();
        changeSprite(sprites.Assistant.disgust);
      } else if (currentTextID === 23) {
        scaredAnimation();
      } else if (currentTextID === 24) {
        setTimeout(() => {
          moveLeft(2000,3000);
        }, 200);
      } else if (currentTextID === 25) {
        moveRight(4000,4000);
      } else if (currentTextID === 29) {
        hideSprite()
        resetSpriteX();

        setTimeout(() => {
          document.getElementById('scroll').style.display = 'block';
        }, 1000);

        setBG(bgs.entrance);

        resetAudio();
        whiteNoise.play()
      } else if (currentTextID === 33) {
        setBG(bgs.kitchen);
        setTimeout(() => {
          document.getElementById('scroll').style.display = 'none';
        }, 1000);
      } else if (currentTextID === 35) {
        resetAudio();
        whiteNoise.play();
        assistantTheme.play();
      } else if (currentTextID === 40) {
        setTimeout(() => {
          moveLeft(2000,2000)
        }, 1000);
      } else if (currentTextID === 41) {
        resetSpriteX(500);
      } else if (currentTextID === 43) {
        magnifyItem(magnifyImages.scroll);
      } else if (currentTextID === 55) {
        document.getElementById('scroll').style.display = 'none';
        hideSprite();
        setBG(bgs.gate);
        resetAudio();
        whiteNoise.play();
        relax.play();
      } else if (currentTextID === 64) {
        resetAudio();
        resetSpriteX(100);
        assistantTheme.play()
      } else if (currentTextID === 68) {
        changeSprite(sprites.Assistant.default)
      } else if (currentTextID === 76) {
        hideSprite(200);
      } else if (currentTextID === 78) {
        hideSprite(200);
      }
    } else if (currentScene === 2) {
      if(currentTextID === 1) {
        carSFX.play()
      } else if (currentTextID === 2) {
        resetAudio();
        whiteNoise.play();
        whiteNoise.currentTime = 5;
        setBG(bgs.carOut)
      } else if (currentTextID === 4) {
        changeSprite(sprites.Local.default, 500);
      } else if (currentTextID === 5) {
        coastTheme.play();
      } else if (currentTextID === 15) {
        changeSprite(sprites.Local.clothes,50);
      } 
      else if (currentTextID === 20) {
        hideSprite(500);
        setBG(bgs.coast)
      } else if (currentTextID === 26) {
        resetAudio();
        whiteNoise.play();

        setBG(bgs.alexanderRestaurant);
      } else if (currentTextID === 29) {
        setBG(bgs.alexanderRestaurantInt);

        setTimeout(() => {
          fontaineTheme.play();
        }, 1000);

        setTimeout(() => {
          changeSprite(sprites.Fontaine.default, 500);
        }, 1000);
      } else if (currentTextID === 36) {
        hideSprite(500);
      } else if (currentTextID === 37) {
        setBG(bgs.seat);

        setTimeout(() => {
          changeSprite(sprites.Fontaine.default2,500)
        }, 1000);
      } 
      else if (currentTextID === 47) {
        setTimeout(() => {
          moveRight(2000,2000)
        }, 200); 
      } else if (currentTextID === 48) {
        setTimeout(() => {
          moveLeft(1750,200)
        }, 200);
      } else if (currentTextID === 51) {
        changeSprite(sprites.Fontaine.default)
      } else if (currentTextID === 52) {
        moveLeft(1500,10000);
      } else if (currentTextID === 53) {
        hideSprite();
        resetSpriteX()
      } else if (currentTextID === 56) {
        setDisplayImage(displayImages.entree)
        showDisplayImage();
      } else if (currentTextID === 63) {
        changeSprite(sprites.Fontaine.happy);
        hideSprite(2500)
        hideDisplayImage();
      } else if (currentTextID === 73) {
        setTimeout(() => {
          moveRight(2000,2000)
        }, 200); 
      } else if (currentTextID === 74) {
        setTimeout(() => {
          moveLeft(1750,200)
        }, 200);
      } else if (currentTextID === 77) {
        changeSprite(sprites.Fontaine.default)
      } else if (currentTextID === 78) {
        moveLeft(1500,10000);
      } else if (currentTextID === 79) {
        hideSprite();
        resetSpriteX()
      } else if (currentTextID === 82) {
        setDisplayImage(displayImages.entree)
        showDisplayImage();
      } else if (currentTextID === 89) {
        changeSprite(sprites.Fontaine.happy);
        hideSprite(2500)
        hideDisplayImage();
      } else if (currentTextID === 97) {
        setTimeout(() => {
          moveRight(2000,2000)
        }, 200); 
      } else if (currentTextID === 98) {
        setTimeout(() => {
          moveLeft(1750,200)
        }, 200);
      } else if (currentTextID === 103) {
        changeSprite(sprites.Fontaine.default)
      } else if (currentTextID === 104) {
        moveLeft(1500,10000);
      } else if (currentTextID === 105) {
        hideSprite();
        resetSpriteX()
      } else if (currentTextID === 108) {
        setDisplayImage(displayImages.entree)
        showDisplayImage();
      } else if (currentTextID === 117) {
        changeSprite(sprites.Fontaine.happy);
        hideSprite(2500)
        hideDisplayImage();
      } else if (currentTextID === 118) {
        changeSprite(sprites.Fontaine.default);
        setDisplayImage(displayImages.main);
        showDisplayImage();
      } else if (currentTextID === 121) {
        changeSprite(sprites.Fontaine.default);
      } else if (currentTextID === 122) {
        hideDisplayImage();
      } else if (currentTextID === 130) {
        hideSprite(500)
      } else if (currentTextID === 133) {
        setDisplayImage(displayImages.dessert);
        showDisplayImage();
      } else if (currentTextID === 144) {
        hideSprite(500);
        hideDisplayImage();
      } else if (currentTextID === 152) {
        resetAudio();
        guitar.play();
        
        setBG(bgs.canvas);
        setTimeout(() => {
          document.getElementById('whiteboard').style.display = 'block';
        }, 1000);
      } else if (currentTextID === 155) {
        resetAudio();
        drama.play();
        shakeAnimation();
      } else if (currentTextID === 157) {
        spiralAnimation();
      } else if (currentTextID === 166) {
        resetAudio();
        setTimeout(() => {
          whiteNoise.play();
        }, 1000);
      } else if (currentTextID === 167) {
        resetAudio();
        sinclairTheme.play();
        sinclairTheme.currentTime = 0.7;
      } else if (currentTextID === 168) {
        resetAudio();
        fontaineTheme.play();
      } else if (currentTextID === 174) {
        changeSprite(sprites.Fontaine.happy);
      } else if (currentTextID === 179) {
        resetAudio();
        whiteNoise.play();
      } else if (currentTextID === 180) {
        resetAudio();
        fontaineTheme.play()
      } else if (currentTextID === 181) {
        setTimeout(() => {
          hideSprite(250);
        }, 500);
      } else if (currentTextID === 182) {
        setTimeout(() => {
          setTimeout(() => {
          }, 500);
        }, 1000);
      } else if (currentTextID === 184) {
        hideSprite(500);
      } else if (currentTextID === 187) {
        resetAudio()
        guitar.play();
        whiteNoise.play();

        hideTextbox();
        document.getElementById('whiteboard').style.display = 'none';
        document.getElementById('whiteboard2').style.display = 'block';
      } else if (currentTextID === 201) {
        hideSprite();
      } else if (currentTextID === 202) {
        document.getElementById('displayImage').style.display = 'block';
      } else if (currentTextID === 215) {
        hideDisplayImage()
        hideSprite();
        setBG(bgs.alexanderRestaurant);
        setTimeout(() => {
          document.getElementById('displayImage').style.display = 'none';
          document.getElementById('whiteboard2').style.display = 'none';
        }, 1000);
      }

    } else if (currentScene === 3) {
      if(currentTextID === 1) {
        whiteNoise.volume = 0.2;
        city.play();
      } else if (currentTextID === 6) {
        setBG(bgs.cityBus);
      } else if (currentTextID === 12) {
        setBG(bgs.cityRestaurant);
      } else if (currentTextID === 16) {
        resetAudio();
        relax.play();
      } else if (currentTextID === 18) {
        resetAudio();
        kitchenNoise.play();
        kitchenNoise.volume = 0.2;
        anticipation.play();
      } else if (currentTextID === 27) {
        fadeAudio(0,anticipation,1000)
        fadeAudio(1,kitchenNoise,3000)
      } else if (currentTextID === 30) {
        resetAudio();
        kitchenNoise.play();
        setBG(bgs.cityRestaurantInt);
      } else if (currentTextID === 31) {
        changeSprite(sprites.Kimura.default, 500)
      } else if (currentTextID === 34) {
        changeSprite(sprites.Kimura.default2)
      } else if (currentTextID === 36) {
        resetAudio();
        anticipation.play();
        anticipation.volume = 1;
        changeSprite(sprites.Kimura.happy2)
      } else if (currentTextID === 38) {
        changeSprite(sprites.Kimura.happy)
      } else if (currentTextID === 39) {
        setBG(bgs.kitchen);
        fadeToOverlay(flashbackOverlay);
        flashbackInterval = setInterval(() => {
            $(blackOverlay).fadeTo(1000, 0.65);
            setTimeout(() => {
                $(blackOverlay).fadeTo(1000, 0.45);
            }, 1000);
        }, 3000);

      } else if (currentTextID === 49) {
        hideSprite(500);
      } else if (currentTextID === 52) {
        setDisplayImage(displayImages.coq);
        showDisplayImage();
      } else if (currentTextID === 61) {
        clearInterval(flashbackInterval);
        fadeOutOverlay();
        $(blackOverlay).fadeTo(1000, 0);
        setBG(bgs.cityRestaurantInt);
        hideDisplayImage();
      } else if (currentTextID === 74) {
        changeSprite(sprites.Kimura.happy)
      } else if (currentTextID === 76) {
        resetAudio();
        kimuraTheme.play();
      } else if (currentTextID === 83) {
        hideSprite(500);
        startingPoints = totalPoints;
      } else if (currentTextID === 85) {
        setDisplayImage(displayImages.b1);
        showDisplayImage();
      } else if (currentTextID === 86) {
        setDisplayImage(displayImages.c1);
        showDisplayImage();
      } else if (currentTextID === 87) {
        setDisplayImage(displayImages.d1);
        showDisplayImage();
      } else if (currentTextID === 88) {
        setDisplayImage(displayImages.e1);
        showDisplayImage();
      } else if (currentTextID === 89) {
        hideDisplayImage();
      } else if (currentTextID === 98) {
        setDisplayImage(displayImages.c3);
        showDisplayImage();
      } else if (currentTextID === 99) {
        hideDisplayImage();
      } else if (currentTextID === 100) {
        setDisplayImage(displayImages.e3);
        showDisplayImage();
      } 
      
      
      
      else if (currentTextID === 101) {
        hideDisplayImage();
        quizPoints = totalPoints - startingPoints;
        updateTextNode();
      } else if (currentTextID === 103) {
        quizManager();
      } else if (currentTextID === 115) {
        resetAudio();
        guitar.play();

        setBG(bgs.alexanderRestaurantInt);
      } 

    } else if (currentScene === 4) {
      if (currentTextID === 4) {
        setBG(bgs.hotel)
      } else if (currentTextID === 10) {
        resetAudio()
        guitar.play()
        setBG(bgs.lobby)
      } else if (currentTextID === 16) {
        changeSprite('images/characterSprites/egSprite4.png', 500)
      } else if (currentTextID === 20) {
        hideSprite(500)
        resetAudio()
        crickets.play()
        setBG(bgs.hotelRoom);
      } else if (currentTextID === 23) {
        setBG(bgs.hotelRoom2);
      } else if (currentTextID === 27) {
        fadeAudio(0,crickets,2000)
        hideTextbox();
        fadeToBlack();
        setTimeout(() => {
            clearInterval(revealTextInterval);
            dialogueTextElement.innerHTML = currentNode.text;
            populateButtons()
        }, 25);
        setTimeout(() => {
            setBG(bgs.hotelMorning);
        }, 2000);
        setTimeout(() => {
            fadeOutBlack();
        }, 6000);
      } else if (currentTextID === 41) {
        resetAudio();
        kitchenNoise.play();
        setBG(bgs.burgerBar);
      } else if (currentTextID === 42) {
        resetAudio();

        setBG(bgs.burgerBarInt)

        setTimeout(() => {
            kitchenNoise.play();
            duval.play();
            changeSprite(sprites.Sebastian.default, 500);
        }, 1000);
      } else if (currentTextID === 45) {
        fadeToOverlay(bgs.train);

        setTimeout(() => {
            fadeOutOverlay();
        }, 2000);
      } else if (currentTextID === 57) {
        setBG(bgs.burgerBarKitchen);
        hideSprite()
        setTimeout(() => {
            changeSprite(sprites.Sebastian.default,500)
        }, 1000);
      } else if (currentTextID === 76) {
        resetAudio();
        hideTextbox()

        fadeToBlack();
        setTimeout(() => {
            clearInterval(revealTextInterval);
            dialogueTextElement.innerHTML = currentNode.text;
            populateButtons()
        }, 25);
        setTimeout(() => {
            setBG(bgs.burgerBar);
        }, 2000);
        setTimeout(() => {
            fadeOutBlack();
        }, 4000);
      } else if (currentTextID === 77) {
        resetAudio();
        setTimeout(() => {
            hype.play();
            kitchenNoise.play();
            changeSprite(sprites.Sebastian.default,500)
        }, 1000);
        setBG(bgs.burgerBarKitchen);
      } else if (currentTextID === 89) {
        hideSprite(500);
      } else if (currentTextID === 100) {
        resetAudio();
        crickets.play();
        guitar.play();
        setBG(bgs.park);
      } else if (currentTextID === 101) {
        changeSprite(sprites.Sebastian.happy, 500)
      } else if (currentTextID === 106) {
        setBG(bgs.hotelRoom2);
      } else if (currentTextID === 113) {
        resetAudio();
        hideTextbox()

        fadeToBlack();
        setTimeout(() => {
            clearInterval(revealTextInterval);
            dialogueTextElement.innerHTML = currentNode.text;
            populateButtons()
        }, 25);
        setTimeout(() => {
            setBG(bgs.burgerBar);
            finalDay.play();
        }, 2000);
        setTimeout(() => {
            fadeOutBlack();
        }, 4000);
      } else if (currentTextID === 114) {
        changeSprite(sprites.Sebastian.happy, 500)
      } else if (currentTextID === 117) {
        setBG(bgs.burgerBarKitchen);
        setTimeout(() => {
            changeSprite(sprites.Rafael.happy, 500)
        }, 1000);
      } else if (currentTextID === 118) {
        hideSprite(500)
      } else if (currentTextID === 124) {
        resetAudio();
        whiteNoise.play()
        fadeAudio(1, whiteNoise, 3000, 0);
      } else if (currentTextID === 129) {
        changeSprite(sprites.Sebastian.surprised)
        tension.play();
      } else if (currentTextID === 131) {
        changeSprite(sprites.Rafael.default)
        calamity.play();
        fadeAudio(1, calamity, 3000, 0);
        calamity.currentTime = 44;
      } else if (currentTextID === 136) {
        resetAudio();
      } else if (currentTextID === 139) {
        setBG(bgs.burgerBar);
        crickets.play();
        relax.play();
      } 
    } else if (currentScene === 5) {
      if(currentTextID === 7) {
        fadeAudio(0, guitar, 3000, 1);
      } else if(currentTextID === 9) {
        knockSFX.play();
      } else if(currentTextID === 20) {
        changeSprite(sprites.Yamamoto.default, 500);
      } else if(currentTextID === 28) {
        resetAudio();
        setBG(bgs.yamamotoEntrance)
        setTimeout(() => {
            changeSprite(sprites.Yamamoto.default2, 500)
            bird.play();
        }, 1000);
      } else if(currentTextID === 34) {
        hideSprite(500)
      } else if(currentTextID === 37) {
        setBG(bgs.yamamotoOnsen)
      } else if(currentTextID === 42 || currentTextID === 45 || currentTextID === 55 || currentTextID === 62) {
        hideSprite(500)
      } else if(currentTextID === 57) {
        guitar.play()
        guitar.currentTime = 0;
        fadeAudio(1, guitar, 1000, 0);
        changeSprite(sprites.Yamamoto.happy2, 500)
      } else if(currentTextID === 84) {
        hideSprite(1000);
      } else if(currentTextID === 80) {
        adminChangeScene(6);
      } 
    } else if (currentScene === 6) {
      if(currentTextID === 22) {
        fadeToBlack();
        hideTextbox(100);
        
        setTimeout(() => {
          resetAudio();
          driveSFX.play();
          driveSFX.volume = 0.5;
          night.play();
          document.body.style.backgroundImage = 'url(images/bgs/car.png)'
          setTimeout(() => {
            fadeOutBlack();
            setTimeout(() => {
              showTextbox();
            }, 2500);
          }, 5000);
        }, 1000);
      } else if (currentTextID === 31) {
        fadeAudio(0.1,night,2500)
        fadeAudio(1,driveSFX,2500)
      } else if (currentTextID === 32) {
        setTimeout(() => {
          resetAudio();
          market.play();
          fadeAudio(1,market,3000,0)          
        }, 1000);
        setBG(bgs.market);
      } else if (currentTextID === 35) {
        fadeAudio(0.2,market,3000)
      } else if (currentTextID === 45) {
        setBG(bgs.market2)
      } else if (currentTextID === 54) {
        hideSprite(500);
      } else if (currentTextID === 60) {
        setBG(bgs.marketIcecream)
        kitchen.play();
        setTimeout(() => {
          hideSprite();
        }, 1000);
      } else if (currentTextID === 55) {
        changeSprite(sprites.Child.default,500)
      } else if (currentTextID === 62) {
        setTimeout(() => {
          hideSprite(500);
        }, 1000);
      } else if (currentTextID === 63) {
        setBG(bgs.market2);
        fadeAudio(1,kitchen,2500)

        hideSprite(0);
        resetSpriteX()

      } else if (currentTextID === 64) {
        fadeAudio(0,kitchen,2500)
      } else if (currentTextID === 66) {
        assistantTheme.play();
      } else if (currentTextID === 80) {
        moveLeft(250,250)
        setTimeout(() => {
          moveRight(50,250)
          setTimeout(() => {
            moveLeft(2000,2000)
          }, 100);
        }, 300);
      } else if (currentTextID === 81) {
        moveRight(4000,2000)
      } else if (currentTextID === 82) {
        fadeAudio(0,assistantTheme,2500)
      } else if (currentTextID === 83) {
        fadeAudio(0,kitchen,2500)
        setBG(bgs.marketFontaine)
      } else if (currentTextID === 85) {
        fontaineTheme.play();
      } else if (currentTextID === 90) {
        hideSprite();
      } else if (currentTextID === 91) {
        animationInterval = setInterval(() => {
          const ran = Math.floor(Math.random() * (1000 - 100 + 1)) + 300;
          sineAnimation('l', ran,1000,10,500);
          resetSpriteX();
          setTimeout(() => {
            const ran2 = Math.floor(Math.random() * (1000 - 100 + 1)) + 300;
            sineAnimation('r', ran2,1000,10,500);
            resetSpriteX();
          }, 500);
        }, 1000);
      } else if (currentTextID === 102) {
        clearInterval(animationInterval)
        fadeAudio(0,fontaineTheme,2500)
        hideSprite(500)
        resetSpriteX()
      } else if (currentTextID === 103) {
        fadeAudio(0,kitchen,2500)
        setBG(bgs.marketKimura);
      } else if (currentTextID === 105) {
        kimuraTheme.play();
      } else if (currentTextID === 110) {
        changeSprite(sprites.Kimura.happy)
      } else if (currentTextID === 111) {
        fadeAudio(0,kimuraTheme,500)
        love.play()
      } else if (currentTextID === 116) {
        love.volume = 0;
        kimuraTheme.volume = 1;
        kimuraTheme.currentTime = 3.2
        setTimeout(() => {
          hideSprite(500);
        }, 1500);
      } else if (currentTextID === 118) {
        fadeAudio(0,kimuraTheme,2500)
      } else if (currentTextID === 119) {
        setBG(bgs.marketDuval);
        fadeAudio(0,kitchen,2500)
      } else if (currentTextID === 123) {
        guitar.play();
      } else if (currentTextID === 140) {
        hideSprite(500);
      } else if (currentTextID === 153) {
        hideSprite(500);
        fadeAudio(0,guitar,2500)
      } else if (currentTextID === 154) {
        fadeAudio(0,kitchen,2500)
        setBG(bgs.marketNoon);

        setTimeout(() => {
          coastTheme.play();
          fadeAudio(1,coastTheme,1000,0)
        }, 1000);
      } else if (currentTextID === 165) {
        setBG(bgs.marketYamamoto);
        fadeAudio(0,kitchen,2500)
      } else if (currentTextID === 176) {
        fadeAudio(0,coastTheme,2500);
      } else if (currentTextID === 177) {
        setBG(bgs.marketExit)
        fadeAudio(0,kitchen,2500)

        setTimeout(() => {
          resetAudio();
          crickets.play();
          bird.play();
          market.play();
          market.volume = 0.2;
        }, 2500);
      } 
    } else if (currentScene === 7) {
      persevere.volume = 0.5;

      if (currentTextID === 1) {
        characterStateManager();
        updateSpecificTextNode(6, endString);
      } else if (currentTextID === 2) {
        document.removeEventListener('click', dialogueBoxEventHandler);
        document.removeEventListener('keydown', dialogueBoxEventHandler);


        setTimeout(() => {
          changeText(currentTextID + 1)
        }, 5000);
      } else if (currentTextID === 3) {
        
        setTimeout(() => {
          changeText(currentTextID + 1)
        }, 5000);
      } else if (currentTextID === 4) {
        setTimeout(() => {
          changeText(currentTextID + 1)
        }, 5000);
      } else if (currentTextID === 5) {
        setTimeout(() => {
          changeText(currentTextID + 1)
        }, 5000);
      } else if (currentTextID === 6) {
        setTimeout(() => {
          changeText(currentTextID + 1)
        }, 15000);
      } else if (currentTextID === 7) {
        setTimeout(() => {
          showReviewContainer()
        }, 2000);
      } 
    } 
  }

  let characterGoodEndingCount = 0;
  let endString = "";

  function characterStateManager() {

    // Good Ending (if all characters are successful)
    if(state.assistant === false && state.kimura === false && state.duval === false && state.yamamoto === false && state.fontaine === false) {
      endString += "Congratulations! You have unlocked the true ending, revealing Hugo's journey of self-growth. Throughout the game, Hugo has evolved from a character driven by ego to one who has proved that true strength lies in humility and self-awareness of himself. Now, as Hugo stands at the pinnacle of his journey, he is not only a master of the culinary arts but also found peace within himself. Well done!"

      updateSpecificTextNode(7, "You've completed the game! (Write 2 reviews to finish!)");
      return;
    } else {
      updateSpecificTextNode(7, "After I complete my work, I should ensure that I tie up any loose ends. Looks like I have " + (5 - characterGoodEndingCount) + "/5 people left. (Write 2 Hugo Sinclair caliber reviews to finish!)" );
    }

    if(state.assistant || state.assistant !== false){
      characterGoodEndingCount++;
      endString += "Your assistant is nowhere to be found; it looks like he quit in your absense. "
    }
    if(state.kimura || state.kimura !== false){
      characterGoodEndingCount++;
      endString += "Fontaine's jovial laughter was noticeably absent, a void in the carnival's atmosphere. "
    }
    if(state.duval || state.duval !== false){
      characterGoodEndingCount++;
      endString += "Kimura's stern presence was missing, her usual witty combative remarks silenced by the vacancy of her existance. "
    }
    if(state.yamamoto || state.yamamoto !== false){
      characterGoodEndingCount++;
      endString += "The Duvals' absence was felt deeply, their creative spark missing from the festival. "
    }
    if(state.fontaine || state.fontaine !== false){
      characterGoodEndingCount++;
      endString += "Yamamoto has chosen solitude over the crowd, his culinary expertise a silent void. "
    }
  }

  function updateSpecificTextNode(inputNodeID, inputString) {``
    // Find the node with id 102
    let targetNode = currentTextTree.find(node => node.id === inputNodeID);
    
    if (targetNode) {
        // Update the text property of the found node
        targetNode.text = inputString;
    } else {
        console.log("Node 102 not found.");
    }
  }

  let animationInterval;

  // Only used in quiz, node 102
  function updateTextNode() {
    // Find the node with id 102
    let targetNode = currentTextTree.find(node => node.id === 102);
    
    if (targetNode) {
        // Update the text property of the found node
        targetNode.text = `Looks like you got: ${quizPoints}/15.`;
    } else {
        console.log("Node 102 not found.");
    }
  }

  function quizManager() {
    if(quizPoints >= 0 && quizPoints < 3) {
        setTimeout(() => {
            changeText(104);         
        }, 20);
    } else if (quizPoints >= 3 && quizPoints < 6) {
        setTimeout(() => {
            changeText(106);         
        }, 20);
    } else if (quizPoints >= 6 && quizPoints < 9) {
        setTimeout(() => {
            changeText(108);         
        }, 20);
    } else if (quizPoints >= 9 && quizPoints < 12) {
        setTimeout(() => {
            changeText(110);         
        }, 20);
    } else if (quizPoints >= 12 && quizPoints <= 15) {
        setTimeout(() => {
            changeText(112);         
        }, 20);
    }
  }

  
// TODO LIST:

  ///// TODO: Scene Transition Elements
  ///// TODO: Dialogue Elements
  ///// TODO: Character Elements
  ///// TODO: Overlay Elements
  ///// TODO: Audio Elements
  ///// TODO: Character Transitions
  ///// TODO: Character Animations
  ///// TODO: Text Animations
  ///// TODO: Text Speeds
  ///// TODO: Color and Element Styling 
  ///// TODO: Allow for multiple textTrees
  ///// TODO: Scene Transitions
  ///// TODO: Session Storage
  ///// TODO: Scene Manager
  ///// TODO: Text Tree Manager

  //? TODO: Interactive Elements

  ///// TODO: Dialogue Options (Quizzes/Storybranching Decisions)
  ///// TODO: Observation Mode
  ///// TODO: Pick Up Item Mode
  ///// TODO: Drawing Mode

  //? Dialogue Options

  ///// TODO: Tasting Minigame
  ///// TODO: Guess the Ingredient
  ///// TODO: Rate the Dish
  ///// TODO: Food Trivia
  ///// TODO: Ingredient Gathering Quest

  //? Text Input
  ///// TODO: Player input reviews  of cuisine

  //
  ///// TODO: Tools Management

  //? Misc

  //!! TODO: Complete all dialogue trees
  //!! TODO: Uncomment Session Storage in Scene Manager
  //!! TODO: SFX
  //!! TODO: More magnifys
