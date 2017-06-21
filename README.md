# clear-code-zad2

Write a function calculating damage done by a spell of the famous polish wizard.
Eg. https://www.youtube.com/watch?v=XkeVYHJ6AG8 - 'fejejeeaindaiyaiai'
Spell consists of subspells. Each subspell add points of damage respectively:
'fe' - 1
'je' - 2
'jee' - 3
'ain'- 3
'dai'- 5
'ne' - 2
'ai'- 2
Spell start with 'fe' and end with 'ai'. Spell body can have subspells or other letters, but every single other letter decrease damage of spell by 1
point. 'fe' can occur only once and last 'ai' always end the spell. Method should return 0 if damage is negative or if spell is incorrect. In case of
multiple possible combination of subspells in one spell return the highest score.
Correct spells:
'xxxxxfejejeeaindaiyaiaixxxxxx' (fe-je-jee-ain-ai-ai-ai)
'jejefeai' (fe-ai)
Incorrect spells:
'jejeai' (doesn't start with 'fe')
'dadsafeokokok' (doesn't end with 'ai')
'aioooofe'
i.e.
damage('feeai') == 2
damage('feaineain') == 1 + 2 + 2 + 2 = 7 (fe-ai-ne-ai) - not (fe-ain-ai) because 1+3+2 = 6 and 7 > 6
damage('jee') == 0
damage('fefefefefeaiaiaiaiai') == 0 (more than one 'fe')
damage(fdafafeajain) == 1 (fe-ai) 3 - 2 (because 'aj')
damage('fexxxxxxxxxxai') == 0 (3-10 = -7 < 0)
Solution should be in file named CCFrontTask2.js and contains exported damage function inside.
exports.damage = function(spellString) {
...
return damage;
}
where spellString is type String and function returns Number.
