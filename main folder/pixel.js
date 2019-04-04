function pixel(red,green,blue,position_X,position_Y,size,collegato){
	
    this.x = position_X;
    this.y = position_Y;
	
    this.R = red;
    this.G = green;
    this.B = blue;
	
	this.size = size;
	
	this.isCollegato = collegato;
    
    this.update = function(){}
    
    this.show = function(){
		fill(this.R,this.G,this.B);
        stroke(this.R,this.G,this.B);
		//parte dal cursore verso il basso e destra
        //rect(this.x,this.y,this.size,this.size);
		if(!this.isCollegato){
			ellipse(this.x,this.y,parseInt(this.size),parseInt(this.size));
		}
    }
	
	this.collega = function(pixelB){
		if(this.isCollegato){
			strokeWeight(this.size);
			line(this.x,this.y,pixelB.x,pixelB.y);
		}
	}
}