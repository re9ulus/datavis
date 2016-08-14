'use strict';

$(function() {
	console.log('hello, world!');

	var mySpan = React.createElement('span', {
		style: { fontFamily: 'sans-serif' }}, 'hello React world');
	var myDiv = React.createElement('div', {
		className: 'my-div' }, mySpan);

	ReactDOM.render(myDiv,
		document.querySelector('body'));
});