// require('exports-loader?file!./bootstrap/js/dist/.js')
import { Doctor } from './doctor-lookup.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

$(document).ready(function() {
  $("#find-doctor").click(() => {
    event.preventDefault();
    let doctorLookup = new Doctor();
    let promise = doctorLookup.getDoctor();

    promise.then((response) => {
      let body = JSON.parse(response);
      let doctor = body.doctor;
      $('.find-doctor').text;
    });
  });
});
