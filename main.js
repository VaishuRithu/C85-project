canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_height = 100;
car1_width = 90;

car1_x = 10;
car1_y = 10;

background_img = "Backgroundpic.png";
car1_img = "Car1.png";

function add(){

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img; 

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img; 

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar1;
    car2_imgTag.src = car2_img; 

}

function uploadBackground(){

    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar1(){

    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    
    keyPressed = e.keyCode;
    console.log(keyPressed);

            if(keyPressed == '38'){

                up();
                console.log("up");

            }

            if(keyPressed == '40'){

                down();
                console.log("down");
                
            }

            if(keyPressed == '37'){

                left();
                console.log("left");
                
            }

            if(keyPressed == '39'){

                right();
                console.log("right");
                
            }

            if(keyPressed == '87'){

                keyW();
                console.log("key w");
                
            }

            if(keyPressed == '83'){

                keyS();
                console.log("key s");
                
            }

            if(keyPressed == '65'){

                keyA();
                console.log("key a");
                
            }

            if(keyPressed == '68'){

                keyD();
                console.log("key d");
                
            }

            if(car1_x > 700){
                console.log("car1 has won")
                document.getElementById('game_status').innerHTML = "Car 1 WON!!!"
            }

            if(car2_x > 700){
                console.log("car2 has won")
                document.getElementById('game_status').innerHTML = "Car 2 WON!!!"
            }

}

function up(){

    if(car1_y >= 0){

        car1_y = car1_y - 10;
        console.log("when up arrow is pressed, x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2()

    }

}

function down(){

    if(car1_y <= 500){

        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2()
    }

}
function left(){

    if(car1_x >= 0){

        car1_x = car1_x - 10;
        console.log("when left arrow is pressed, x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2()

    }

}
   
function right(){

    if(car1_x <= 700){

        car1_x = car1_x + 10;
        console.log("when right arrow is pressed, x = " + car1_x + "| y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2()

    }

}

car2_height = 100;
car2_width = 90;

car2_x = 10;
car2_y = 10;

car2_img = "Car2.png";

function uploadcar2(){

    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

}

function keyW(){

    if(car2_y >= 0){

        car2_y = car2_y - 10;
        console.log("when key w is pressed, x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }

}

function keyS(){

    if(car2_y <= 500){

        car2_y = car2_y + 10;
        console.log("when key s is pressed, x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }

}
function keyA(){

    if(car2_x >= 0){

        car2_x = car2_x - 10;
        console.log("when key a is pressed, x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }

}
   
function keyD(){

    if(car2_x <= 700){

        car2_x = car2_x + 10;
        console.log("when key d is pressed, x = " + car2_x + "| y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }

}
