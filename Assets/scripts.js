const bgFizz = document.querySelector('.bgFizz');
const bgBuzz = document.querySelector('.bgBuzz');

const fizz = 'Fizz' 
const buzz = 'Buzz' 


const limit = 100;
for(i = 1; i <= limit; i++) {

  const container = document.querySelector('.container')
  let output = '';

  // Soluzione meno bella perchè sovrascrive il vecchio output
  // if (i % 3 === 0) {
  //   output += fizz;
    
  // }
  // if (i % 5 === 0) {
  //   output += buzz;
  // }
  //  if (!output){
  //   output += i;
  // }
  // console.log(output);

  // soluzione ottimale
  if (!(i % 15)) {
    output = fizz + buzz ;
  }else if (!(i % 5)) {
    output = buzz;
  }else if (!(i % 3)) {
    output = fizz;
  }else {
    output = i;
  }

  const box = document.createElement('div');
  box.classList.add('box')
  box.append(output);
  container.append(box)

  if (output === fizz) {
    box.classList.add('bgFizz')

  }
  if (output === buzz) {
    box.classList.add('bgBuzz')
  }

  if (output === (fizz + buzz)) {
    box.classList.add('bgBuzzFizz')
   
    

  }
 
  


}
  

