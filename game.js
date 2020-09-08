class Game{
    constructor(){
    }
    getGameState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
           gameState=data.val()
        })
    }
    
    updateGameState(State){
        database.ref('/').update({gameState:state})
    }

    start(){
        if(gameState===0){
            player= new Player()
            //player.getCount()
            form= new Form()
            form.display()
        }
    }
}
