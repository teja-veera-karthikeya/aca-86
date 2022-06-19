var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        block_object=Img

        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)

        block_object.set({
            top:player_Y,
            left:player_X
        })
        canvas.add(block_object)
    })
}

function playSound(){
         x.play()
}
