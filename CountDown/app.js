const endDate = "18 September 2023 7:00 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const now = new Date();
    const end = new Date(endDate);
    //console.log(now,end);
    const diff = (end - now)/1000; // we will get difference in miliseconds
    //converted it to seconds 
    if(diff<0) return;
    
    //similarly we will convert it into minutes, hours and days
    inputs[0].value = Math.floor(diff/(3600*24));
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60) %60;
    inputs[3].value = Math.floor(diff)%60;

    
}
clock()


setInterval(() => {
    clock();
}, 1000);

