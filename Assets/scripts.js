const bgFizz = document.querySelector('.bgFizz');
const bgBuzz = document.querySelector('.bgBuzz');

const fizz = 'Fizz' 
const buzz = 'Buzz' 
const limit = 100;
for(i = 1; i <= limit; i++) {

  const container = document.querySelector('.container')
  let output = '';

  if (i % 3 === 0) {
    output += fizz;
    
  }
  if (i % 5 === 0) {
    output += buzz;
  }
   if (!output){
    output += i;
  }
  console.log(output);

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
  

