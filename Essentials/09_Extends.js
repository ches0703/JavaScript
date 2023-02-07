// Extends : 확장(상속)


class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

const someone = new Person("someone", "unkown")
console.log(someone)

class Student extends Person{
    constructor(name, age, grade){
        super(name, age)
        this.grade = grade
    }
}

const ches = new Student("Ches", 24, 4.5)
console.log(ches)
