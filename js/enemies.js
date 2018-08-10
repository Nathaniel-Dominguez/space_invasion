function spawnEnemy(){
	console.log('Create enemy!');
	var enemy = enemies.getFirstExists(false);
	enemy.reset(GAME_WIDTH - 10, game.rnd.integerInRange(50, GAME_HEIGHT - 50));
	enemy.body.velocity.x = -250;
	enemy.life = ENEMY_LIFE;
}

function hurtPlayer(player, enemy){
	// Sound effects/ visual effects
	boom.play();
	var explosion = explosions.getFirstExists(false);
	explosion.reset(player.body.x, player.body.y);
	explosion.play('smallboom', 30, false, true);

	// Logic
	enemy.kill();
	player.life -= 25;
	hpText.text = 'HP: ' + player.life.toString();

	if(player.life <= 0){
		player.kill();
		gameOver();
	}
	else if(player.life <= 50){
		player.tint = '0xff0000';
	}
}

function weaponEnemy(weapon, enemy){
	// sound and visual effects
	boom.play();
	var explosion = explosions.getFirstExists(false);
	explosion.reset(enemy.body.x, enemy.body.y);
	explosion.play('smallboom', 30, false, true);

	// Game logic
	enemy.life -= WEAPONS[currentWeapon].damage;
	console.log(enemy.life);
	if(enemy.life <= 0){
		enemy.kill();
		addScore(10);
	}
	weapon.kill();
}