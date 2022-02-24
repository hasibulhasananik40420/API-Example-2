 const foodField = () =>{
     const inputField = document.getElementById('input-field')
     const inputText = inputField.value
  console.log(inputText)
     inputField.value =''
     //show a error massage
     if(inputText == ''){
       const noResult = document.getElementById('noresult')
       const div = document.createElement('div')
        div.innerHTML = `
        <h3>No result found</h3>
        `
        noResult.appendChild(div)
     }
     else{
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
      fetch(url)
      .then(Response => Response.json())
      .then(data=> displayFood(data.meals))
  
     }
 }

  const displayFood = (meals) =>{
    // console.log(meals)
    const cardBody = document.getElementById('card-body')
    cardBody.innerHTML = ''
     //show no found result
      // if(meals.length == 0){
      //   const noResult = document.getElementById('noresult')
      //   const div = document.createElement('div')
      //    div.innerHTML= `
      //     <h3> no result found </h3>
      //    `
      //    noResult.appendChild(div)
      // }

    for(const meal of meals){
        console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick= "loadDisplayMeal(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
      </div>
        
        `
        cardBody.appendChild(div)
    }
  }

  const loadDisplayMeal = mealId =>{
    console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(Response => Response.json())
    .then(data => displayMealDetails(data.meals[0]))
  }

  const displayMealDetails = meal =>{
    console.log(meal)

    const mealDetails = document.getElementById('meal-details')
     mealDetails.innerHTML =''   // mealDetails.textContent =''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go Details</a>
    </div>

    `
    mealDetails.appendChild(div)
  }