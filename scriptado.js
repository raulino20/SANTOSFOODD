AOS.init();

/// HAMBURGUER
let HAM = document.getElementById('Ham')
HAM.addEventListener('click',function(){
    let Div1 = document.getElementById('sessionP')
    let Div2 = document.getElementById('sessionL')

    Div1.classList.add('d-none')
    Div2.classList.remove('d-none')
    Div2.classList.add('d-block')
})


/// PASTEIS
let Switch = document.getElementById('Switch')

Switch.addEventListener('click',function(){
let Div1 = document.getElementById('sessionP')
let Div2 = document.getElementById('sessionL')


Div2.classList.remove('d-block')
Div2.classList.add('d-none')
Div1.classList.remove('d-none')
})














function CloseNav(){
  let Nav = document.getElementById('menuNav')

  Nav.classList.toggle('show')
  

}

    let Arr= [];     
    let Indice = document.getElementById('NumList')

 function addToCart(element) {

   // let item = document.getElementById(document.getElementsByName('card1')[0]);
    let FoodName = element.querySelector(".card h2").textContent;
    let paragraph = element.querySelector(".card p").textContent;
    let Price = element.querySelector(".card span").textContent;
    Price = parseFloat(
      Price
      .replace("R$","")
      .replace(',','.')
      .trim()
    
    )
    let IconFloat = document.getElementById('iconFloat')
    let ImgSrc = element.querySelector('.card img').src
    let Quantity = element.querySelector("input").value;
   


    if (Quantity <= 0) {

        alert("Por favor, insira uma quantidade válida.");
        return;
    }
     Quantity = parseFloat(Quantity)
    let UserChoice = {
        FoodName: FoodName,
        Description: paragraph,
        Price: Price,
        Quantity: Quantity,
        ImgSrc: ImgSrc,
        Total: Price * Quantity
    }
    
 Arr.push(UserChoice);

 let i =''; 
  Arr.forEach(UserChoice => {
    
    i += `Produto: ${UserChoice.FoodName},\n Descrição: ${UserChoice.Description}\n, Preço: ${UserChoice.Price}\n, Quantidade: ${UserChoice.Quantity}\n IMG ${UserChoice.ImgSrc} VALOOR:${UserChoice.Total}\n`;
    return i;
  }) 

   element.querySelector("input").value = ''
   
 //////////// PEDIDO DESCARTADO //////////////////////
console.log(i)
  let Choice = confirm(i);
  if(Choice === false ){
   Arr.pop(UserChoice)
    let Unsucess = document.createElement('div')
    Unsucess.classList.add('alert', 'alert-warning')
    Unsucess.innerText = 'PEDIDO DESCARTADO'
    Unsucess.style.width = '100%'
    Unsucess.style.height = 'auto'
    Unsucess.style.marginTop = '5rem'
    Unsucess.style.display = 'block'
    Unsucess.style.textAlign = 'center'
    Unsucess.style.fontSize = '20px'
    Unsucess.style.position = 'fixed'
    Unsucess.style.top = '0'
    Unsucess.style.zIndex = '9999'
    document.body.appendChild(Unsucess)
//
    setTimeout(() => {
      Unsucess.remove()
    },2500)
  

   console.log(Arr)
  }else{
    console.log(Arr);
      

    let Sucess = document.createElement('div')
    Sucess.classList.add('alert', 'alert-success')
    Sucess.innerText = 'PEDIDO ADICIONADO AO CARRINHO'
    Sucess.style.width = '100%'
    Sucess.style.height = 'auto'
    Sucess.style.marginTop ='5rem'
    Sucess.style.display = 'block'
    Sucess.style.textAlign = 'center'
    Sucess.style.fontSize = '20px'
    Sucess.style.position = 'fixed'
    Sucess.style.top = '0'
    Sucess.style.zIndex = '9999'

   document.body.appendChild(Sucess)
//
   setTimeout(() => {
    Sucess.remove();
}, 2500);

let I = ''
Arr.forEach(I => {
  Arr.length
  I = Arr.length

  Indice.innerText = I
  console.log(I)

})
 //sessionStorage.setItem('Valor',Arr[UserChoice.R])

  }
 }


document.getElementById("iconFloat").addEventListener("click", function() {

//  setTimeout(() => {
//  document.style.scale = '1.5'
//  document.style.transition = '3s'
//},1000)

  let Icon = document.getElementById('iconFloat')
  let Div = document.getElementById("storage");
  let X = document.getElementById('Exit')
  let On = document.getElementById('On')

  if(this.classList.contains('span')){
    On.classList.remove('d-none')  
    X.classList.add('show')
  }else{
    X.classList.remove('show')
    On.classList.add('d-none')
  }
  
  Div.classList.remove('show')
  let Xbtn = document.createElement('button')
  Xbtn.type='submit'
  Xbtn.classList.add('btn', 'btn-danger')
  Xbtn.style.right = '0'
  Xbtn.style.marginRight='auto'
  Xbtn.innerText = 'Excluir itens'

    // Limpa o conteúdo antigo para não duplicar
    Div.innerHTML = "";

    // Título
    let H4 = document.createElement("h4");
    H4.innerText = "Carrinho de Compras";

    H4.style.textAlign = "center";
    H4.style.backgroundColor = "orange";
    H4.style.textDecoration = "underline";
    H4.style.margin = "0 auto";
    H4.style.width = "100%";

    Div.appendChild(H4);

    // Carrinho vazio
    if (Arr.length === 0) {

        let Empty = document.createElement("img");

        Empty.src = "Santosfiles/Carrinhovazio.png";
        Empty.style.width = "150px";
        Empty.style.height = "150px";
        Empty.style.display = "block";
        Empty.style.margin = "20px auto";

        Div.appendChild(Empty);

    }

    ////////////// Lista ///////////////

    let Ul = document.createElement("ul");
    Ul.classList.add("list-group");
    Ul.classList.add('h-75')
    Ul.style.border= '3px solid orange'
   // Ul.classList.add()
    Ul.classList.add('overflow-scroll')

    Arr.forEach(UserChoice => {

        let Li = document.createElement("li");
        Li.classList.add("list-group-item");
        Li.style.display = "flex";

        let LB = document.createElement("label");

        LB.innerHTML = `
            <i class="bi bi-clipboard"></i> Produto: ${UserChoice.FoodName}<br>
            <i class="bi bi-list-task"></i> Descrição: ${UserChoice.Description}<br>
            <i class="bi bi-currency-dollar"></i> Preço: ${UserChoice.Price}<br>
            Quantidade: ${UserChoice.Quantity}
        `;

        let Card = document.createElement("div");
        Card.classList.add("Card");
        Card.style.width = "50%";
        Card.style.height = "50%";

 

        let Img = document.createElement("img");
        Img.src = UserChoice.ImgSrc;
        Img.style.width = "100%";
        Img.style.height = "max-content";

       let Span = document.createElement('span')

 
        Card.appendChild(Img);
       
        Li.appendChild(LB);
        Li.style.borderBottom ='2px solid rgb(180, 180, 180)'
        Li.style.marginBottom = '0.2rem'
        Li.appendChild(Card);
        Ul.appendChild(Li);
    
    });


    Div.appendChild(Ul);
    

  let Finalizar = document.createElement('button')
  Finalizar.type ='submit'
  Finalizar.id='Finalizar'
  Finalizar.innerText = 'Fazer Pedido'
  Finalizar.style.bottom = '0'
  Finalizar.classList.add('btn','btn-success')

let Total = Arr.reduce((Soma,UserChoice) => {
  return Soma + (UserChoice.Price * UserChoice.Quantity)
},0)
    
///// ARRUMAR VALOR FINAL NO WHATSAPP ////////


  let Valor = document.createElement('h3')
  Valor.innerText = `TOTAL : R$ ${Total.toFixed(2)}` 
  Valor.style.marginTop='0.5rem'
  Valor.style.marginBottom = '0.5rem'
  Valor.style.marginLeft='1rem'
    

    Div.appendChild(Valor)
    Div.appendChild(Finalizar)
    Div.appendChild(Xbtn)


  Finalizar.addEventListener('click',function(){
    if(Arr.length <= 0){
      alert('Não há itens para finalizar o pedido')
    }else{
        
    let Lanche = Arr.map(UserChoice => {
        return `🍔 Produto: ${UserChoice.FoodName},%0A📝 Descrição: ${UserChoice.Description},%0A💲 Preço(UNI) : ${UserChoice.Price},%0A🔢 Quantidade: ${UserChoice.Quantity},%0A💵 Valor: ${UserChoice.Total} %0A %0A`;
      });
      console.log(Lanche)
      console.log(Lanche.join('%0A'));

        
    let  Resultado = Lanche 

    // VALOR TOTAL: ${Total.toFixed(2)} %0A

   // function enviarWhatsApp(Finalizar) {
            // Substitua pelo número de telefone desejado (com código do país e DDD, sem símbolos)
           // const numeroTelefone = "5511965404572"; 
            
            // Captura os valores digitados nos inputs
        //    const nome = 'Humano'
        ///    const mensagem = ''
        
            // Formata a mensagem que será enviada
       //   const textoCompleto = `Olá Usuario, Informações adicionais:. Segue o pedido:\n\n${Resultado}`;
            
            // Codifica o texto para formato de URL
         //   const urlEncoded = encodeURIComponent(textoCompleto);
            
            // Monta o link final da API do WhatsApp
            const urlWhatsApp = `https://wa.me/${5511965404572}?text=${Resultado + `💰 VALOR TOTAL: ${Total.toFixed(3)}`}`;
            
            // Abre o WhatsApp com o link formatado
            window.open(urlWhatsApp, '_blank');
     }
   // }
  })
  
   /////////// APAGA ITENS DO CARRINHO ///////////////////// 
   
Xbtn.addEventListener('click',function(){
if(Arr.length <= 0){
alert('Não há itens para serem descartados')

}else{

let Eclusão = confirm('Todos os itens serão excluidos, deseja continuar ?')
  
if(Eclusão){
  Arr.splice(0,Arr.length)
  Div.innerText = ''
  console.log(Arr)
  Indice.innerText='0'
  let Exclusao = document.createElement('div')
  Exclusao.classList.add('alert', 'alert-danger')
    Exclusao.innerText = 'PEDIDO(S) REMOVIDO(S)'
    Exclusao.style.width = '100%'
    Exclusao.style.height = 'auto'
    Exclusao.style.marginTop ='5rem'
    Exclusao.style.display = 'block'
    Exclusao.style.textAlign = 'center'
    Exclusao.style.fontSize = '20px'
    Exclusao.style.position = 'fixed'
    Exclusao.style.top = '0'
    Exclusao.style.zIndex = '9999'

    document.body.appendChild(Exclusao)

    setTimeout(()=>{
      Exclusao.remove()
    },2500)

  console.warn('Itens descartados')
  Div.classList.remove('show')
  location.reload()
  }
 }
})
   
 

let CloseBtn = document.querySelectorAll(".LinkNavCel");

CloseBtn.forEach(btn => {
  btn.addEventListener("click", function() {
  
  let CNC = document.querySelector(".CNC");
  CNC.classList.remove('show');    
    })
  })
})





  //  element.children..........value
  //  let FoodName = document.getElementById("c1").value; 
  //   // Texto.appendChild(document.createTextNode(Info))*/
