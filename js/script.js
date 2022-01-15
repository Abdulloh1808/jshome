// const lorem = ['    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto minima corrupti a iusto veniam expedita repudiandae tenetur necessitatibus amet eligendi tempora accusamus impedit placeat qui unde, quasi nesciunt vel sit.']
// const unli=[ 'u','a','e','i','o']
// let count = 0
// let undosh =0
// for (let i = 0; i < lorem.length; i++) {
//     if(lorem[i]=== unli[i] ){
//         count ++
//     }     
// }
// console.log(count);

// let str = ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto minima corrupti a iusto veniam expedita repudiandae tenetur necessitatibus amet eligendi tempora accusamus impedit placeat qui unde, quasi nesciunt vel sit.'

// const bdr = str.split() 
// const unli=[ 'u','a','e','i','o']
// const sym = ['', '.',',','?','!' ]
// let count = 0
// for (let i = 0; i < bdr.length; i++) {
//     for (let a = 0; a < unli.length; a++) {
//         if (bdr[i]== 'u'|| bdr[i]=='a' || bdr[i]=='e' || bdr[i]=='i'|| bdr[i]=='o') {
//             count ++
//         }
//     }
// }
// console.log(count);

let str = ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto minima corrupti a iusto veniam expedita repudiandae tenetur necessitatibus amet eligendi tempora accusamus impedit placeat /* qui unde, quasi nesciunt vel sit.'

const bdr = str.split() 
// const unli=[ 'u','a','e','i','o']
const sym = ['', '.',',','?','!' ]
let count = 0
for (let i = 0; i < bdr.length; i++) {
        if (bdr[i]== 'u'|| bdr[i]=='a' || bdr[i]=='e' || bdr[i]=='i'|| bdr[i]=='o' ) {
            count ++
        }  
}
console.log(count);

// bdr.splice ( 1,0,str)

// let add = prompt('kamandani kiriting')
// while (add==('stop')) {
//      add = prompt('kamandani kiriting.  ')
// }


const info =[]
let a = prompt('kamandani kiriting')
while (a =="stop" || a== 0|| a== !isNaN) {
    a = prompt('kamandani kiriting')
}
if( a== 'add'){
    info.push(a)
}else if(a == 'dell'){
    info.pop(a)
} 
console.log(info);