function initMap() {
    const loc = { lat: 32.7765, lng: -79.9311 };
    
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
    
    const marker = new google.maps.Marker({ position: loc, map: map });
  }

  $('#navbar a, .btn').on('click', (e) => {
    if(this.hash !== ''){
      e.preventDefault();

      const hash = this.hash

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 800);
    };
  });