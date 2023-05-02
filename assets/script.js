
const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let currentSlideIndex = 0; // Déclaration de la variable currentSildeIndex initialisée à 0: index du premier slide.

// Accès aux éléments du DOM 
const bannerImage = document.querySelector('.banner-img');
const tagLineImage = document.querySelector('.banner-tagline');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots')

// Création fonction pour afficher les images et les taglines correspondant à l'index en cours.
// Création de "dots" en fonction du nombre d'images dans le tableau càd en fonction de la longueur du tableau. 
function showSlide(index) {
	const slide = slides[index];
	bannerImage.setAttribute('src', slide.image); // Actualisation de la source de l'image
	tagLineImage.innerHTML = slide.tagLine; // Actualisation de la tagline
	dotsContainer.innerHTML = ''; // Remise à zéro de notre container avec la class "dots".

	for (let index = 0; index < slides.length; index++) {
		// On crée un nouvel élément div 
		const dotElement = document.createElement('div');

		// Ajout de la classe "dot" à l'élément div
		dotElement.classList.add('dot');

		// Ajout d'un "id" unique à l'élément div
		dotElement.id = `dot-${index + 1}`;

		// Ajout de l'élément div au conteneur parent
		dotsContainer.appendChild(dotElement);

		if (index === currentSlideIndex) {
			dotElement.classList.add('dot_selected')
		}
	}
}
showSlide(currentSlideIndex);

arrowLeft.addEventListener('click', () => {
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length - 1;
	}
	showSlide(currentSlideIndex);
});

arrowRight.addEventListener('click', () => {
	currentSlideIndex++;
	if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0;
	}
	showSlide(currentSlideIndex);
});


