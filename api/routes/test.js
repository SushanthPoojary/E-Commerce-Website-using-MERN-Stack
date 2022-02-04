// const foo = [1, 2, 3]
// const [n] = foo;
// console.log(n)

// const lion = 1
// let tiger= 2
// var bear;
// ++lion
// bear += lion + tiger
// tiger ++

// var thing 
// let func = (str = "no stt") => {
//     console.log(str)
// }
// func(thing);
// func(null)

// var a = [1, 2, 3, 4, 5]
// var one, two, three, four, five;

// [one, two, three, four, five] = [1, 2, 3, 4, 5]
// console.log(one)

// var a = ['dog', 'cat', 'hen']
// a[100] = 'fox'
// console.log(a.length)
// a.reverse()
// a.pop()
// console.log(a);

// class X {
//     get Y() {return 42;}
// }
// var x = new X();
// var a = x.Y();
// console.log(a);

// var sound = "grunt";
// var bear = { sound: "roar" };

// function roar(){
//     console.log(this.sound);
// }

// roar.apply(bear)

// const foo = {
//     bar(){
//         console.log("hello");
//     },
//     name: "ss",
//     age: 24,
// }

// console.log(foo);
// console.log("I");
// setTimeout(() => {
//     console.log("love")
// }, 0);
// console.log("java")

// var obj;
// console.log(obj);

// let roadTypes = ['street', 'road', 'avenue', 'circle'];
// console.log(roadTypes[2]);

// let c = "dd";
// const d = (a, b) => c
// console.log(d());

const date = new Date()
const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
const previousMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1))

console.log(date);
console.log(lastMonth);
console.log(previousMonth);
