var gb;

addEventListener("load", (event) => {
	gb = new GameBoy();
	gb.start();
});

var game_state = {
	counter: 0,
	x: 0,
	y: 0
}

function hook_on_arrow_up_press() {
	game_state.y -= 10;
}

function hook_on_arrow_down_press() {
	game_state.y += 10;
}

function hook_on_arrow_left_press() {
	game_state.x -= 10;
}

function hook_on_arrow_right_press() {
	game_state.x += 10;
}

function hook_on_button_A_press() {

}

function hook_on_button_B_press() {

}

function hook_on_select_button_press() {

}

function hook_on_start_button_press() {

}

function hook_draw_layer_1() {

}

function hook_draw_layer_2() {
	gb.fill_rect(game_state.x, game_state.y, 10, 10, gb.colors.red);
}

function hook_draw_layer_3() {

}
