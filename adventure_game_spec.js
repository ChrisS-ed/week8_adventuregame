var Hero = require("./adventure_game.js").Hero;
var Food = require("./adventure_game.js").Food;
var Rat = require("./adventure_game.js").Rat;
var assert =  require("assert");

// A. - Create a constructor to create Hero character. - A Hero has a name - A Hero has health - A Hero has a favourite food - A Hero can talk saying their name
describe('Hero', function(){
  it("should be able to say its name", function(){
    var hero1 = new Hero('hero1', 'cucumber');
    var talkString = hero1.talk();
    assert.equal(talkString, "My name is hero1")
  }),
  // C. - A hero should be able to eat food, and health should go up by the replenishment value - If the food is their favourite food, their health should go up by 1.5 * value.
  it('should be able to eat food', function(){
    var hero1 = new Hero('hero1', 'cucumber');
    var food1 = new Food('cucumber', 5)
    hero1.eat(food1);
    assert.equal("I have eaten 1 food", hero1.eat(food1));
  }),
  // C. - A hero should be able to eat food, and health should go up by the replenishment value
  it('should be able to eat food and health should go up by the replenishment value', function(){
    var hero1 = new Hero('hero1', 'cucumber');
    var food1 = new Food('cheese', 5)
    hero1.eat(food1);
    assert.equal(105, hero1.health);
  }),
  // C. - A hero should be able to eat food - If the food is their favourite food, their health should go up by 1.5 * value.
  it('should increase health by 1.5 * value if they eat their favourite food', function(){
    var hero1 = new Hero('hero1', 'cucumber');
    var food1 = new Food('cucumber', 5)
    hero1.eat(food1);
    assert.equal(107.5, hero1.health);
  }),
  // Further. D. - Heroes that eat poisonous food should lose health.
  it('should lose 25 health if they eat poisonous food', function(){
    var hero1 = new Hero('hero1', 'cucumber');
    var food1 = new Food('cheese', 5);
    var rat1 = new Rat();
    rat1.touch(food1);
    hero1.eat(food1);
    assert.equal(75, hero1.health);
  })
})

// B. - Create a food constructor. - Food should have a name - Food should have a replenishment value
describe('Food', function(){
  it("should have a name and a replenishment value", function(){
    var food1 = new Food('cucumber', 5);
    assert.equal(food1.name, "cucumber");
    assert.equal(food1.rValue, 5);
  })
})

// Further. D. - Create a Rat constructor - Rats should be able to touch food, if they do the food become poisonous.
describe('Rat', function(){
  it("should be able to touch food, if they do the food become poisonous", function(){
    var rat1 = new Rat();
    var food1 = new Food('cucumber', 5);
    rat1.touch(food1);
    assert.equal(food1.poisonous, true);
  })
})

