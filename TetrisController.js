var TetrisController = function(model, view){
	var tetrisview = view;
	var tetrismodel = model;

	this.userHasKeyDown = function(){
	}

	this.start = function(){
		tetrisview.setting();
		tetrisview.updateGameView();
	}

};

var model = new TetrisModel();
var view = new TetrisView(model);
var controller = new TetrisController(model, view);

controller.start();
document.addEventListener('keydown', view.getUserKeyDown, false);