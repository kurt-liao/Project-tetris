var TetrisModel = function(){

    this.isCollide = function(){

    }

    this.cubeRotate = function(){

    }

    this.arenaSweep = function(){

    }

    this.cubeControl = function(){

    }

    this.arenaIsFull = function(){

    }

    this.cubeRandom = function(){

    }

    this.drawMatrix = function(context, matrix, offset){
        matrix.forEach((row, y) => {
            row.forEach((value, x) =>{
                if (value !== 0) {
                    context.fillStyle = 'black';
                    context.fillRect(x + offset.x, y + offset.y, 1, 1);
                }
            });
        });
    }

    this.scoreCompute = function(){

    }

};
