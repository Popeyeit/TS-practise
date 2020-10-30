type LogItems = (array: string[] | number[]) => void;

const logItems: LogItems = array => {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1}-${array[i]}`);
  }
};

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//////

type Calculate = (text: string, priceOneWord: number) => number;

const calculateEngravingPrice: Calculate = (message, pricePerWord) => {
  return message.split(' ').length * pricePerWord;
};

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// );

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// );

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// );

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// );

/////

type FindLongestWord = (words: string) => string;

const findLongestWord: FindLongestWord = string => {
  let word: string = '';
  const arrayStrings: string[] = string.split(' ');
  for (let i = 0; i < arrayStrings.length; i += 1) {
    if (word.length < arrayStrings[i].length) {
      word = arrayStrings[i];
    }
  }

  return word;
};

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

////

const formatString = function (string: string): string {
  if (string.length > 40) {
    return string.slice(0, 40) + '...';
  } else {
    return string;
  }
};

/*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка

////

const checkForSpam = function (message: string): boolean {
  const smallMessage = message.toLowerCase();
  const isSpam: boolean =
    smallMessage.includes('sale') || smallMessage.includes('spam');
  return isSpam;
};

/*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

////

export {};
