//рег выражения

// const test = '123 John 45 jacob 6 '
// const regex = /\d/gi;
//
// //match
//
// console.log(test.match(regex))

//+ - 1>
//* - 0>
//? - 0 | 1



//g
//i
//m
//s


// \d - 0-9 | D - !0-9
// \w - words,digits, _ | W !
// \s - space | S - !space


//  CALLBACK FUNCTION

// const func1 = (func) => {
//     func()
// }
//
// const func2 = () => {
//     console.log("its func2")
// }
//
// func1(func2)


//рекурсия

let num = 0;
const test = () => {
    num++
    console.log(num)
    if(num < 500){
        requestAnimationFrame(test)
}

}
test()