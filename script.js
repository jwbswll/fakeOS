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
