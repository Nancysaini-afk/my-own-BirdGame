var wheatGroup;
var wheat;

function preload(){
   bird_animation= loadAnimation("Images/Bird1.png","Images/Bird2.png"
   ,"Images/bIRD3.png","Images/bIRD4.png","Images/bIRD5.png");
   // thunder1 = loadImage("images/thunderbolt/1.png");
   wheatImage= loadImage("Images/wheat.png")
  
}

function setup(){
   var canvas = createCanvas(500, 700);
    bird=createSprite(100,200);
    bird.addAnimation("flying",bird_animation);
    bird.scale=0.5;
    wheatGroup= new Group();
  
}

function draw(){
 
   background(0); 
   
   spawnwheat();  

 


  
    
   drawSprites();
}   

function spawnwheat(){
  
     if (frameCount % 60 ===0){
      var wheat= createSprite(300,50,10,20);
      wheat.y=Math.round(random(60,120))
      wheat.addImage(wheatImage)
      wheat.scale=0.3;
      wheat.velocityX=-3;

      wheat.lifeTime=100;

      wheat.depth=bird.depth;
      bird.depth=bird.depth+1;

      wheatGroup.add(wheat);


       }
       if(bird.isTouching(wheatGroup)){
         wheatGroup.destoryEach();
     
      }
     }

