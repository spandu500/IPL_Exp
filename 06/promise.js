//es6 promise program
const isEvenNumber = (num) => {
    return new Promise((resolve, reject) => {
      if (num % 2 === 0) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  };
  isEvenNumber(10).then((result) => {
    console.log('even number');
  }).catch((error) => {
    console.log('odd number');
  });