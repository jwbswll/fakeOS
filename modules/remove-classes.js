const removePhotosClasses = () => {
	document
		.querySelector(".app-modal__photos")
		.classList.remove("app-modal__active");
	document
		.querySelector(".app-modal__top-bar--photos")
		.classList.remove("app-modal__top-bar--photos--active");
	document
		.querySelector(".app-modal--photos")
		.classList.remove("app-modal--photos--active");
};

const removeTexteditClasses = () => {
	document
		.querySelector(".app-modal__textedit")
		.classList.remove("app-modal__active");
	document
		.querySelector(".app-modal__top-bar__textedit")
		.classList.remove("app-modal__top-bar__textedit--active");
};

const removeRemindersClasses = () => {
	document
		.querySelector(".app-modal__reminders")
		.classList.remove("app-modal__active");
};

export { removePhotosClasses, removeTexteditClasses, removeRemindersClasses };
