import $ from 'jquery';

export class Doctor {
	getDoctor() {
		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			let url = `https://developer.betterdoctor.com/`;
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