var searchMeals=$('#searchMeals')
async function showMeals() {
    var data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    var result = await data.json();
    console.log(result.meals);

    var carotona = ``;
    for (let i = 0; i < result.meals.length; i++) {
        carotona += `
         <div class="col-md-3 my-3 ">
            <div class="meal-img">
                <div><img class='w-100' src=${result.meals[i].strMealThumb} alt=""></div>
                <div onclick="showMealDetails('${result.meals[i].idMeal}')" class="meal-layer fw-bolder d-flex align-items-center fs-3">${result.meals[i].strMeal}</div>
            </div>
          </div>
          `;
    }
    searchMeals.html(carotona);
}


async function showMealDetails(x){
    console.log(x);
    var data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x}`);
    var result = await data.json();
    console.log(result.meals[0]);
        let str=result.meals[0].strTags
        console.log(str,result.meals[0].idMeal);
        var tags=``
        if(str!=null){
            let arr=str.split(",");
            for(let i=0;i<arr.length;i++){
                tags+=`<button class='btn btn-light m-2'>${arr[i]}</button>`
            }
        }
      
        var recipesButtons=``
        for(let i=1;i<=20;i++){
                let a="strIngredient"+`${i}`;  
                let b="strMeasure"+`${i}`
                let x=`${result.meals[0][a]}`
                let y=`${result.meals[0][b]}`
                if(x!=""&& y!=""&&x!="null"&&y!="null"){{
                    recipesButtons+=`<button class="btn m-2 btn-info">${y} ${x}</button>`
                }}
                console.log(`${result.meals[0][a]}`);
              
        }

        var container=`<div class="container text-white" id="mealDetails">
        <div class="row">
            <div class="col-md-4">
                <img src=${result.meals[0].strMealThumb} class="w-100" alt="">
                <h2>${result.meals[0].strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>
                    ${result.meals[0].strInstructions}
                </p>
    
                <h3><span class="fw-bolder">Area :</span> ${result.meals[0].strArea}</h3>   
                <h3><span class="fw-bolder">Category :</span> ${result.meals[0].strCategory}</h3>
                <div >
                    <h3>Recipes :</h3>
                    <div id='recipes'>
                       ${recipesButtons}
                    </div>
                </div>
                
                <h3 class="py-4">Tags : </h3>
                <div class="my-2">
                ${tags}
                </div>
               
                <a href=${result.meals[0].strSource} class="btn btn-success my-3">Source</a>
                <a href=${result.meals[0].strYoutube} class="btn btn-danger my-3">youtube</a>
    
            </div>
        </div>
    </div>
    `

       
    $('#searchInputs').css("display","none")
   

    searchMeals.html(container);
}


showMeals()


let search=$('.search')
let category=$('.category')
let area=$(".area")
let ingredient=$('.ingredients')
let contact=$('.contact')


let w = $("#sideNav").width();
$('#xmark').click(function () {
    closeSideNav()
})

function openSideNav() {
    $("#sideNav").animate({ left: 0 }, 400)
    $("#open").animate({ left: w  }, 400)
    $("#xmark").attr("class","fa-solid open-close-icon fa-2x fa-x")
    search.animate({top: 0},700)
    category.animate({top: 0},550)
    area.animate({top: 0},400)
    ingredient.animate({top: 0},250)
    contact.animate({top: 0},100)
}
function closeSideNav() {
    $("#open").animate({ left: 0 }, 300)
    $('#sideNav').animate({ left: -w }, 300)
    $("#xmark").attr("class","fa-solid open-close-icon fa-2x fa-align-justify")
    $(".search").animate({ top: 200 }, 700);
    category.animate({ top: 200 }, 550);
    area.animate({ top: 200 }, 400);
    ingredient.animate({ top:200 }, 250);
    contact.animate({ top: 200 }, 100);
}
$("#open").click(function () {
    if ($('#sideNav').css('left') == 0+"px") {
        closeSideNav();
    } else {
        openSideNav()
    }
})

closeSideNav()
