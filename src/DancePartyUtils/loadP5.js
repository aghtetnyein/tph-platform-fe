if (
  typeof process !== "undefined" &&
  process.release &&
  process.release.name === "node"
) {
  const { JSDOM } = eval("require('jsdom')"); // eslint-disable-line no-eval
  global.window = new JSDOM().window;
  global.document = window.document;
  global.screen = window.screen;
  global.Image = window.Image;
}

const p5 = require("@code-dot-org/p5");
p5.disableFriendlyErrors = true;

global.window.p5 = p5;
require("@code-dot-org/p5.play/lib/p5.play");
require("p5/lib/addons/p5.sound");

export default p5;
