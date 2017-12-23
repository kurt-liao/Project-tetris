var TetrisView = function(model){
	var tetrismodel = model;
	var canvas = document.getElementById('tetris');
    var context = canvas.getContext('2d');
    context.scale(20, 20);
    var dropCounter = 0;
    var dropInterval = 1000;
    var lastTime = 0;
    
    /*matrix = [
    	[0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
    ]*/

    const player = {
        pos: {x: 5, y: 5},
        matrix: matrix,
	}

	this.draw = function(){
        context.fillStyle = "#222";//"rgba(0, 0, 0, 0)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        tetrismodel.drawMatrix(context, player.matrix, player.pos);
    }

    this.getUserKeyDown = function(){
        if(event.keyCode===39) //right
            tetrismodel.cubeMove(player , 1);
        else if(event.keyCode===37) //left
            tetrismodel.cubeMove(player , -1);
        else if(event.keyCode===40) {//down
            tetrismodel.cubeDrop(player);
            dropCounter = 0;
        }
        else if(event.keyCode===38) //rotate
            tetrismodel.cubeRotate(player.matrix , 1);
    }

    this.updateGameView = function(time = 0){
        const deltaTime = time -lastTime;
        lastTime = time;
        dropCounter += deltaTime;
        if(dropCounter > dropInterval){
            tetrismodel.cubeDrop(player);
            dropCounter = 0;
        }

        //console.log(deltaTime);
        var self = this;
        self.draw();
        requestAnimationFrame(self.updateGameView.bind(self));
    }

    this.setting = function(){

    }
};

