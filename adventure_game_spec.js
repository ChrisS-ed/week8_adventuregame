var Hero = require("./adventure_game.js");
var assert =  require("assert");

// A. - Create a constructor to create Hero character. - A Hero has a name - A Hero has health - A Hero has a favourite food - A Hero can talk saying their name
describe('Hero', function(){
  it("should be able to say it's name", function(){
    var hero1 = new Hero('hero1', 'cucumber');
    var talkString = hero1.talk();
    assert.equal(talkString, "My name is hero1")
  })
})

// B. - Create a food constructor. - Food should have a name - Food should have a replenishment value
describe('Food', function(){
  it("should have a name and a replenishment value", function(){
    var food1 = new Food('cucumber', 5);
    assert.equal(food1.name, "cucumber");
    assert.equal(food1.replenishment, 5);
  })
})