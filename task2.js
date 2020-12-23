const getMonth = (callback) => {
	setTimeout(() => {
		let error = false;
		let month = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"December",
		];
		if (!error) {
			callback(null, month);
		} else {
			callback(new Error("Sorry Data Not Found"));
		}
	}, 4000);
};

const getData = month.map((item) => {
	return item;
});

function printResult(param) {
	console.log(param);
}

getMonth();
