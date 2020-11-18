class Game{
    constructor()
{}
getState(){
    var gameStateRef=database.ref("gameState")
    gameStateRef.on("value",function(data){
        gameState=data.val()
    })

}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
start(){
    if(gameState===0){
        p=new Player()
       p.getCount()
       f=new Form()
f.display()
    }
}
}