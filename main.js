canvas = document.getElementById("myCanvas");

ctx=canvas.getContext("2d");



rover_image="rover.png";
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

nasa_mars_images=["2.jpg","3.jpg","4.jpg","mars1.jpg"];
R_n=Math.floor(Math.random()*4);

background_image=nasa_mars_images[R_n];
console.log("background_image="+background_image);
function add() {
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=background_image;

    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;

}

function uploadBackground() {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown (e) {
keyPressed=e.keyCode;
console.log (keyPressed);
if (keyPressed=='38'){
    up();
console.log("up")
}
if (keyPressed=='40'){
    down();
console.log("down")
}
if (keyPressed=='37'){
    left();
console.log("left")
}
if (keyPressed=='39'){
    right();
console.log("right")
}
}
function up() {
    if(rover_y>=0 ) {
rover_y=rover_y-10;
console.log("when up arrow is pressed , x=  " +rover_x + "y=" +rover_y );
uploadBackground() ;
uploadrover();

    }
}
function down() {
    if(rover_y<=500 ) {
rover_y=rover_y+10;
console.log("when down arrow is pressed , x=  " +rover_x + "y=" +rover_y );
uploadBackground() ;
uploadrover();

    }
}
function left() {
    if(rover_x>=0 ) {
rover_x=rover_x-10;
console.log("when left arrow is pressed , x=  " +rover_x + "y=" +rover_y );
uploadBackground() ;
uploadrover();

    }
}
function right() {
    if(rover_x<=700 ) {
rover_x=rover_x+10;
console.log("when right arrow is pressed , x=  " +rover_x + "y=" +rover_y );
uploadBackground() ;
uploadrover();

    }
}

