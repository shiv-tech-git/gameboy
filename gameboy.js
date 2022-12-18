class GameBoy {

	constructor() {
		this.display_width = 210; // do not change
		this.display_height = 190; // do not change
		
		this.canvas = document.getElementById("mainCanvas");
		this.context = this.canvas.getContext('2d');
		this.counter = 0;
		this.colors = {
			white: "white",
			black: "black",
			gray: "gray",
			red: "red",
			green: "green",
			yellow: "yellow",
			blue: "blue",
		}

		this.time_divider = 1;
		this.arrow_up_is_pressed = false;
		this.arrow_down_is_pressed = false;
		this.arrow_left_is_pressed = false;
		this.arrow_right_is_pressed = false;
		this.button_A_is_pressed = false;
		this.B_button_is_pressed = false;
		this.select_button_is_pressed = false;
		this.start_button_is_pressed = false;

		this.init_buttons_hooks();
	}

	clear_field() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	coords_is_valid(x, y) {
		if (x > this.display_width || 
			x < 0 ||
			y > this.display_height ||
			y < 0)
		{
			console.log(`Invalid coordinates (${x}, ${y})`);
			return false;
		}
		return true;
	}

	draw_rect(x, y, width, height, color) {
		if (!this.coords_is_valid(x, y) || !this.coords_is_valid(x + width, y + height)) {
			return;
		}

		this.context.strokeStyle = color;
		this.context.strokeRect(x , y , width, height);
	}

	fill_rect(x, y, width, height, color) {
		if (!this.coords_is_valid(x, y) || !this.coords_is_valid(x + width, y + height)) {
			return;
		}

		this.context.fillStyle = color;
		this.context.fillRect(x , y , width, height);
	}

	rand(max) {
		return Math.floor(Math.random() * max);
	}

	game_loop(inctance) {
		requestAnimationFrame(() => {
			inctance.game_loop(inctance);
		});

		gb.counter++;
		if (gb.counter < gb.time_divider) {
			return;
		}
		gb.clear_field();
		hook_draw_layer_1();
		hook_draw_layer_2();
		hook_draw_layer_3();
	}

	start() {
		requestAnimationFrame(() => {
			this.game_loop(this);
		});
	}

	arrow_up_is_pressed() {
		return this.arrow_up_is_pressed;
	}

	arrow_down_is_pressed() {
		return this.arrow_down_is_pressed;
	}

	arrow_right_is_pressed() {
		return this.arrow_right_is_pressed;
	}

	arrow_left_is_pressed() {
		return this.arrow_left_is_pressed;
	}

	B_button_is_pressed() {
		return this.B_button_is_pressed;
	}

	A_button_is_pressed() {
		return this.A_button_is_pressed;
	}

	select_button_is_pressed() {
		return this.select_button_is_pressed;
	}

	start_button_is_pressed() {
		return this.start_button_is_pressed;
	}

	on_arrow_up_press() {
		this.arrow_up_is_pressed = true;
		console.log("UP");
		hook_on_arrow_up_press();
	}
	
	on_arrow_down_press() {
		this.arrow_down_is_pressed = true;
		console.log("DOWN");
		hook_on_arrow_down_press();
	}
	
	on_arrow_right_press() {
		this.arrow_right_is_pressed = true;
		console.log("RIGHT");
		hook_on_arrow_right_press();
	}
	
	on_arrow_left_press() {
		this.arrow_left_is_pressed = true;
		console.log("LEFT");
		hook_on_arrow_left_press();
	}
	
	on_A_button_press() {
		this.button_A_is_pressed = true;
		console.log("A");
		hook_on_A_button_press();
	}
	
	on_B_button_press() {
		this.B_button_is_pressed = true;
		console.log("B");
		hook_on_B_button_press();
	}
	
	on_select_button_press() {
		this.select_button_is_pressed = true;
		console.log("SELECT");
		hook_on_select_button_press();
	}
	
	on_start_button_press() {
		this.start_button_is_pressed = true;
		console.log("START");
		hook_on_start_button_press();
	}
	
	on_arrow_up_release() {
		this.arrow_up_is_pressed = false;
		hook_on_arrow_up_release();
	}
	
	on_arrow_down_release() {
		this.arrow_down_is_pressed = false;
		hook_on_arrow_down_release();
	}
	
	on_arrow_right_release() {
		this.arrow_right_is_pressed = false;
		hook_on_arrow_right_release();
	}
	
	on_arrow_left_release() {
		this.arrow_left_is_pressed = false;
		hook_on_arrow_left_release();
	}
	
	on_A_button_release() {
		this.button_A_is_pressed = false;
		hook_on_A_button_release();
	}
	
	on_B_button_release() {
		this.B_button_is_pressed = false;
		hook_on_B_button_release();
	}
	
	on_select_button_release() {
		this.select_button_is_pressed = false;
		hook_on_select_button_release();
	}
	
	on_start_button_release() {
		this.start_button_is_pressed = false;
		hook_on_start_button_release();
	}

	init_buttons_hooks() {
		document.getElementById("up_button").onclick = (e) => {
			this.on_arrow_up_press();
		}
		
		document.getElementById("down_button").onclick = (e) => {
			this.on_arrow_down_press();
		}
		
		document.getElementById("right_button").onclick = (e) => {
			this.on_arrow_right_press();
		}
		
		document.getElementById("left_button").onclick = (e) => {
			this.on_arrow_left_press();
		}
		
		document.getElementById("A_button").onclick = (e) => {
			this.on_A_button_press();
		}
		
		document.getElementById("B_button").onclick = (e) => {
			this.on_B_button_press();
		}
		
		document.getElementById("select_button").onclick = (e) => {
			this.on_select_button_press();
		}
		
		document.getElementById("start_button").onclick = (e) => {
			this.on_start_button_press();
		}

		document.getElementById("up_button").onclick = (e) => {
			this.on_arrow_up_press();
		}
		
		document.getElementById("down_button").onclick = (e) => {
			this.on_arrow_down_press();
		}
		
		document.getElementById("right_button").onclick = (e) => {
			this.on_arrow_right_press();
		}
		
		document.getElementById("left_button").onclick = (e) => {
			this.on_arrow_left_press();
		}
		
		//todo
		document.getElementById("up_button").addEventListener("mouseup", function(e) {
			this.on_arrow_down_release();
		});
		
		document.getElementById("down_button").addEventListener("mouseup",  (e) => {
			this.on_arrow_down_release();
		});
		
		document.getElementById("right_button").addEventListener("mouseup", (e) => {
			this.on_arrow_right_release();
		});
		
		document.getElementById("left_button").addEventListener("mouseup", (e) => {
			this.on_arrow_left_release();
		});
		
		document.getElementById("A_button").addEventListener("mouseup", (e) => {
			this.on_A_button_release();
		});
		
		document.getElementById("B_button").addEventListener("mouseup", (e) => {
			this.on_B_button_release();
		});
		
		document.getElementById("select_button").addEventListener("mouseup", (e) => {
			this.on_select_button_release();
		});
		
		document.getElementById("start_button").addEventListener("mouseup", (e) => {
			this.on_start_button_release();
		});

		document.getElementById("up_button").addEventListener("mouseup", (e) => {
			this.on_arrow_up_release();
		});
		
		document.getElementById("down_button").addEventListener("mouseup", (e) => {
			this.on_arrow_down_release();
		});
		
		document.getElementById("right_button").addEventListener("mouseup", (e) => {
			this.on_arrow_right_release();
		});
		
		document.getElementById("left_button").addEventListener("mouseup", (e) => {
			this.on_arrow_left_release();
		});
		
		
		document.addEventListener('keydown', (e) => {
			if (e.keyCode == 38) { // ArrowUp
				this.on_arrow_up_press();
			}
			else if (e.keyCode == 40) { // ArrowDown
				this.on_arrow_down_press();
			}
			else if (e.keyCode == 37) { // ArrowLeft
				this.on_arrow_left_press();
			}
			else if (e.keyCode == 39) { // ArrowRight
				this.on_arrow_right_press();
			}
			else if (e.keyCode == 65) { // A
				this.on_A_button_press();
			}
			else if (e.keyCode == 66) { // B
				this.on_B_button_press();
			}
		})
		
		document.addEventListener('keyup', (e) => {
			if (e.keyCode == 38) { // ArrowUp
				this.on_arrow_up_release();
			}
			else if (e.keyCode == 40) { // ArrowDown
				this.on_arrow_down_release();
			}
			else if (e.keyCode == 37) { // ArrowLeft
				this.on_arrow_left_release();
			}
			else if (e.keyCode == 39) { // ArrowRight
				this.on_arrow_right_release();
			}
			else if (e.keyCode == 65) { // A
				this.on_A_button_release();
			}
			else if (e.keyCode == 66) { // B
				this.on_B_button_release();
			}
		})
	}
}


