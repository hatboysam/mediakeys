var PLAY_PAUSE = "play_pause";
var NEXT_TRACK = "next_track";
var PREV_TRACK = "prev_track";

chrome.commands.onCommand.addListener(function(command) {
  console.log(command);
  findGoogleMusicTab(function(tab) {
    chrome.tabs.sendMessage(tab.id, { fn: command }, function() {});
  });
});

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
