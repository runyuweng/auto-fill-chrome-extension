chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if(request.type === 'save'){
      let keys = Object.keys(request.text.personal);
      keys.map((value)=>{
        localStorage.setItem(value,request.text.personal[value])
      })
      sendResponse({message:'success'});
    }else if(request.type === 'fill'){
      sendResponse({message:'success'});
    }

  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse({message: "success"});
  });
