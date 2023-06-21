const updateTime = () => {
	setInterval("time()", 1000);
};

const time = () => {
	let date = new Date();
	let day = () => {
		switch (date.getDay()) {
			case 0:
				return "Sun";
				break;
			case 1:
				return "Mon";
				break;
			case 2:
				return "Tues";
				break;
			case 3:
				return "Wed";
				break;
			case 4:
				return "Thurs";
				break;
			case 5:
				return "Fri";
				break;
			case 6:
				return "Sat";
				break;
		}
	};
	let month = () => {
		switch (date.getMonth()) {
			case 0:
				return "Jan";
				break;
			case 1:
				return "Feb";
				break;
			case 2:
				return "Mar";
				break;
			case 3:
				return "Apr";
				break;
			case 4:
				return "May";
				break;
			case 5:
				return "Jun";
				break;
			case 6:
				return "Jul";
				break;
			case 7:
				return "Aug";
				break;
			case 8:
				return "Sep";
				break;
			case 9:
				return "Oct";
				break;
			case 10:
				return "Nov";
				break;
			case 11:
				return "Dec";
				break;
		}
	};
	const minutes = () => {
		const minute = date.getMinutes();
		if (parseInt(minute) < 10) {
			return "0" + minute;
		} else {
			return minute;
		}
	};

	const hours = () => {
		const hour = date.getHours();
		if (parseInt(hour) < 10) {
			return "0" + hour;
		} else {
			return hour;
		}
	};

	let dayOfMonth = date.getUTCDate();

	let currentDateTime = `${day()} ${dayOfMonth} ${month()} ${hours()}:${minutes()}`;
	let clockSpan = document.getElementById("clock");
	clockSpan.innerHTML = currentDateTime;
};

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

const appModals = document.querySelectorAll(".app-modal");
const desktopIcons = document.querySelectorAll(".desktop__icon");

console.log(appModals);
console.log(desktopIcons);

desktopIcons.forEach((icon) => {
	icon.addEventListener("dblclick", () => {
		if (icon.classList.contains("photos")) {
			document
				.querySelector(".app-modal__photos")
				.classList.add("app-modal__active");
			document
				.querySelector(".app-modal__top-bar--photos")
				.classList.add("app-modal__top-bar--photos--active");
			document
				.querySelector(".app-modal--photos")
				.classList.add("app-modal--photos--active");
		} else if (icon.classList.contains("textedit")) {
			document
				.querySelector(".app-modal__textedit")
				.classList.add("app-modal__active");
			document
				.querySelector(".app-modal__top-bar__textedit")
				.classList.add("app-modal__top-bar__textedit--active");
		}
	});
});
