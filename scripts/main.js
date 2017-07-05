var myImage = document.querySelector('img');

myImage.onclick = function(){
    mySrc = myImage.getAttribute('src');
    
    if(mySrc === 'images/maxresdefault.jpg')
        {
            myImage.setAttribute('src', 'images/truck2.jpg')
        }
    else
        {
            myImage.setAttribute('src', 'images/maxresdefault.jpg')
        }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUsername()
{
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'The Friendly Red Monster Truck, ' + myName;
}

if(!localStorage.getItem('name'))
{
    setUsername();
}
else
{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'The Friendly Red Monster Truck, ' + storedName;
}

myButton.onclick = function(){
    setUsername();
}