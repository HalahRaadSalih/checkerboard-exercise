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
	 console.log(square.style.background);
}

function appendToBody(children){
	var body = document.getElementsByTagName('body')[0];
	for(var i = 0; i< 99; i++){
	body.appendChild(children[i]);
	}
}


function createCheckeredBoard(){
	var checkeredBoard = [];
	for (var i = 0; i< 99; i++){

		checkeredBoard.push(createSquare(generateRandomColor(),'11.1%'));

		
	}

	appendToBody(checkeredBoard);
	return checkeredBoard;
}

function generateRandomColor(){
	var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color.toString();
}


var squares = createCheckeredBoard();
console.log(squares);

function flashColors(){
	setInterval(function (){
		for(var i =0; i < squares.length; i++){
		colorSquare(squares[i], generateRandomColor());
		}
		}, 2000);

	
}

flashColors();