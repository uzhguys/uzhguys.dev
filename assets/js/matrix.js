window.onload = function() {
  // Initialising the canvas
  var canvas = document.querySelector('canvas#matrix'),
      ctx = canvas.getContext('2d');

  // Initialising the image pattern
  var img = new Image();
  img.src = 'assets/images/bkg.png';
  var pattern = ctx.createPattern(img, 'repeat');

  // Setting the width and height of the canvas
  canvas.width = window.innerWidth;
  canvas.height = document.getElementsByTagName('header')[0].offsetHeight / 2;

  // Setting up the letters
  var letters = 'uzhguys';
  letters = letters.split('');

  // Setting up the columns
  var fontSize = canvas.height / 10,
      columns = canvas.width / fontSize;
  ctx.font = `${fontSize}px sans-serif`;

  // Setting up the drops
  var drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // Setting up the draw function
  function draw() {
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < drops.length; i++) {
      var text = letters[~~(Math.random() * letters.length)];
      ctx.fillStyle = `rgba(181, 232, 83, ${~~((Math.random() * 3) + 2) / 10})`;
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
  }

  // Loop the animation
  setInterval(draw, canvas.height);
};
