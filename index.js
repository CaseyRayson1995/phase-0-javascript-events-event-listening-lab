//binds an event listener in addingEventListener() code below

function addingEventListener() {
    
    const input = document.getElementById('button');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);

}
  
// this code gives you the alert when you click the button on the page
const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
