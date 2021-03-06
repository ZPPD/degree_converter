//hide the cards in the beginning
document.getElementById('celsiusConv').style.display = 'none';
document.getElementById('fahrenheitConv').style.display = 'none';
document.getElementById('kelvinConv').style.display = 'none';
document.getElementById('newtonConv').style.display = 'none';


//event listener for selection
const celsius = document.getElementById('celsSelect');
const fahrenheit = document.getElementById('fahrSelect');
const kelvin = document.getElementById('kelvSelect');
const newton = document.getElementById('newtSelect');
const empty = document.getElementById('empty');

//loop through options and toggle class active
const options = document.querySelectorAll('option');
//console.log(typeof(options));
options.forEach(option => option.addEventListener('click', function(e){
  options.forEach(option => option.classList.remove('active'));
  e.target.className = 'active';
}));

//convert the input
document.getElementById('input').addEventListener('input', function(e) {
  let degree = Number(e.target.value);
  //console.log(typeof(degree));
  //celsius conversion
  if (celsius.className === 'active') {
    //show cards
    document.getElementById('celsiusConv').style.display = 'none';
    document.getElementById('fahrenheitConv').style.display = 'block';
    document.getElementById('kelvinConv').style.display = 'block';
    document.getElementById('newtonConv').style.display = 'block';

    //calcilate degrees
    document.getElementById('fahrOutput').innerHTML = degree * (9 / 5) + 32;
    document.getElementById('kelvOutput').innerHTML = (degree + 273);
    document.getElementById('newtOutput').innerHTML = degree * (33 / 100);
  }
  //fahrenheit conversion
  if (fahrenheit.className === 'active') {
    //show cards
    document.getElementById('celsiusConv').style.display = 'block';
    document.getElementById('fahrenheitConv').style.display = 'none';
    document.getElementById('kelvinConv').style.display = 'block';
    document.getElementById('newtonConv').style.display = 'block';

    //calculate degrees
    document.getElementById('celsOutput').innerHTML = (degree - 32) * (5 / 9);
    document.getElementById('kelvOutput').innerHTML = (degree - 32) * (5 / 9) + 273;
    document.getElementById('newtOutput').innerHTML = (degree - 32) * (11 / 60);
  }
  //kelvin conversion
  if (kelvin.className === 'active') {
    //show cards
    document.getElementById('celsiusConv').style.display = 'block';
    document.getElementById('fahrenheitConv').style.display = 'block';
    document.getElementById('kelvinConv').style.display = 'none';
    document.getElementById('newtonConv').style.display = 'block';

    //calculate degrees
    document.getElementById('fahrOutput').innerHTML = (degree - 273) * (9 / 5) + 32;
    document.getElementById('celsOutput').innerHTML = degree - 273;
    document.getElementById('newtOutput').innerHTML = (degree - 273) * (33 / 100);
  }
  //newton conversion
  if (newton.className === 'active') {
    //show cards
    document.getElementById('celsiusConv').style.display = 'block';
    document.getElementById('fahrenheitConv').style.display = 'block';
    document.getElementById('kelvinConv').style.display = 'block';
    document.getElementById('newtonConv').style.display = 'none';

    //calculate degrees
    document.getElementById('fahrOutput').innerHTML = degree * (60 / 11) + 32;
    document.getElementById('kelvOutput').innerHTML = degree / (33 / 100) + 273;
    document.getElementById('celsOutput').innerHTML = degree / (33 / 100);
  }
});
