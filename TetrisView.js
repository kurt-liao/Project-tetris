var TetrisView = function(model){
	var tetrismodel = model;
	var canvas = document.getElementById('tetris');
    var context = canvas.getContext('2d');
    var canvasNext = document.getElementById('next');
    var contextNext = canvasNext.getContext('2d');
    context.scale(20, 20);
    contextNext.scale(16, 16);
    var dropCounter = 0;
    var dropInterval = 1000;
    var lastTime = 0;
    const arena = tetrismodel.createMatrix(12, 20);

    const player = {
        pos: {x: 0, y: 0},
        matrix: tetrismodel.cubeRandom(null),
        next: tetrismodel.cubeRandom(null),
        score: 0,
	}

	this.draw = function(){
        contextNext.fillStyle = "#222";
        contextNext.fillRect(0, 0, canvasNext.width, canvasNext.height);
        tetrismodel.showMatrix(contextNext, player.next);

        context.fillStyle = "#222";//"rgba(0, 0, 0, 0)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        tetrismodel.drawMatrix(context, arena, {x: 0, y: 0});
        tetrismodel.drawMatrix(context, player.matrix, player.pos);
    }

    this.getUserKeyDown = function(event){
        if(event.keyCode === 39) //right
            tetrismodel.cubeMove(arena, player , 1);
        else if(event.keyCode === 37) //left
            tetrismodel.cubeMove(arena, player , -1);
        else if(event.keyCode === 40) {//down
            tetrismodel.cubeDrop(arena, player);
            dropCounter = 0;
        }else if(event.keyCode === 38) //up
            tetrismodel.cubeRotateFixed(arena, player, 1);
        else if (event.keyCode === 32){ // space
            tetrismodel.cubeFall(arena, player);
        }
    }

    this.updateGameView = function(time = 0){
        const deltaTime = time - lastTime;
        lastTime = time;
        dropCounter += deltaTime;
        if(dropCounter > dropInterval){
            tetrismodel.cubeDrop(arena, player);
            dropCounter = 0;
        }

        //console.log(deltaTime);
        var self = this;
        self.draw();
        var a = requestAnimationFrame(self.updateGameView.bind(self));
    }

    this.setting = function(){
        tetrismodel.cubeReset(arena, player);
        tetrismodel.scoreCompute(player);
    }
};

