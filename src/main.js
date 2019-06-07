// require('exports-loader?file!./bootstrap/js/dist/.js')
import { Doctor } from './doctor-lookup.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

$(document).ready(function() {
  $("#doctor-name").click(() => {
    event.preventDefault();
    let doctor = $("#input-doctor-name").val();
    let doctorLookup = new Doctor();
    let promise = doctorLookup.getDoctor(doctor);


    promise.then((response) => {
      let body = JSON.parse(response);
      for(i = 0; i < body.data.length; i++) {
        console.log(body.data[i].profile.first_name + ' ' + body.data[i].profile.last_name);

      }
      console.log(body.data);
      // let doctor = body.doctor;
      // $('.find-doctor').text;
    });
  });
});
