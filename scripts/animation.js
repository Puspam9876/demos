const anim_dur = 500;
const anim_delay = 500;

const int_observer = new IntersectionObserver(checkIntersection, { threshold: .5 });
int_observer.observe(banner);
int_observer.observe(languages);
int_observer.observe(statistics);
int_observer.observe(user_reviews);

function checkIntersection(entries) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) return;
		entry.target.enter();
		int_observer.unobserve(entry.target);
	});
}

function animateValue(element) {
	var current = 0;
	var end = parseInt(element.getAttribute("data-value"));
	var step_time = Math.floor(1000 / end);
	var timer = setInterval(function () {
		current++;
		element.innerHTML = current;
		if (current == end) clearInterval(timer);
	}, step_time);
}

const heading_animation = { transform: ["translateY(100px)", "translateY(0)"], opacity: [0, 1] };
const item_animation = { transform: ["translateX(150px)", "translateX(0)"], opacity: [0, 1] };

banner.enter = function () {
	banner_text.animate(item_animation, { duration: anim_dur, fill: "forwards" });
	banner_text.nextElementSibling.animate(heading_animation, { duration: anim_dur, fill: "forwards", delay: anim_delay });
}
languages.enter = function () {
	languages.querySelector(".section-heading").animate(heading_animation, { duration: anim_dur, fill: "forwards" });
	for (let i = 0; i < language_list.children.length; i++) {
		language_list.children[i].animate(item_animation, { duration: anim_dur, fill: "forwards", delay: i * anim_dur + anim_delay });
	}
}
statistics.enter = function () {
	statistics.querySelector(".section-heading").animate(heading_animation, { duration: anim_dur, fill: "forwards" });
	for (let i = 0; i < statistics_list.children.length; i++) {
		let stat_value = statistics_list.children[i].querySelector(".stat-value");
		stat_value.style.opacity = 1;
		statistics_list.children[i].animate(item_animation, { duration: anim_dur, fill: "forwards", delay: i * anim_dur + anim_delay })
			.onfinish = () => animateValue(stat_value);
	}
}
user_reviews.enter = function () {
	user_reviews.querySelector(".section-heading").animate(heading_animation, { duration: anim_dur, fill: "forwards" });
	for (let i = 0; i < user_review_list.children.length; i++) {
		user_review_list.children[i].animate(item_animation, { duration: anim_dur, fill: "forwards", delay: i * anim_dur + anim_delay });
	}
}