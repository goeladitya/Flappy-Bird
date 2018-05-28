function Pipe(){
    this.x= width;
    this.topY= 0;
    this.bottomY= height-10;
    this.topHeight=random(height/2);
    this.width= 50;
    this.bottomHeight= random(height/2);
    this.velocity= -3;
    this.printPipe= function(){
        fill('green');
        rect(this.x,this.topY,this.width,this.topHeight+50);
        rect(this.x,this.bottomY-100,this.width,this.bottomHeight+100);
        this.x= this.x+ this.velocity;
    }
    this.outOfScreen= function(){
    if(this.x<=0){
        return true;
    }
    else{
       return false; 
    } 
}
}
