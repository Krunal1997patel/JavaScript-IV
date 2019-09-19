// CODE here for your Lambda Classes

// Making the Person class with ***********************

class Person{
    constructor(personAttributes){

        this.name     = personAttributes.name
        this.age      = personAttributes.age
        this.location = personAttributes.location
    }     //constructor end here

    //methods of Person
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
} //********************* Person class end here




// Making the Instructor class that extends to Person ***********************

class Instructor extends Person{
    constructor(instructorAttr){

        super(instructorAttr);

        this.specialty    = instructorAttr.specialty
        this.favLanguage  = instructorAttr.favLanguage
        this.catchPhrase  = instructorAttr.catchPhrase
    }  //constructor end here

     //methods of Instructor
    demon(subject){
        return `Today we are learning about ${subject}`
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}//********************* Instructor class end here



// Making the Student class that extends to Person ***********************

class Student extends Person{
    constructor(studentAttr){

        super(studentAttr);

        this.previousBackground = studentAttr.previousBackground
        this.className          = studentAttr.className
        this.favSubjects        = studentAttr.favSubjects
        this.grade              = studentAttr.grade
    }//constructor end here

    //methods of Instructor
    listsSubjects(){
        return `${this.favSubjects}`;
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate(){
        if(this.grade > 70){
            return `${this.name} you are ready to graduate from Lambda School`
        }else{
            return `You need to put more work ${this.name}`
        }
    }
}//********************* Student class end here



// Making the ProjectManager class that extends to Instuctor ***********************

class ProjectManager extends Instructor{
    constructor(projectManagerAttr){

        super(projectManagerAttr);

        this.gradClassName  = projectManagerAttr.gradClassName
        this.favInstructor  = projectManagerAttr.favInstructor
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel study time!`
    }

    debugsCode(student, subject){
        return `${this.name} debgs ${student.name}'s code on ${subject}`
    }
}

const krunal = new Student({
    name: 'krunal',
    age: 22,
    location: 'Maryland',
    previousBackground: 'student',
    className: 'WEB24',
    favSubjects: ['HTML', 'CSS', 'JAVASCRIP'],
    grade: 90
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const jim = new ProjectManager({
    name: 'Jim',
    age: 34,
    favLanguage: 'JavaScript/React',
    specialty: 'Backend-end',
    catchPhrase: `I got you cover`,
    location: 'New York',
    gradClassName: 'CS12',
    favInstructor: 'Jose Kell'
})

//Student
console.log(krunal.name);
console.log(krunal.age);
console.log(krunal.location);
console.log(krunal.previousBackground);
console.log(krunal.className);
console.log(krunal.favSubjects);
console.log(krunal.grade);
console.log(krunal.listsSubjects());
console.log(krunal.PRAssignment('javeScript IV'));
console.log(krunal.sprintChallenge('javeScript'));
console.log(krunal.graduate());

//Instructor
console.log(fred.name)
console.log(fred.age)
console.log(fred.location)
console.log(fred.favLanguage)
console.log(fred.specialty)
console.log(fred.catchPhrase)
console.log(fred.demon('JavaScript DOM'))
console.log(fred.grade(krunal, 'JavaScript Sprint'))


//Project Manager

console.log(jim.name)
console.log(jim.age)
console.log(jim.location)
console.log(jim.favLanguage)
console.log(jim.specialty)
console.log(jim.catchPhrase)
console.log(jim.gradClassName)
console.log(jim.favInstructor)
console.log(jim.standUp('WEB20'))
console.log(jim.debugsCode(krunal, 'JavaScript'))