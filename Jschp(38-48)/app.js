// Power Fuction 


const powerFunc = ()=>{
    let result = 1

    let base = +prompt("Enter the base number : ")
    const power = +prompt("Enter power number ")

    for( i = 1; i <= power; i++){
        result = result * base



    }

    alert(result) 


result = 1

}


const leapYear = ()=>{

    let year = +prompt("Enter your year : ");
    if(year % 4 === 0){
        alert(year + " is a leap year ")
    }
    else{
        alert("Not a leap")
    }

}

const withDraw = ()=>{
    note10 = 0
    note50 = 0
    note100 = 0
    let amount = +prompt("Enter amount:");
    if(amount >= 100){
        var note100 = Math.floor(amount / 100)
        console.log(note100)
        amount = amount % 100

    }
    if(amount >= 50 && amount < 100){
        var note50 = Math.floor(amount / 50)
        console.log( note50)
        amount = amount % 50

    }

    if(amount < 50 && amount > 0 ){
        var note10 = Math.floor(amount / 10)
        console.log(note10)
    }


    alert("you will have " + `${note100} hundred notes ${note50} fifty notes ${note10} ten notes`)
 
}

const areaOfTriangle = ()=>{
    let a = +prompt("Enter triangle first length ");
    let b = +prompt("Enter triangle Second Length ");
    let c  = +prompt("Enter triangle Third Length ");

    s = (a + b + c) / 2;

    area = s * (s - a) * (s - b) * (s - c)

    alert("area is " + area)
}