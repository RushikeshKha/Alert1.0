
//This script works in the foreground and changes the UI elements of the TV web app
//It creates a new button in the UI of the TV web app, which is a button and it helps in setting an alert

function at(){

    var a = document.getElementsByClassName('menuBox-8MKeZifP')[0].getElementsByTagName('table')[0].getElementsByTagName('tbody')[0]
    var stock = document.getElementsByClassName('label-tPYeYcJa')[3].textContent.split(' ')[2]
    var price = document.getElementsByClassName('label-tPYeYcJa')[3].textContent.split(' ')[4]
    a.innerHTML += '<tr id="alertt" class="item-tPYeYcJa interactive-tPYeYcJa normal-tPYeYcJa"><td class="iconCell-tPYeYcJa" data-icon-cell="true"><span class="icon-tPYeYcJa"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="nonzero"><path d="M4 15h8.5v-1h-8.5zM16.5 15h8.5v-1h-8.5z"></path><path d="M14.5 16c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path></g></svg></span></td><td><div class="content-tPYeYcJa"><span class="label-tPYeYcJa" data-label="true">Set Alert Zerodha</span></div></td></tr>'
    
    
    
    document.getElementById('alertt').addEventListener("click", () => {
        var inp = prompt(stock+" @ "+price);
        console.log(stock,price,inp)
        var aaa = inp.concat(", CMP "+price)
        var bbb = stock.concat(" ",aaa)
        chrome.runtime.sendMessage({stock:stock,price:price,message:bbb}, function(response) {
            alert(response.farewell);
          });
    
         

    });
    
    }

at()