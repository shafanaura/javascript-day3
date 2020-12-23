const fetch = require("node-fetch");

const getData = async () => {
	fetch(`https://jsonplaceholder.typicode.com/users`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.map((person) => {
				console.log(person.name);
			});
		});
};

getData();
