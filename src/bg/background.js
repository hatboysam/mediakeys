var PLAY_PAUSE = "play_pause";

chrome.commands.onCommand.addListener(function(command) {
  if (command == PLAY_PAUSE) {
    playPause();
  }
})

var playPause = function() {
  console.log('PLAYPAUSE!');
  findGoogleMusicTab(function(tab) {
    chrome.tabs.sendMessage(tab.id, { fn: "playPause" }, function() {});
  });
};

var findGoogleMusicTab = function(callback) {
    chrome.tabs.query({}, function(tabs) {
      for (var i = 0; i < tabs.length; i++) {
        var tabUrl = tabs[i].url;
        if (tabUrl.indexOf("play.google.com/music/listen") >= 0) {
          callback(tabs[i]);
        }
      }
    });
};