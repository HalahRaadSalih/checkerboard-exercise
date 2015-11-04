// Your JS goes here

function createSquare(color, size){

	var square = document.createElement('div');

	sizeAndPositonSaqure(square, size,size);
 	colorSquare(square, color);

 	return square;
}

function sizeAndPositonSaqure(square, size, padding){
	square.style.width = size;
 	square.style.height = size;
 	square.style.float = 'left';
 	square.style.paddingBottom = size;
}

function colorSquare(square, color){
	 square.style.background = color;

}

function appendSquare(square){
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(square);
}


function createCheckeredBoard(){
	for (var i = 0; i< 99; i++){
			appendSquare(createSquare(generateRandomColor(),'11.1%'));
	}
}

function generateRandomColor(){
	var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color.toString();
}

createCheckeredBoard();