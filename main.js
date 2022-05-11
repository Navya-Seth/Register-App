var studentarray=[];

function submit(){
    var display_student_array=[];
    for (var j=1; j <=5; j++){
        var name_of_student= document.getElementById("student "+j).value;
        console.log(name_of_student);
        studentarray.push(name_of_student);
    }

    console.log(studentarray);
    var length_of_studentarray=studentarray.length;
    console.log(length_of_studentarray);
    for (var n=0; n <length_of_studentarray; n++){
        display_student_array.push("<h4>name ="+studentarray[n]+"</h4>")
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("displaywith").innerHTML=display_student_array;
    var remove=display_student_array.join("  ");
    console.log(remove);
    document.getElementById("displaywithout").innerHTML=remove;

           document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sorting(){
    studentarray.sort();
    console.log(studentarray);
    var display_sortting=[];
    var length_of_studentarray=studentarray.length;
    console.log(length_of_studentarray);
    for (var n=0; n <length_of_studentarray; n++){
        display_sortting.push("<h4>name ="+studentarray[n]+"</h4>")
        console.log(display_sortting);
    }
    var remove=display_student_array.join("  ");
    console.log(remove);
    document.getElementById("displaywithout").innerHTML=remove;
 
}