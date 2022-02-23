import Blockly from "blockly";
import "blockly/javascript";

Blockly.Blocks["Setup"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput("Setup"),
      "Name"
    );
    this.appendStatementInput("Content").setCheck(null);
    this.setInputsInline(true);
    this.setColour("#00C199");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["Setup"] = (block) => {
  var text_name = block.getFieldValue("Name");
  var statements_code = Blockly.JavaScript.statementToCode(block, "Content");
  var code = `when${text_name}(function() {${statements_code}${"\n"}});`;
  return code;
};

const location = [
  ["at center", "{x: 200, y: 200}"],
  ["at left", "{x:100, y:200}"],
  ["at right", "{x:300, y:200}"],
];

Blockly.Blocks["setBackground"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldLabelSerializable("setBackgroundColor"),
        "NAME"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["Red", "red"],
          ["Yellow", "yellow"],
          ["Blue", "blue"],
          ["Orange", "orange"],
          ["Pink", "pink"],
          ["Cyan", "cyan"],
        ]),
        "SetBackgroundColor"
      );
    this.setPreviousStatement(true, null);
    this.setColour("#00C199");
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["setBackground"] = function (block) {
  var colour_setbackgroundcolor = block.getFieldValue("SetBackgroundColor");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}setBackground('${colour_setbackgroundcolor}');`;
  return code;
};

Blockly.Blocks["setBackgroundImage"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldLabelSerializable("BackgroundImage"),
        "NAME"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["Pagan", "pagan"],
          ["Inlay", "inlay"],
          ["Pot", "pot"],
        ]),
        "BackgroundImage"
      );
    this.setPreviousStatement(true, null);
    this.setColour("#00C199");
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["setBackgroundImage"] = function (block) {
  var image_setbackground = block.getFieldValue("BackgroundImage");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}setBackgroundImage('${image_setbackground}');`;
  return code;
};

Blockly.Blocks["setForegroundEffectExtended"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldLabelSerializable("setForegroundEffectExtended"),
        "NAME"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["Stage Lights", "color_lights"],
          ["Spotlight", "spotlight"],
          ["Rain", "rain"],
          ["Music Notes", "music_notes"],
          ["Leaves", "bubbles"],
          ["Snow", "smiling_poop"],
        ]),
        "SetForegroundName"
      );
    this.setPreviousStatement(true, null);
    this.setColour("#00C199");
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["setForegroundEffectExtended"] = function (block) {
  var dropdown_name = block.getFieldValue("SetForegroundName");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}setForegroundEffectExtended('${dropdown_name}');`;
  return code;
};

Blockly.Blocks["makeAnonymousDanceSprite"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Make a dance with ZeeGwet", "ALIEN"],
          ["Make a dance with MinThar", "DOG"],
          ["Make a dance with PhoeThuTaw", "SHARK"],
        ]),
        "CHARACTER"
      )
      .appendField(new Blockly.FieldDropdown(location), "LOCATION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CEA8FF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["makeAnonymousDanceSprite"] = function (block) {
  var dropdown_character = block.getFieldValue("CHARACTER");
  var dropdown_location = block.getFieldValue("LOCATION");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}makeAnonymousDanceSprite("${dropdown_character}", ${dropdown_location});`;
  return code;
};

const numArray = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const layout = [
  ["in a border", "border"],
  ["in a inside square", "inner"],
  ["in a diamond", "diamond"],
  ["in a circle", "circle"],
  ["in a grid", "grid"],
  ["in a top row", "top"],
  ["in a row", "row"],
  ["in a bottom row", "bottom"],
  ["in a left column", "left"],
  ["in a column", "column"],
  ["in a right column", "right"],
  ["in a criss-cross", "x"],
  ["in a plus", "plus"],
  ["in a random", "random"],
];

Blockly.Blocks["makenewdancespritegroup"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown(
          numArray.map((no) => [`Make ${no}`, `${no}`])
        ),
        "NUMBER"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["new Zee Gwet", "ALIEN"],
          ["new Min Thar", "DOG"],
          ["new Phoe Thu Taw", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(new Blockly.FieldDropdown(layout), "LAYOUT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CEA8FF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["makenewdancespritegroup"] = function (block) {
  var dropdown_number = block.getFieldValue("NUMBER");
  var dropdown_costume = block.getFieldValue("COSTUME");
  var dropdown_layout = block.getFieldValue("LAYOUT");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}makeNewDanceSpriteGroup(${dropdown_number}, "${dropdown_costume}", "${dropdown_layout}");`;
  return code;
};

Blockly.Blocks["layoutsprites"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["layout Zee Gwet", "ALIEN"],
          ["layout Min Thar", "DOG"],
          ["layout Phoe Thu Taw", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(new Blockly.FieldDropdown(layout), "LAYOUT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CEA8FF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["layoutsprites"] = function (block) {
  var dropdown_costume = block.getFieldValue("COSTUME");
  var dropdown_layout = block.getFieldValue("LAYOUT");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}layoutSprites("${dropdown_costume}", "${dropdown_layout}");`;
  return code;
};

Blockly.Blocks["jumpToEach"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["JUMP Zee Gwet", "ALIEN"],
          ["JUMP Min Thar", "DOG"],
          ["JUMP Phoe Thu Taw", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(new Blockly.FieldDropdown(location), "LOCATION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CEA8FF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["jumpToEach"] = function (block) {
  var dropdown_costume = block.getFieldValue("COSTUME");
  var dropdown_location = block.getFieldValue("LOCATION");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}jumpToEach("${dropdown_costume}", ${dropdown_location});`;
  return code;
};

var MOVES = [
  "Rest",
  "ClapHigh",
  "Clown",
  "Dab",
  "DoubleJam",
  "Drop",
  "Floss",
  "Fresh",
  "Kick",
  "Roll",
  "ThisOrThat",
  "Thriller",
  "XArmsSide",
  "XArmsUp",
  "XJump",
  "XClapSide",
  "XHeadHips",
  "XHighKick",
  "XBend",
  "XFever",
  "XHop",
  "XKnee",
  "XKneel",
  "XOle",
  "XSlide",
];

Blockly.Blocks["changeMoveEachLR"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Zee Gwet", "ALIEN"],
          ["Min Thar", "DOG"],
          ["Phoe Thu Taw", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(
        new Blockly.FieldDropdown(
          MOVES.map((moves) => [`do ${moves}`, `MOVES.${moves}`])
        ),
        "MOVES"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["left forever", "-1"],
          ["right forever", "1"],
        ]),
        "DIR"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CEA8FF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["changeMoveEachLR"] = function (block) {
  var dropdown_costume = block.getFieldValue("COSTUME");
  var dropdown_moves = block.getFieldValue("MOVES");
  var dropdown_dir = block.getFieldValue("DIR");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}changeMoveEachLR("${dropdown_costume}", ${dropdown_moves}, ${dropdown_dir});`;
  return code;
};

Blockly.Blocks["doMoveEachLR"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Zee Gwet", "ALIEN"],
          ["Min Thar", "DOG"],
          ["Phoe Thu Taw", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(
        new Blockly.FieldDropdown(
          MOVES.map((moves) => [`do ${moves}`, `MOVES.${moves}`])
        ),
        "MOVES"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["left once ", "-1"],
          ["right once  ", "1"],
        ]),
        "DIR"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CEA8FF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["doMoveEachLR"] = function (block) {
  var dropdown_costume = block.getFieldValue("COSTUME");
  var dropdown_moves = block.getFieldValue("MOVES");
  var dropdown_dir = block.getFieldValue("DIR");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}doMoveEachLR("${dropdown_costume}", ${dropdown_moves}, ${dropdown_dir});`;
  return code;
};

Blockly.Blocks["alternateMoves"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Zee Gwet alternate every", "ALIEN"],
          ["Min Thar alternate every", "DOG"],
          ["Phoe Thu Taw alternate every", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(new Blockly.FieldNumber(0), "TIME")
      .appendField(
        new Blockly.FieldDropdown(
          MOVES.map((moves) => [`measures between ${moves}`, `MOVES.${moves}`])
        ),
        "FIRSTMOVES"
      )
      .appendField(
        new Blockly.FieldDropdown(
          MOVES.map((moves) => [`and ${moves}`, `MOVES.${moves}`])
        ),
        "SECONDMOVES"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CEA8FF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["alternateMoves"] = function (block) {
  var dropdown_costume = block.getFieldValue("COSTUME");
  var text_time = block.getFieldValue("TIME");
  var dropdown_first_moves = block.getFieldValue("FIRSTMOVES");
  var dropdown_second_moves = block.getFieldValue("SECONDMOVES");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}alternateMoves("${dropdown_costume}",${text_time}, ${dropdown_first_moves}, ${dropdown_second_moves});`;
  return code;
};

Blockly.Blocks["settinteachinline"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["set Zee Gwet tint to", "ALIEN"],
          ["set Min Thar tint to", "DOG"],
          ["set Phoe Thu Taw tint to", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#89DDFF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["settinteachinline"] = function (block) {
  var dropdown_costume = block.getFieldValue("COSTUME");
  var colour_name = block.getFieldValue("NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}setTintEachInline("${dropdown_costume}", '${colour_name}');`;
  return code;
};

Blockly.Blocks["setpropeach"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["set Zee Gwet ", "ALIEN"],
          ["set Min Thar", "DOG"],
          ["set Phoe Thu Taw", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["size", "scale"],
          ["width", "width"],
          ["height", "height"],
          ["rotation", "rotation"],
          ["horizontal position", "x"],
          ["vetical position", "y"],
          ["tint", "tint"],
        ]),
        "PROPERTY"
      )
      .appendField(new Blockly.FieldNumber(0), "VAL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#89DDFF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["setpropeach"] = function (block) {
  var dropdown_costume = block.getFieldValue("COSTUME");
  var dropdown_property = block.getFieldValue("PROPERTY");
  var number_name = block.getFieldValue("VAL");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}setPropEach("${dropdown_costume}", "${dropdown_property}", ${number_name});`;
  return code;
};

Blockly.Blocks["setPropRandomEach"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["randomize Zee Gwet ", "ALIEN"],
          ["randomize Min Thar", "DOG"],
          ["randomize Phoe Thu Taw", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["size", "scale"],
          ["width", "width"],
          ["height", "height"],
          ["rotation", "rotation"],
          ["horizontal position", "x"],
          ["vetical position", "y"],
          ["tint", "tint"],
        ]),
        "PROPERTY"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#89DDFF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["setPropRandomEach"] = function (block) {
  var dropdown_costume = block.getFieldValue("COSTUME");
  var dropdown_property = block.getFieldValue("PROPERTY");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}setPropRandomEach("${dropdown_costume}", "${dropdown_property}");`;
  return code;
};

Blockly.Blocks["setVisibleEach"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["set Zee Gwet visibility to", "ALIEN"],
          ["set Min Thar visibility to", "DOG"],
          ["set Phoe Thu Taw visibility to", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["visible", "true"],
          ["invisible", "false"],
        ]),
        "VISIBILITY"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#89DDFF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["setVisibleEach"] = function (block) {
  var dropdown_costume = block.getFieldValue("COSTUME");
  var dropdown_visibility = block.getFieldValue("VISIBILITY");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}setVisibleEach("${dropdown_costume}", ${dropdown_visibility});`;
  return code;
};

Blockly.Blocks["setDanceSpeedEach"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["set Zee Gwet dance speed to", "ALIEN"],
          ["set Min Thar dance speed to", "DOG"],
          ["set Phoe Thu Taw dance speed to", "SHARK"],
        ]),
        "COSTUME"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["very first", "4"],
          ["first", "2"],
          ["normal", "1"],
          ["slow", "0.5"],
          ["very slow", "0.25"],
        ]),
        "SPEED"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#89DDFF");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["setDanceSpeedEach"] = function (block) {
  var dropdown_costume = block.getFieldValue("COSTUME");
  var dropdown_speed = block.getFieldValue("SPEED");
  // TODO: Assemble JavaScript into code variable.
  var code = `${"\n"}setDanceSpeedEach("${dropdown_costume}", ${dropdown_speed});`;
  return code;
};

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const KEY = [
  "up",
  "left",
  "down",
  "right",
  "space",
  "enter",
  ...alphabet.split(""),
  ...number.split(""),
];

Blockly.Blocks["whenkey"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown(KEY.map((key) => [`when ${key} pressed`, key])),
      "KEY"
    );
    this.appendStatementInput("Content").setCheck(null);
    this.setInputsInline(true);
    this.setColour("#EB72CE");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["whenPeak"] = function (block) {
  var dropdown_KEY = block.getFieldValue("KEY");
  var statements_code = Blockly.JavaScript.statementToCode(block, "Content");
  // TODO: Assemble JavaScript into code variable.
  var code = `whenPeak("${dropdown_KEY}", function () {${statements_code}${"\n"}});`;
  return code;
};

Blockly.Blocks["whenPeak"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["when bass peak", "1"],
        ["when mid peak", "2"],
        ["when treble peak", "3"],
      ]),
      "PEAK"
    );
    this.appendStatementInput("Content").setCheck(null);
    this.setInputsInline(true);
    this.setColour("#EB72CE");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["whenPeak"] = function (block) {
  var dropdown_PEAK = block.getFieldValue("PEAK");
  var statements_code = Blockly.JavaScript.statementToCode(block, "Content");
  // TODO: Assemble JavaScript into code variable.
  var code = `whenPeak("${dropdown_PEAK}", function() {${statements_code}${"\n"}});`;
  return code;
};

Blockly.Blocks["everySeconds"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown(KEY.map((key) => [`when ${key} pressed`, key])),
      "KEY"
    );
    this.appendStatementInput("Content").setCheck(null);
    this.setInputsInline(true);
    this.setColour("#EB72CE");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["everySeconds"] = function (block) {
  var dropdown_KEY = block.getFieldValue("KEY");
  var statements_code = Blockly.JavaScript.statementToCode(block, "Content");
  // TODO: Assemble JavaScript into code variable.
  var code = `everySeconds("${dropdown_KEY}", function () {${statements_code}${"\n"}});`;
  return code;
};

Blockly.Blocks["everySeconds"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("repeat every")
      .appendField(new Blockly.FieldNumber(0), "NUMBER")
      .appendField(
        new Blockly.FieldDropdown([
          ["measures", "measures"],
          ["seconds", "seconds"],
        ]),
        "UNIT"
      );
    this.appendStatementInput("NAME").setCheck(null);
    this.setColour("#EB72CE");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["everySeconds"] = function (block) {
  var number_number = block.getFieldValue("NUMBER");
  var dropdown_unit = block.getFieldValue("UNIT");
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `everySeconds(${number_number}, "${dropdown_unit}", function () {${statements_name}${"\n"}});`;
  return code;
};

Blockly.Blocks["attimestamp"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("after")
      .appendField(new Blockly.FieldNumber(1), "NUMBER")
      .appendField(
        new Blockly.FieldDropdown([
          ["measures", "measures"],
          ["seconds", "seconds"],
        ]),
        "UNIT"
      );
    this.appendStatementInput("NAME").setCheck(null);
    this.setInputsInline(true);
    this.setColour("#EB72CE");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["attimestamp"] = function (block) {
  var number_number = block.getFieldValue("NUMBER");
  var dropdown_unit = block.getFieldValue("UNIT");
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `atTimestamp(${number_number}, "${dropdown_unit}", function () {${statements_name}${"\n"}});`;
  return code;
};
