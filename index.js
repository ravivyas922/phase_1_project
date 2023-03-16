
//Header Underline Section

const head = document.getElementById("header");
head.addEventListener("mouseover",function()
    {
    head.style.textDecoration = "underline";
    }
);
head.addEventListener("mouseout",function()
    {
    head.style.textDecoration = "";
    }
);

// Weight Calculator Section

const form = document.getElementById('Calculator');
const currentWeight = document.getElementById("currentWeight");
const targetWeight = document.getElementById("targetWeight");
const weightDays = document.getElementById("weightDays");
form.addEventListener("submit",weightCalculation);

//Takes input values from the user and calculates the expected lbs to lose per day

function weightCalculation(e)
{
    e.preventDefault();
    const currentWeightValue = currentWeight.value;
    const targetWeightValue = targetWeight.value;
    const weightWeeksValue = weightWeeks.value;
    let weightOutput;
    let weightDifference = currentWeightValue - targetWeightValue;
    if(weightDifference < 0)
    {
        weightOutput = Math.round(weightDifference*-1/weightWeeksValue*10)/10;
    }
    else
    {
        weightOutput = Math.round(weightDifference/weightWeeksValue*10)/10;
    }
    const output = document.getElementById("outputValue");
    output.textContent = `Lbs to Gain/Lose Per Day: ${Math.round(weightOutput*10/7)/10}`;

}

// Meal Selection Section

const mealButton = document.getElementById("mealButton");
mealButton.addEventListener('click',function()
{
    const mealValue = document.getElementById("meals").value;
    fetch('http://localhost:3000/meals')
        .then(response => response.json())
        .then(data => 
            
        {
            console.log(data);
            const mealObject = data.filter(filterMeals);
            let mealAnchor= document.querySelector("a");
            mealAnchor.href = mealObject[0].youtube;
            let mealSelection = document.getElementById("mealSelection");
            mealSelection.innerHTML = `Meal: ${mealObject[0].name}`;
        }
            );


function filterMeals(arr)
{
    if(arr.cuisine == mealValue)
    {
        return true;
    }
    else
    {
        return false; 
    }
}
}
);




    //Attaches the Youtube link for the meal selected onto the web page
/*
    let mealAnchor= document.querySelector("a");
    mealAnchor.href = finalMealArray[0].youtube;
    let mealSelection = document.getElementById("mealSelection");
    mealSelection.innerHTML = `Meal: ${finalMealArray[0].meal}`;
    function filterMeals(arr)
{
        if(arr.cuisine === mealValue)
        {
            return true;
        }
        else
        {
            return false; 
        }
}
});
*/
// Fetch Random Meal Section 

const fetchButton = document.getElementById("randomMealButton");
fetchButton.addEventListener('click',function(){
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
	.then(response => response.json())
	.then(data => randomMealInfo(data));


    //Assigns HTML elements values from the database
function randomMealInfo(data)
{
    const randomMealCuisine = document.getElementById('randomMealCuisine');
    const randomMealOutput = document.getElementById('randomMealOutput');
    const randomMealSource = document.getElementById('randomMealSource');
    randomMealCuisine.innerHTML = `Meal Cuisine: ${data.meals[0].strArea}`;
    randomMealOutput.innerHTML = `Name of Meal: ${data.meals[0].strMeal}`;
    randomMealSource.innerHTML = `Meal Link: ${data.meals[0].strSource}`;
}
}
);

// Workout Selector Section

const workoutButton = document.getElementById("workoutButton");

//Array of Objects containing each workout and each target muscle group
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

    //Filters workouts based off the user selection and assigns them to elements on the webpage

    const finalWorkoutArray = workoutArray.filter(filterWorkouts);
    let workout1 = document.getElementById("workout1");
    let workout2 = document.getElementById("workout2");
    let workout3 = document.getElementById("workout3");
    let workout4 = document.getElementById("workout4");
    workout1.innerHTML = `Workout 1: ${finalWorkoutArray[0].workout}`;
    workout2.innerHTML = `Workout 2: ${finalWorkoutArray[1].workout}`;
    workout3.innerHTML = `Workout 3: ${finalWorkoutArray[2].workout}`;
    workout4.innerHTML = `Workout 4: ${finalWorkoutArray[3].workout}`;
    
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

 /*DOM Content Loaded
window.addEventListener('DOMContentLoaded', (event) => {
    alert('Click OK to Enter the Site');
});
*/

