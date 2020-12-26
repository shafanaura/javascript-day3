const cekHariKerja = (day) => {
	/* Disini saya sedikit mengubah yang sebelumnya return new Promise menjadi const,
		agar lebih mudah memanggil Promise 
	*/
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
			let cek = dataDay.find((item) => {
				return item === day;
			});
			if (cek) {
				resolve("Hari ini kerja");
			} else {
				reject(new Error("Hari ini bukan hari kerja"));
			}
		}, 3000);
	});

	/* 
		Menggunakan then catch
		
		then method ini digunakan sebagai callback ketika value pada Promise telah di resolve.
		Jadi saya memanggil const promise, lalu menambahkan then method untuk melakukan aksi
		selanjutnya yaitu mencetak kondisi `cek`
		Apakah kondisi cek tersebut memenuhi syarat.
		Jika tidak, maka akan akan melanjutkan ke catch method
		Fungsi catch method ini untuk melakukan aksi disaat method then gagal dengan menampilkan error message 
	*/
	promise
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error.message);
		});

	/* 
		Menggunakan try catch

		Fungsi dari try catch ini hampir sama dengan method then catch, yaitu mengeksekusi sebuah kondisi terlebih dahulu.
		try berfungsi untuk melakukan sebuah tindakan yang di ambil dari method then catch diatas, lalu jika tindakan tersebut
		benar atau pun salah. Jika true, maka akan menampilkan pending -> fulfilled -> result.
		Jika false, maka akan menampilkan pending -> reject -> error.
		Jadi kedua kondisi true dan false akan sama sama menampilkan nilai pending
	*/
	try {
		const result = promise;
		console.log(result);
	} catch (error) {
		console.log(error.message);
	}
};

cekHariKerja("senin");
