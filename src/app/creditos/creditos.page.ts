import { Component, NgModule, OnInit } from '@angular/core'
import * as $ from "jquery";

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],
})
export class CreditosPageModule {}
export class CreditosPage implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

      $('a[name=creditos]').click(function (e) {
          e.preventDefault();
          
          var maskHeight = $(document).height();
          var maskWidth = $(window).width();
  
          $('#titles').css({
              'width': maskWidth,
              'height': maskHeight
          });
  
          $('#titles').fadeIn(1000);
          $('#titles').fadeTo("slow", 0.33);
          $('#titles').fadeIn();
          $('#credits').css("left", (($('#credits').parent().width() - $('#credits').outerWidth()) / 2) + "px");
          $('#credits').css("bottom", "-" + (maskHeight * 2) + "px");
          $('#credits').show('slow');
  
          $('#credits').animate({
              bottom: maskHeight + "px"
          }, {
              duration: 30000,
              complete: function () {
                  $('#titles').fadeOut();
                  $('.window').fadeOut();
                  $('#credits').css("bottom", "-" + (maskHeight * 2) + "px");
              },
              step: function (n, t) {
                  var pos = $(this).position();
                  console.log('X: ' + pos.left.toFixed(2) + ' Y: ' + pos.top.toFixed(2));
              }
          });
  
      });
  
      $('.window .close').click(function (e) {
          e.preventDefault();
          $('#credits').css("bottom", "-" + ($(document).height() * 2) + "px");
          $('#titles').hide();
          $('.window').hide();
      });
  
      $('#titles').click(function () {
          $(this).hide();
          $('#credits').css("bottom", "-" + ($(document).height() * 2) + "px");
          $('.window').hide();
      });
  });
  }

}
