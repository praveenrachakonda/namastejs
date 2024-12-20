console.log(a); //a is undefined cause js engine already created a memory for the a in Global exec context

var a = 10;
console.log(a);


a = 'js is loosly typed lang';

console.log(a); // a has been updated from num to string with out issue

a = undefined// never do this. undefined is a reserved key word- we cant do this