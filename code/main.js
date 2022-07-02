import kaboom from "kaboom"

// initialize context
kaboom()
// load assets
loadSprite("bean", "sprites/mouth.png")
loadSprite("chilly", "sprites/chilly.png");
loadSprite("steel", "sprites/steel.png");
loadSprite("pizza", "sprites/pizza.png");
loadSprite("bg", "sprites/background.png");
loadSprite("darkness", "sprites/darkness.png");
// loadAseprite("guy", "guy.png", "guy.json");
// loadSprite("grass", "sprites/grass.png");
loadSound("portal", "sounds/portal.wav");
loadSound("hit", "sounds/hit.mp3");
loadSound("shoot", "sounds/shoot.wav");
// loadSound("hover", "sounds/hover.wav");
loadSound("bgs", "sounds/bgs.mp3");
loadSound("win", "sounds/win.mp3");
// define some constants
const SPEED = 320
const ENEMY_SPEED = 160
const BULLET_SPEED = 800

const LEVELS = [
	[
  "=====================",
  "=========== =========",
  "=     =   =   =   = =",
  "= = = = = = = = = = =",
  "= = = = = = = = = = =",
  "===== = === = = === =",
  "=   =     = = =     =",
  "= = = = = = = = = = =",
  "= =   = = = = = = = =",
  "========= === = =====",
  "= = = = = =   =     =",
  "= = = = = = = === = =",
  "=   = = =   =     = =",
  "= === = = = = ===== =",
  "=         = = =     =",
  "======= =========== =",
  "=   =     = =       =",
  "= = === === = ===== =",
  "= = =     =   =     =",
  "= === ========= =====",
  "=         =         =",
  "=================D==="
],
  [
  "=====================",
  "=========== =========",
  "=   =   =   = =     =",
  "=== === = === === = =",
  "=   =   =         = =",
  "= ===== = ===========",
  "= =           =     =",
  "= = = = ===== === = =",
  "=   = = =         = =",
  "=============== =====",
  "= = = = =   = =   = =",
  "= = = = === = = === =",
  "= =     =   = =   = =",
  "= = = = === = = === =",
  "=   = = =   = =     =",
  "===== ===== = = === =",
  "= = =   =         = =",
  "= = = = ===== =======",
  "=     = =   =       =",
  "=== === = === ===== =",
  "=   =         =     =",
  "===========D========="
],
  [
  "=====================",
  "=========== =========",
  "=   = =     = =     =",
  "= = = = === = === = =",
  "= =   = =   = =   = =",
  "= = = = === = === ===",
  "= = = = =     =     =",
  "= = = = === === =====",
  "= = =   =   = =   = =",
  "===== === === === = =",
  "=       =   =     = =",
  "= === === === === = =",
  "=   =   =     =     =",
  "================= ===",
  "= = = = =     =   = =",
  "= = = = = = = = = = =",
  "= = =   = = = = = = =",
  "= = = = = === === = =",
  "=     = =   =       =",
  "===== ===== === = = =",
  "= =     =     = = = =",
  "= = = = = === = === =",
  "=   = =     = =   = =",
  "= = = = ===== =======",
  "= = = = =   = = =   =",
  "= = = ===== = = = = =",
  "= = =   =     =   = =",
  "= = = = = ===== === =",
  "= = = = = = =     = =",
  "= = = = = = = = = = =",
  "= = = = =     = = = =",
  "=================D==="
],
  [
  "=====================",
  "=========== =========",
  "=     = = = =     = =",
  "= = = = = = = = = = =",
  "= = = =   =   = = = =",
  "= = = = = = = = = = =",
  "= = = = = = = = = = =",
  "= = = = = = = = = = =",
  "= = =   = = = = = = =",
  "= ======= = = === = =",
  "=   = =   = = =     =",
  "=== = = = === = = = =",
  "=     = = = = = = = =",
  "= ========= = = = = =",
  "= = = = =     = = = =",
  "= = = = = = = = === =",
  "= =       = = =   = =",
  "= = = = = = = = = = =",
  "= = = = = = = = = = =",
  "= = = = = = = = = = =",
  "=   = = = = = = = = =",
  "= === === = = = = = =",
  "= = = = = = = = = = =",
  "= = = = = === =======",
  "= = = = = = = =     =",
  "= = = = = = = = = = =",
  "=   = = = =   = = = =",
  "= === = = = = = === =",
  "= = = =   = =     = =",
  "= = = = = = = = === =",
  "= = = = = = = =   = =",
  "= = = = = = = === = =",
  "=   = = = = = =   = =",
  "=== =================",
  "=         =       = =",
  "= = = = = = = === = =",
  "= = = = = = = =     =",
  "= === === = = ===== =",
  "=   =   =   = = = = =",
  "= = = ===== = = = = =",
  "= = =   = = = =     =",
  "= = === = ========= =",
  "= = =     = = =   = =",
  "=== ======= = === = =",
  "=       = =   =   = =",
  "= = === = === = === =",
  "= = =     =   = = = =",
  "= = = ===== = = = = =",
  "= = =   = = =   = = =",
  "= = = = = = = = = = =",
  "= = = =   = = =     =",
  "=====D==============="
],[
  "=====================",
  "=========== =========",
  "=           = = =   =",
  "= = = === = = = = = =",
  "= = =   = =       = =",
  "=== === = === = = = =",
  "=   =   = =   = = = =",
  "=== =========== =====",
  "=   =     =     =   =",
  "=== === = ===== = ===",
  "=       = =         =",
  "=============== =====",
  "=   =   = = =   =   =",
  "= = = === = = = = = =",
  "= = =   =     =   = =",
  "= = = === = = ===== =",
  "= = =     = = =     =",
  "= ======= === =======",
  "= = =   = =       = =",
  "= = === = = = === = =",
  "=   =   = = = =     =",
  "= = === = === ===== =",
  "= =       =   =     =",
  "===========D========="
],[
  "=====================",
  "=                   =",
  "=     = = = = = = = =",
  "= = = = = = = = = = =",
  "= = =   = = =   =   =",
  "= === = = = = = = = =",
  "=   = = = = = =   = =",
  "= = = = = = = = = = =",
  "= = = = =   = = = = =",
  "= === = = = = === = =",
  "=   = = = = = = = = =",
  "= = = = = = = = = = =",
  "= = = =   =   = = = =",
  "=== = = = = = = = = =",
  "= = = = = = = =   = =",
  "= = = = = ======= ===",
  "=   = = = =   =   = =",
  "=== ===== = = = === =",
  "=   = = = = = =   = =",
  "= = = = = = ===== = =",
  "= =   =   =   = = = =",
  "=== ===== = = = = = =",
  "= =   = = = =     = =",
  "= = = = = = = = = = =",
  "=   = =   = = = =   =",
  "=== ============= ===",
  "= = = = = =     = = =",
  "= = = = = = = = = = =",
  "=   = =   = = =   = =",
  "= === = ===== === = =",
  "=         =   =     =",
  "===== ===== = ===== =",
  "= = = = = = = =   = =",
  "= = = = = = = === = =",
  "=   =     = = =     =",
  "= === = = = ===== ===",
  "=     = = =   = = = =",
  "= === = = = = = = = =",
  "=   = = = = = =   = =",
  "= === = = === === = =",
  "=   = = = =   =     =",
  "=============D======="
],[
  "=====================",
  "=                   =",
  "= = = = =   = =     =",
  "= = = = = = = === = =",
  "=   = = = = =     = =",
  "=== = = = === ===== =",
  "=   =   =     =     =",
  "= = = = ===== === ===",
  "= =   =     = = = = =",
  "===== ===== = = = = =",
  "= = =   =     =     =",
  "= = = = ===== === ===",
  "=     = =     =     =",
  "= =============== ===",
  "= = = = = = = = = = =",
  "= = = = = = = = = = =",
  "=   =   = = = =     =",
  "= === = = = = = = = =",
  "=     = =   = = = = =",
  "= = = = === = === = =",
  "= = = = = = =     = =",
  "=== === = = = = = = =",
  "= = = = =   = = = = =",
  "= = = = = = = = = = =",
  "= = = = = = = = = = =",
  "= = = = = === = = = =",
  "= = = = = = = = = = =",
  "= = = = = = = === = =",
  "= = = = =     = = = =",
  "= = = = = = = = = = =",
  "= = = = = = = =   = =",
  "= = = = ======= =====",
  "=   = = =   = =   = =",
  "= = = = = = = = = = =",
  "= = = = = =     = = =",
  "= = = = === = === = =",
  "= = =   = = = =     =",
  "= = = = = = = = = = =",
  "= = = = =   = = = = =",
  "=======D============="
]
  ]
// define what each symbol means in the level graph
const levelConf = {
	// grid size
	width: 64,
	height: 64,
	// define each object as a list of components
	"=": () => [
		sprite("steel"),
		area(),
		solid(),
		origin("bot"),
	],	
   "D": () => [
		sprite("pizza"),
		area(),
		solid(),
    rotate(0),
    scale(0.75),
		origin("bot"),
		"portal",
	],
	// "^": () => [
	// 	sprite("chilly"),
	// 	area(),
	// 	solid(),
 //    origin("center"),
 //    state("move", [ "idle", "attack", "move", ]),
	// 	"enemy",
	// ],
}
scene("game", ({ levelId, coins } = { levelId: 0, coins: 0 }) => {

layers(['bg', 'obj', 'ui'], 'obj')
	gravity(3200)
    const background = add([
    sprite("bg", { width: width(), height: height() }),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ]);
    
	const level = addLevel(LEVELS[levelId ?? 0], levelConf)
// add a character to screen
  const player = add([
    // list of components   
    sprite("bean"),
    pos(704, 64),
    area(),
    solid(),
    scale(1),
    origin("bot"),
  ]);


  const enemy = add([
	sprite("chilly"),
	pos(width() - 180, height() -180),
	origin("center"),
  area(),
	// This enemy cycle between 3 states, and start from "idle" state
	state("move", [ "idle", "attack", "move", ]),
])


const darkness = add([
    sprite("darkness", { width: width(), height: height() }),
    // Make the background centered on the screen
      layer("ui"),
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ]);








  
  	player.onUpdate(() => {
		// center camera to player
		camPos(player.pos)
		}
	);


  //key funtions
  // jump with space
	// onKeyDown() registers an event that runs every frame as long as user is holding a certain key
onKeyDown("left", () => {
	// .move() is provided by pos() component, move by pixels per second
	player.move(-SPEED, 0)
})

onKeyDown("right", () => {
	player.move(SPEED, 0)
})

onKeyDown("up", () => {
	player.move(0, -SPEED)
})

onKeyDown("down", () => {
	player.move(0, SPEED)
})

	onKeyPress("f", () => {
		fullscreen(!fullscreen())
	})


// Run the callback once every time we enter "idle" state.
// Here we stay "idle" for 0.5 second, then enter "attack" state.
enemy.onStateEnter("idle", async () => {
	await wait(0.5)
	enemy.enterState("attack")
})

// When we enter "attack" state, we fire a bullet, and enter "move" state after 1 sec
enemy.onStateEnter("attack", async () => {

	// Don't do anything if player doesn't exist anymore
	if (player.exists()) {
		const dir = player.pos.sub(enemy.pos).unit()
    play("shoot")

		add([
			pos(enemy.pos),
			move(dir, BULLET_SPEED),
			rect(12, 12),
			area(),
			cleanup(),
			origin("center"),
			color(RED),
			"bullet",
		])

	}

	await wait(1)
	enemy.enterState("move")

})

enemy.onStateEnter("move", async () => {
	await wait(2)
	enemy.enterState("idle")
})

// Like .onUpdate() which runs every frame, but only runs when the current state is "move"
// Here we move towards the player every frame if the current state is "move"
enemy.onStateUpdate("move", () => {
	if (!player.exists()) return
	const dir = player.pos.sub(enemy.pos).unit()
	enemy.move(dir.scale(ENEMY_SPEED))
})

// Have to manually call enterState() to trigger the onStateEnter("move") event we defined above.
enemy.enterState("move")

// Taking a bullet makes us disappear
player.onCollide("bullet", (bullet) => {
	destroy(bullet)
	destroy(player)
  go("lose")
})

  
player.onCollide("portal", () => {
		play("portal")
		if (levelId + 1 < LEVELS.length) {
        play("portal"),
			go("game", {
				levelId: levelId + 1,
				coins: coins,
			})
		} else {
			go("win")
		}
	})
  
})

scene('lose', () => {
  const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
  add([text("GAME OVER! D:"), origin('center'), pos(width() / 2, height() / 2)])
    addButton("Restart", vec2(200, 100), () => go("story10"), music.play() )
})

scene("win", () => {

  const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
	add([text("YOU WON!! GG Thanks for playing"), origin('center'), pos(width() / 2, height() / 2)])
  volume(0)
  play("win")
	addButton("Home", vec2(645, 240), () => go("home"))
})

function addButton(txt, p, f) {

	const btn = add([
		text(txt),
		pos(p),
		area({ cursor: "pointer", }),
		scale(1),
		origin("center"),
	])

	btn.onClick(f)



	btn.onUpdate(() => {
		if (btn.isHovering()) {
			const t = time() * 10
			btn.color = rgb(
				wave(0, 255, t),
				wave(0, 255, t + 2),
				wave(0, 255, t + 4),
			)
			btn.scale = vec2(1.2)
		} 
    else {
			btn.scale = vec2(1)
			btn.color = rgb()
		}
	})

}

// reset cursor to default at frame start for easier cursor management
onUpdate(() => cursor("default"))

const music = play("bgs", {
    loop: true
})



scene("home", () => {
  const background = add([
    sprite("bg"),
    pos(width() / 2, height() / 2),
    origin("center"),
    scale(1.75),
    fixed()
  ])
  for (let i = 0; i < 3; i++) {

	const x = rand(0, width())
	const y = rand(0, height())

add([
		sprite("chilly"),
    pos(x, y),
    fixed(),
		origin("bot"),
	])
  }
addButton("Start", vec2(200, 100), () => go("story"), music.play() )
addButton("Quit", vec2(200, 300), () => window.close())
add([
    pos(1000, 100),
    text("SPICED", {
        size: 48, // 48 pixels tall
       width: 1000, // it'll wrap to next line when width exceeds this value
        font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sinko", and "sinko"
    }),
])
})


scene("story", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text("Once apon a time", {
        size: 48, // 48 pixels tall
       width: 1000, // it'll wrap to next line when width exceeds this value
        font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sinko", and "sinko"
    }), origin('center'), pos(width() / 2, height() / 2)])
 await wait(1.5)
  go("story2")
})
scene("story2", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text("There was a ... a .a .... uh", {
        size: 48, // 48 pixels tall
       width: 1000, // it'll wrap to next line when width exceeds this value
        font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sinko", and "sinko"
    }), origin('center'), pos(width() / 2, height() / 2)])
 await wait(1.5)
  go("story3")
})
scene("story3", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text("STARTING GAME...", {
        size: 48, // 48 pixels tall
       width: 1000, // it'll wrap to next line when width exceeds this value
        font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sinko", and "sinko"
    }), origin('center'), pos(width() / 2, height() / 2)])
 await wait(1.5)
  go("story4")
})
scene("story4", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text("USE ARROW KEY TO MOVE", {
        size: 48, // 48 pixels tall
       width: 1000, // it'll wrap to next line when width exceeds this value
        font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sinko", and "sinko"
    }), origin('center'), pos(width() / 2, height() / 2)])
 await wait(1.5)
  go("story5")
})
scene("story5", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text("There is a 50% chance of dodging the bullet", {
        size: 48, // 48 pixels tall
       width: 1000, // it'll wrap to next line when width exceeds this value
        font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sinko", and "sinko"
    }), origin('center'), pos(width() / 2, height() / 2)])
 await wait(1.5)
  go("story6")
})
scene("story6", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text("Good Luck", {
        size: 48, // 48 pixels tall
       width: 1000, // it'll wrap to next line when width exceeds this value
        font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sinko", and "sinko"
    }), origin('center'), pos(width() / 2, height() / 2)])
 await wait(1.5)
  go("story7")
})
scene("story7", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text("."), origin('center'), pos(width() / 2, height() / 2)])
 await wait(0.5)
  go("story8")
})
scene("story8", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text(".."), origin('center'), pos(width() / 2, height() / 2)])
 await wait(0.5)
  go("story9")
})
scene("story9", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text("..."), origin('center'), pos(width() / 2, height() / 2)])
 await wait(0.5)
  go("story10")
})
scene("story10", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text("Escape from the chilly and find your way to Yummy PIZZA :D", {
        size: 48, // 48 pixels tall
       width: 1000, // it'll wrap to next line when width exceeds this value
        font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sinko", and "sinko"
    }), origin('center'), pos(width() / 2, height() / 2)])
 await wait(3)
  go("starting")
})
scene("starting", async () => { const background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ])
add([text("DO NOT RAGE QUIT", {
        size: 48, // 48 pixels tall
       width: 1000, // it'll wrap to next line when width exceeds this value
        font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sinko", and "sinko"
    }), origin('center'), pos(width() / 2, height() / 2)])
 await wait(3)
  go("game")
})

go("home")
const darkness = add([
    sprite("darkness", { width: width(), height: height() }),
    // Make the background centered on the screen
      layer("ui"),
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(1.75),
    // Keep the background position fixed even when the camera moves
    fixed()
  ]);