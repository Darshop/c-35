class Form{
    constructor(){}

    display(){
        var title=createElement('h2')
        title.html('DeathRace')
        title.position(130,0)
        var input=createInput("name")
        var buttons=createButton("play")
        var greeting=createElement('h3')
        input.position(130,160)
        buttons.position(250,200)

        buttons.mousePressed(function(){
            input.hide()
            buttons.hide()
            var name=input.value()
            playerCount++
            greeting.html("hello "+ name)
            greeting.position(130,160)
        })
    }
}