function Bird(birdImg){
    this.x= width/2-50;
    this.y= height/2;
    this.height= this.width= 50;
    this.birdImg= birdImg;
    this.gravity=1;
    this.velocity=1;
    this.printBird= function(){
        image(this.birdImg,this.x,this.y,this.width,this.height);
    }
    this.fall= function(){
        if(this.y<=height+25){
          this.velocity= this.velocity+ this.gravity;
        this.y= this.y+ this.velocity;   
        }
        else{
            image(this.birdImg,this.x,this.y-70,this.width,this.height);
        }
    }
    this.up= function(){
        this.velocity= -13;
    }
    this.hit= function(pipe){
        if(this.y>=pipe.topY && this.y<=pipe.topHeight){
            if(this.x<=pipe.x+ (pipe.width/2) && this.x>=pipe.x-(pipe.width/2)){
                return true;
            }
        }
        if(this.y>=pipe.bottomY-100 && this.y<=pipe.bottomHeight){
            if(this.x<=pipe.x+(pipe.width/2) && this.x>=pipe.x-(pipe.width/2)){
                return true;
            }
        }
    }
}
