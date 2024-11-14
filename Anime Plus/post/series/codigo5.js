
var numposts = 10000;

function showrecentposts(json) {
  document.write('<div class="episodes-container" style="display: flex; flex-direction: column; gap: 20px;">');
  let currentSeason = null; // Temporada actual
  let seasonOptions = []; // Para almacenar las opciones del select
  
  // Primero, recorreremos todos los posts para identificar todas las temporadas
  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    if (i === json.feed.entry.length) break;

    var posttitle = entry.title.$t;

    // Verificar si el título contiene una referencia de temporada (Ej: "1x1", "2x1", etc.)
    var seasonMatch = posttitle.match(/^.*?(\d+)x\d+/);
    if (seasonMatch) {
      var seasonNumber = seasonMatch[1];

      // Si la temporada no ha sido registrada, la agregamos a las opciones del select
      if (!seasonOptions.includes(seasonNumber)) {
        seasonOptions.push(seasonNumber);
      }
    }
  }

  // Mostrar el select con todas las temporadas
  document.write('<div style="margin-top: 20px;">');
  document.write('<label for="season-select">Selecciona una temporada: </label>');
  document.write('<select id="season-select" onchange="filterBySeason()">');
  seasonOptions.forEach(function(season) {
    document.write(`<option value="${season}">Temporada ${season}</option>`);
  });
  document.write('</select>');
  document.write('</div>');

  // Ahora, recorreremos nuevamente los posts para generar los episodios organizados por temporada
  currentSeason = null; // Resetear la temporada actual

  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    if (i === json.feed.entry.length) break;

    var posttitle = entry.title.$t;
    var posturl;
    var postimage = '';

    // Extrae la URL de la imagen
    if ("media$thumbnail" in entry) {
      postimage = entry.media$thumbnail.url.replace('s72-c', 's1600');
    } else {
      postimage = 'https://via.placeholder.com/150x200?text=Sin+Imagen'; // Imagen predeterminada
    }

    // Extrae la URL del post
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel === 'alternate') {
        posturl = entry.link[k].href;
        break;
      }
    }

    // Verificar si el título contiene una referencia de temporada (Ej: "1x1", "2x1", etc.)
    var seasonMatch = posttitle.match(/^.*?(\d+)x\d+/);
    if (seasonMatch) {
      var seasonNumber = seasonMatch[1];

      // Si se detecta un nuevo número de temporada, actualiza y muestra el encabezado de temporada
      if (currentSeason !== seasonNumber) {
        currentSeason = seasonNumber;

        // Agregar el encabezado de temporada en un contenedor separado y un contenedor para episodios de la temporada
        document.write(`
          <div style="width: 100%; margin-top: 20px;" class="season-title" id="title-season-${currentSeason}">
            <h3>Temporada ${currentSeason}</h3>
          </div>
          <div class="season-episodes" id="season-${currentSeason}" style="display: grid; gap: 10px; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));">
        `);
      }
    }

    // Genera el HTML de cada episodio con imagen, título y botón de reproducción SVG
    document.write(`
      <div class="episode" style="flex: 0 1 150px; display: flex; flex-direction: column; align-items: center;">
        <a href="${posturl}">
          <div class="image-wrapper">
            <img src="${postimage}" alt="${posttitle}" class="episode-image">
            <div class="overlay">
              <div class="play-button">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003" xml:space="preserve" width="45px" height="45px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 17854.87 19160.04">
 <defs>
 </defs>
 <g fill='#fff' id="Capa_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path class="fil0" d="M2479.19 18708.68c-1206.91,-1222.95 -615.01,-10475.67 -616.35,-13186.62 -3.27,-6673.99 5270.94,-2380.96 7925.71,-827.05 2380.07,1393.23 5988.37,2859.29 6227.39,4562.59 167.67,1194.35 -404.23,1849.11 -1208.62,2380.66 -1353.84,894.69 -8222.17,4957.09 -9202.33,5095.55l-31.36 -9915.67c718.55,86.73 3807.41,1743.29 4441.9,2276.02 738.01,619.47 703.31,665.1 51.88,1011.58 -1047.78,557.57 -2739.78,1503.08 -3343.87,2060.27l-1.26 1644.07c807.43,-69.34 4029.92,-1999.47 5626.05,-3098.47 1329.17,-915.34 862.95,-1809.58 -438.05,-2621.24 -623.11,-388.85 -1504.78,-802.37 -2705.22,-1493.27 -916.01,-527.16 -3871.25,-2799.84 -4866.42,-1763.86 -552.88,487.17 -694.31,1684.64 -689.33,2994.03 12.71,3347.59 -33.44,8212.67 299.22,11332.76 2087.46,-28.69 9946.43,-4830.53 11960.02,-6157.61 663.17,-437.08 1214.93,-1059.59 1559.57,-1778.81 600.81,-1253.73 572.42,-2801.17 -592.05,-4170.99 -714.3,-840.42 -10229.53,-6368.45 -11302.8,-6771.27 -2726.4,-1023.26 -5114.65,904.19 -5428.88,3207.78 -297.66,2182.08 -42.67,6454.3 -43.48,8855.17 -0.97,2922.62 -80.42,5760.2 2378.28,6364.36z"/>
 </g>
</svg>
              </div>
            </div>
          </div>
          <p class="episode-title">${posttitle}</p>
        </a>
      </div>
    `);

    // Cierra el contenedor de episodios de la temporada al finalizar la última entrada
    if (i === json.feed.entry.length - 1 || (json.feed.entry[i + 1] && json.feed.entry[i + 1].title.$t.match(/^.*?(\d+)x\d+/)[1] !== seasonNumber)) {
      document.write('</div>'); // Cierra el div "season-episodes"
    }
  }
  document.write('</div>'); // Cierra el div "episodes-container"
  document.write('<button class="show-more">Ver más</button>');
}

// Función para filtrar por temporada cuando se selecciona una opción en el menú desplegable
function filterBySeason() {
  var selectedSeason = document.getElementById('season-select').value;
  var allSeasons = document.querySelectorAll('.season-episodes');
  var allTitles = document.querySelectorAll('.season-title');
  
  allSeasons.forEach(function(season) {
    if (season.id === 'season-' + selectedSeason) {
      season.style.display = 'flex';  // Mostrar la temporada seleccionada
    } else {
      season.style.display = 'none';  // Ocultar otras temporadas
    }
  });

  allTitles.forEach(function(title) {
    if (title.id === 'title-season-' + selectedSeason) {
      title.style.display = 'block';  // Mostrar el título de la temporada seleccionada
    } else {
      title.style.display = 'none';  // Ocultar otros títulos de temporadas
    }
  });
}
