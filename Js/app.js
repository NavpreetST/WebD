

function hello (name){
    // let name = prompt("Please enter your name;")

    console.log(`hello, ${name} `)
}



const user1 = {
    name:"Navpreet",
    age: 17,
    gender: "Male"
}


// methods


const user2 = {
    greet: function (){
        console.log("hieeee");
    }
}


const users = ["Navpreet", "Divya","Kanveer Saran"]



//Adventure

console.log("hie")

const admin = {
    name: "Navpreet",
    age: 17,
    draw : function() {
        console.log("Draw") //function in object ==> Method
    }
    
}

function createUser(Name, Age){
    const user = {
        name: Name,
        age: Age,
        draw : function() {
            console.log("Draw") //function in object ==> Method
        }
        
    }
    return user
};

let uzer1 = createUser("Navpreet", 17)



console.log(uzer1.name)

// console.log(admin.name)

// admin.draw()

function Rectange(len,bre){
    this.length = len,
    this.breadth = bre,
    this.draw = function(){
        console.log("DraWing")
    }
}



let rect = new Rectange(5,6);
console.log(rect.breadth)