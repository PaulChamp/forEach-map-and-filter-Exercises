function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

const favNum = 42;
var instructor = {
    firstName: "colt",
    [favNum]: "thats my favortie"
}

const instructor = {
    firstName: "colt",
    sayHi(){
        return "hi";
    },
    sayBye(){
        return this.firstName + "says bye";
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}