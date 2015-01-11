it('should be a passing test', function() {
  var doesTheSpecPass = true;
  expect(doesTheSpecPass ).toBe(true);
});


// PART 1: Sunlight Zone: Arguments & Return
// -----------------------------------------

it('will accept arguments and return values.', function() {

  function test(a, b) {
    return a + b;

  }
  expect( test(20,30) ).toBe(50);

});


it('provides an arguments *object* that contains all arguments passed into the function.', function() {

  function test() {
    //skipped
  }

});



// PART 2: Twilight Zone: Scope & Closure
// --------------------------------------

it('allows function scopes to reference outward, but not to look inward at nested closures.', function() {

  var outer = 10;

  function test() {
    var inner = 20;
    expect(outer).toBe(10);
    expect (inner).toBe(20);
    return inner;
  }

  var result = test();
  test();
  expect(result).toBe(20);
  expect(outer).toBe(10);
  // expect(typeof inner).toBe("undefined");

});



it('will override conflicting variable declarations in an inner scope. The outer scope is unaffected.', function() {

  var n = 5;

  function test() {
    var n = 20;
    expect(n).toBe(20);
  }

  expect (n).toBe(5);
  test();

});



it('allows inner scopes to access and modify variables declared in an outer scope.', function() {

  var n = 5;

  function test() {
    n = 20; // since variable is not declared with 'var', 
    //n=20 goes up the chain until it finds a declaration 'var'
    // if it doesn't find a declaration 'var' for 'n' it will declare itself in the global scope
    //which is very bad because it leaks globally (visible to all of the internet)
  }
  test();
  // expect(n).toBe(5);
});



it('assigns all undeclared variables into global (window) scope.', function() {

  function test() {
    n = 20; //
  }
  test();
  expect(window.n).toBe(20);
  console.log(window.n);

});



it('allows Immedaitely-Invoked Function Expressions (IIFE) to set up a private scope.', function() {

  var called = false;
  
  (function(){
    // Write an IIFE...
    called = true;
  })();
  
  expect(called).toBe(true);


});



// PART 3: Midnight Zone: Contextual Invocation
// --------------------------------------------

it('will bind the Function Invocation pattern to the global object.', function() {

  function test() {
    return this;
  }

});



it('will bind the Call Invocation pattern to a passed object.', function() {

  function test(a, b) {
    return this;
  }

  var target = {};

});



it('will bind the Method Invocation pattern to the host object.', function() {

  var obj = {
    test: function() {
      return this;
    }
  };

});



it('will bind the Constructor Invocation pattern to a brand new object instance.', function() {

  function TestWidget(name) {
    this.name = name;
  }

});