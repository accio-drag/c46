class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gamestate');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
    }
    form = new Form()
    form.display();
    naruto = createSprite(100,400,10,10)
    naruto.addImage(img1)
    sasuke = createSprite(1220,400,10,10)
    sasuke.addImage(img2)
  players = [naruto,sasuke]
    }
play(){
  form.hide()
Player.getPlayerInfo()
background(bg2)
text(mouseX+","+mouseY,500,500)
if (keyDown("space")){
  if (player.index === 1){
    laser1 = createSprite(100,400,100,100)
    laser1.velocityX=13
  }
  else if(player.index===2){
    laser2 = createSprite(1220,400,100,100)
  laser2.velocityX=-13
  }
}
if(laser1){
  player.laser1x=laser1.x
player.update()}
if(laser2){
  player.laser2x = laser2.x
  player.update()
}

/*database.ref("laser1").set({
  x:laser1.x

})}
if(laser2){
database.ref("laser2").set({
  x:laser2.x

})}*/
drawSprites();
}


}