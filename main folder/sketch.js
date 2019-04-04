
let giaStampati=0;

function setup() {
    createCanvas(1000,500);
    pixels = [];
    inseriti = 0;
	frameRate(60);
	background(51); 
}

function draw() {
	//se nulla si muove va bene pure nel setup()
    //background(51);  
	tmp = giaStampati;
    for(i = giaStampati; i < pixels.length; i++){
        pixels[i].show();
		if(giaStampati>0){
			pixels[i].collega(pixels[i-1]);
		}
    }
	giaStampati=i;
	//document.getElementById("ps").innerHTML = (giaStampati-tmp) +" Pixel nuovi";
}

function mousePressed(){
	if(document.getElementById("r").checked){
		this.r = 255;
		this.g = 0;
		this.b = 0;
	}else if(document.getElementById("g").checked){
		this.r = 0;
		this.g = 255;
		this.b = 0;
	}else{
		this.r = 0;
		this.g = 0;
		this.b = 255;
	}
	this.size = document.getElementById("size").value;
    pixels[inseriti] = new pixel(this.r,this.g,this.b,mouseX,mouseY,this.size,false);
	inseriti++;
}

function mouseDragged(){
	if(document.getElementById("r").checked){
		this.r = 255;this.g = 0;this.b = 0;
	}else if(document.getElementById("g").checked){
		this.r = 0;this.g = 255;this.b = 0;
	}else{this.r = 0;this.g = 0;this.b = 255;
	}
	this.size = document.getElementById("size").value;
    pixels[inseriti] = new pixel(this.r,this.g,this.b,mouseX,mouseY,this.size,true);
	inseriti++;
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		document.getElementById("size").value = parseInt(document.getElementById("size").value)+1;
	}else if(keyCode === DOWN_ARROW) {
		if(document.getElementById("size").value>1){
			document.getElementById("size").value -=1;
		}
	}else if(keyCode === 82) {
		document.getElementById("r").checked = true;
	}else if(keyCode === 71) {
		document.getElementById("g").checked = true;
	}else if(keyCode === 66) {
		document.getElementById("b").checked = true;
	}
}