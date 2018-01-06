var TetrisModel = function(){
    var isStart = false;
    var bestScore = 0;
    
    this.createMatrix = function(weight, height){
        const matrix = [];
        for(var i = 0; i < height; i++)
            matrix.push(new Array(weight).fill(0));
        return matrix;    
    }

    this.isCollide = function(arena, player){
        const [m, o] = [player.matrix, player.pos];
        for (var y = 0; y < m.length; y++){
            for (var x = 0; x < m[y].length; x++){
                if(m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0)
                    return true
            }
        }
        return false;
    }

    this.cubeRotateFixed = function(arena, player, dir){
        //fixed rotate to outside problem
        const pos = player.pos.x;
        let offset = 1;
        this.cubeRotate(player.matrix, dir);
        while(this.isCollide(arena, player)){
            player.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1: -1));
            if (offset > player.matrix[0].length){
                this.cubeRotate(player.matrix, -dir);
                player.pos.x = pos;
                return;
            }
        }
    }

    this.cubeRotate = function(matrix , dir){
        /*
        transpose + reverse = rotate
        123    147    741
        456 -> 258 -> 852
        789    369    963
        */
        for(var y = 0; y< matrix.length; y++){
            for(var x = 0; x < y; x++){
                [matrix[x][y], matrix[y][x],]=
                [matrix[y][x], matrix[x][y],];
            }
        }

        //dir '1'->順時鐘 '-1'->逆時鐘
        if (dir > 0)
            matrix.forEach(row => row.reverse());
        else 
            matrix.reverse();
    }

    this.cubeDrop = function(arena, player){
        player.pos.y++;
        if(this.isCollide(arena, player)){
            player.pos.y--;
            this.merge(arena, player);
            this.cubeReset(arena, player);
            this.arenaSweep(arena, player);
            this.scoreCompute(player);
        }
    }

    this.cubeMove = function(arena, player , dir){
        player.pos.x += dir;
        if(this.isCollide(arena, player))
            player.pos.x -= dir;
    }

    this.cubeFall = function(arena, player){
        while(!this.isCollide(arena, player)){
            player.pos.y++;
        }
        player.pos.y--;
        this.merge(arena, player);
        this.cubeReset(arena, player);
        this.arenaSweep(arena,player);
        this.scoreCompute(player);
    }
    this.arenaSweep = function(arena, player){
        var rowCount = 1;
        outer: for(var y = arena.length - 1; y > 0; y--){
            for(var x = 0; x< arena[y].length; x++){
                if(arena[y][x] === 0)
                    continue outer;
            }
            var row = arena.splice(y, 1)[0].fill(0);
            arena.unshift(row);
            y++;
            player.score += rowCount * 100;
            rowCount *=2;
        }
    }

    this.cubeControl = function(){
        // this.cubeFall
        // this.cubeDrop
        // this.cubeMove
        // this.cubeRotate
    }

    this.merge = function(arena, player){
        player.matrix.forEach((row, y) =>{
            row.forEach((value, x) =>{
                if (value !== 0){
                    arena[y + player.pos.y][x + player.pos.x] = value;
                }
            });
        });
    }

    this.arenaIsFull = function(){

    }
    
    this.cubeReset = function(arena, player){
        const pieces = 'ILJOTZS';
        if(isStart)
            player.matrix = player.next;
        else{
            isStart = true;
            player.matrix = this.cubeRandom(pieces[Math.floor(Math.random() * pieces.length)]);
            document.getElementById('bestScore').innerText = bestScore;
        }
        player.next = this.cubeRandom(pieces[Math.floor(Math.random() * pieces.length)]);
        player.pos.y = 0;
        player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
        if(this.isCollide(arena, player)){
            arena.forEach(row => row.fill(0));
            if(player.score > bestScore){
                bestScore = player.score;
                document.getElementById('bestScore').innerText = bestScore;
            }
            player.score = 0;
            this.scoreCompute(player);
        }
    }

    this.cubeRandom = function(type){
         switch(type) {
            case 'T':
                return [
                    [1, 1, 1],
                    [0, 1, 0],
                    [0, 0, 0],
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
        '#FF0D72',
        '#0DC2FF',
        '#0DFF72',
        '#F538FF',
        '#FF8E0D',
        '#FFE138',
        '#3877FF',
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

    this.showMatrix = function(context, matrix){
        matrix.forEach((row, y) => {
            row.forEach((value, x) =>{
                if (value == 2) {
                    context.fillStyle = colors[value] ;
                    context.fillRect(x + 1.5, y + 1.5, 1, 1);
                }else if(value == 5){
                    context.fillStyle = colors[value] ;
                    context.fillRect(x + 1, y + 0.5, 1, 1);
                }else if(value == 4){
                    context.fillStyle = colors[value] ;
                    context.fillRect(x + 1.5, y + 1.0, 1, 1);
                }else if(value == 3){
                    context.fillStyle = colors[value] ;
                    context.fillRect(x + 0.8, y + 1.0, 1, 1);
                }else if(value !== 0){
                    context.fillStyle = colors[value] ;
                    context.fillRect(x + 1, y + 1.5, 1, 1);
                }
            });
        });
    }

    this.scoreCompute = function(player){
        document.getElementById('score').innerText = player.score;
    }

};
