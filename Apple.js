
let Apple = function(weight) {
	this.weight = weight || 10;
}

Apple.prototype.decrease = function(){
	if(this.weight > 0){
		if(this.weight < 1){
			this.weight = 0;
		}else{
			this.weight--;
		}
	}
}

Apple.prototype.isEmpty = function(){
	if(this.weight > 0){
		return false;
	}
	return true;
}

Apple.prototype.getWeight = function(){
	return this.weight;
}
