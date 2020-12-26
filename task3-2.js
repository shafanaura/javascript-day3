const billieSong = (song) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			const billieDataSong = [
				"ocean eyes",
				"everything i wanted",
				"my future",
				"bad guy",
				"therefore i am",
			];
			let check = billieDataSong.find((item) => {
				return item === song;
			});
			if (check) {
				resolve("It's Billie Eilish Song");
			} else {
				reject(new Error("It's not Billie Eilish Song"));
			}
		}, 2000);
	});

	promise
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error.message);
		});

	try {
		const result = promise;
		console.log(result);
	} catch (error) {
		console.log(error.message);
	}
};

billieSong("bad guy");
