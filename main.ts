controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    teleportAction()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    wizard()
})
function wizard () {
    if (randint(0, 100) > 50) {
        square()
    } else {
        sunshine()
    }
}
function sunshine () {
    for (let index = 0; index < 40; index++) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, randint(-75, 75), randint(-75, 75))
        projectile.setFlag(SpriteFlag.StayInScreen, true)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    wizard()
})
function teleportAction () {
    mySprite.say("teleporting!", 1000)
    pause(1000)
    for (let index2 = 0; index2 <= 40; index2++) {
        mySprite.image.flipX()
        pause(Math.max(300 - 15 * index2, 30))
    }
    sunshine()
    mySprite.say("Whee!", 200)
    pause(20)
    mySprite.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    teleportAction()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    teleportAction()
})
function square () {
    for (let index = 0; index < 20; index++) {
        mySprite.x += 1
        pause(10)
    }
    for (let index = 0; index < 20; index++) {
        mySprite.y += -1
        pause(10)
    }
    for (let index = 0; index < 20; index++) {
        mySprite.x += -1
        pause(10)
    }
    for (let index = 0; index < 20; index++) {
        mySprite.y += 1
        pause(10)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    teleportAction()
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . f f e 4 1 f d d f 1 4 e f . . 
    f d f f e 4 d d d d 4 e f e . . 
    f b f e f 2 2 2 2 e d d 4 e . . 
    f b f 4 f 2 2 2 2 e d d e . . . 
    f c f . f 4 4 5 5 f e e . . . . 
    . f f . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
