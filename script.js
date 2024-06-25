// Inicializa o mapa sem definir a posição inicial
var map = L.map('map');

// Adiciona um tile layer ao mapa (usando OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Dados dos pontos (coordenadas, URL da imagem e descrição)
var points = [
    [-5.150087, -37.358615, 'url_da_imagem1.jpg', 'JM Menino Jesús - Santa Delmira'],
    [-5.148182, -37.363271, 'url_da_imagem2.jpg', 'JM Abdias - Promorar'],
    [-5.139341, -37.361784, 'url_da_imagem3.jpg', 'JM Santa Catarina de Sena - Promorar'],
    [-4.961818, -37.407299, 'url_da_imagem4.jpg', 'JM Pomar - Maísa'],
    [-4.953124, -37.455567, 'url_da_imagem5.jpg', 'JM JUC Apodí Apama - Maísa'],
    [-5.139125, -37.366714, 'url_da_imagem6.jpg', 'JM Santo Agostinho - Abolição'],
    [-6.111673, -38.204866, 'url_da_imagem7.jpg', 'JM Frei Galvão - Pau dos Ferros'],
    [-5.795890, -37.559491, 'url_da_imagem8.jpg', 'JM Caraúbas - Caraúbas'],
];

// Função para criar marcadores e popups
function addMarker(lat, lng, imageUrl, description) {
    var marker = L.marker([lat, lng]).addTo(map);
    var popupContent = '<div>' +
                       '<img src="' + imageUrl + '" alt="Imagem de Mossoró"><br>' +
                       '<p>' + description + '</p>' +
                       '</div>';
    marker.bindPopup(popupContent);
}

// Cria uma camada de grupo para todos os pontos
var markers = L.featureGroup();

// Adiciona todos os pontos ao mapa
points.forEach(function(point) {
    var marker = L.marker([point[0], point[1]]).addTo(markers);
    var popupContent = '<div>' +
                       '<img src="' + point[2] + '" alt="Imagem de Mossoró"><br>' +
                       '<p>' + point[3] + '</p>' +
                       '</div>';
    marker.bindPopup(popupContent);
});

// Adiciona a camada de grupo ao mapa
markers.addTo(map);

// Ajusta o zoom do mapa para mostrar todos os pontos
map.fitBounds(markers.getBounds());
