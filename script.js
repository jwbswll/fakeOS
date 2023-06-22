import {
	addPhotosClasses,
	addTexteditClasses,
	addRemindersClasses,
} from "./modules/add-classes.js";
import {
	removePhotosClasses,
	removeTexteditClasses,
	removeRemindersClasses,
} from "./modules/remove-classes.js";
import { time } from "./modules/clock-functions.js";

setInterval(time, 1000);

const menubarModals = document.querySelectorAll(".menu-bar__modal");

const menubarButtons = document.querySelectorAll(".menu-bar__btns__item");

const apple = document.querySelector("#apple");
const currentApp = document.querySelector("#currentApp");
const file = document.querySelector("#file");
const edit = document.querySelector("#edit");
const view = document.querySelector("#view");
const go = document.querySelector("#go");
const windowModal = document.querySelector("#window");
const help = document.querySelector("#help");
const overlay = document.querySelector(".overlay");

menubarButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.classList.add("menu-bar__btns__item--active");
		overlay.classList.add("overlay__active");
		if (btn.classList.contains("menu-bar__btns__item--apple-logo")) {
			apple.classList.add("menu-bar__modal__apple__active");
		} else if (btn.classList.contains("menu-bar__btns__item--current-app")) {
			currentApp.classList.add("menu-bar__modal__current-app__active");
		} else if (btn.classList.contains("menu-bar__btns__item--file")) {
			file.classList.add("menu-bar__modal__file__active");
		} else if (btn.classList.contains("menu-bar__btns__item--edit")) {
			edit.classList.add("menu-bar__modal__edit__active");
		} else if (btn.classList.contains("menu-bar__btns__item--view")) {
			view.classList.add("menu-bar__modal__view__active");
		} else if (btn.classList.contains("menu-bar__btns__item--go")) {
			go.classList.add("menu-bar__modal__go__active");
		} else if (btn.classList.contains("menu-bar__btns__item--window")) {
			windowModal.classList.add("menu-bar__modal__window__active");
		} else if (btn.classList.contains("menu-bar__btns__item--help")) {
			help.classList.add("menu-bar__modal__help__active");
		}
	});
});

overlay.addEventListener("click", () => {
	overlay.classList.remove("overlay__active");
	menubarButtons.forEach((btn) => {
		btn.classList.remove("menu-bar__btns__item--active");
	});
	menubarModals.forEach((modal) => {
		if (modal.classList.contains("menu-bar__modal__apple__active")) {
			modal.classList.remove("menu-bar__modal__apple__active");
		} else if (
			modal.classList.contains("menu-bar__modal__current-app__active")
		) {
			modal.classList.remove("menu-bar__modal__current-app__active");
		} else if (modal.classList.contains("menu-bar__modal__file__active")) {
			modal.classList.remove("menu-bar__modal__file__active");
		} else if (modal.classList.contains("menu-bar__modal__edit__active")) {
			modal.classList.remove("menu-bar__modal__edit__active");
		} else if (modal.classList.contains("menu-bar__modal__view__active")) {
			modal.classList.remove("menu-bar__modal__view__active");
		} else if (modal.classList.contains("menu-bar__modal__go__active")) {
			modal.classList.remove("menu-bar__modal__go__active");
		} else if (modal.classList.contains("menu-bar__modal__window__active")) {
			modal.classList.remove("menu-bar__modal__window__active");
		} else if (modal.classList.contains("menu-bar__modal__help__active")) {
			modal.classList.remove("menu-bar__modal__help__active");
		}
	});
});

const desktopIcons = document.querySelectorAll(".desktop__icon");
const currentAppText = document.querySelector(
	".menu-bar__btns__item--current-app"
);

desktopIcons.forEach((icon) => {
	icon.addEventListener("dblclick", () => {
		if (icon.classList.contains("photos")) {
			currentAppText.innerText = "Photos";
			addPhotosClasses();
			removeTexteditClasses();
			removeRemindersClasses();
		} else if (icon.classList.contains("textedit")) {
			currentAppText.innerText = "TextEdit";
			addTexteditClasses();
			removePhotosClasses();
			removeRemindersClasses();
		} else if (icon.classList.contains("reminders")) {
			currentAppText.innerText = "Reminders";
			addRemindersClasses();
			removePhotosClasses();
			removeTexteditClasses();
		}
	});
});

const dockIcons = document.querySelectorAll(".dock__app");

dockIcons.forEach((icon) => {
	icon.addEventListener("click", () => {
		if (icon.classList.contains("photos")) {
			currentAppText.innerText = "Photos";
			addPhotosClasses();
			removeTexteditClasses();
			removeRemindersClasses();
		} else if (icon.classList.contains("textedit")) {
			currentAppText.innerText = "TextEdit";
			addTexteditClasses();
			removePhotosClasses();
			removeRemindersClasses();
		} else if (icon.classList.contains("reminders")) {
			currentAppText.innerText = "Reminders";
			addRemindersClasses();
			removePhotosClasses();
			removeTexteditClasses();
		}
	});
});

const closeBtns = document.querySelectorAll(
	".app-modal__top-bar__btns__btn--close"
);

closeBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (btn.classList.contains("photos1")) {
			currentAppText.innerText = "Finder";
			removePhotosClasses();
			document
				.querySelector("#dotPhotos")
				.classList.remove("dock__app__dot--app-open");
		} else if (btn.classList.contains("textedit")) {
			currentAppText.innerText = "Finder";
			removeTexteditClasses();
			document
				.querySelector("#dotTextedit")
				.classList.remove("dock__app__dot--app-open");
		} else if (btn.classList.contains("reminders")) {
			currentAppText.innerText = "Finder";
			removeRemindersClasses();
			document
				.querySelector("#dotReminders")
				.classList.remove("dock__app__dot--app-open");
		}
	});
});

const reminderForm = document.querySelector("#reminderForm");

const reminderList = document.querySelector(
	".app-modal--reminders--reminder-section__list-container__reminder-list"
);

let remindersDone = document.querySelectorAll("#remindersDone");

reminderForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const reminder = document.querySelector("#reminderInput").value;
	console.log(reminder);
	if (reminder) {
		const newListItem = reminderList.appendChild(document.createElement("li"));
		newListItem.innerHTML =
			'<button class="app-modal--reminders--reminder-section__list-container__reminder-list__item__done-button" id="remindersDone"></button>' +
			reminder;
		newListItem.classList.add(
			"app-modal--reminders--reminder-section__list-container__reminder-list__item"
		);
	}
	document.querySelector("#reminderInput").value = "";
	remindersDone = document.querySelectorAll("#remindersDone");
	console.log(remindersDone);
	btnIndex++;
});

document.querySelectorAll("#remindersDone").forEach((btn) => {
	btn.addEventListener("click", (event) => {
		event.preventDefault();
		event.target.parentNode.remove();
		remindersDone = document.querySelectorAll("#remindersDone");
		console.log("btn ppress", remindersDone);
	});
});
