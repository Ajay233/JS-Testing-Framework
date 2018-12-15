describe('The test framework', function(){
  it('can use #toEqual', function(){
    result = add(4, 3);
    expect(result).toEqual(7);
  });

  it('can use #toBeAnArray', function(){
    result = makeArray(4);
    expect(result).toBeAnArray(true);
  });
});
