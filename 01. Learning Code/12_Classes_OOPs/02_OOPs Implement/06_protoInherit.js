//Prototypal Inheritance 
const user={
    username:"ritik",
    email:"ritik@gmail.com"
}
const teacher = {
    makeVideo:true
}

const teacherAssis={
    isAvailable:false
}

const TASupport={
    makeAssignment:"JS Assignmant",
    fulltime:true,
    __proto__: TASupport
}

teacher.__proto__ = user
//the above is old syntax

//Now the modern syntax 
Object.setPrototypeOf(TASupport, teacher)


