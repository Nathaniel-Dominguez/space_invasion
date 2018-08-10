function fireWeapon(){
	if(game.time.now < weaponTimer || player.life <= 0){
		return;
	}

	var weapon;
	if(WEAPONS[currentWeapon].name === 'Laser'){
		weapon = lasers.getFirstExists(false);
		pewpew.play();
	}
	else if(WEAPONS[currentWeapon].name === 'Missile'){
		weapon = missiles.getFirstExists(false);
		launch.play();
	}

	weapon.reset(player.x + WEAPONS[currentWeapon].offset, player.y + WEAPONS[currentWeapon].offset);
	weapon.body.velocity.x = WEAPONS[currentWeapon].velocity;
	weaponTimer = game.time.now + WEAPONS[currentWeapon].timer;
}

function switchWeapon(){
	if(game.time.now < switchTimer){
		return;
	}
	console.log('Switch Weapon!');
	currentWeapon++;
	if(currentWeapon >= WEAPONS.length){
		currentWeapon = 0;
	}

	switchTimer = game.time.now + SWITCH_WEAPON_TIMER;
}