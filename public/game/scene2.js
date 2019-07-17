var Scene = function(fn, ctx) {
	var data;
	var numTiles_x = 0;
	var numTiles_y = 0;
	var tileSize_x = 0;
	var tileSize_y = 0;
	var tileSets = [];
	this.get_map = function() {
		$.getJSON(fn + '.json', function(json) {
			load_tilesets(json);
		});
	};

	function load_tilesets(json) {
		data = json;
		numTiles_x = data.width;
		numTiles_y = data.height;
		tileSize_x = data.tilewidth;
		tileSize_y = data.tileheight;
		var imgLoadCount = 0;
		for (var i = 0; i < data.tilesets.length; i++) {
			var img = new Image();
			img.onload = new function() {
				imgLoadCount++;
				console.log(img);
			};

			img.src = data.tilesets[i].image;

			var info = {
				"firstgid": data.tilesets[i].firstgid,
				"image": img,
				"image_h": data.tilesets[i].imageheight,
				"image_w": data.tilesets[i].imagewidth,
				"img_name": data.tilesets[i].name,
				"numTiles_x": Math.floor(data.tilesets[i].imagewidth / tileSize_x),
				"numTiles_y": Math.floor(data.tilesets[i].imageheight / tileSize_y)

			};
			tileSets.push(info);
		}

		if (imgLoadCount == data.tilesets.length) {
			render_layers();
		}

	}

	function render_layers() {
		for (var j = 0; j < data.layers.length; j++) {
			if (data.layers[j].type !== "tilelayer" || data.layers[j].opacity == 0) {
				console.log('not layer');
				continue;
			} else {
				var ts_info = data.layers[j].data;
				for (var k = 0; k < ts_info.length; k++) {
					var tile_id = ts_info[k];
					if (tile_id == 0) {continue;}
					var tile_ori = getOri(tile_id);
					var ctx_x = Math.floor(k % numTiles_x) * tileSize_x;
					var ctx_y = Math.floor(k / numTiles_x) * tileSize_y;
					ctx.drawImage(tile_ori.img, tile_ori.px, tile_ori.py, tileSize_x, tileSize_y, ctx_x, ctx_y, tileSize_x, tileSize_y);
				}
			}
		}
	}

	function getOri(t_id) {
		var ori = {
			"img": null,
			"px": 0,
			"py": 0
		}
		var m = tileSets.length - 1;
		while (m>=0) {
			if (tileSets[m].firstgid <= t_id) {
				break;
			} else {
				m--;
			}
		}
		ori.img = tileSets[m].image;
		var start = t_id - tileSets[m].firstgid;
		var sTile_x = Math.floor(start % tileSets[m].numTiles_x);
		var sTile_y = Math.floor(start/tileSets[m].numTiles_x);
		ori.px = sTile_x * tileSize_x;
		ori.py = sTile_y * tileSize_y;
		return ori;
	}


}