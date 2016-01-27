// A. - Create a constructor to create Hero character. - A Hero has a name - A Hero has health - A Hero has a favourite food - A Hero can talk saying their name

// B. - Create a food constructor. - Food should have a name - Food should have a replenishment value

// C. - A hero should be able to eat food, and health should go up by the replenishment value - If the food is their favourite food, their health should go up by 1.5 * value.

// Further. D. - Create a Rat constructor - Rats should be able to touch food, if they do the food become poisonous. - Heroes that eat poisonous food should lose health.

// E. Be creative. Extend the game

var Hero = function(name, favourite_food) {
  this.name = name;
  this.health = 100;
  this.favourite_food = favourite_food;

  this.talk = function() {
    var talkString ="My name is " + this.name;
    return talkString;
  }

  this.eat = function(foodName) {
    var eatString ="I have eaten 1 food";
    this.health += foodName.rValue
    return eatString;
  }

}



var Food = function(name, rValue){
  this.name = name;
  this.rValue = rValue
}

module.exports.Hero = Hero;
module.exports.Food = Food;