
document.getElementById('submit').onclick= function(){
    let a = document.getElementById('in').value;
    if(a<18 && a>0){
        document.getElementById('result').textContent= `You cannt apply for licence!!!`;
    }else if(a>=18 && a<70){
        document.getElementById('result').textContent= `You can apply for licence!!!`;

    }else{
        document.getElementById('result').textContent= `You are too aged for that....You monster :)`;

    }
}