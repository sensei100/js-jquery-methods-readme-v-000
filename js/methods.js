'use strict';

function fancySchmancy() {
   return $("#bacon").addClass("iAmFancy");
}

function addText(string) {
  return $("p:last").append(string);
}

function showDolphin() {
  $("#hidden").show();
}

function hideImage() {
  $("img:last").hide();
}

function fadeIt() {
  $("#favorite-snacks").fadeIn(3000);
}

function fadeItOut() {
  $("p:last").fadeOut(0);
}

function findItByClass(string) {
  return $(string).hasClass("flatironLink");
}

function formValue() {
  return $("input:last").val();
}