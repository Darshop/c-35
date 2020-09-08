var ball,database,position,player,form,game,playerCount,gameState=0

function setup(){
    database=firebase.database()
    createCanvas(400,400)
    game= new Game()
    game.getGameState()
    game.start()
}

function draw(){
    background("white");
  
    }
    

