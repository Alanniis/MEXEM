
//SELECCIÓN EN LA LISTA

document.getElementById('caja-termica').addEventListener('click', function(){
        
    document.getElementById('slider-caja-termica').style.display = 'flex';
    document.getElementById('slider-tortilleros').style.display = 'none';
    
    opcion_mostrador_alimentos(1);
});

document.getElementById('tortillero').addEventListener('click', function(){
        
    document.getElementById('slider-caja-termica').style.display = 'none';
    document.getElementById('slider-tortilleros').style.display = 'flex';
    
    opcion_mostrador_alimentos(2);
});

//CAJA TÉRMICA
document.getElementById('imagen-1-caja-termica').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-1-caja-termica').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen1-caja-termica').innerText;
   let texto_2 = document.getElementById('texto2-imagen1-caja-termica').innerText;
   let texto_3 = document.getElementById('texto3-imagen1-caja-termica').innerText; 

   
   //Añadimos la información con nuevos nodos
   //TEXTO 1
   const parent1 = document.getElementById('texto-1');
   const child1 = document.getElementById('nodo-hijo-1');
   const throwawayNode1 = parent1.removeChild(child1);
   const nuevo_contenedor_1 = document.createElement("span");
   nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
   let nuevo_texto_1 =  document.createTextNode(texto_1);
   nuevo_contenedor_1.appendChild(nuevo_texto_1);
   parent1.appendChild(nuevo_contenedor_1);

   //TEXTO 2

   const parent2 = document.getElementById('texto-2');
   const child2 = document.getElementById('nodo-hijo-2');
   const throwawayNode2 = parent2.removeChild(child2);
   const nuevo_contenedor_2 = document.createElement("span");
   nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
   let nuevo_texto_2 =  document.createTextNode(texto_2);
   nuevo_contenedor_2.appendChild(nuevo_texto_2);
   parent2.appendChild(nuevo_contenedor_2);

   //TEXTO 3
   const parent3 = document.getElementById('texto-3');
     const child3 = document.getElementById('nodo-hijo-3');
     const throwawayNode3 = parent3.removeChild(child3);
     const nuevo_contenedor_3 = document.createElement("span");
     nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
     let nuevo_texto_3 =  document.createTextNode(texto_3);
     nuevo_contenedor_3.appendChild(nuevo_texto_3);
     parent3.appendChild(nuevo_contenedor_3);
});

document.getElementById('imagen-2-caja-termica').addEventListener('click',function (){
 
 let imagen_nueva = document.getElementById('imagen-2-caja-termica').src;
document.getElementById('imagen-mostrador').src = imagen_nueva; 
  
  //Obtenemos la información de los textos de las imágenes
  let texto_1 = document.getElementById('texto1-imagen2-caja-termica').innerText;
  let texto_2 = document.getElementById('texto2-imagen2-caja-termica').innerText;
  let texto_3 = document.getElementById('texto3-imagen2-caja-termica').innerText; 

  
  //Añadimos la información con nuevos nodos
  //TEXTO 1
  const parent1 = document.getElementById('texto-1');
  const child1 = document.getElementById('nodo-hijo-1');
  const throwawayNode1 = parent1.removeChild(child1);
  const nuevo_contenedor_1 = document.createElement("span");
  nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
  let nuevo_texto_1 =  document.createTextNode(texto_1);
  nuevo_contenedor_1.appendChild(nuevo_texto_1);
  parent1.appendChild(nuevo_contenedor_1);

  //TEXTO 2

  const parent2 = document.getElementById('texto-2');
  const child2 = document.getElementById('nodo-hijo-2');
  const throwawayNode2 = parent2.removeChild(child2);
  const nuevo_contenedor_2 = document.createElement("span");
  nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
  let nuevo_texto_2 =  document.createTextNode(texto_2);
  nuevo_contenedor_2.appendChild(nuevo_texto_2);
  parent2.appendChild(nuevo_contenedor_2);

   //TEXTO 3
   const parent3 = document.getElementById('texto-3');
     const child3 = document.getElementById('nodo-hijo-3');
     const throwawayNode3 = parent3.removeChild(child3);
     const nuevo_contenedor_3 = document.createElement("span");
     nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
     let nuevo_texto_3 =  document.createTextNode(texto_3);
     nuevo_contenedor_3.appendChild(nuevo_texto_3);
     parent3.appendChild(nuevo_contenedor_3);
});

document.getElementById('imagen-3-caja-termica').addEventListener('click',function (){
 
 let imagen_nueva = document.getElementById('imagen-3-caja-termica').src;
document.getElementById('imagen-mostrador').src = imagen_nueva; 
  
  //Obtenemos la información de los textos de las imágenes
  let texto_1 = document.getElementById('texto1-imagen3-caja-termica').innerText;
  let texto_2 = document.getElementById('texto2-imagen3-caja-termica').innerText;
  let texto_3 = document.getElementById('texto3-imagen3-caja-termica').innerText;  

  
  //Añadimos la información con nuevos nodos
  //TEXTO 1
  const parent1 = document.getElementById('texto-1');
  const child1 = document.getElementById('nodo-hijo-1');
  const throwawayNode1 = parent1.removeChild(child1);
  const nuevo_contenedor_1 = document.createElement("span");
  nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
  let nuevo_texto_1 =  document.createTextNode(texto_1);
  nuevo_contenedor_1.appendChild(nuevo_texto_1);
  parent1.appendChild(nuevo_contenedor_1);

  //TEXTO 2

  const parent2 = document.getElementById('texto-2');
  const child2 = document.getElementById('nodo-hijo-2');
  const throwawayNode2 = parent2.removeChild(child2);
  const nuevo_contenedor_2 = document.createElement("span");
  nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
  let nuevo_texto_2 =  document.createTextNode(texto_2);
  nuevo_contenedor_2.appendChild(nuevo_texto_2);
  parent2.appendChild(nuevo_contenedor_2);

   //TEXTO 3
   const parent3 = document.getElementById('texto-3');
     const child3 = document.getElementById('nodo-hijo-3');
     const throwawayNode3 = parent3.removeChild(child3);
     const nuevo_contenedor_3 = document.createElement("span");
     nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
     let nuevo_texto_3 =  document.createTextNode(texto_3);
     nuevo_contenedor_3.appendChild(nuevo_texto_3);
     parent3.appendChild(nuevo_contenedor_3);
});



//TORTILLEROS
document.getElementById('imagen-1-tortilleros').addEventListener('click',function (){
   
    let imagen_nueva = document.getElementById('imagen-1-tortilleros').src;
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-tortilleros').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-tortilleros').innerText;
     let texto_3 = document.getElementById('texto3-imagen1-tortilleros').innerText; 
 
     
     //Añadimos la información con nuevos nodos
     //TEXTO 1
     const parent1 = document.getElementById('texto-1');
     const child1 = document.getElementById('nodo-hijo-1');
     const throwawayNode1 = parent1.removeChild(child1);
     const nuevo_contenedor_1 = document.createElement("span");
     nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
     let nuevo_texto_1 =  document.createTextNode(texto_1);
     nuevo_contenedor_1.appendChild(nuevo_texto_1);
     parent1.appendChild(nuevo_contenedor_1);
 
     //TEXTO 2
 
     const parent2 = document.getElementById('texto-2');
     const child2 = document.getElementById('nodo-hijo-2');
     const throwawayNode2 = parent2.removeChild(child2);
     const nuevo_contenedor_2 = document.createElement("span");
     nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
     let nuevo_texto_2 =  document.createTextNode(texto_2);
     nuevo_contenedor_2.appendChild(nuevo_texto_2);
     parent2.appendChild(nuevo_contenedor_2);

      //TEXTO 3
      const parent3 = document.getElementById('texto-3');
      const child3 = document.getElementById('nodo-hijo-3');
      const throwawayNode3 = parent3.removeChild(child3);
      const nuevo_contenedor_3 = document.createElement("span");
      nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
      let nuevo_texto_3 =  document.createTextNode(texto_3);
      nuevo_contenedor_3.appendChild(nuevo_texto_3);
      parent3.appendChild(nuevo_contenedor_3);
 });

 document.getElementById('imagen-2-tortilleros').addEventListener('click',function (){
   
    let imagen_nueva = document.getElementById('imagen-2-tortilleros').src;
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen2-tortilleros').innerText;
     let texto_2 = document.getElementById('texto2-imagen2-tortilleros').innerText;
     let texto_3 = document.getElementById('texto3-imagen2-tortilleros').innerText; 
 
     
     //Añadimos la información con nuevos nodos
     //TEXTO 1
     const parent1 = document.getElementById('texto-1');
     const child1 = document.getElementById('nodo-hijo-1');
     const throwawayNode1 = parent1.removeChild(child1);
     const nuevo_contenedor_1 = document.createElement("span");
     nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
     let nuevo_texto_1 =  document.createTextNode(texto_1);
     nuevo_contenedor_1.appendChild(nuevo_texto_1);
     parent1.appendChild(nuevo_contenedor_1);
 
     //TEXTO 2
 
     const parent2 = document.getElementById('texto-2');
     const child2 = document.getElementById('nodo-hijo-2');
     const throwawayNode2 = parent2.removeChild(child2);
     const nuevo_contenedor_2 = document.createElement("span");
     nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
     let nuevo_texto_2 =  document.createTextNode(texto_2);
     nuevo_contenedor_2.appendChild(nuevo_texto_2);
     parent2.appendChild(nuevo_contenedor_2);

      //TEXTO 3
      const parent3 = document.getElementById('texto-3');
      const child3 = document.getElementById('nodo-hijo-3');
      const throwawayNode3 = parent3.removeChild(child3);
      const nuevo_contenedor_3 = document.createElement("span");
      nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
      let nuevo_texto_3 =  document.createTextNode(texto_3);
      nuevo_contenedor_3.appendChild(nuevo_texto_3);
      parent3.appendChild(nuevo_contenedor_3);
 });

 document.getElementById('imagen-3-tortilleros').addEventListener('click',function (){
   
    let imagen_nueva = document.getElementById('imagen-3-tortilleros').src;
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen3-tortilleros').innerText;
     let texto_2 = document.getElementById('texto2-imagen3-tortilleros').innerText;
     let texto_3 = document.getElementById('texto3-imagen3-tortilleros').innerText; 
 
     
     //Añadimos la información con nuevos nodos
     //TEXTO 1
     const parent1 = document.getElementById('texto-1');
     const child1 = document.getElementById('nodo-hijo-1');
     const throwawayNode1 = parent1.removeChild(child1);
     const nuevo_contenedor_1 = document.createElement("span");
     nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
     let nuevo_texto_1 =  document.createTextNode(texto_1);
     nuevo_contenedor_1.appendChild(nuevo_texto_1);
     parent1.appendChild(nuevo_contenedor_1);
 
     //TEXTO 2
 
     const parent2 = document.getElementById('texto-2');
     const child2 = document.getElementById('nodo-hijo-2');
     const throwawayNode2 = parent2.removeChild(child2);
     const nuevo_contenedor_2 = document.createElement("span");
     nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
     let nuevo_texto_2 =  document.createTextNode(texto_2);
     nuevo_contenedor_2.appendChild(nuevo_texto_2);
     parent2.appendChild(nuevo_contenedor_2);

      //TEXTO 3
      const parent3 = document.getElementById('texto-3');
      const child3 = document.getElementById('nodo-hijo-3');
      const throwawayNode3 = parent3.removeChild(child3);
      const nuevo_contenedor_3 = document.createElement("span");
      nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
      let nuevo_texto_3 =  document.createTextNode(texto_3);
      nuevo_contenedor_3.appendChild(nuevo_texto_3);
      parent3.appendChild(nuevo_contenedor_3);
 });

 document.getElementById('imagen-4-tortilleros').addEventListener('click',function (){
   
  let imagen_nueva = document.getElementById('imagen-4-tortilleros').src;
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen4-tortilleros').innerText;
   let texto_2 = document.getElementById('texto2-imagen4-tortilleros').innerText;
   let texto_3 = document.getElementById('texto3-imagen4-tortilleros').innerText; 

   
   //Añadimos la información con nuevos nodos
   //TEXTO 1
   const parent1 = document.getElementById('texto-1');
   const child1 = document.getElementById('nodo-hijo-1');
   const throwawayNode1 = parent1.removeChild(child1);
   const nuevo_contenedor_1 = document.createElement("span");
   nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
   let nuevo_texto_1 =  document.createTextNode(texto_1);
   nuevo_contenedor_1.appendChild(nuevo_texto_1);
   parent1.appendChild(nuevo_contenedor_1);

   //TEXTO 2

   const parent2 = document.getElementById('texto-2');
   const child2 = document.getElementById('nodo-hijo-2');
   const throwawayNode2 = parent2.removeChild(child2);
   const nuevo_contenedor_2 = document.createElement("span");
   nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
   let nuevo_texto_2 =  document.createTextNode(texto_2);
   nuevo_contenedor_2.appendChild(nuevo_texto_2);
   parent2.appendChild(nuevo_contenedor_2);

    //TEXTO 3
    const parent3 = document.getElementById('texto-3');
    const child3 = document.getElementById('nodo-hijo-3');
    const throwawayNode3 = parent3.removeChild(child3);
    const nuevo_contenedor_3 = document.createElement("span");
    nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
    let nuevo_texto_3 =  document.createTextNode(texto_3);
    nuevo_contenedor_3.appendChild(nuevo_texto_3);
    parent3.appendChild(nuevo_contenedor_3);
});

document.getElementById('imagen-5-tortilleros').addEventListener('click',function (){
   
  let imagen_nueva = document.getElementById('imagen-5-tortilleros').src;
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen5-tortilleros').innerText;
   let texto_2 = document.getElementById('texto2-imagen5-tortilleros').innerText;
   let texto_3 = document.getElementById('texto3-imagen5-tortilleros').innerText; 

   
   //Añadimos la información con nuevos nodos
   //TEXTO 1
   const parent1 = document.getElementById('texto-1');
   const child1 = document.getElementById('nodo-hijo-1');
   const throwawayNode1 = parent1.removeChild(child1);
   const nuevo_contenedor_1 = document.createElement("span");
   nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
   let nuevo_texto_1 =  document.createTextNode(texto_1);
   nuevo_contenedor_1.appendChild(nuevo_texto_1);
   parent1.appendChild(nuevo_contenedor_1);

   //TEXTO 2

   const parent2 = document.getElementById('texto-2');
   const child2 = document.getElementById('nodo-hijo-2');
   const throwawayNode2 = parent2.removeChild(child2);
   const nuevo_contenedor_2 = document.createElement("span");
   nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
   let nuevo_texto_2 =  document.createTextNode(texto_2);
   nuevo_contenedor_2.appendChild(nuevo_texto_2);
   parent2.appendChild(nuevo_contenedor_2);

    //TEXTO 3
    const parent3 = document.getElementById('texto-3');
    const child3 = document.getElementById('nodo-hijo-3');
    const throwawayNode3 = parent3.removeChild(child3);
    const nuevo_contenedor_3 = document.createElement("span");
    nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
    let nuevo_texto_3 =  document.createTextNode(texto_3);
    nuevo_contenedor_3.appendChild(nuevo_texto_3);
    parent3.appendChild(nuevo_contenedor_3);
});

document.getElementById('imagen-6-tortilleros').addEventListener('click',function (){
   
  let imagen_nueva = document.getElementById('imagen-6-tortilleros').src;
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen6-tortilleros').innerText;
   let texto_2 = document.getElementById('texto2-imagen6-tortilleros').innerText;
   let texto_3 = document.getElementById('texto3-imagen6-tortilleros').innerText; 

   
   //Añadimos la información con nuevos nodos
   //TEXTO 1
   const parent1 = document.getElementById('texto-1');
   const child1 = document.getElementById('nodo-hijo-1');
   const throwawayNode1 = parent1.removeChild(child1);
   const nuevo_contenedor_1 = document.createElement("span");
   nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
   let nuevo_texto_1 =  document.createTextNode(texto_1);
   nuevo_contenedor_1.appendChild(nuevo_texto_1);
   parent1.appendChild(nuevo_contenedor_1);

   //TEXTO 2

   const parent2 = document.getElementById('texto-2');
   const child2 = document.getElementById('nodo-hijo-2');
   const throwawayNode2 = parent2.removeChild(child2);
   const nuevo_contenedor_2 = document.createElement("span");
   nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
   let nuevo_texto_2 =  document.createTextNode(texto_2);
   nuevo_contenedor_2.appendChild(nuevo_texto_2);
   parent2.appendChild(nuevo_contenedor_2);

    //TEXTO 3
    const parent3 = document.getElementById('texto-3');
    const child3 = document.getElementById('nodo-hijo-3');
    const throwawayNode3 = parent3.removeChild(child3);
    const nuevo_contenedor_3 = document.createElement("span");
    nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
    let nuevo_texto_3 =  document.createTextNode(texto_3);
    nuevo_contenedor_3.appendChild(nuevo_texto_3);
    parent3.appendChild(nuevo_contenedor_3);
});

document.getElementById('imagen-7-tortilleros').addEventListener('click',function (){
   
  let imagen_nueva = document.getElementById('imagen-7-tortilleros').src;
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen7-tortilleros').innerText;
   let texto_2 = document.getElementById('texto2-imagen7-tortilleros').innerText;
   let texto_3 = document.getElementById('texto3-imagen7-tortilleros').innerText; 

   
   //Añadimos la información con nuevos nodos
   //TEXTO 1
   const parent1 = document.getElementById('texto-1');
   const child1 = document.getElementById('nodo-hijo-1');
   const throwawayNode1 = parent1.removeChild(child1);
   const nuevo_contenedor_1 = document.createElement("span");
   nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
   let nuevo_texto_1 =  document.createTextNode(texto_1);
   nuevo_contenedor_1.appendChild(nuevo_texto_1);
   parent1.appendChild(nuevo_contenedor_1);

   //TEXTO 2

   const parent2 = document.getElementById('texto-2');
   const child2 = document.getElementById('nodo-hijo-2');
   const throwawayNode2 = parent2.removeChild(child2);
   const nuevo_contenedor_2 = document.createElement("span");
   nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
   let nuevo_texto_2 =  document.createTextNode(texto_2);
   nuevo_contenedor_2.appendChild(nuevo_texto_2);
   parent2.appendChild(nuevo_contenedor_2);

    //TEXTO 3
    const parent3 = document.getElementById('texto-3');
    const child3 = document.getElementById('nodo-hijo-3');
    const throwawayNode3 = parent3.removeChild(child3);
    const nuevo_contenedor_3 = document.createElement("span");
    nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
    let nuevo_texto_3 =  document.createTextNode(texto_3);
    nuevo_contenedor_3.appendChild(nuevo_texto_3);
    parent3.appendChild(nuevo_contenedor_3);
});

function opcion_mostrador_alimentos(tipo){
     
    let imagen_nueva;
    let texto_1,texto_2,texto_3;

    if(tipo == 1){
        imagen_nueva = document.getElementById('imagen-1-caja-termica').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-caja-termica').innerText;
        texto_2 = document.getElementById('texto2-imagen1-caja-termica').innerText; 
        texto_3 = document.getElementById('texto3-imagen1-caja-termica').innerText;
    }

    if(tipo == 2){
        imagen_nueva = document.getElementById('imagen-1-tortilleros').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-tortilleros').innerText;
        texto_2 = document.getElementById('texto2-imagen1-tortilleros').innerText;
        texto_3 = document.getElementById('texto3-imagen1-tortilleros').innerText; 
    }
    
      //Añadimos la información con nuevos nodos
      //TEXTO 1
      const parent1 = document.getElementById('texto-1');
      const child1 = document.getElementById('nodo-hijo-1');
      const throwawayNode1 = parent1.removeChild(child1);
      const nuevo_contenedor_1 = document.createElement("span");
      nuevo_contenedor_1.setAttribute("id",'nodo-hijo-1');
      let nuevo_texto_1 =  document.createTextNode(texto_1);
      nuevo_contenedor_1.appendChild(nuevo_texto_1);
      parent1.appendChild(nuevo_contenedor_1);
 
      //TEXTO 2
      const parent2 = document.getElementById('texto-2');
      const child2 = document.getElementById('nodo-hijo-2');
      const throwawayNode2 = parent2.removeChild(child2);
      const nuevo_contenedor_2 = document.createElement("span");
      nuevo_contenedor_2.setAttribute("id",'nodo-hijo-2');
      let nuevo_texto_2 =  document.createTextNode(texto_2);
      nuevo_contenedor_2.appendChild(nuevo_texto_2);
      parent2.appendChild(nuevo_contenedor_2);

       //TEXTO 3
     const parent3 = document.getElementById('texto-3');
     const child3 = document.getElementById('nodo-hijo-3');
     const throwawayNode3 = parent3.removeChild(child3);
     const nuevo_contenedor_3 = document.createElement("span");
     nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
     let nuevo_texto_3 =  document.createTextNode(texto_3);
     nuevo_contenedor_3.appendChild(nuevo_texto_3);
     parent3.appendChild(nuevo_contenedor_3);
}