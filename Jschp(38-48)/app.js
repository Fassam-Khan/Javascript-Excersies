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