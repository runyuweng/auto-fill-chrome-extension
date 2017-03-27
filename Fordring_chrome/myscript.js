// 监听popup点击事件

const resume={
  fill:function(resume){
      //使用jquery填写简历内容
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('myscript get request',request);
    if(request.type === 'fill'){
      resume.fill(request.text);
    }
  }
);
