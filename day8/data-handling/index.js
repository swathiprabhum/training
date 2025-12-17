function calculate(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    const sum = Number(n1) + Number(n2);
    document.getElementById("result").innerText = "Sum: " + sum;
}