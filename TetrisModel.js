var TetrisModel = function(){
    
    this.createMatrix = function(weight, height){
        const matrix = [];
        for(var i = 0; i < height; i++)
            matrix.push(new Array(weight).fill(0));
        return matrix;    
    }

    this.isCollide = function(){

    }

    this.cubeRotate = function(matrix , dir){
        
    }

    this.cubeDrop = function(player){
        player.pos.y++;
    }

    this.cubeMove = function(player , dir){
        player.pos.x +=dir;
    }

    this.quickDrop = function(player){
        player.pos.y+=12;
    }

    this.arenaSweep = function(){

    }

    this.cubeControl = function(){

    }

    this.arenaIsFull = function(){

    }

    this.cubeRandom = function(type){
         switch(type) {
            case 'T':
                return [
                    [0, 0, 0],
                    [1, 1, 1],
                    [0, 1, 0],
                ];
            case 'O':
                return [
                    [1, 1],
                    [1, 1],
                ];
            case 'L':
                return [
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                ];
            case 'J':
                return [
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 0],
                ];
            case 'I':
                return [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                ];
            case 'Z':
                return [
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 0, 0],
                ];
            case 'S':
                return [
                    [0, 1, 1],
                    [1, 1, 0],
                    [0, 0, 0],
                ];
        }
    }

    

    this.drawMatrix = function(context, matrix, offset){
        matrix.forEach((row, y) => {
            row.forEach((value, x) =>{
                if (value !== 0) {
                    context.fillStyle = 'red'//colors[value] ;
                    context.fillRect(x + offset.x, y + offset.y, 1, 1);
                }
            });
        });
    }

    this.scoreCompute = function(){

    }

};
