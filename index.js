

const form = document.getElementById('Calculator');
const currentWeight = document.getElementById("currentWeight");
const targetWeight = document.getElementById("targetWeight");
const weightDays = document.getElementById("weightDays");
form.addEventListener("submit",function(e)
{
    e.preventDefault();
    const currentWeightValue = currentWeight.value;
    const targetWeightValue = targetWeight.value;
    const weightDaysValue = weightDays.value;
    let weightOutput;
    let weightDifference = currentWeightValue - targetWeightValue;
    if(weightDifference < 0)
    {
        weightOutput = weightDifference*-1/weightDaysValue;
        console.log(weightOutput);
    }
    else
    {
        weightOutput = weightDifference/weightDaysValue;
        console.log(weightOutput);
    }
    
});


