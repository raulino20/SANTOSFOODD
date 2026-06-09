    
    let Arr= [];
 function addToCart(element) {


   // let item = document.getElementById(document.getElementsByName('card1')[0]);
    let FoodName = element.querySelector(".card h2").textContent;
    let paragraph = element.querySelector(".card p").textContent;
    let Price = element.querySelector(".card span").textContent;
    //let InputValue = element.querySelector("input").value;
    let Quantity = element.querySelector("input").value;


    if (Quantity <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }
    let UserChoice = {
        FoodName: FoodName,
        Description: paragraph,
        Price: Price,
        Quantity: Quantity
    }
 Arr.push(UserChoice);
    
let i =''; 
  Arr.forEach(UserChoice => {
    
    i += `Produto: ${UserChoice.FoodName}, Descrição: ${UserChoice.Description}, Preço: ${UserChoice.Price}\n, Quantidade: ${UserChoice.Quantity}\n`;
    return i;
  })

   alert(i);
    console.log(Arr);
    

    return Arr;
  
}


document.getElementById("iconFloat").addEventListener("click", function() {

 // let Obj = getUserChoice = addToCart(document.querySelector(".card"));
  const DivExists = document.querySelector(".cart");
  if (DivExists) {
    DivExists.remove();
    return;
  }
  while(Arr.length <= 0){
alert("O carrinho está vazio");
break;
}
    let Div = document.createElement("div");
    

   
    Div.classList.add("cart");
    Div.style.position = "fixed";
    Div.style.top = "50px";
    Div.style.marginTop = "20px";
    Div.style.width = "100%";
    Div.style.height = "400px";
    Div.style.backgroundColor = "#fff";
    Div.style.border = "1px solid #ed6125";
    Div.style.padding = "20px";
    Div.style.color = "#333";
    Div.textContent = "Carrinho de Compras"; 
    
       


   
      let MiniDiv = document.createElement("div");
    
    Ul = document.createElement("ul");
    Ul.classList.add("list-group");


  Arr.forEach(UserChoice => {

  Icon = document.createElement('i')
  Icon.classList.add("bi", "bi-search");
 

  Li = document.createElement("li");
  Li.classList.add("list-group-item");

    Li.innerText = `${Icon} Produto: ${ UserChoice.FoodName},\n Descrição: ${UserChoice.Description}, Preço: ${UserChoice.Price}\n, Quantidade: ${UserChoice.Quantity}`;
  
 Ul.appendChild(Li);
  })



    MiniDiv.style.backgroundColor = "gray";
    MiniDiv.style.display = "block";
 
    document.body.appendChild(Div);
    Div.appendChild(MiniDiv);
    MiniDiv.appendChild(Ul);
    document.body.appendChild(Div);
    

    
    console.log(Arr)
   
    
})

/*document.getElementById("PressKey").addEventListener("click", function() {

  CNC.setAttribute( 'show', ' d-block');

})
*/
let CloseBtn = document.querySelectorAll(".LinkNavCel");

CloseBtn.forEach(btn => {
  btn.addEventListener("click", function() {
  
  let CNC = document.querySelector(".CNC");
  CNC.classList.remove('show');    
  
  })
})

  //  element.children..........value
  //  let FoodName = document.getElementById("c1").value; 
  //   // Texto.appendChild(document.createTextNode(Info))