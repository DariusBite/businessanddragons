class AbilityScore{
  constructor(name, abb, score){
    this.name = name;
    this.abb = abb;
    this.score = score;
  }
  set name(name) {
    this._name = name;
  }
  set abb(abb){
    this._abb = abb;
  }
  set score(score){
    this._score = score;
  }
  get name(){
    return this._name;
  }
  get abb(){
    return this._abb;
  }
  get score(){
    return this._score;
  }
  abilityModifier(){
    return parseInt((this._score - 10)/2);
  }
}
module.exports.AbilityScore = AbilityScore;