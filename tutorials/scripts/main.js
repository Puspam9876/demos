const theme_btn_icon = theme_btn.querySelector("i");
function lightTheme() {
	document.body.setAttribute("theme", "light");
	theme_btn_icon.classList.remove("fa-sun");
	theme_btn_icon.classList.add("fa-moon");
}
function darkTheme() {
	document.body.setAttribute("theme", "dark");
	theme_btn_icon.classList.remove("fa-moon");
	theme_btn_icon.classList.add("fa-sun");
}

function openSidebar() {
	sidebar.style.display = "block";
	sidebar.setAttribute("open", "");
}
function closeSidebar() {
	sidebar.style.display = "none";
	sidebar.removeAttribute("open");
}

contents_btn.onclick = () => {
	if (contents_container.hasAttribute("open")) contents_container.removeAttribute("open");
	else contents_container.setAttribute("open", "");
}
sidebar_btn.onclick = () => {
	if (sidebar.hasAttribute("open")) closeSidebar();
	else openSidebar();
}
theme_btn.onclick = () => {
	if (document.body.getAttribute("theme") == "dark") lightTheme();
	else darkTheme();
}

const main = document.querySelector("main");
function adjustTopSpacing() {
	main.style.setProperty("--top-spacing", info_header.offsetHeight + info_header.offsetTop - document.scrollingElement.scrollTop + "px");
}
window.onscroll = adjustTopSpacing;
window.onresize = () => {
	adjustTopSpacing();
	if (window.innerWidth <= 800) sidebar.removeAttribute("open");
	if (window.innerWidth <= 600) contents_container.removeAttribute("open");
};