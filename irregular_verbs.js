'use strict';

// Selecting elements
//Buttons
const btnNewWord = document.querySelector('.btn-new');
const btnCheck = document.querySelector('.btn-check');
const btnReset = document.querySelector('.btn-reset');

//Input fields
const translationField = document.querySelector('.word');
const infinitiveField = document.querySelector('.infinite');
const pastSimpleField = document.querySelector('.past-sim');
const pastParticipleField = document.querySelector('.past-parti');
//Scores
const correctAnsw = document.querySelector('.correct-src');
const wrongAnsw = document.querySelector('.wrong-src');

//Datas
const translationWords = [
  'być',
  'bić',
  'urodzić się',
  'zostawać',
  'zaczynać',
  'łamać/psuć się',
  'przynosić',
  'budować',
  'kupować',
  'łapać',
];

const infinitiveWords = [
  'be',
  'beat',
  'be born',
  'become',
  'begin',
  'break',
  'bring',
  'build',
  'buy',
  'catch',
];

const pastSimpleWords = [
  'was/were',
  'beat',
  'was/were born',
  'became',
  'began',
  'broke',
  'brought',
  'built',
  'bought',
  'caught',
];

const pastParticipleWords = [
  'been',
  'beaten',
  'have/has been born',
  'become',
  'begun',
  'broken',
  'brought',
  'built',
  'bought',
  'caught',
];

//Reset values
const initialization = function () {
  translationField.textContent = '';
  correctAnsw.textContent = 0;
  wrongAnsw.textContent = 0;

  document.querySelector('.infinite').style.backgroundColor = '#a3c0ff';
  document.querySelector('.past-sim').style.backgroundColor = '#a3c0ff';
  document.querySelector('.past-parti').style.backgroundColor = '#a3c0ff';
};
initialization();
