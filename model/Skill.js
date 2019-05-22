var AbilityScore = require('./AbilityScore.js').AbilityScore;

class Skill{
  constructor(name, ability, untrained, armorPenalty, rank, other){
    this.name = name;
    this.ability = ability;
    this.untrained = untrained;
    this.armorPenalty = armorPenalty;
    this.rank = rank;
    this.other = other;
  }
  set name(name){
    this._name =name;
  }
  set ability(ability){
    this._ability = ability;
  }
  set untrained(untrained){
    this._untrained = untrained;
  }
  set armorPenalty(armorPenalty){
    this._armorPenalty = armorPenalty;
  }
  set rank(rank){
    this._rank = rank;
  }
  set other(other){
    this._other = other;
  }
  get name(){
    return this._name;
  }
  get ability(){
    return this._ability;
  }
  get untrained(){
    return this._untrained;
  }
  get armorPenalty(){
    return this._armorPenalty;
  }
  get rank(){
    return this._rank;
  }
  get other(){
    return this._other;
  }
  total(){
    var x = 0;
    for(var i in this._other) {
      x += this._other[i];
    }
    return x + this._rank + this._ability.abilityModifier();
  }
}
module.exports.Skill = Skill;

