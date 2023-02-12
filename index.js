
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
        { meal: "Udon Noodles", cuisine: "Asian", youtube: "https://www.youtube.com/watch?v=StwmhVL1Gso"},
        { meal: "Fried Chicken", cuisine: "American", youtube: "https://www.youtube.com/watch?v=Y7wJw5aBM-I" },
        { meal: "Burrito", cuisine: "Mexican", youtube: "https://www.youtube.com/watch?v=88WR2pkSwko"},
        { meal: "Chicken and Rice", cuisine: "Indian", youtube: "https://www.youtube.com/watch?v=qQq33CEzTic" },
        { meal: "Frittata", cuisine: "Breakfast", youtube: "https://www.youtube.com/watch?v=QIgHTm5bHlc"}
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
    let workoutArray = [
        { workout: "Barbell Squat", target: "Legs"},
        { workout: "Leg Press", target: "Legs" },
        { workout: "Calf Raises", target: "Legs"},
        { workout: "Romanian Deadlift", target: "Legs" },
        { workout: "Tricep Pulldown", target: "Arms" },
        { workout: "Dumbbell Tricep Extension", target: "Arms" },
        { workout: "Bicep Curl", target: "Arms" },
        { workout: "Forearm Curls", target: "Arms" },
        { workout: "Flat Bench Press", target: "Chest" },
        { workout: "Incline Bench Press", target: "Chest" },
        { workout: "Cable Flys", target: "Chest" },
        { workout: "Decline Bench Press", target: "Chest" },
        { workout: "Shoulder Press", target: "Shoulders" },
        { workout: "Lateral Raises", target: "Shoulders" },
        { workout: "Cable Front Raise", target: "Shoulders" },
        { workout: "Rear Delt Flys", target: "Shoulders" },
        { workout: "Barbell Bent Over Row", target: "Back" },
        { workout: "Seated Row", target: "Back" },
        { workout: "Deadlift", target: "Back" },
        { workout: "Lat Pulldown", target: "Back" },
       ];
    const finalWorkoutArray = workoutArray.filter(filterWorkouts);
    console.log(finalWorkoutArray);
    let workout1 = document.getElementById("workout1");
    let workout2 = document.getElementById("workout2");
    let workout3 = document.getElementById("workout3");
    let workout4 = document.getElementById("workout4");
    workout1.innerHTML = finalWorkoutArray[0].workout;
    workout2.innerHTML = finalWorkoutArray[1].workout;
    workout3.innerHTML = finalWorkoutArray[2].workout;
    workout4.innerHTML = finalWorkoutArray[3].workout;
    function filterWorkouts(arr)
{
        if(arr.target === workoutSelection)
        {
            return true;
        }
        else
        {
            return false;
        }      
}
})



