var updateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener('click',function(){
      var productId = this.dataset.product
      var action = this.dataset.action
      console.log ('productId:',productId, 'Action:',action)
      console.log('User:',user)

      if(user === 'AnonymousUser')
      {
        addCookeItem(productId,action)
      }
      else{
       UpdateUserOrder(productId,action)
      }
   })
}

function addCookeItem(productId,action){
  console.log('Not logged in')

  if(action == 'add'){
    if(cart[productId] == undefined){
      cart[productId] = {'quantity':1}
    }
    else{
      cart[productId]['quantity'] += 1
    }
  }

  if(action == 'remove'){
    cart[productId]['quantity'] -= 1
    if(cart[productId]['quantity'] <= 0){
      console.log('Remove Item')
      delete cart[productId]
    }
  }
  console.log('Cart:',cart)
  document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
  location.reload()
}

function UpdateUserOrder(productId,action){
  console.log('User is logged in,sending data')

  var url = '/update_item/'
  fetch(url, {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'X-CSRFToken' : csrftoken,
    },
    body:JSON.stringify({'productId':productId , 'action':action})
  })
  .then((response) =>{
    return response.json() //Convert response to JSON
  })
  .then((data) =>{
    console.log('data:',data) //Perform actions with the response data from the view
    location.reload()
  })
}
