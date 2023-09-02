// global - no window

// __dirname - path to current directory
// __filename - file name
// require - function to use modules ( common js)
// module - info about current module (file)
// process - info about the env where the program is being executed

// console.log(__dirname);
// console.log(__filename);

// let a = 1;
// const r = setInterval(() => {
//   a = a + 1;
//   console.log(a);

//   if (a === 5) {
//     clearInterval(r);
//   }
// }, 1000);

// const { name1, name2 } = require("./2-two");
// const printName = require("./1-one");
// printName(name1);
// printName(name2);
// require("./4-four");

// built in modules
// os , path , fs , http

// const os = require("os");
// const userInfo = os.userInfo();
// const uptime = os.uptime();

// const currentOs = {
//   type: os.type(),
//   release: os.release(),
//   totalMen: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(currentOs);

// ------------------------------------PATH-------------------------------
// const path = require("path");
// console.log(path.sep);

// const filePath = path.join("/one", "two", "three");
// console.log(filePath);

// console.log(path.basename(filePath));
// const rPath = path.resolve(__dirname, "one", "two");
// console.log(rPath);

// ----------------------------------- fs syncronous way-----------------------------
// const { readFileSync, writeFileSync } = require("fs");
// const first = readFileSync("./files/subfiles/firstFile.txt", "utf-8");
// const second = readFileSync("./files/secondFile.txt", "utf-8");
// const third = writeFileSync(
//   "./files/third.txt",
//   `This is the third file : ${first} ${second}`,
//   { flag: "a" }
// );

// console.log(first);
// console.log(second);
// console.log(third);

//------------------------------------asynchronous way--------------------------------
// const { readFile, writeFile } = require("fs");

// readFile("./files/subfiles/firstFile.txt", "utf-8", (error, result) => {
//   if (error) {
//     console.log(error);
//     return;
//   } else {
//     const first = result;
//     readFile("./files/secondfile.txt", "utf8", (error, result) => {
//       if (error) {
//         console.log(error);
//         return;
//       } else {
//         const second = result;
//         writeFile(
//           "./files/async-result.txt",
//           `Hey this is asynchronous file ${first} ${second}`,
//           { flag: "a" },
//           (err, result) => {
//             if (err) {
//               console.log(err);
//               return;
//             } else {
//               console.log(result);
//             }
//           }
//         );
//       }
//     });
//   }
// });

// -------------------------------------------http--------------------------------------
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to home page");
//   }
//   if (req.url === "/about") {
//     res.end("Welcome to about page");
//   }
// });

// server.listen(5000);

// --------------------------------------------lodash-----------------------------------
const _ = require("lodash");

const arr = [1, [2, [3, [4, [5]]]]];

const newArr = _.flattenDeep(arr);

console.log(newArr);
