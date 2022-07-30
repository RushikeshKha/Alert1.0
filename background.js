

function reddenPage(s){
    console.log(s)
  }
  
  chrome.runtime.onInstalled.addListener(() => {
      console.log("hello")
      var a = setInterval(() => {
        console.log('ticking')
      },60000)
      chrome.action.onClicked.addListener((tab) => {
        console.log(tab.id)
        chrome.scripting.executeScript(
          {
            target: {tabId: tab.id},
            files: ['script.js'],
          },
          () => { console.log('done') });
      });
  
      chrome.tabs.create({
        url: 'https://kite.zerodha.com/'
      },(tab) => {
        
        console.log(tab)
        chrome.runtime.onMessage.addListener(
          function(request, sender, sendResponse) {
    
            console.log(request.stock,request.price,request.message)
              
              chrome.tabs.sendMessage(tab.id, {stock:request.stock,price:request.price,message:request.message}, function(response) {
                console.log(response);
                sendResponse({farewell: response.farewell});
              });
            }
            
          
        );
      
      });
  
      
    });
  