if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Reg done
      console.log('ServiceWorker reg done', registration.scope);
    }).catch(function(err) {
      // reg error
      console.log('ServiceWorker reg error', err);
    });
  }

  //fetch user from github
  function getData(){
    console.log('getData fn done');
    fetch('https://api.github.com/users').then(function(response){
      return response.json();
    })
    .then(function(users){
      console.log(users);
      const nameList = document.querySelector(".myList");    
      
      users.map(item => {
        let nameItem = document.createElement("li");    
        nameItem.appendChild(document.createTextNode(item.login));    
        nameList.appendChild(nameItem);
      });
    }).catch(function(error){
      console.log('getData fn error')
    })
  }