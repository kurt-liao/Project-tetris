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
        for(var y =0; y < matrix.length; y++){
            for(var x=0; x < y; x++){
                [matrix[x][y] , matrix[y][x],]=
                [matrix[y][x] , matrix[x][y],];
            }
        }

        if(dir > 0)
            matrix.forEach(row => row.reverse());
        else
            matrix.reverse();
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
                    [2, 2],
                    [2, 2],
                ];
            case 'L':
                return [
                    [0, 3, 0],
                    [0, 3, 0],
                    [0, 3, 3],
                ];
            case 'J':
                return [
                    [0, 4, 0],
                    [0, 4, 0],
                    [4, 4, 0],
                ];
            case 'I':
                return [
                    [0, 5, 0, 0],
                    [0, 5, 0, 0],
                    [0, 5, 0, 0],
                    [0, 5, 0, 0],
                ];
            case 'Z':
                return [
                    [6, 6, 0],
                    [0, 6, 6],
                    [0, 0, 0],
                ];
            case 'S':
                return [
                    [0, 7, 7],
                    [7, 7, 0],
                    [0, 0, 0],
                ];
        }
    }

    const colors = [
        null,
        'blue',
        'red',
        'orange',
        'purple',
        'green',
        'yellow',
        'pink',

    ];
    

    this.drawMatrix = function(context, matrix, offset){
        matrix.forEach((row, y) => {
            row.forEach((value, x) =>{
                if (value !== 0) {
                    context.fillStyle = colors[value] ;
                    context.fillRect(x + offset.x, y + offset.y, 1, 1);
                }
            });
        });
    }

    this.scoreCompute = function(){

    }

};
