chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    let keys = Object.keys(request.text.personal);
    keys.map((value)=>{
      localStorage.setItem(value,request.text.personal[value])
    })
    sendResponse({message:'success'});
  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse({message: "success"});
  });
