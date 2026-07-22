
// ================= ATTENDANCE CHART =================


const attendanceCtx = document
.getElementById("attendanceChart");


new Chart(attendanceCtx,{

    type:"line",

    data:{

        labels:[
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 6"
        ],


        datasets:[{

            label:"Attendance %",

            data:[
                76,
                78,
                79,
                80,
                81,
                82
            ],

            borderWidth:3,

            tension:.4,

            fill:true

        }]

    },


    options:{

        responsive:true,

        plugins:{

            legend:{
                display:true
            }

        }

    }

});



// ================= RISK CHART =================


const riskCtx=document
.getElementById("riskChart");


new Chart(riskCtx,{

    type:"doughnut",

    data:{

        labels:[

            "Safe",

            "Warning",

            "High Risk"

        ],


        datasets:[{

            data:[

                250,

                52,

                18

            ],

            borderWidth:2

        }]

    },


    options:{

        responsive:true

    }

});




// ================= STUDENT SEARCH =================


function searchStudent(){


    let id=document
    .getElementById("searchInput")
    .value
    .toUpperCase();



    let student=students[id];

    let prediction =
    predictRisk(
    student.attendance.overall,
    student.classesMissed
    );



    let card=document
    .getElementById("studentCard");



    if(!student){


        card.innerHTML=`

        <h3 class="text-center text-danger">

        ❌ Student Not Found

        </h3>

        <p class="text-center">

        Please enter a valid Student ID

        </p>

        `;


        return;

    }



    let riskColor;


    if(student.risk==="HIGH")
        riskColor="danger";

    else if(student.risk==="WARNING")
        riskColor="warning";

    else
        riskColor="success";




    card.innerHTML=`

    <h3>

    👨‍🎓 ${student.name}

    </h3>


    <hr>


    <div class="row">


    <div class="col-md-4">


    <h5>Student Details</h5>


    <p>

    <b>ID:</b> ${id}

    </p>


    <p>

    <b>Department:</b> 
    ${student.department}

    </p>


    <p>

    <b>Year:</b>
    ${student.year}

    </p>


    </div>



    <div class="col-md-4">


    <h5>Attendance</h5>


    <h2>

    ${student.attendance.overall}%

    </h2>



    <div class="progress">

    <div 

    class="progress-bar bg-${riskColor}"

    style="width:${student.attendance.overall}%">

    </div>

    </div>


    </div>




    <div class="col-md-4">


    <h5>AI Risk Prediction</h5>


    <span class="badge bg-${riskColor}">

    ${prediction.risk}

    </span>



    <p class="mt-3">

    Classes Missed:

    <b>${student.classesMissed}</b>

    </p>



    </div>


    </div>



    <hr>


    <h5>

    Subject Wise Attendance

    </h5>



    <div class="row mt-3">


    ${
        student.subjects.map(sub=>`

        <div class="col-md-6 mb-3">


        <b>${sub.name}</b>


        <div class="progress">

        <div 

        class="progress-bar"

        style="width:${sub.attendance}%">

        </div>


        </div>


        <small>

        ${sub.attendance}%

        </small>


        </div>


        `).join("")
    }


    </div>


    `;



}





// ================= AI GENERATION =================


document
.getElementById("generateAIBtn")
.addEventListener(

"click",

()=>{


let id=document
.getElementById("searchInput")
.value
.toUpperCase();



let student=students[id];


let response=document
.getElementById("aiResponse");



if(!student){


response.innerHTML=`

<p class="text-danger">

Please search a student first.

</p>

`;

return;

}



response.innerHTML=`

<div class="loading">

🤖 AI analysing attendance pattern...

</div>

`;



setTimeout(()=>{


let recommendation;



if(student.risk==="HIGH"){


recommendation=`

<ul>

<li>
Immediate parent notification required.
</li>

<li>
Generate personalized recovery timetable.
</li>

<li>
Assign mentor follow-up.
</li>

<li>
Prioritize Data Structures attendance improvement.
</li>

</ul>

`;


}

else if(student.risk==="WARNING"){


recommendation=`

<ul>

<li>
Monitor attendance weekly.
</li>

<li>
Send reminder notifications.
</li>

<li>
Encourage participation in upcoming classes.
</li>

</ul>


`;

}

else{


recommendation=`

<ul>

<li>
Attendance performance is excellent.
</li>

<li>
Maintain current learning consistency.
</li>

<li>
No intervention required.
</li>

</ul>


`;

}



response.innerHTML=`

<div class="ai-report">


<h4>

🤖 AI Attendance Report

</h4>



<p>

Student:

<b>

${student.name}

</b>

</p>


<p>

Risk Level:

<b>

${prediction.risk}

</b>

</p>



<p>

Prediction:

Attendance trend is

<b>

${student.lastWeekTrend>0?"improving":"declining"}

</b>

.

</p>


<h5>

Recommended Actions

</h5>


${recommendation}


</div>

`;



},1500);



});

