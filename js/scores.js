function addScore(amount){
	player.score += amount;
	scoreText.text = 'Score: ' + player.score.toString();
}

function gameOver(){
	console.log('game over');
	music.pause();

	swal({
		title: 'Good job!',
		text: 'Thanks for playing!' + player.score,
		type: 'warning',
		showCancelButton: false,
		confirmButtonText: 'Cool',
		closeOnConfirm: true
	});
}