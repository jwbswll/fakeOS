const addPhotosClasses = () => {
	document
		.querySelector(".app-modal__photos")
		.classList.add("app-modal__active");
	document
		.querySelector(".app-modal__top-bar--photos")
		.classList.add("app-modal__top-bar--photos--active");
	document
		.querySelector(".app-modal--photos")
		.classList.add("app-modal--photos--active");
	document
		.querySelector("#dotPhotos")
		.classList.add("dock__app__dot--app-open");
};

const addTexteditClasses = () => {
	document
		.querySelector(".app-modal__textedit")
		.classList.add("app-modal__active");
	document
		.querySelector(".app-modal__top-bar__textedit")
		.classList.add("app-modal__top-bar__textedit--active");
	document
		.querySelector("#dotTextedit")
		.classList.add("dock__app__dot--app-open");
};

const addRemindersClasses = () => {
	document
		.querySelector(".app-modal__reminders")
		.classList.add("app-modal__active");
	document
		.querySelector("#dotReminders")
		.classList.add("dock__app__dot--app-open");
};

export { addPhotosClasses, addTexteditClasses, addRemindersClasses };
