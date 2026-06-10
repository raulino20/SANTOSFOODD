  let Arr= [];
 function addToCart(element) {


   // let item = document.getElementById(document.getElementsByName('card1')[0]);
    let FoodName = element.querySelector(".card h2").textContent;
    let paragraph = element.querySelector(".card p").textContent;
    let Price = element.querySelector(".card span").textContent;
     let ImgSrc = element.querySelector('.card img').src
    let Quantity = element.querySelector("input").value;


    if (Quantity <= 0) {

        alert("Por favor, insira uma quantidade válida.");
        return;
    }
    let UserChoice = {
        FoodName: FoodName,
        Description: paragraph,
        Price: Price,
        Quantity: Quantity,
        ImgSrc: ImgSrc
    }
 Arr.push(UserChoice);
    
let i =''; 
  Arr.forEach(UserChoice => {
    
    i += `Produto: ${UserChoice.FoodName}, Descrição: ${UserChoice.Description}, Preço: ${UserChoice.Price}\n, Quantidade: ${UserChoice.Quantity} IMG ${UserChoice.ImgSrc}\n`;
    return i;
  })

   alert(i);
    console.log(Arr);
    

  

    let Sucess = document.createElement('div')
    Sucess.classList.add('alert', 'alert-success')
    Sucess.innerText = 'PEDIDO ADICIONADO AO CARRINHO'
    Sucess.style.width = '100%'
    Sucess.style.height = 'auto'
    Sucess.style.display = 'block'
    Sucess.style.textAlign = 'center'
    Sucess.style.fontSize = '20px'
    Sucess.style.position = 'fixed'
    Sucess.style.top = '0'
    Sucess.style.zIndex = '9999'

   document.body.appendChild(Sucess)

   setTimeout(() => {
    Sucess.remove();
}, 2500);

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
    Div.style.display = 'column'
    Div.style.position = "fixed";
    Div.style.top = "50px";
    Div.style.marginTop = "20px";
    Div.style.width = "100%";
    Div.style.height = "400px";
    Div.style.backgroundColor = "#fff";
    Div.style.border = "1px solid #ed6125";
    Div.style.padding = "20px";
    Div.style.color = "#333";

    let H4 = document.createElement('h4')
    H4.innerText =  'Carrinho de Compras'
    H4.style.textAlign = 'Center'
    H4.style.backgroundColor = 'orange'
    H4.style.textDecoration = 'underline'
    H4.style.margin='0 auto'
    H4.style.width ='100%'

Div.appendChild(H4)
    


   
      let MiniDiv = document.createElement("div");
    
    Ul = document.createElement("ul");
    Ul.classList.add("list-group");

  Arr.forEach(UserChoice => {

    LB =document.createElement('label')

  let Finalizar = document.createElement('button')
  Finalizar.type ='submit'
  Finalizar.innerText = 'Fazer Pedido'
  Finalizar.style.bottom = '0'
  Finalizar.classList.add('btn','btn-success')

  Li = document.createElement("li");
  Li.classList.add('list-group-item')
  Li.style.display = 'flex'

  let Montagem = document.createElement('img')
  Montagem.src = UserChoice.ImgSrc
  Montagem.style.width= '100%'
  Montagem.style.height = '100%'


  Card = document.createElement('div')
  Card.classList.add('Card')
  Card.style.width ='80px'
  Card.style.height='80px'
 

    LB.innerHTML = `<i class="bi bi-clipboard"></i> Produto: ${ UserChoice.FoodName},</br> <i class="bi bi-list-task"></i> Descrição:  ${UserChoice.Description} </br> <i class="bi bi-currency-dollar"></i> Preço: ${UserChoice.Price} <br> Quantidade: ${UserChoice.Quantity} `;   
 
    Ul.appendChild(Li)  
    Li.appendChild(LB)
    Li.appendChild(Card)
    Card.appendChild(Montagem)
    Div.appendChild(Finalizar)
    LB.style.display= 'blcok'

})


 
    MiniDiv.style.backgroundColor = "#f3f3f3f";
    MiniDiv.style.display = "block";
 
   
    document.body.appendChild(Div);
    Div.appendChild(MiniDiv);
    MiniDiv.appendChild(Ul); 
   

    
    console.log(Arr)
   
    
})

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
