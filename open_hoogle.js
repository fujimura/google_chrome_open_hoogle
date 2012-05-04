function openHoogle(info, tab) {
  chrome.tabs.create({
    "url": "http://www.haskell.org/hoogle/?hoogle=" + info.selectionText
  });
};

chrome.contextMenus.create({
  "title"   : "Open Hoogle",
  "type"    : "normal",
  "contexts": ["selection"],
  "onclick" : openHoogle
});

