let translate = true;

// 监听popup点击事件
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    
  }
);
