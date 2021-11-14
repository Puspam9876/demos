const header = document.querySelector("header"),
	footer = document.querySelector("footer");

window.onscroll = () => {
	let current_scroll_pos = document.scrollingElement.scrollTop;
	if (current_scroll_pos == 0) header.classList.remove("collapsed");
	else header.classList.add("collapsed");

	if (current_scroll_pos != 0) go_to_top_btn.classList.remove("hidden");
	else go_to_top_btn.classList.add("hidden");
};

menu_btn.onclick = () => {
	if (overflow_menu.hasAttribute("open")) {
		menu_btn.classList.remove("fa-times");
		menu_btn.classList.add("fa-bars");
		overflow_menu.style.pointerEvents = "none";
		overflow_menu.animate({ opacity: [1, 0] }, { duration: 500, fill: "forwards" });
		overflow_menu.removeAttribute("open");
	} else {
		menu_btn.classList.remove("fa-bars");
		menu_btn.classList.add("fa-times");
		overflow_menu.style.pointerEvents = "all";
		overflow_menu.animate({ opacity: [0, 1] }, { duration: 500, fill: "forwards" });
		overflow_menu.setAttribute("open", "");
	}
};

const res_observer = new ResizeObserver(moveNavs);
res_observer.observe(header_nav);
function moveNavs() {
	while (header_nav.offsetWidth < contentWidth(header_nav)) {
		header_nav.lastElementChild.setAttribute("original-width", header_nav.lastElementChild.offsetWidth);
		overflow_nav.insertBefore(header_nav.lastElementChild, overflow_nav.firstElementChild);
	}
	if (overflow_nav.children.length == 0) {
		menu_btn.style.display = "none";
	} else {
		menu_btn.style.display = "initial";
		while (overflow_nav.firstElementChild.getAttribute("original-width") <= header_nav.offsetWidth - contentWidth(header_nav)) {
			header_nav.appendChild(overflow_nav.firstElementChild);
		}
	}
}
function contentWidth(element) {
	let total = 0;
	for (let child of element.children) total += child.offsetWidth;
	return total;
}