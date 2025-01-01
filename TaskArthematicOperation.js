var firstNum = prompt("Enter First Number");
var secondNum = prompt("Enter Second Number");
var operation = prompt("Enter the Operation");
var res=document.getElementById("result");
if (operation=="add"){
    res.innerHTML="The addition b/w "+firstNum+" and "+secondNum+" is "+(Number(firstNum)+Number(secondNum));
}
else if (operation=="sub"){
    res.innerHTML="The Subtraction b/w "+firstNum+" and "+secondNum+" is "+(firstNum-secondNum);
}
else if (operation=="mul"){
    res.innerHTML="The Multiplication b/w "+firstNum+" and "+secondNum+" is "+(firstNum*secondNum);
}
else if (operation=="div"){
    res.innerHTML="The Division b/w "+firstNum+" and "+secondNum+" is "+(firstNum/secondNum);
}
else if (operation=="mod"){
    res.innerHTML="The Modulus b/w "+firstNum+" and "+secondNum+" is "+(firstNum%secondNum);
}
else {
    res.innerHTML="Invalid Operation. Enter add,sub,mul,div or mod";
}
