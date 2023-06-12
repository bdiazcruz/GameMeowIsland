const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');



let attackCount = 0;



canvas.width = 1024;
canvas.height = 576;


console.log(c);

const collisionsMap = [];
for(let i = 0; i < collisions.length;i+=30){
    collisionsMap.push(collisions.slice(i,30 + i))
}
console.log(collisionsMap);




const boundaries = [];
const offset={
    x: -210,
    y:-140
}
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if(symbol === 1290)
            boundaries.push(
                new Boundary({
                    position: {
                        x:j*Boundary.width+offset.x,
                        y:i*Boundary.height+offset.y
                    }
               })
            )
    })
})




const image = new Image();
image.src = './tiledFolder/baseMap/baseMap.png';


const playerDownImage = new Image();
playerDownImage.src ='./assetsFolder/Sprout/Characters/charDownFix.png';

const playerUpImage = new Image();
playerUpImage.src ='./assetsFolder/Sprout/Characters/charUpFix.png';

const playerLeftImage = new Image();
playerLeftImage.src ='./assetsFolder/Sprout/Characters/charLeftFix.png';

const playerRightImage = new Image();
playerRightImage.src ='./assetsFolder/Sprout/Characters/charRightFix2.png';


//canvas.width/2 - this.image.width/4/2,
//canvas.height/2 - this.image.height/2,



const player = new Sprite({
    position:{
        x:(canvas.width/2 - 384/4/2),
        y:(canvas.height/2 - 92/2)
    },
    image: playerDownImage,
    frames:{
        max:4
    }, 
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage
    }
})




const background = new Sprite({
    position: {
        x:offset.x,
        y:offset.y
    },
    
    image: image
});



const keys = {
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    s:{
        pressed: false
    },
    d:{
        pressed: false
    },
    h:{
        pressed: false
    }

}



const movables = [background, ...boundaries];

function rectangularCollision({rectangle1, rectangle2}){
    return(rectangle1.position.x + rectangle1.width>=rectangle2.position.x &&
         rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
         rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
         rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
}




const battle = {
    initiated: false
}




function animate(){
    const animationId = window.requestAnimationFrame(animate);
    background.draw();
    boundaries.forEach((boundary) => {
       boundary.draw();

       
    })

   
        player.draw();


        if(battle.initiated){
            return;
        }


        let moving = true;



        


    

        player.animate = false;

        if(keys.w.pressed && lastKey === 'w') {
            player.animate = true;
            player.image = player.sprites.up;
            for(let i =0; i<boundaries.length;i++){
                const boundary = boundaries[i];
                if(rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position:{
                        x: boundary.position.x,
                        y: boundary.position.y +3
                    }}
                })){
                    console.log('colliding')
                    moving = false;
                    break
                }
            }

            if(moving)
            movables.forEach(movable =>{
                movable.position.y +=3;
            })
        }
        else if (keys.a.pressed && lastKey === 'a') {
            player.animate = true;
            player.image = player.sprites.left;
            for(let i =0; i<boundaries.length;i++){
                const boundary = boundaries[i];
                if(rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position:{
                        x: boundary.position.x+3,
                        y: boundary.position.y
                    }}
                })){
                    console.log('colliding')
                    moving = false;
                    break
                }
            }

            if(moving)
            movables.forEach(movable =>{
                movable.position.x +=3;
            })
        }
        else if (keys.s.pressed && lastKey === 's') {
            player.animate = true;
            player.image = player.sprites.down;
            for(let i =0; i<boundaries.length;i++){
                const boundary = boundaries[i];
                if(rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position:{
                        x: boundary.position.x,
                        y: boundary.position.y -3
                    }}
                })){
                    console.log('colliding')
                    moving = false;
                    break
                }
            }

            if(moving)
            movables.forEach(movable =>{
                movable.position.y -=3;
            })
        }
        else if (keys.d.pressed && lastKey === 'd') {
            player.animate = true;
            player.image = player.sprites.right;
            for(let i =0; i<boundaries.length;i++){
                const boundary = boundaries[i];
                if(rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position:{
                        x: boundary.position.x-3,
                        y: boundary.position.y
                    }}
                })){
                    console.log('colliding')
                    moving = false;
                    break
                }
            }

            if(moving)
            movables.forEach(movable =>{
                movable.position.x -=3;
            })
        }else if(keys.h.pressed && lastKey ==='h'){
            //deactivate current animation loop
            window.cancelAnimationFrame(animationId);

            audio.Map.stop();
            audio.initBattle.play();
            audio.battle.play();

            battle.initiated = true;
            gsap.to('#overlappingDiv',{
                opacity: 1,
                repeat: 3,
                yoyo:true,
                duration: 0.4,
                onComplete(){
                    gsap.to('#overlappingDiv',{
                        opacity:1,
                        duration: 0.4,
                        onComplete(){
                            //activate new animationloop
                         animateBattle();
                         gsap.to('#overlappingDiv',{
                            opacity:0,
                            duration: 0.4,
                            
                        })
                        }
                    })

                    
                   
                }
            })
            
        }



}
animate();

const battleBackgroundImage = new Image();
battleBackgroundImage.src = './assetsFolder/battleBackground.png';
const battleBackground = new Sprite({
    position: {
        x:0,
        y:0
    },
    image: battleBackgroundImage
});

const demonImage = new Image();
demonImage.src = './assetsFolder/demonSlime1/demonIdleFix.png';
const witch = new Sprite2({
    position: {
        x: 800,
        y: 100
    },
    image: demonImage,
    frames: {
        max: 6
    },
    animate: true
})

const knightImage = new Image();
knightImage.src = './assetsFolder/Meow Knight/knightFix1.png';
const knight = new Sprite3({
    position: {
        x: 300,
        y: 350
    },
    image: knightImage,
    frames: {
        max: 6
    },
    animate: true
})


let battleAnimationId

function animateBattle(){
    battleAnimationId= window.requestAnimationFrame(animateBattle);
    battleBackground.draw();
    witch.draw();
    knight.draw();

    gsap.to('#attackbutton', {
        PointerEvents: "visible"
    })

    gsap.to('#demonhphtml', {
        opacity:1
    })
   
    gsap.to('#herohphtml', {
        opacity:1
    })

    gsap.to('#dialogueBox1', {
        opacity:0
    })

    gsap.to('#diawoman', {
        opacity:0
    })
    gsap.to('#attackbutton', {
        opacity:1
    })

}



document.querySelectorAll('button').forEach((button) =>{
    button.addEventListener('click', () =>{

        knightImage.src = './assetsFolder/Meow Knight/knightAttack1.png';
        demonImage.src = './assetsFolder/demonSlime1/demonHurt1.png';
        knight.attack({ 
            attack: {
                name: 'Swing',
             damage: 20
         },
        recipient: witch
        
        })
        audio.hit.play();

        setTimeout(()=>{
            witch.attack({ 
                attack: {
                    name: 'Swing',
                 damage: 10
             },
            recipient: knight
            })
        }, 4000)


       

        setTimeout(()=>{
             audio.hit2.play();
            demonImage.src = './assetsFolder/demonSlime1/demonAttack1.png';
            knightImage.src = './assetsFolder/Meow Knight/knightHurt1.png';
        }, 4000)
        
        setTimeout(()=>{
           
            knightImage.src = './assetsFolder/Meow Knight/knightFix1.png';
            demonImage.src = './assetsFolder/demonSlime1/demonIdleFix.png';
        }, 6000)





        attackCount++;
        console.log(attackCount);


        if(attackCount>5){
            gsap.to('#overlappingDiv',{
                opacity:1,
                onComplete: () => {
                    cancelAnimationFrame(battleAnimationId)
                    animate()
                    audio.battle.stop();
                    audio.Map.play();
                    battle.initiated = false;
                    gsap.to('#overlappingDiv',{
                        opacity:0
                    })
                    gsap.to('#demonhphtml', {
                        opacity:0
                    })
                   
                    gsap.to('#herohphtml', {
                        opacity:0
                    })
                
                    gsap.to('#dialogueBox2', {
                        opacity:1
                    })
                
                    gsap.to('#diawoman', {
                        opacity:1
                    })
                    gsap.to('#attackbutton', {
                        opacity:0
                    })
                }
            })
           






        }




    })
})




let lastKey = '';

window.addEventListener('keydown',(e)=>{
    switch(e.key){
        case 'w':
            keys.w.pressed=true;
            lastKey = 'w';
            break;
        case 'a':
            keys.a.pressed=true;
            lastKey = 'a';
            break;
        case 's':
            keys.s.pressed=true;
            lastKey = 's';
            break;
        case 'd':
            keys.d.pressed=true;
            lastKey = 'd';
            break;
        case 'h':
            keys.h.pressed=true;
            lastKey = 'h';
            break;
    }
})

window.addEventListener('keyup',(e)=>{
    switch(e.key){
        case 'w':
            keys.w.pressed=false;
            break;
        case 'a':
            keys.a.pressed=false;
            break;
        case 's':
            keys.s.pressed=false;
            break;
        case 'd':
            keys.d.pressed=false;
            break;
        case 'h':
            keys.h.pressed=false;
            break;
    }
})


let clicked = false;
addEventListener('click', ()=>{
    if(!clicked){
        audio.Map.play()
        clicked = true
    }
    
})
