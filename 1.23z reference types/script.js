// 3 referece type
// Array
// function
// objects

/*





*/

x = 10;
y = x;
x = 20;
console.log(x, y);                //20,10


//in object
x = { value: 10 };
y = x.value;
x.value = 20;
console.log(x, y);                //20,20
// this is because in reference type is also 20. So this is the takeaway. When we use an object, that object is not stored in this variable.
// That object is stored somewhere else in the memory, and the address of that memory location is stored inside that memory variable.
// So then when we copy x into y, it's the address or the reference that is copied. In other
// words, both x and y are pointing to the same,object in memory. And when we modify each object using x, or y, our changes are immediately visible to
// other variable. So here's the conclusion. Primitives are copied by value, reference types or objects are copied by reference


