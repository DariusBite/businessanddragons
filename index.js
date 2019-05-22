var AbilityScore = require('./model/AbilityScore.js').AbilityScore;
var Skill = require('./model/Skill.js').Skill;
var Character = require('./model/Character.js').Character;

var str = new AbilityScore("strength", "str", 18);
var dex =   new AbilityScore("dexterity", "dex", 10);
var con = new AbilityScore("constitution", "con", 16);
var int = new AbilityScore("intelligence", "int", 10);
var wis = new AbilityScore("wisdom", "wis", 12);
var cha = new AbilityScore("charisma", "cha", 8);

var paco = new Character(
  "Paco", 
  7,
  str,
  dex,
  con,
  int,
  wis,
  cha,
  new Skill("acrobatics", dex, true, true, 0, {}),
	new Skill("appraise", int, true, false, 0, {}),
	new Skill("bluff", cha, true, false, 0, {}),
	new Skill("climb", str, true, true, 0, {}),
	new Skill("craft", int, true, false, 0, {}),
	new Skill("diplomacy", cha, true, false, 0, {}),
	new Skill("disable device", dex, false, true, 0, {}),
	new Skill("disguise", cha, true, false, 0, {}),
	new Skill("escape artist", dex, true, true, 0, {}),
	new Skill("fly", dex, true, true, 0, {}),
	new Skill("handle animal", cha, false, false, 0, {}),
	new Skill("heal", wis, true, false, 0, {}),
	new Skill("intimidate", cha, true, false, 0, {}),
	new Skill("knowledge arcana", int, false, false, 0, {}),
	new Skill("knowledge dungeoneering", int, false, false, 0, {}),
	new Skill("knowledge engineering", int, false, false, 0, {}),
	new Skill("knowledge geography", int, false, false, 0, {}),
	new Skill("knowledge history", int, false, false, 0, {}),
	new Skill("knowledge local", int, false, false, 0, {}),
	new Skill("knowledge nature", int, false, false, 0, {}),
	new Skill("knowledge nobility", int, false, false, 0, {}),
	new Skill("knowledge planes", int, false, false, 0, {}),
	new Skill("knowledge religion", int, false, false, 0, {}),
	new Skill("linguistics", int, false, false, 0, {}),
	new Skill("perception", wis, true, false, 0, {}),
	new Skill("perform", cha, true, false, 0, {}),
	new Skill("profession", wis, false, false, 0, {}),
	new Skill("ride", dex, true, true, 0, {}),
	new Skill("sense motive", wis, true, false, 0, {}),
	new Skill("sleight of hand", dex, false, true, 0, {}),
	new Skill("spellcraft", int, false, false, 0, {}),
	new Skill("stealth", dex, true, true, 0, {}),
	new Skill("survival", wis, true, false, 0, {}),
	new Skill("swim", str, true, true, 0, {}),
	new Skill("use magic device", cha, false, false, 0, {})
);

console.log(paco.swim.total());