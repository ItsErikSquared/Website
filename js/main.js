
// Copyright ItsErikSquared 2019 - https://itserik.dev/COPYRIGHT.md

console.log('%cHey!', 'font-size:100px; color:red')
console.log('%cWhy are you looking at my code?', 'font-size:20px; color:white')
console.warn('%cIt\'s a horrible example! Try stackoverflow, or a better developer\'s site.', 'font-size:20px; color:white')
console.error('%cIt\'s also copyrighted...', 'font-size: 20px; color:white')
console.log('%cI know, I know... you wanted to look... here\'s a cookie for your troubles...', 'font-size:20px; color:white')
// https://stackoverflow.com/a/57238009
console.image = function (url, size = 100) {
  var image = new Image()
  image.onload = function () {
    var style = [
      'font-size: 1px;',
      'padding: ' + this.height / 100 * size + 'px ' + this.width / 100 * size + 'px;',
      'background: url(' + url + ') no-repeat;',
      'background-size: contain;'
    ].join(' ')
    console.log('%c ', style)
  }
  image.src = url
}
console.image('https://upload.wikimedia.org/wikipedia/commons/5/5c/Choc-Chip-Cookie.png', 1)
document.getElementById('copyright').innerHTML = '&copy; ItsErikSquared ' + new Date().getFullYear() + ' - All Rights Reserved'
