console.log('INJECTED!');

var buttons = {};

$(document).ready(function() {
  console.log('INITIALIZING');
  init();
});

function init() {
  buttons.playPause = $('[data-id="play-pause"]');
}

var buttonFns = {
  playPause: function() {
    buttons.playPause.click();
  }
}

chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
  // Call the requested function
  console.log('CALLING: ' + request.fn);
  var fn = buttonFns[request.fn];
  fn.apply(this, []);
});