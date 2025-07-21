let tray = [];
const plate = document.getElementById("food__tray");
let totalPrice = 0;
let totalCalories = 0;
let dishes = [
    {
        name: "Frango Grelhado",
        category: "protein",
        calories: 165,
        serving: 100,
        price: 15.5,
        image: "./assets/proteins/chicken_breast_asset.jpg"
    },
    
    {
        name: "Bife Grelhado",
        category: "protein",
        calories: 275,
        serving: 100,
        price: 27.8,
        image: "./assets/proteins/grilled_steak_asset.jpg"
    },

   {
        name: "Ovo Frito",
        category: "protein",
        calories: 233,
        serving: 100,
        price: 1.8,
        image: "./assets/proteins/fried_egg_asset.jpg"
    },

    {
        name: "Peixe Grelhado",
        category: "protein",
        calories: 109,
        serving: 100,
        price: 25.8,
        image: "./assets/proteins/grilled_fish_asset.jpg"
    },

    {
        name: "Costela de Porco Grelhada",
        category: "protein",
        calories: 240,
        serving: 100,
        price: 19.8,
        image: "./assets/proteins/grilled_porkchop_asset.jpg"
    },


    {
        name: "Pão",
        category: "carb",
        calories: 30,
        serving: 50,
        price: 1.2,
        image: "./assets/carbs/bread_asset.png"
    },
    
    {
        name: "Arroz Cozido",
        category: "carb",
        calories: 130,
        serving: 100,
        price: 10.00,
        image: "./assets/carbs/rice_asset.png"
    },

    {
        name: "Batata Frita",
        category: "carb",
        calories: 312,
        serving: 100,
        price: 23.00,
        image: "./assets/carbs/french_fries_asset.png"
    },

    {
        name: "Batata Doce",
        category: "carb",
        calories: 77,
        serving: 100,
        price: 15.00,
        image: "./assets/carbs/sweet_potato_asset.png"
    },

    {
        name: "Chocolate ao Leite",
        category: "carb",
        calories: 53,
        serving: 10,
        price: 12.00,
        image: "./assets/carbs/chocolate_asset.png"
    },


    {
        name: "Beterraba Cozida",
        category: "vegg",
        calories: 44,
        serving: 100,
        price: 6.70,
        image: "./assets/veggies/beetroot_asset.png"
    },

    {
        name: "Couve Flor Cozida",
        category: "vegg",
        calories: 25,
        serving: 100,
        price: 8.70,
        image: "./assets/veggies/cauliflower_asset.png"
    },

    {
        name: "Pepino",
        category: "vegg",
        calories: 15,
        serving: 100 ,
        price: 5.40,
        image: "./assets/veggies/cucumber_asset.png"
    },

    {
        name: "Alface",
        category: "vegg",
        calories: 15,
        serving: 100,
        price: 3.40,
        image: "./assets/veggies/lettuce_asset.png"
    },

    {
        name: "Tomate",
        category: "vegg",
        calories: 18,
        serving: 100,
        price: 8.00,
        image: "./assets/veggies/tomato_asset.png"
    },


]


function renderCal () {
    calCount = document.getElementById("cal__counter");
    calCount.textContent = totalCalories + "kcal";
}

function renderPrice () {

    if (totalPrice < 0.005) {
        totalPrice = 0;
    }
    priceCount = document.getElementById("price__counter");
    priceCount.textContent = " R$" + totalPrice.toFixed(2);
}


//adiciona os ingredientes a pagina
for (let i = 0; i < dishes.length; i++) {

    if (dishes[i].category == "protein") {
        const proAdds = document.getElementById("pro__adds");

        const cell = document.createElement("section");
        cell.className = "dish__cell";

        const image = document.createElement("img");
        image.src = dishes[i].image;
        image.className = "pro__img";

        const name = document.createElement("span");
        name.textContent = dishes[i].name;
        name.className = "name";

        const id = document.createElement("div");
        id.className = "id";
            const calories = document.createElement("span");
            calories.textContent = dishes[i].calories +"kcal/" + dishes[i].serving + "g";

            const price = document.createElement("span");
            price.textContent = ("R$" + dishes[i].price)

            id.appendChild(calories);
            id.appendChild(price)


        proAdds.appendChild(cell)
        cell.appendChild(image);
        cell.appendChild(name);
        cell.appendChild(id)

        cell.onclick = () => addTray(dishes[i]);
        
    }

    if (dishes[i].category == "carb") {

        const carbAdds = document.getElementById("carb__adds");

        const cell = document.createElement("div");
        cell.className = "dish__cell";

        const image = document.createElement("img");
        image.src = dishes[i].image;
        image.className = "carb__img";

        const name = document.createElement("span");
        name.textContent = dishes[i].name;
        name.className = "name";

        const id = document.createElement("div");
        id.className = "id";
            const calories = document.createElement("span");
            calories.textContent = dishes[i].calories +"kcal/" + dishes[i].serving + "g";

            const price = document.createElement("span");
            price.textContent = ("R$" + dishes[i].price)

            id.appendChild(calories);
            id.appendChild(price)


        carbAdds.appendChild(cell)
        cell.appendChild(image);
        cell.appendChild(name);
        cell.appendChild(id)

        cell.onclick = () => addTray(dishes[i]);
    }

    if (dishes[i].category == "vegg") {

        const veggAdds = document.getElementById("vegg__adds");

        const cell = document.createElement("div");
        cell.className = "dish__cell";

        const image = document.createElement("img");
        image.src = dishes[i].image;
        image.className = "vegg__img";

        const name = document.createElement("span");
        name.textContent = dishes[i].name;
        name.className = "name";

        const id = document.createElement("div");
        id.className = "id";
            const calories = document.createElement("span");
            calories.textContent = dishes[i].calories +"kcal/" + dishes[i].serving + "g";

            const price = document.createElement("span");
            price.textContent = ("R$" + dishes[i].price)

            id.appendChild(calories);
            id.appendChild(price)


        veggAdds.appendChild(cell)
        cell.appendChild(image);
        cell.appendChild(name);
        cell.appendChild(id)
        
        cell.onclick = () => addTray(dishes[i]);
    }
    
} 

//adiciona a bandeija
function addTray(dishes) {
    tray.push(dishes);
    
    let amt = prompt("Quantas gramas?");
  


    //adiciona as imagens a tray 
    let ingredient = document.createElement("div")
    let ingredientImg = document.createElement("img")
    ingredientImg.src = dishes.image;
    ingredient.className = "plate__ingredient";
    ingredientImg.className = "ingredient__img"

    plate.appendChild(ingredient);
    ingredient.appendChild(ingredientImg);

    //calcula o total de calorias
    caloriesCalc(dishes, amt);

    //calcula o total de preço
    priceCalc(dishes, amt);
    
    //cria o botão de remover e chama a função com o click
    let removeButton = document.createElement("i");
    removeButton.className = "fa-solid fa-xmark";
    removeButton.onclick = () => removeTray(ingredient, dishes, plate, amt);
    ingredient.appendChild(removeButton);

    

}


function removeTray(ingredient, dishes, plate, amt) {

    tray.splice(dishes);
    plate.removeChild(ingredient)
    totalCalories = totalCalories - ((dishes.calories / dishes.serving) * amt);
    totalPrice = totalPrice - ((dishes.price/ dishes.serving) * amt);
    renderCal();
    renderPrice();


    
    
}

function caloriesCalc(dishes, amt) {
    dishCal = (dishes.calories / dishes.serving);
    dishCal = (dishCal * amt);
    totalCalories = (dishCal + totalCalories);
    renderCal();

    
}

function priceCalc(dishes, amt) {
    //calcula o valor proporcional a quantidade de cada prato 
    dishPrice = (dishes.price / dishes.serving);
    dishPrice = (dishPrice * amt);
    totalPrice = (dishPrice + totalPrice);
    console.log(totalPrice)
    renderPrice();
}


function trayCleaner() {
   plate.innerHTML = "";
   totalPrice = 0;
   totalCalories = 0;
   renderPrice();
   renderCal();
}
