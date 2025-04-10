hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".menu_container");
    navBar.classList.toggle("active");
}

  function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    document.getElementById('datetime').innerText = now.toLocaleString('en-US', options);
  }

  // Initial call
  updateDateTime();
  
  // Update every second
  setInterval(updateDateTime, 1000);

