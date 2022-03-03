const loadAllMeals = () =>{
    const mealUrl = (`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
    fetch(mealUrl)
    .then(res =>res.json())
    .then(data =>console.log(data.meals))
}

loadAllMeals()

const displayAllMeals = allMeal =>{
    console.log(allMeal)
}
