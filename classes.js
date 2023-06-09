class Sprite{
    constructor({position, velocity, image, frames = {max:1}, sprites, animate = false})
    {
        this.position = position;
        this.image = image;
        this.frames = {...frames, val:0, elapsed: 0};

        this.image.onload =() =>{
            this.width = this.image.width/this.frames.max;
            this.height = this.image.height;
            console.log(this.width);
            console.log(this.height);
        }
        this.animate = animate;
        this.sprites = sprites;
    }
    draw(){
       
        c.drawImage(
        this.image, 
        this.frames.val *32,
        0,
        this.image.width/this.frames.max,
        this.image.height,
        this.position.x,
        this.position.y,

        this.image.width/this.frames.max,
        this.image.height,
        )


        if(!this.animate) return;

        if(this.frames.max > 1){
            this.frames.elapsed++
        }

        if(this.frames.elapsed % 10 ===0){

        if(this.frames.val<this.frames.max-1)
        {
            this.frames.val++
        }else{
            this.frames.val = 0;
        }
    }
    }

    
}
class Sprite2{
    constructor({position, velocity, image, frames = {max:1}, sprites, animate = false})
    {
        this.position = position;
        this.image = image;
        this.frames = {...frames, val:0, elapsed: 0};

        this.image.onload =() =>{
            this.width = this.image.width/this.frames.max;
            this.height = this.image.height;
            console.log(this.width);
            console.log(this.height);
        }
        this.animate = animate;
        this.sprites = sprites;
        this.health = 100;
    }
    
    draw(){
       
        c.drawImage(
        this.image, 
        this.frames.val *94.1,
        0,
        this.image.width/this.frames.max,
        this.image.height,
        this.position.x,
        this.position.y,

        this.image.width/this.frames.max,
        this.image.height,
        )


        if(!this.animate) return;

        if(this.frames.max > 1){
            this.frames.elapsed++
        }

        if(this.frames.elapsed % 10 ===0){

        if(this.frames.val<this.frames.max-1)
        {
            this.frames.val++
        }else{
            this.frames.val = 0;
        }
    }
    }

    attack({attack, recipient}){
        const tl = gsap.timeline();

        this.health = this.health - attack.damage;

        tl.to(this.position, {
            x:this.position.x - 20
        }).to(this.position, {
            x:this.position.x + 40,
            duration: 0.1,
            onComplete: ()=>{

                gsap.to('#HeroHP', {
                    width: this.health + '%'
                })

                gsap.to(recipient.position, {
                    x: recipient.position.x +10,
                    yoyo:true,
                    repeat: 5,
                    duration: 0.08
                })
                gsap.to(recipient, {
                    opacity: 0
                })
            }
        }).to(this.position, {
            x:this.position.x
        })
    }





    
}

class Sprite3{
    constructor({position, velocity, image, frames = {max:1}, sprites, animate = false})
    {
        this.position = position;
        this.image = image;
        this.frames = {...frames, val:0, elapsed: 0};

        this.image.onload =() =>{
            this.width = this.image.width/this.frames.max;
            this.height = this.image.height;
            console.log(this.width);
            console.log(this.height);
        }
        this.animate = animate;
        this.sprites = sprites;
        this.opacity = 1;
        this.health = 100;
    }
    draw(){
       
       
        c.drawImage(
        this.image, 
        this.frames.val *40,
        0,
        this.image.width/this.frames.max,
        this.image.height,
        this.position.x,
        this.position.y,

        this.image.width/this.frames.max,
        this.image.height,
        )

        

        if(!this.animate) return;

        if(this.frames.max > 1){
            this.frames.elapsed++
        }

        if(this.frames.elapsed % 10 ===0){

        if(this.frames.val<this.frames.max-1)
        {
            this.frames.val++
        }else{
            this.frames.val = 0;
        }
    }
    }


    //
    attack({attack, recipient}){
        const tl = gsap.timeline();

        this.health = this.health - attack.damage;

        tl.to(this.position, {
            x:this.position.x - 20
        }).to(this.position, {
            x:this.position.x + 40,
            duration: 0.1,
            onComplete: ()=>{

                gsap.to('#enemyHP', {
                    width: this.health + '%'
                })

                gsap.to(recipient.position, {
                    x: recipient.position.x +10,
                    yoyo:true,
                    repeat: 5,
                    duration: 0.08
                })
                gsap.to(recipient, {
                    opacity: 0
                })
            }
        }).to(this.position, {
            x:this.position.x
        })
    }

    
}





class Boundary{
    static width = 48;
    static height = 48;
    constructor({position}){
        this.position = position
        this.width =48;
        this.height=48;
    }
    draw(){
        c.fillStyle = 'rgba(255,0,0,0)'
        c.fillRect(this.position.x , this.position.y, this.width, this.height)
    }
}