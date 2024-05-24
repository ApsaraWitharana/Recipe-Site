let trends = document.querySelectorAll(".trends");
let button = document.querySelectorAll(".cart");
let  cards = document.querySelectorAll(".card");

let count = 0;

trends.forEach((curElem, index)=>{
    curElem.style.left=`${index*100}%`;
})


const myFood  = ( ) =>{
    trends.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count * 100}%)`
    })
     
}

setInterval(()=>{
    count++;
    if(count == trends.length){
        count=0
    }
    myFood()
},4000)

// cart
button.forEach((curBtn)=>{
    curBtn.addEventListener("click", function(){
        alert("Added To Cart")
    })
})


// card detail
cards.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h1>Fresh Foods</h1>
        <h3>Ingredients</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pizza dough</td>
                            <td>1 ball</td>
                        </tr>
                        <tr>
                            <td>Tomato sauce</td>
                            <td>1 cup</td>
                        </tr>
                        <tr>
                            <td>Mozzarella cheese</td>
                            <td>2 cups, shredded</td>
                        </tr>
                        <tr>
                            <td>Pepperoni</td>
                            <td>1 cup, sliced</td>
                        </tr>
                        <tr>
                            <td>Olive oil</td>
                            <td>2 tablespoons</td>
                        </tr>
                        <tr>
                            <td>Fresh basil</td>
                            <td>1/4 cup, chopped</td>
                        </tr>
                        <tr>
                            <td>Salt</td>
                            <td>to taste</td>
                        </tr>
                    </tbody>
                </table>

        `
        document.querySelector("body").appendChild(div)
        document.getElementById("icon").addEventListener("click", function(){
            div.remove();
        })
    })
})