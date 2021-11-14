//Hide the preloader
let preloader_anim = preloader.animate({ opacity: [1, 0] }, { duration: 500, fill: "forwards" });
preloader_anim.onfinish = () => {
	preloader.remove();
	root.style.display = "block";
	root.animate({ opacity: [0, 1] }, { duration: 500, fill: "forwards" });
	document.body.style.overflowY = "auto";
};