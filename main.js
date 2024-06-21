//  bodlogo 1 Өгөгдсөн 2 тооны ихийг олох функц бич.
let a = 16;
let b = 14;
let ih = (a, b) => {
  if (a > b) {
    console.log("ih:", a);
  } else {
    console.log("ih:", b);
  }
};
ih(a, b);
console.log("==========");
// bodlogo 2 Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function findNumberIndex(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i; // Индексийг буцаана
    }
  }
  return -1; // Олдсон тоо байхгүй бол -1 буцаана
}

// Жишээ array
let array = [1, 3, 5, 7, 9];

// Тэст хийх
console.log(findNumberIndex(array, 5)); // 2 гэж хэвлэнэ (индекс нь 0-с эхлэнэ)
console.log(findNumberIndex(array, 8)); // -1 гэж хэвлэнэ (8 тоо олдсонгүй)
console.log("==========");
// bodlogo 3 Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function findCharacterIndex(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i; // Индексийг буцаана
    }
  }
  return -1; // Олдсон тэмдэгт байхгүй бол -1 буцаана
}

// Жишээ тэмдэгт мөр
let str = "Hello, World!";

// Тэст хийх
console.log(findCharacterIndex(str, "o")); // 4 гэж хэвлэнэ (индекс нь 0-с эхлэнэ)
console.log(findCharacterIndex(str, "z")); // -1 гэж хэвлэнэ ('z' тэмдэгт олдсонгүй)
console.log("==========");
// bodlogo 4 Өгөгдсөн array - ийн дундажыг олох функц бич.
function findAverage(arr) {
  let sum = 0;

  // Нийт элементүүдийг нэмэх
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // Дундаж тоо
  let average = sum / arr.length;

  return average;
}

// Жишээ array
let arr = [2, 4, 6, 8, 10];

// Дундажыг олох
let avg = findAverage(array);
console.log("Дундаж:", avg);
console.log("==========");
// bodlogo 5 Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
let niilber = [2, 3, 4, 5, 6];
let niilber1 = 0;
for (let i = 0; i < niilber.length; i++) {
  niilber1 = niilber1 + niilber[i];
}
console.log("niilber:", niilber1);

// bodlogo 6 Өгөгдсөн тоо анхны эсэхийг олох функц бич.

function isPrime(number) {
  // 1 болон 0 байхгүй учир хоосон буюу анхны болгоно
  if (number <= 1) {
    return false;
  }

  // 2 болон 3 байхгүй учир үргэлж анхны болгоно
  if (number <= 3) {
    return true;
  }

  // 2-ээс эхлэн үргэлж шалгана
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  // 5-с эхлэн үргэлж шалгана
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

// Тэст хийх
console.log(isPrime(17)); // true гэж хэвлэнэ (17 нь анхны тоо)
console.log(isPrime(15)); // false гэж хэвлэнэ (15 нь анхны тоо биш)
console.log("==========");
// bodlogo 7 Palindrome too eseh jishee ni: input: 121 output: true, input: -121 output: false, input: 12  output: false
function palindrome(x) {
  let rev = 0;
  let num = 0;
  let orignalnum = x;
  while (x > 0) {
    num = x % 10;
    rev = rev * 10 + num;
    x = x - num;
    x = x / 10;
  }
  console.log(rev, orignalnum);
  if (orignalnum === rev) {
    return true;
  } else {
    return false;
  }
}
console.log(
  "palindrome too :",
  palindrome(Number(prompt("palindrome too oruul")))
);
// function isPalindrome(x) {
// Хэрэв тоо отрицатель байвал эсвэл 0-с бага байвал false буцаана
//   if (x < 0 || (x % 10 === 0 && x !== 0)) {
// return false;
//   }
// }
// let reversed = 0;
// let original = x;

// Тоо хоёр түр хувааж үлдсэн дэд бүтэн тоо байхад, түүнийг хооронд нь үржүүлэх
console.log("==========");
// bodlogo 8 Ugugdsun string urvuulna gargah jishee ni: input: hello output: olleh

// function reverseString(str) {}
// split() ашиглаж тэмдэгт мөрийг массив болгож байна, reverse() ашиглаж массивыг эсвэл элментүүдийг өөр байрыгаар байрлуулж байна
let string12 = "hello";
let rev = "";
// console.log(string12.length);
for (let i = string12.length - 1; i > -1; i--) {
  console.log("i-", i);
  rev += string12[i];
}

console.log("reverse:", rev);
console.log("==========");
//  bodlogo 9
let students = [
  {
    name: "Сэд-Эрдэнэ",

    age: 19,

    gender: "male",

    points: 70,
  },

  {
    name: "Индра",

    age: 19,

    gender: "female",

    points: 50,
  },

  {
    name: "Хатнаа ",

    age: 21,

    gender: "male",

    points: 99,
  },

  {
    name: "Тэмүүлэн",

    age: 23,

    gender: "male",

    points: 55,
  },

  {
    name: "Намуун",

    age: 23,

    gender: "female",

    points: 85,
  },
];
// Эхний объектыг хэвлэж гаргах
// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
// Сурагчдын насны дунджийг олох функц бичих
// Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
// 60-аас дээш оноо авсан cурагчдийг тоол

console.log(students[0]);
let gender = "male";
for (let i = 0; i < students.length; i++) {
  if (students[i].gender === gender) {
    console.log("eregtei suragch :", students[i]);
  } else {
    console.log("emegtei suragch :", students[i]);
  }
}
let age_sum = 0;
let age_ave = 0;
for (let i = 0; i < students.length; i++) {
  age_sum = age_sum + students[i].age;
}
age_ave = age_sum / students.length;
console.log("averge :", age_ave);

let age = 21;
for (let i = 0; i < students.length; i++) {
  if (students[i].age >= age) {
    console.log("21is deesh nastai suragch:", students[i]);
  }
}
let piont = 60;
for (let i = 0; i < students.length; i++) {
  if (students[i].points > piont) {
    console.log("60s deesh onootoi suragch:", students[i]);
  }
}
