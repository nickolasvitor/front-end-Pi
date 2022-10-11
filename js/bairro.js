let totalentupido = document.querySelector("#total-entupido");

let totalmonitorado = document.querySelector("#total-monitorados");

let bairroid = document.querySelector("#bairro");

let bairroid1 = document.querySelector("#bairro1");

var arrayMarkers=[];

addEventListener("load",function(){
    fetch('pages/bairros.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.data);

        response.data[0].bueiros.forEach(function(data) {
            console.log(data.rua);

        

        arrayMarkers.push({lat:""+data.lat+"",lng:""+data.lng+""});
        
      
        
        
      
    })
    let item = document.createElement("tot-e");
    let item1 = document.createElement("tot-m");

    let bairro = document.createElement("bairro-name");

    let bairro1 = document.createElement("bairro-name1");

    

    bairro.innerHTML = '<h2  class="h1-normal">'+response.data[0].name+'</h2>';
    bairro1.innerHTML = '<span  class="titulo-h2"> '+response.data[0].name+'</span>';
    

    item.innerHTML = '<span>'+response.data[0].bueiros.length+'</span>';

    item1.innerHTML = '<span>'+response.data[0].bueiros.length+'</span>';

    totalentupido.appendChild(item);

    totalmonitorado.appendChild(item1);

    bairroid.appendChild(bairro)
    bairroid1.appendChild(bairro1)

    putMarkers(arrayMarkers);
    })
})


/*let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

btn.addEventListener("click", function() {
  fetch('test.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      response.data.forEach(function(user) {
        let item = document.createElement("li");
        item.classList.add("item");
        
        item.innerHTML = '<img src="'+user.avatar+'" /><span>'+user.first_name+'</span>';
        
        list.appendChild(item);
      })
    })
})*/