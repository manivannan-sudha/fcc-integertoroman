function convert()
{
let num = document.getElementById('number').value;


num = parseInt(num);
console.log(num);

let out = document.querySelector('#output');

if(Number.isNaN(num)) 
{
  out.innerHTML = 'Please enter a valid number.';
  out.style.display = 'block';
  out.style.backgroundColor = '#3d1818';
  out.style.borderColor = '#b64040'
}
else if(num<=0)
{
  out.innerHTML = 'Please enter a number greater than or equal to 1.';
  out.style.display = 'block';
  out.style.backgroundColor = '#3d1818';
  out.style.borderColor = '#b64040'
}
else if(num === '')
{
  out.innerHTML = 'Please enter a valid number.';
  out.style.display = 'block';
  out.style.backgroundColor = '#3d1818';
  out.style.borderColor = '#b64040'
}
else if(num>3999)
{
  out.innerHTML = 'Please enter a number less than or equal to 3999.'
  out.style.display = 'block';
  out.style.backgroundColor = '#3d1818';
  out.style.borderColor = '#b64040'
}
else
{
  const arabicToRoman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};


const decKeys = Object.keys(arabicToRoman).reverse();

// console.log(decKeys);

let res = '';

decKeys.forEach(key => {
  while(key<=num)
  {
    res += arabicToRoman[key];
    num -= key;
  }
});


out.innerHTML =  res;
out.style.display = 'block';
out.style.backgroundColor = '#183D3D';
out.style.borderColor = '#40b6b6'

console.log(res);
return res;

}

}