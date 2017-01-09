import convert from './core';

function ST(){}

ST.prototype.c=convert;

if (typeof window !== 'undefined') {
	window.ST=ST;
}

export default ST;