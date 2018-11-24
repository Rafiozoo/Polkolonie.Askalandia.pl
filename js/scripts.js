
// https://codepen.io/Rafiozoo/pen/LXVpLJ?editors=0010
document.addEventListener("DOMContentLoaded", function() {

let myLabels = document.querySelectorAll(".lbl-toggle");
let lazyloadImages = document.querySelectorAll("img.lazy");

function loadLazyImages() {
	lazyloadImages.forEach(function(img) {
		img.src = img.dataset.src;
		img.classList.remove("lazy");
	});
}
Array.from(myLabels).forEach(label => {
	label.addEventListener("keydown", e => {
		// 32 === spacebar
		// 13 === enter
		if (e.which === 32 || e.which === 13) {
			e.preventDefault();
			label.click();
		}
	});
});
// Check the screen size and do
function setCheckbox(myMediaQuery) {
	let moreBtn = document.getElementById("more-images");
	if (myMediaQuery.matches) { // If media query matches
		moreBtn.checked = true;
		loadLazyImages();
	} else {
		moreBtn.checked = false;
		moreBtn.addEventListener("keydown", function(e) {
				if (e.keyCode === 32 || e.keyCode === 13) {
					loadLazyImages();
				}
			});
		document.getElementById("more-images").addEventListener("click", function(e) {
			loadLazyImages();
		});
	}
}

let myMediaQuery = window.matchMedia("(min-width: 1280px)");
setCheckbox(myMediaQuery); // Call listener function at run time
myMediaQuery.addListener(setCheckbox); // Attach listener function on state changes
});