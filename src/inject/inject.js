console.log('INJECTED!');

var buttons = {};

$(document).ready(function() {
  console.log('INITIALIZING');
  init();
});

function init() {
  buttons.playPause = $('[data-id="play-pause"]');
  buttons.nextTrack = $('[data-id="forward"]');
  buttons.prevTrack = $('[data-id="rewind"]');
}

var buttonFns = {
  play_pause: function() {
    buttons.playPause.click();
  },

  next_track: function() {
    buttons.nextTrack.click();
  },

  prev_track: function() {
    buttons.prevTrack.click();
  }
}

chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
  // Call the requested function
  console.log('CALLING: ' + req.fn);
  var fn = buttonFns[req.fn];
  fn.apply(this, []);
});
