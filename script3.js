
const button = document.getElementById('submitButton');
const messageElement = document.getElementById('message');

function showSubmittedMessage() {
 //
  messageElement.textContent = 'Your message is successfully Submitted!';
  button.disabled = true;
  setTimeout(() => {
    messageElement.textContent = '';
    button.disabled = false; 
  }, 3000);
}
button.addEventListener('click', showSubmittedMessage);
 