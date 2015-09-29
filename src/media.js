var sorcery = require('./sorcery.js');

  var domNode = sorcery.domNode;

  // is(media, "paused") ?
  function is(m, action) {
    return !!prop(domNode(m), action);
  }

  // has(media, "currentTime") property?
  function has(m, property) {
    return is(m, property);
  }

  // prop(media, "ended")
  // prop(media, "currentTime", 50)
  function prop(media, property, value) {

    if(media && !property) return media;

    if(media)
      return !!(~~value) ? media[property] = value : media[property];
  }

  // perform(media, "play") === media.play();
  function perform(m, command) {

    if(has(m, command))
      domNode(m)[command]();

  }
  
  function pause(m) {
    perform(m, 'pause');
  }

  function play(m) {
    perform(m, 'play');
  }

  function toggle(m) {
    is(m, 'paused') ? play(m) : pause(m);
  }


  module.exports = {
    perform: perform,
    toggle: toggle,
    is: is,
    has: is,
    prop: prop,
    pause: pause,
    play: play
  }



