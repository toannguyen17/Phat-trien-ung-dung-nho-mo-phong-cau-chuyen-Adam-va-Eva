
let Human = function(name, gender, weight) {
	this.name   = name;
	this.gender = gender;
	this.weight = weight;
}

Human.prototype.isMale = function(){
	if (this.gender){
		return true;
	}
	return false;
}

Human.prototype.setGender = function(gender){
	this.gender = gender;
}

Human.prototype.checkApple = function(apple){
	return !apple.isEmpty();
}

Human.prototype.eat = function(apple){
	if (this.checkApple(apple)) {
		apple.decrease();
		this.weight++;
	}
}

Human.prototype.say = function(message){
	console.log(message);
}

Human.prototype.getName = function(){
	return this.name;
}

Human.prototype.setName = function(name){
	this.name = name;
}

Human.prototype.getWeight = function(){
	return this.weight;
}

Human.prototype.setWeight = function(name){
	this.weight = weight;
}
