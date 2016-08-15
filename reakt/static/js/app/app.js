'use strict';

$(function() {
	// console.log('hello, world!');

	// var mySpan = React.createElement('span', {
	// 	style: { fontFamily: 'sans-serif' }}, 'hello React world');
	// var myDiv = React.createElement('div', {
	// 	className: 'my-div' }, mySpan);

	// ReactDOM.render(myDiv,
	// 	document.querySelector('body'));

	var div = React.createElement('div', {
		height: 300,
		width: 300
	}, [React.createElement('path', {
		'd': 'M0,0V300H300',
		style: { fill: 'none', stroke: '#222' }
	}), ])
});