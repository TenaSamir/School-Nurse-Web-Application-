let students=[];
const addStu=(ev)=>{
    ev.preventDefault();
    let stu={
        stuId:Date.now(),
        stuName:document.getElementById('stuName').value,
        stuGrade:document.getElementById('stuId'),
        stuCase:document.getElementById('stuCase').value
    }
    students.push(stu);
    document.forms[0].reset();
    localStorage.setItem('myStuList',JSON.stringify(students))
}
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('btn').addEventListener('click',addStu);

    const saveFile=()=>{

        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(new Blob([localStorage.getItem('myStuList')], {type: "text/plain"}));
        a.download = "students.txt";
        a.click();
    }
    document.getElementById('btn2').addEventListener('click',saveFile);
    
   

})








// var myForm = document.getElementById('myForm');

// // Event listener that listens for submit event
// myForm.addEventListener("submit", function(e){
//     e.preventDefault();
// // retrieve values
// var stuName = document.getElementById('stdentGradeInput').value;
// var stuGrade = document.getElementById('stdentGradeInput').value;
// var stuCase = document.getElementById('stdentCaseInput').value;
// var stuId = Date.now();
// const students=[{stuname:stuName,stuid:stuId,stugrade:stuGrade,stucase:stuCase}]

// // validate username and password fields
// if(stuName=='' || stuGrade==''||stuCase==''||stuId==''){
//         alert("Please Fill all required fields");
//     }
// else{
//     for(var i=0;i<students.length;i++){
       
//         alert(students[i].stuname);
//     }
//         alert("Form submission successful");
//         document.forms[0].reset();
//     }
// })



// var student = {
//     id:'',
//     name:'',
//     grade:'',
//     age:'',
//     case:'',

// };
// var students=[];

// document.getElementById("btnAddTask").addEventListener("click",addStudentFunc);
// //Add Student Name Function
// function addStudentFunc() {
    
//     if(document.getElementById('stdentNameInput').value===''||document.getElementById('stdentGradeInput').value===''||document.getElementById('stdentCaseInput').value===''){
//       alert('ddddddddddd');}
//         // document.getElementById('warningStuName').removeAttribute("hidden","hidden");}
    
//     else{
//         student.id=Date.now();
//             student.name=document.getElementById('stdentNameInput').value;
//             student.grade=document.getElementById('stdentGradeInput').value;
//             student.case=document.getElementById('stdentCaseInput').value;
//             students.push(student.id);
//             students.push(student.name);
//             students.push(student.grade);
//             students.push(student.case);
//             students.push(student.age);
// window.localStorage("0",student.name);
//         }
//        alert(students);
//         // for(var i=0;i<students.length;i++)
//         // localStorage.setItem('studentsData',JSON.stringify(students[student.id,student.name]) );
//         // alert(students);
//         // console.warn("Student has been added",student.name);
       
//         // document.forms[0].reset();
        
        
//     }
// /////////////////////////////////////////////////////////////////
// // let students=[{
// //     stuName: document.getElementById('stdentNameInput').value,
// //     stugrade:document.getElementById('stdentGradeInput').value,
// //     stucase:document.getElementById('stdentCaseInput').value
// // }]
// // function addStudentFunc() {
    
// //         if(document.getElementById('stdentNameInput').value===''||document.getElementById('stdentGradeInput').value===''||document.getElementById('stdentCaseInput').value===''){
    
            
// //             document.getElementById("warningStuName").removeAttribute("hidden","hidden");
// //         }
// //         else{
// //             students.push(student.);}
// //         }