import $ from 'jquery';

export class Doctor {
	getDoctor(value, category) {
		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			let url = `https://api.betterdoctor.com/2016-03-01/doctors?${category}=${value}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
			console.log(url);
			request.onload = function() {
				if(this.status === 200) {
					resolve(request.response);
				} else {
					reject(Error(request.statusText));
				}
			}
			request.open("GET", url, true);
			request.send();
		});
	}
}
