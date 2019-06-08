// require('exports-loader?file!./bootstrap/js/dist/.js')
import { Doctor } from './doctor-lookup.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#name").click(() => {
    $("#show-doctors").empty();
    event.preventDefault();
    let doctor = $(".input").val();
    console.log("doctor", doctor);
    let doctorLookup = new Doctor();
    let promise = doctorLookup.getDoctor(doctor, $("#name").attr(`id`));
    console.log("this", $(this));

    promise.then((response) => {
      let body = JSON.parse(response);
      if(body.data.length === 0) {
        $('#show-doctors').append("No doctors match your search.");
      }
      for(let i = 0; i < body.data.length; i++) {
        $("#show-doctors").append(body.data[i].profile.first_name + ' ' + body.data[i].profile.last_name + ', ' + body.data[i].profile.title + '. ' + 'Accepts New Patients?: ' + body.data[i].practices[0].accepts_new_patients + '. ' + body.data[i].practices[0].phones[0].number + '. ' + body.data[i].practices[0].visit_address.street + '. ' + '<br>');
      }
    },(error) => {
      $(".error").show();
      $('#show-doctors').append(`<p>There was an error processing your request: ${error.message}</p>`);
    }
  );
  });

  $("#query").click(() => {
    $("#show-doctors").empty();
    event.preventDefault();
    let doctor = $(".query").val();
    console.log("doctor", doctor);
    let doctorLookup = new Doctor();
    let promise = doctorLookup.getDoctor(doctor, $("#query").attr(`id`));
    console.log("this", $(this));

    promise.then((response) => {
      let body = JSON.parse(response);
      if(body.data.length === 0) {
        $('#show-doctors').append("No doctors match your search.");
      }
      for(let i = 0; i < body.data.length; i++) {
        $("#show-doctors").append(body.data[i].profile.first_name + ' ' + body.data[i].profile.last_name + ', ' + body.data[i].profile.title + '. ' + 'Accepts New Patients?: ' + body.data[i].practices[0].accepts_new_patients + '. ' + body.data[i].practices[0].phones[0].number + '. ' + body.data[i].practices[0].visit_address.street + '. ' + '<br>');
      }
    }, (error) => {
      $(".error").show();
      $('#show-doctors').append(`<p>There was an error processing your request: ${error.message}</p>`);
    });
  });
});
