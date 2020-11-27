var moving_rect, fixed_rect



function setup() {
  createCanvas(1200,800);
  fixed_rect = createSprite(100, 200, 50, 80);
  fixed_rect.shapeColor = "yellow";
  moving_rect = createSprite(100, 600, 80, 30);
  moving_rect.shapeColor = "blue";
  moving_rect.debug = true;
  fixed_rect.debug = true;
  fixed_rect.velocityY = 3;
  moving_rect.velocityY = -3;

}

function draw() {
  background("white");  
  
  //moving_rect.x = World.mouseX;
  //moving_rect.y = World.mouseY;

  if (moving_rect.x - fixed_rect.x < fixed_rect.width/2 + moving_rect.width/2  && 
    fixed_rect.x - moving_rect.x < fixed_rect.width/2 + moving_rect.width/2  &&
    moving_rect.y - fixed_rect.y < fixed_rect.height/2 + moving_rect.height/2 &&
    fixed_rect.y - moving_rect.y < fixed_rect.width/2 + moving_rect.width/2  )  {

   moving_rect.velocityY = moving_rect.velocityY * (-1);
   fixed_rect.velocityY = fixed_rect.velocityY * (-1);

  }
  //else {
    //moving_rect.shapeColor = "blue";
    //fixed_rect.shapeColor = "yellow";
//  }

  drawSprites();
}