'use strict';

// Selecting elements
//Buttons
const btnNewWord = document.querySelector('.btn-new');
const btnCheck = document.querySelector('.btn-check');
const btnReset = document.querySelector('.btn-reset');

//Input fields
const translationField = document.querySelector('.word').textContent;
const infinitiveField = Text(document.querySelector('.infinite').textContent);
const pastSimpleField = Text(document.querySelector('.past-sim').textContent);
const pastParticipleField = Text(
  document.querySelector('.past-parti').textContent
);

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
  //   translationField = '';
  correctAnsw.textContent = 0;
  //   wrongAnsw = 0;
};
initialization();
