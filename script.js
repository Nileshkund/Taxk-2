function proceedToNextPage() {
   
    var checkoutButton = document.querySelector('.checkout-button');
    checkoutButton.innerHTML = 'Purchase History';
  
    
    checkoutButton.disabled = true;
    showOrderReceivedMessage();
    
  }
  
  function showOrderReceivedMessage() {
    
    var messageElement = document.createElement('p');
    messageElement.innerHTML = '<strong>Your order has been received</strong>';
    var cardElement = document.querySelector('.card');
    cardElement.insertBefore(messageElement, cardElement.firstChild);
  }
  