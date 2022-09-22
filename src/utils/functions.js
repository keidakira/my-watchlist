const functions = {
	formatDate: (date_string) => {
		let date_obj = new Date(date_string);

		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};

		return date_obj.toLocaleDateString("en-US", options);
	},
	generateYoutubeLink: (key) => {
		let baseUrl = "https://youtube.com/watch?v=";

		baseUrl += key;

		return baseUrl;
	},
	compareDates: (date_one, date_two) => {
		// Checks if date_one > date_two

		let d1 = new Date(date_one).getTime();
		let d2 = new Date(date_two).getTime();

		return d1 > d2;
	},
	objectEmpty: (obj) => {
		return Object.keys(obj) == 0;
	},
};

export default functions;
