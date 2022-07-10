
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 5000,
    years: 6,
    rate: 5.3,
  };
  expect(calculateMonthlyPayment(values)).toEqual('81.22')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 12500,
    years: 4,
    rate: 4.6,
  };
  expect(calculateMonthlyPayment(values)).toEqual('285.61')
});

it("should be able to do wacky numbers"), function(){
  const values = {
    amount: 8687,
    years: 36,
    rate: 78,
  };
  expect(calculateMonthlyPayment(values)).toEqual('564.66')
}
