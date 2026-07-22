let id = "21AD045";


let student = students[id];



let riskClass;


if(student.risk=="HIGH")
{
    riskClass="danger";
}

else if(student.risk=="WARNING")
{
    riskClass="warning";
}

else
{
    riskClass="success";
}




document.getElementById("profile").innerHTML = `


<div class="row g-4 mt-3">


<div class="col-md-4">


<div class="stat-card">


<i class="fa-solid fa-user-graduate"></i>


<h3>

${student.name}

</h3>


<p>

${student.department}

</p>


</div>


</div>





<div class="col-md-4">


<div class="stat-card">


<i class="fa-solid fa-chart-line"></i>


<h3>

${student.attendance.overall}%

</h3>


<p>

Overall Attendance

</p>


</div>


</div>





<div class="col-md-4">


<div class="stat-card">


<i class="fa-solid fa-triangle-exclamation"></i>


<h3 class="text-${riskClass}">

${student.risk}

</h3>


<p>

AI Risk Prediction

</p>


</div>


</div>


</div>






<div class="chart-card mt-4">


<h3>

🤖 AI Attendance Analysis

</h3>


<hr>


<p>

Based on your attendance pattern, AI predicts:

</p>



<h4>

${student.risk=="HIGH"

?

"⚠ High probability of attendance shortage"

:

"✅ Attendance is under control"

}

</h4>



<br>


<h5>

Recommended Actions

</h5>


<ul>


<li>
Attend upcoming classes regularly
</li>


<li>
Improve weak subjects
</li>


<li>
Avoid consecutive absences
</li>


</ul>



</div>







<div class="chart-card mt-4">


<h3>

📚 Subject Performance

</h3>



${

student.subjects.map(sub=>`


<div class="mt-3">


<b>

${sub.name}

</b>


<div class="progress">


<div

class="progress-bar bg-primary"

style="width:${sub.attendance}%">

</div>


</div>


<span>

${sub.attendance}%

</span>


</div>



`).join("")


}


</div>



`;





new Chart(

document.getElementById("studentChart"),

{


type:"line",


data:{


labels:[

"Week 1",
"Week 2",
"Week 3",
"Week 4",
"Week 5"

],


datasets:[{

label:"Attendance %",

data:[

82,
78,
76,
73,
student.attendance.overall

],


borderWidth:3,

tension:.4

}]


},


options:{


responsive:true


}



}

);
