var Hero = require("./adventure_game.js").Hero;
var Food = require("./adventure_game.js").Food;
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
  it('should be able to eat food and health should go up by the replenishment value', function(){
    var hero1 = new Hero('hero1', 'cucumber');
    var food1 = new Food('cheese', 5)
    hero1.eat(food1);
    assert.equal(105, hero1.health);
  })
  it('should increase health by 1.5 * value if they eat their favourite food', function(){
    var hero1 = new Hero('hero1', 'cucumber');
    var food1 = new Food('cucumber', 5)
    hero1.eat(food1);
    assert.equal(107.5, hero1.health);
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
