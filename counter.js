var a=0;
var b;
var c = 0;

function show(value) {	
    document.getElementById("top").value += value;		
}

function eva(value){
    c = parseFloat(document.getElementById("top").value);
    
    if (value == "=") {
        if(b == "+"){
            document.getElementById("top").value = (a + c);
        }else if(b == "-"){
            document.getElementById("top").value = (a - c);
        }else if(b == "×"){
            document.getElementById("top").value = (a * c);
        }else if(b == "÷"){
            if(c == 0){
                document.getElementById("top").value = "分母不能为0";
            }else{
                document.getElementById("top").value = (a / c);
            }	
        }
    }else{
        a = parseFloat(document.getElementById("top").value);
        document.getElementById("top").value = "";
        b = value;
        if(b == "+/-"){
            a = -a;
            document.getElementById("top").value = a;
        }
    }	
}

function cl(value){
    if(value == "清屏"){
        document.getElementById("top").value = "";
    }else{		
        document.getElementById("top").value = document.getElementById("top").value.substring(0, (document.getElementById("top").value.length - 1));
    }	
}