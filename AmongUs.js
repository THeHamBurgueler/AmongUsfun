javascript:(function() {
  var imageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8sdVUIfR-XC2R74vJn8yAZS7d3e6WgrrJoT77noY8MA&amp;s';
  
  function openWindow() {
    var newWindow = window.open('', '_blank', 'width=600,height=400,top=' + Math.floor(Math.random() * window.screen.height) + ',left=' + Math.floor(Math.random() * window.screen.width));
    var html = '<html><head><title>Image Embed</title></head><body style="margin: 0; padding: 0;"><img src="' + imageSrc + '" alt="Fart Underwear | Women\'s Health" style="max-width: 100%; max-height: 100%; display: block; margin: auto;"></body></html>';
    newWindow.document.open();
    newWindow.document.write(html);
    newWindow.document.close();
    setTimeout(openWindow, 100); // Adjust the delay (in milliseconds) between each window opening if desired
  }
  
  openWindow();
})();
