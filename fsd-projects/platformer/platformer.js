$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   //TOGGLEGRID);


    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
createPlatform(200, 270, 20, 20, );
createPlatform(500, 1, 20, 400);
createPlatform(100, 640, 20, 20, );
createPlatform(180, 600, 20, 20, );
createPlatform(300, 550, 20, 20, );
createPlatform(200, 420, 50, 15,)
createPlatform(100, 350, 20, 20, );
createPlatform(500, 550, 20, 200)
createPlatform(600 ,520,20, 20,)
createPlatform(700, 480, 20,20)
createPlatform(580, 370, 75, 20)
createPlatform(750, 420, 20 , 20)
createPlatform(610, 210, 20, 20)  
createPlatform(850, 180, 75, 20)
createPlatform(720, 310, 20 , 20)




    // TODO 3 - Create Collectables
    createCollectable("steve", 1000, 200);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("steve", 600,500)



    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 4000)
createCannon("right", 300, 4000)
createCannon("right", 700,  4000)
createCannon("right", 730, 4000)
createCannon("right", 440,4000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
