
// Weight Calculator Section

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
    output.textContent = weightOutput;
}

// Fetch Random Meal Section 

const fetchButton = document.getElementById("randomMealButton");
fetchButton.addEventListener('click',function(){
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
	.then(data => data.json())
	.then(response => mealInfo(response));

function mealInfo(response)
{
    const responseHTML = document.getElementById('randomMealOutput');
    console.log(response.meals[0]);
    responseHTML.textContent = `Name of Meal: ${response.meals[0].strMeal}`;
}
});

// Meal Selection Section

const mealButton = document.getElementById("mealButton");
mealButton.addEventListener('click',function()
{
    let mealSelection = document.getElementById('meals').value;
    console.log(mealSelection);
    let mealArray = [
        { meal: "Stir Fry", cuisine: "Asian" },
        { meal: "Burger", cuisine: "American" },
        { meal: "Pasta", cuisine: "Italian" },
        { meal: "Kabob", cuisine: "Mediterranean" },
        { meal: "Veggie Burger", cuisine: "Vegetarian" }
       ];
    const finalMealArray = mealArray.filter(filterMeals);
  
    function filterMeals(arr)
{
        if(arr.cuisine === mealSelection)
        {
            console.log(arr.meal);
        }
}
})

const workoutButton = document.getElementById("workoutButton");
workoutButton.addEventListener('click',function()
{
    let workoutSelection = document.getElementById('workouts').value;
    console.log(workoutSelection);
    let workoutArray = [
        { workout: "Barbell Squat", target: "Legs"},
        { workout: "Leg Press", target: "Legs" },
        { workout: "Calf Raises", target: "Legs"},
        { workout: "Romanian Deadlift", target: "Legs" },
        { workout: "Tricep Pulldown", target: "Arms" },
        { workout: "Bicep Curl", target: "Arms" },
        { workout: "Forearm Curls", target: "Arms" },
        { workout: "Flat Bench Press", target: "Chest" },
        { workout: "Incline Bench Press", target: "Chest" },
        { workout: "Cable Flys", target: "Chest" },
        { workout: "Decline Bench Press", target: "Chest" },
        { workout: "Shoulder Press", target: "Shoulders" },
        { workout: "Lateral Raises", target: "Shoulders" },
        { workout: "Rear Delt Flys", target: "Shoulders" },
        { workout: "Barbell Bent Over Row", target: "Back" },
        { workout: "Seated Row", target: "Back" },
        { workout: "Deadlift", target: "Back" },
        { workout: "Lat Pulldown", target: "Back" },
       ];
    const finalWorkoutArray = workoutArray.filter(filterWorkouts);
  
    function filterWorkouts(arr)
{
        if(arr.target === workoutSelection)
        {
            console.log(arr.workout);
        }
}
})



