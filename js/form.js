class Form{
    constructor(){


    }

    display(){
        var title=createElement('h1')
        title.html("Car Racing Game")
        title.position(130,10)
        var input=createInput("Enter a name")
        input.position(130,160)
        var button=createButton("play")
        var greetings=createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()

            var name=input.value()

            playerCount++;
            player.update(name) 
            player.updateCount(playerCount)
            greetings.html("WELCOME "+name)
            greetings.position(130,160)
        })

    }
}