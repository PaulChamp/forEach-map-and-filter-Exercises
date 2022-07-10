const cat = {
    name: 'blue',
    breed: 'scottish Fold',
    dance: function(dance){
        console.log('This is:', this);
        console.log(`meow, I am ${this.name}and I like to ${dance}`)
    }
}
//cat.dance('tango') ---> meow, I am blue and I like to tango

const bluesDance = cat.dance;
//bluesDance("salsa") ---> meow, I am   and I like to salsa

function whatIsThis() {
    console.log('this =', this);
}
const obj = {
    func: whatIsThis,
    color: 'purple'
}
//obj.func() ---> this = color:"purple"

// anything on the left of the period will be this
// and if nothiong is on the left the value of this will be set to the window object

//value of this chnages depending on how a function is executed !!!!!!!!!!

