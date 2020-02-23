var ball,database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball=createSprite(250,250,20,20);
    ball.shapeColor="yellow";
    var ballposition=database.ref('ball/position');
    ballposition.on("value",readposition);
}

function draw(){
    background("red");

    if(position!==undefined){

    if(keyDown(LEFT_ARROW)){
    writeposition(-2,0);
    }

    else if(keyDown(RIGHT_ARROW)){
        writeposition(2,0);
        }

      else  if(keyDown(UP_ARROW)){
            writeposition(0,-3);
            }

            else if(keyDown(DOWN_ARROW)){
                writeposition(0,3);
                }
    drawSprites();
            }
}

function readposition(data){
position=data.val();
ball.x=position.x;
ball.y=position.y;
}

function writeposition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}