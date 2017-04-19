(function(){
  console.log('hello');

  // JavaScript is a loosely typed or a dynamic language
  //
  // Data Types
  // ==========
  // - Kind of data (data item) that can be operated upon
  // - can vary by programming language

  // List of primatives
  // ==================
  // Boolean.
  // Null.
  // Undefined.
  // Number.
  // String.
  // Object

  var isHere = true;
  var isNull = null;
  var shouldBeUndefined = undefined;
  var someNum = 10;
  var someDecimal = 10.9;
  var yourName = 'sara';
  var anObject = {};


  var aFunction = function() {
    var anotherString = 'stuff';

    if (anotherString) {
      let tempValue;
    }

    tempValue = 67;
    console.log(anotherString, tempValue);
  }

  var toString = function(list) {
    const template = '<ul></ul>'
    const $container = $('#container').append(template);
    const $list = $container.find('ul');

    console.log('works', $container);

    list.values(function(value, index, collection){
      $list.append('<li>' + value + '</li>')
        // console.log(value, index, collection);
    });
  }


  // Primative types serve as the building blocks of data manipulation

  // Data Structures
  // - organizes data (data items) for efficiency
  // Arrays & Maps (objects)
  // ========================
  // A JavaScript object is a mapping between keys and values. Keys are strings (or Symbols) and values can be anything above

  // Storage
  // - var
  // - const
  // - let
  // - Array: []
  // - Object: {}


  // Functions
  //aFunction();
  $(document).ready(function(){
    var tuna = ['skipjack', 'yellowfin', 'ahi'];
    var nums = [5,7,9,1,80];
    var map =  { plant: 'fern', fish: 'tuna'};

    var articles = [
      {
        title: '10 things you didnt know',
        body: 'kasdhjfkjasdhfkdsajfkasdjfkdasjflk;adsgjkadshgjkdashgjkdahfjklsadhfjkadshfjkadshfjkadshfjkasdhfjkdsaf,',
        contributors: ['Dan Abramov', 'Annika Phillips']
      },
      {
        title: '10 things you didnt know',
        body: 'kasdhjfkjasdhfkdsajfkasdjfkdasjflk;adsgjkadshgjkdashgjkdahfjklsadhfjkadshfjkadshfjkadshfjkasdhfjkdsaf,',
        contributors: ['Dan Abramov', 'Annika Phillips']
      },
      {
        title: '10 things you didnt know',
        body: 'kasdhjfkjasdhfkdsajfkasdjfkdasjflk;adsgjkadshgjkdashgjkdahfjklsadhfjkadshfjkadshfjkadshfjkasdhfjkdsaf,',
        contributors: ['Dan Abramov', 'Annika Phillips']
      }
    ];

    var shortForm = {
      displayType: 'short-form',
      template: '<div class="article-short-form"><h1>#TITLE#</h1>#BODY#</div>'
    }
    // console.log(articles);
    // console.log(articles.map(function( value, index, collection ) {
    //   return Object.assign(value, shortForm);
    // }).forEach(toString));
    // toString(tuna);
    // console.log(map, map.plant, map['plant']);

    function Plant(...props) {

      function getName() {
        return name;
      }

      function print(s){
        console.log(props[s])
      }

      return this;
    }

    Plant.prototype.print = function(field) {
      console.log(this[field]);
    }

    console.log(Plant('fern', 'blue').print('color'), Plant('poinsetta', 'red'));
  })
})()
