function addingEventListener() {
    //*binds an event listener in addingEventListener() code below
    const input = document.getElementById('button');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);

}
  

