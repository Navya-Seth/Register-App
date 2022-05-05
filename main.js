var studentarray=[];

function submit(){
    var name1=document.getElementById("student 1").value;
    var name2=document.getElementById("student 2").value;
    var name3=document.getElementById("student 3").value;
    var name4=document.getElementById("student 4").value;
    var name5=document.getElementById("student 5").value;
    studentarray.push(name1);
    studentarray.push(name2);
    studentarray.push(name3);
    studentarray.push(name4);
    studentarray.push(name5);
    console.log(studentarray);
    document.getElementById("display").innerHTML=studentarray;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sorting(){
    studentarray.sort();
    console.log(studentarray);
    document.getElementById("display").innerHTML=studentarray;
}