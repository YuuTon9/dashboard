var Shop = function() {
	this.img = new Image();
	this.height = 128;
	this.items = [];
	this.curCount = 0;
	this.img.src = "waterfall.png";

	this.loadpic = function() {
		this.img.onload = function() {
			return;
		};
	};

	this.addItem = function(name, crop_x, crop_y, height, width, put_x, put_y, price) {
		var info = {
			"name": name,
			"crop_x": crop_x,
			"crop_y": crop_y,
			"height": height,
			"width": width,
			"id": this.curCount,
			"put_x": put_x,
			"put_y": put_y,
			"price": price,
			"margin_top": 0,
			"margin_left": 0
		};
		info.margin_top = Math.floor(info.id / 3) * (128 + 30) + 128;
		info.margin_left = Math.floor(info.id % 3) * (128);
		console.log(info);
		this.curCount++;
		this.items.push(info);
	}

	this.getItems = function() {
		return this.items;
	};

	this.drawImg = function(id,cxt, x, y) {
		var num = parseInt(id.charAt(1));
		console.log(num);
		var detail = this.items[num];
		console.log(detail);
		console.log(this.img);
		cxt.drawImage(this.img, detail.crop_x, detail.crop_y, detail.width, detail.height,
						x, y, detail.width, detail.height);
		//cxt.drawImage(this.img, detail.crop_x, detail.crop_y, detail.width, detail.height,
		//				detail.put_x, detail.put_y, detail.width, detail.height);
	}

	this.loadItems = function() {
		this.addItem("rock", 0, 0, 128, 64, 3, 3, 10);
		console.log(this.items);
	}

	this.addButtons = function(parent) {
		for(var i = 0; i < this.items.length; i++) {
			var curr = this.items[i];
			var button = document.createElement("button");
			button.style.marginTop = ""+curr.margin_top+"px";
			button.style.marginLeft = ""+curr.margin_left+"px";
			button.id = "s"+curr.id;
			button.className = "itemPrice";
			button.innerHTML = curr.price;
			parent.appendChild(button);
		}
	}
}

