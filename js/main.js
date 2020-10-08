
console.log('%cHey!', 'font-size:100px; color:red')
console.log('%cWhy are you looking at my code?', 'font-size:20px; color:white')
console.warn('%cIt\'s a horrible example! Try stackoverflow, or a better developer\'s site.', 'font-size:20px; color:white')
console.error('%cGo ahead and steal it because ya know who gives a fuck about it anyways...', 'font-size: 20px; color:white')
console.log('%cI know, I know... you wanted to look... here\'s a cookie for your troubles... 🍪', 'font-size:20px; color:white')

document.getElementById('copyright').innerHTML = '<a href="https://itserik.dev/">&copy; ItsErikSquared ' + new Date().getFullYear() + '</a>'
