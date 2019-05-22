var Skill = require('./Skill.js').skill;

class Character{
  constructor(name, lvl, str, dex, con, int, wis, cha, acrobatics, appraise, bluff, climb, craft, diplomacy, disableDevice, disguise, escapeArtist, fly, handleAnimal, heal, intimidate, knowledgeArcana, knowledgeDungeoneering, knowledgeEngineering, knowledgeGeography, knowledgeHistory, knowledgeLocal, knowledgeNature, knowledgeNobility, knowledgePlanes, knowledgeReligion, linguistics, perception, perform, profession, ride, senseMotive, sleightOfHand, spellcraft, stealth, survival, swim, useMagicDevice){
    this.name = name;
    this.lvl = lvl;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.acrobatics = acrobatics;
    this.appraise = appraise;
    this.bluff = bluff;
    this.climb = climb;
    this.craft = craft;
    this.diplomacy = diplomacy;
    this.disableDevice = disableDevice;
    this.disguise = disguise;
    this.escapeArtist = escapeArtist;
    this.fly = fly;
    this.handleAnimal = handleAnimal;
    this.heal = heal;
    this.intimidate = intimidate;
    this.knowledgeArcana = knowledgeArcana;
    this.knowledgeDungeoneering = knowledgeDungeoneering;
    this.knowledgeEngineering = knowledgeEngineering;
    this.knowledgeGeography = knowledgeGeography;
    this.knowledgeHistory = knowledgeHistory;
    this.knowledgeLocal = knowledgeLocal;
    this.knowledgeNature = knowledgeNature;
    this.knowledgeNobility = knowledgeNobility;
    this.knowledgePlanes = knowledgePlanes;
    this.knowledgeReligion = knowledgeReligion;
    this.linguistics = linguistics;
    this.perception = perception;
    this.perform = perform;
    this.profession = profession;
    this.ride = ride;
    this.senseMotive = senseMotive;
    this.sleightOfHand = sleightOfHand;
    this.spellcraft = spellcraft;
    this.stealth = stealth;
    this.survival = survival;
    this.swim = swim;
    this.useMagicDevice = useMagicDevice;
  }
  
}
module.exports.Character = Character;