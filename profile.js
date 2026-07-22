let id =
localStorage.getItem("studentID")
|| 
"21AD045";


let student=students[id];


document.getElementById("profile").innerHTML=`

<h3>
${student.name}
</h3>


<p>
Department:
${student.department}
</p>


<h1>
${student.attendance.overall}%
</h1>


<h3>

Risk:

<span>

${student.risk}

</span>

</h3>


<hr>


<h3>
AI Prediction
</h3>


<p>

Attendance shortage probability:

<b>

${student.attendance.overall<75?"82%":"15%"}

</b>

</p>


<h4>
Recommendation
</h4>


<ul>

<li>
Attend upcoming classes regularly
</li>

<li>
Focus on weak subjects
</li>

<li>
Follow recovery timetable
</li>


</ul>

`;