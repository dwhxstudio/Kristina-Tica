// Promenljiva u kojoj se cuva cikica
var novaiskrian;

// Promeljiva u kojoj se cuva font
var font;

// Funkcija koja se poziva jednom. U njoj se definisu osnovne stvari
function setup() {

  // Crtanje platna preko celog prostora u brauzeru
  createCanvas(window.innerWidth-15, window.innerHeight-15);

  // Ucitavanje 8-bit fonta
  font = loadFont("font/PressStart2P-Regular.ttf");

  // Kreacija sprajta
  novaiskrian = createSprite(width/2, height/2);

  // Ucitavanje razlicitih verzija animacije za trcanje levo, desno, gore i dole, kao i za stajanje u mestu
  novaiskrian.addAnimation('still', 'assets/nis01.png', 'assets/nis08.png');
  novaiskrian.addAnimation('move', 'assets/ni01.png', 'assets/ni08.png');
  novaiskrian.addAnimation('back', 'assets/nib01.png', 'assets/nib08.png');
  novaiskrian.addAnimation('right', 'assets/nir01.png', 'assets/nir08.png');
  
  // Postavljanje inicijalne animacije za stajanje u mestu
  novaiskrian.changeAnimation('still');

}

//Funkcija koja se poziva puno puta u sekundi (zavisno of framerate-a)
function draw() {

  // Postavlja se siva pozacina
  background(212);

  // Tekst
  textSize(20);
  fill(255);
  noStroke();
  textFont(font);
  textAlign(CENTER);
  text("SuperNovaIskrians", width/2, 50);

  textSize(11);
  textLeading(20);
  text("Game Animation Workshop by Uros Krcadinac\nNova Iskra, Belgrade, January 2018", width/2, height-60);

  // U svakom frejmu, osnova brzina cikice je 0
  novaiskrian.velocity.x = 0;
  novaiskrian.velocity.y = 0;

  // Brzina se menja shodno pritisnutom tasteru, kursorskoj strelici
  if (keyIsDown(LEFT_ARROW)) {
    novaiskrian.velocity.x = -5;
    novaiskrian.changeAnimation('move');
  }
    	
  if (keyIsDown(RIGHT_ARROW)) {
    novaiskrian.velocity.x = 5;
    novaiskrian.changeAnimation('right');
  }

	if (keyIsDown(UP_ARROW)) {
    novaiskrian.velocity.y = -5;
    novaiskrian.changeAnimation('back');
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    novaiskrian.velocity.y = 5;
    novaiskrian.changeAnimation('move');
  }

  // Nakon sto se taster pusti, animacija se vraca na animaciju za stajanje u mestu
  if (keyWentUp(DOWN_ARROW) || keyWentUp(UP_ARROW) || keyWentUp(LEFT_ARROW) || keyWentUp(RIGHT_ARROW)) {
    novaiskrian.changeAnimation('still');
  }

  // Na kraju se sprajtovi iscrtaju
  drawSprites();

}
