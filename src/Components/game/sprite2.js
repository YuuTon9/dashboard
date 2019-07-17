var Sprite = function(image, allFrameset, size, pos) { //count until we draw next pic
	var allFrameset = allFrameset; //eg [[1,2],[2,3]]
	var frameset = allFrameset[0]; //initial movement upwards
	var _index = 0; // frameset[index] = frame
	var frame = []; //frame number
	var count = 0; //counting of time passed
	var velocity_x = 0; 
	var velocity_y = -8;
	var size = size; //size of character
	var pos = pos; //position in canvas
	var img = new Image(); //spritesheet

	img.onload = function() {
		init();
				
	};

	img.src = image

	function init() {
		window.requestAnimationFrame(move);
	}

	function drawFrame() {
		var crop_x = Math.floor(frame % 8 ) * size[0];
		var crop_y = Math.floor(frame / 8 ) * size[1];
		cxt_fg.drawImage(img, crop_x, crop_y, size[0], size[1], pos[0], pos[1], size[0], size[1]);

	};


	function move() {
		count++;
		if (count < 10) {
			window.requestAnimationFrame(move);
			return;
		}

		count = 0;
		cxt_fg.clearRect(pos[0], pos[1], size[0], size[1]);
		pos[0] = pos[0] + velocity_x;
		pos[1] = pos[1] + velocity_y;
		drawFrame();
		_index ++;

		if (_index == frameset.length - 1) { //change direction here(randomly generated)
			_index = 0;
			var dir = Math.floor(Math.random() * (4 - 0) + 0);
			updateFS(dir);
		}
		frame = frameset[_index];
		window.requestAnimationFrame(move);
	};

	function updateFS(dir) {
		if (allFrameset[dir][0] !== frameset[0]) {
			frameset = allFrameset[dir];
		}
	
		if (dir == 0) {
			velocity_x = 0;
			velocity_y = -8;
		} else if (dir == 1) {
			velocity_x = -8;
			velocity_y = 0;
		} else if (dir == 2) {
			velocity_x = 0;
			velocity_y = 8;
		} else {
			velocity_x = 8;
			velocity_y = 0;
		}
	};

};



