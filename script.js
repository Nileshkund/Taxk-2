// function proceedToNextPage() {
   
//     var checkoutButton = document.querySelector('.checkout-button');
//     checkoutButton.innerHTML = 'Purchase History';
  
    
//     checkoutButton.disabled = true;
//     showOrderReceivedMessage();
    
//   }
  
//   function showOrderReceivedMessage() {
    
//     var messageElement = document.createElement('p');
//     messageElement.innerHTML = '<strong>Your order has been received</strong>';
//     var cardElement = document.querySelector('.card');
//     cardElement.insertBefore(messageElement, cardElement.firstChild);
//   }
  
function proceedToNextPage() {
  var checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.innerHTML = 'Purchase History';
  checkoutButton.disabled = true;
  showOrderReceivedMessage();

  // Change the color of other buttons with animations
  changeButtonColor('shoppingCart', 'white'); // white color
  changeButtonColor('checkoutDetails', '#3498db'); // Blue color
  changeButtonColor('orderComplete', '#2ecc71'); // Green color

  // Add functionality to navigate to the next page if needed
  // For example, redirect to the purchase history page
  // window.location.href = 'purchase_history.html';
}

function changeButtonColor(buttonId, color) {
  var button = document.getElementById(buttonId);
  button.style.backgroundColor = color;
  button.classList.add('color-change-animation');
}

function showOrderReceivedMessage() {
  var messageElement = document.createElement('p');
  messageElement.innerHTML = '<strong>Your order has been received</strong>';

  var cardElement = document.querySelector('.card');
  cardElement.insertBefore(messageElement, cardElement.firstChild);
}
