# clear-code-zad2

Write a function calculating damage done by a spell of the famous polish wizard.
Eg. https://www.youtube.com/watch?v=XkeVYHJ6AG8 - 'fejejeeaindaiyaiai'
Spell consists of subspells. Each subspell add points of damage respectively:<br>
'fe' - 1<br>
'je' - 2<br>
'jee' - 3<br>
'ain'- 3<br>
'dai'- 5<br>
'ne' - 2<br>
'ai'- 2<br><br>
Spell start with 'fe' and end with 'ai'. Spell body can have subspells or other letters, but every single other letter decrease damage of spell by 1
point. 'fe' can occur only once and last 'ai' always end the spell. Method should return 0 if damage is negative or if spell is incorrect. In case of
multiple possible combination of subspells in one spell return the highest score.<br><br>
Correct spells:<br>
'xxxxxfejejeeaindaiyaiaixxxxxx' (fe-je-jee-ain-ai-ai-ai)<br>
'jejefeai' (fe-ai)<br><br>
Incorrect spells:<br>
'jejeai' (doesn't start with 'fe')<br>
'dadsafeokokok' (doesn't end with 'ai')<br>
'aioooofe'<br><br>
i.e.<br>
damage('feeai') == 2<br>
damage('feaineain') == 1 + 2 + 2 + 2 = 7 (fe-ai-ne-ai) - not (fe-ain-ai) because 1+3+2 = 6 and 7 > 6<br>
damage('jee') == 0<br>
damage('fefefefefeaiaiaiaiai') == 0 (more than one 'fe')<br>
damage(fdafafeajain) == 1 (fe-ai) 3 - 2 (because 'aj')<br>
damage('fexxxxxxxxxxai') == 0 (3-10 = -7 < 0)<br>
Solution should be in file named CCFrontTask2.js and contains exported damage function inside.<br>
exports.damage = function(spellString) {<br><br>
...<br><br>
return damage;<br>
}<br>
where spellString is type String and function returns Number.<br>
