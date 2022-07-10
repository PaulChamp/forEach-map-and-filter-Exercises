it('simple math', function (){
    expect(1+1).toEqual(2);
})

describe('calc taxes tests', function(){
    it('should calculate lower-bracket taxes', function () {
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(20000)).toEqual(3000);
      });
    
})
