const favoriFilmler = [];
let devam = true;

while (devam) {
  const film = prompt("Bir favori filminizi giriniz (Bittiğinde 'Tamam' yazınız):");
  if (film.toLowerCase() === "tamam") {
    devam = false;
  } else {
    favoriFilmler.push(film);
  }
}

favoriFilmler.sort();

console.log("Favori Filmleriniz (Alfabetik Sırada):");
favoriFilmler.forEach(film => console.log(film));
