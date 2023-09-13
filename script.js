let s=setInterval(function(){
    let a = new Date();
    let second = a.getSeconds();
    let minute = a.getMinutes();
    let hor = a.getHours();
    let day=a.getDate();
    let month=a.getMonth();
    let year=a.getFullYear();
    document.getElementById("hour").innerHTML=hor;
document.getElementById("minute").innerHTML=minute;
document.getElementById("second").innerHTML=second;
document.getElementById("day").innerHTML=day;
document.getElementById("month").innerHTML=month+1; 

document.getElementById("year").innerHTML=year;
    
},1000);


