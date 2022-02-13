import DanceAPI from './api';

const injectInterpreted = (api, interpretedCode, userCode = '') => {
  // This list is not exhaustive, and more can/should be added as needed
  const functionNames = [
    'atTimestamp',
    'everySeconds',
    'everySecondsRange',
    'everyVerseChorus',
    'runUserSetup',
    'runUserEvents',
    'getCueList',
  ];

  const globals = new DanceAPI(api);
  const code = interpretedCode + userCode + `return {${functionNames.map(s => `${s}:${s}`).join(',')}};`;

  const params = [];
  const args = [];
  for (let k of Object.keys(globals)) {
    params.push(k);
    args.push(globals[k]);
  }
  params.push(code);
  console.log(params);
  console.log(args);
  const ctor = function () {
    return Function.apply(this, params);
  };
  ctor.prototype = Function.prototype;
  return new ctor().apply(null, args);
};

export default injectInterpreted;
