const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
			let cek = dataDay.find((item) => {
				return item === day;
			});
			if (cek) {
				resolve(cek);
			} else {
				reject(new Error("Hari ini bukan hari kerja"));
			}
		}, 3000);
	});
};

// callback with promise
function firstData(dataDay) {
	const req = new Promise(cekHariKerja);
	req
		.then((result) => {
			dataDay(result[0]);
		})
		.catch((err) => {
			throw err;
		});
}

// then/catch
const requestData = new Promise(cekHariKerja);

requestData
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		throw error;
	});

// async/await
async function getData() {
	try {
		const result = await requestData;
		console.log(result);
	} catch (error) {
		throw error;
	} finally {
		console.log("function has been executed");
	}
}

cekHariKerja("selasa");
