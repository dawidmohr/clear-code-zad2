exports.damage =function(spellString) {
	var str = spellString;     			//przekazuję do zmiennej dany czar, dla bezpieczeństwa
	var letters = str.split("");		// przerabiam czar na tablicę
	var lengthStr = letters.length;		//Zmienna z długością oryginalnego czaru
	var checkerStart = false;			
	var startToken; 					//początek czaru(int)
	var checkerEnd  = false;
	var endToken;						// koniec czaru(int)
	
	//sprawdzam, czy czar ma minimalną długość
	if(lengthStr<4){
		return 0;
	}
	
	//sprawdzanie początku czaru 
	for(var i=0; i<(lengthStr-3);i++){
		if(letters[i]=='f' && letters[i+1]=='e' ){
			if (!checkerStart){
				checkerStart = true;
				startToken = i;
			}
			else{
				return 0;
			}
		}
	}
	if(!checkerStart){
		return 0;
	}
	
	//szukanie końca czaru
	for(var j = startToken + 2; j<(lengthStr-1);j++){
		if(letters[j]=='a' && letters[j+1]=='i' ){
			checkerEnd = true;
			endToken = j;
		}
	}
	if(!checkerEnd){
		return 0;
	}

	//zliczanie punktów
	var ammountOfletterInSpell = endToken - startToken- 2;		//długość właściwego czaru
	var damage = 0;												//DMG
	if(ammountOfletterInSpell == 0){
		return 3;
	}
	else{
		for(k=(startToken+2);k<endToken;k++){
			if(letters[k]=='j'){
				if(letters[k+1]=='e' && letters[k+2]=='e'){
					k=k+2;
					damage=damage+6;
				}
				else if(letters[k+1]=='e'){
					k=k+1;
					damage=damage+4;
				}
			}
			else if(letters[k]=='d' && letters[k+1]=='a' && letters[k+2]=='i' && (k+1)<endToken){
				k=k+2;
				damage=damage+8;
			}
			else if(letters[k]=='a'){
				if((k+1)<endToken){
					if(letters[k+1]=='i' && letters[k+2]=='n' && letters[k+3]=='e'){
						k=k+3;
						damage=damage+8;
					}
				}
				else if(letters[k+1]=='i' && letters[k+2]=='n'){
					k=k+2;
					damage=damage+6;
				}
				else if(letters[k+1]=='i'){
					k=k+1;
					damage=damage+4;
				}
			}
			else if(letters[k]=='n' && letters[k+1]=='e'){
				k=k+1;
				damage=damage+4;
			}
		}
	}

	damage = damage + 3 - ammountOfletterInSpell;
	
	//czy ujemny
	if(damage<0){
		damage = 0;
	}

	return damage;
}