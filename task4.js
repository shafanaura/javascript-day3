const fetch = require("node-fetch");

const getData = async () => {
	const data = await fetch("https://jsonplaceholder.typicode.com/users");
	console.log(await data.json());
};

getData();
