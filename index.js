

const form = document.getElementById('Calculator');
const currentWeight = document.getElementById("currentWeight");
const targetWeight = document.getElementById("targetWeight");
const weightDays = document.getElementById("weightDays");
form.addEventListener("submit",weightCalculation);

function weightCalculation(e)
{
    e.preventDefault();
    const currentWeightValue = currentWeight.value;
    const targetWeightValue = targetWeight.value;
    const weightDaysValue = weightDays.value;
    let weightOutput;
    let weightDifference = currentWeightValue - targetWeightValue;
    if(weightDifference < 0)
    {
        weightOutput = Math.round(weightDifference*-1/weightDaysValue*10)/10;
    }
    else
    {
        weightOutput = Math.round(weightDifference/weightDaysValue*10)/10;
    }
    const output = document.getElementById("outputValue");
    output.innerHTML = weightOutput;
}

const fetchButton = document.getElementById("fetch");
fetchButton.addEventListener('click',function(){
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
	.then(data => data.json())
	.then(response => mealInfo(response));

function mealInfo(response)
{
    const responseHTML = document.getElementById('randomMealOutput');
    console.log(response.meals[0]);
    responseHTML.innerHTML = `Name of Meal: ${response.meals[0].strMeal}`;
}

});