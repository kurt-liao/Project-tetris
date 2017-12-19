var TetrisView = function(model){
	var tetrismodel = model;
	var canvas = document.getElementById('tetris');
    var context = canvas.getContext('2d');
    context.scale(20, 20);
    
    matrix = [
    	[0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
    ]

    const player = {
        pos: {x: 5, y: 5},
        matrix: matrix,
	}

	this.draw = function(){
        context.fillStyle = "rgba(0, 0, 0, 0)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        tetrismodel.drawMatrix(context, player.matrix, player.pos);
    }

    this.getUserKeyDown = function(){

    }

    this.updateGameView = function(time = 0){
        var self = this;
        self.draw();
        requestAnimationFrame(self.updateGameView.bind(self));
    }

    this.setting = function(){

    }

};

