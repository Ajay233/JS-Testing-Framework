

function describe(description, func){
  console.log(description);
  func();
};

var it = function(message, func){
  describe(' ' + message, func)
};

function expect(exp){
  return matchers(exp);
};

var matchers = function matchers(exp){
  return {
    toEqual: function toEqual(assertion){
      if (exp === assertion) {
        console.log("pass");
        return true;
      } else {
        console.log("fail");
        return false;
      }
    },
    toBeAnArray: function toBeAnArray(assertion){
      if (Array.isArray(exp) === assertion) {
        console.log("pass");
        return true;
      } else {
        console.log("fail");
        return false;
      }
    }
  };
};


function add(a, b){
  return a + b;
};

describe('#Add', function(){
  it('can add two numbers', function(){
    result = add(4, 3);
    expect(result).toEqual(7);
  });
});