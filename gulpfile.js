var argv = require('minimist')(process.argv.slice(2), {
  string: 'd', // difficulty
  number: 'c'}) // challenge

var gulp = require('gulp')
var budo = require('budo')
var garnish  = require('garnish')
var once = require('once')
var errorify = require('errorify')
var openURL = require('opn')
var browser = {
  'gc' : 'google chrome',
  'gcc': 'google chrome canary',
  'ff' : 'firefox',
  'sf' : 'safari'
}

var challenges = {
  'easy' : [
    '01-First-Reverse.js',
    '02-First-Factorial.js',
    '03-Longest-Word.js',
    '04-Letter-Changes.js',
    '05-Simple-Adding.js',
    '06-Letter-Capitalize.js',
    '07-Simple-Symbols.js',
    '08-Check-Nums.js',
    '09-Time-Convert.js',
    '10-Alphabet-Soup.js',
    '11-AB-Check.js',
    '12-Vowel-Count.js',
    '13-Word-Count.js',
    '14-Ex-Oh.js',
    '15-Palindrome.js',
    '16-Arith-Geo.js',
    '17-Array-Addition-I.js',
    '18-Letter-Count-I.js',
    '19-Second-GreatLow.js',
    '20-Division-Stringified.js',
    '21-Counting-Minutes-I.js',
    '22-Mean-Mode.js',
    '23-Dash-Insert.js',
    '24-Swap-Case.js',
    '25-Number-Addition.js',
    '26-Third-Greatest.js',
    '27-Powers-of-Two.js',
    '28-Additive-Persistence.js',
    '29-Multiplicative-Persistence.js',
    '30-Off-Line-Minimum.js'
  ],
  'medium' : [
    '01-Prime-Time.js',
    '02-Run-Length.js',
    '03-Prime-Mover.js',
    '04-Palindrome-Two.js',
    '05-Division.js',
    '06-String-Scramble.js',
    '07-Arith-Geo-II.js',
    '08-Array-Addition.js',
    '09-Binary-Converter.js',
    '10-Letter-Count.js',
    '11-Caesar-Cipher.js',
    '12-Simple-Mode.js',
    '13-Consecutive.js',
    '14-Formatted-Division.js',
    '15-Counting-Minutes.js',
    '16-Permutation-Step.js',
    '17-Prime-Checker.js',
    '18-Dash-Insert-II.js',
    '19-Swap-II.js',
    '20-Number-Search.js',
    '21-Triple-Double.js',
    '22-Bracket-Matcher.js',
    '23-String-Reduction.js',
    '24-ThreeFive-Multiples.js',
    '25-Coin-Determiner.js',
    '26-Fibonacci-Checker.js',
    '27-Multiple-Brackets.js',
    '28-Most-Free-Time.js',
    '29-Overlapping-Rectangles.js',
    '30-Look-Say-Sequence.js',
    '31-Distinct-List.js',
    '32-Number-Encoding.js'
  ],
  'hard' : [

  ]
}


gulp.task('clog', function() {
  console.log( argv );
})


var entry = './'+ argv.d  +'/' + challenges[argv.d][argv.c - 1]

//the development task
gulp.task('default', function(cb) {

  var ready = function(){}
  var pretty = garnish()
  pretty.pipe(process.stdout)

  //dev server
  budo(entry, {
    //serve: './01-first-reverse.js',    //end point for our <script> tag
    stream: pretty,        //pretty-print requests
    live: true,            //live reload & CSS injection
    verbose: true,         //verbose watchify logging
    //dir: 'app',            //directory to serve
    //transform: babelify,   //browserify transforms
    plugin: errorify       //display errors in browser
  })
  .on('exit', cb)
  .on('connect', function(ev) {
    ready = once(openURL.bind(null, ev.uri, {app: browser.gc} ))
  })
  .once('update', function() {
    //open the browser
    //if (argv.open) {
      ready()
    //}
  })
})



// Usage

// gulp --d easy --c 1
