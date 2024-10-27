
//SELECCIÓN EN LA LISTA

document.getElementById('caja-termica').addEventListener('click', function(){
        
    document.getElementById('slider-caja-termica').style.display = 'flex';

    document.getElementById('slider-vacuna').style.display = 'none';
    document.getElementById('slider-laboratorio').style.display = 'none';
    
    opcion_mostrador_salud(1);
});

document.getElementById('vacuna').addEventListener('click', function(){
        
    document.getElementById('slider-vacuna').style.display = 'flex';

    document.getElementById('slider-caja-termica').style.display = 'none';
    document.getElementById('slider-laboratorio').style.display = 'none';
    
    opcion_mostrador_salud(2);
});

document.getElementById('laboratorio').addEventListener('click', function(){
        
    document.getElementById('slider-laboratorio').style.display = 'flex';

    document.getElementById('slider-caja-termica').style.display = 'none';
    document.getElementById('slider-vacuna').style.display = 'none';
    
    opcion_mostrador_salud(3);
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
   console.log(imagen_nueva)
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
   console.log(imagen_nueva)
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

//VACUNA
document.getElementById('imagen-1-vacuna').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-1-vacuna').src;
   //  console.log(imagen_nueva)
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-vacuna').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-vacuna').innerText; 
     let texto_3 = document.getElementById('texto3-imagen1-vacuna').innerText; 

     
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

document.getElementById('imagen-2-vacuna').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-2-vacuna').src;
   console.log(imagen_nueva)
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen2-vacuna').innerText;
    let texto_2 = document.getElementById('texto2-imagen2-vacuna').innerText; 
    let texto_3 = document.getElementById('texto3-imagen2-vacuna').innerText; 

    
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

//LABORATORIO
document.getElementById('imagen-1-laboratorio').addEventListener('click',function (){
   
    let imagen_nueva = document.getElementById('imagen-1-laboratorio').src;
    console.log(imagen_nueva)
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-laboratorio').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-laboratorio').innerText;
     let texto_3 = document.getElementById('texto3-imagen1-laboratorio').innerText; 
 
     
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

function opcion_mostrador_salud(tipo){
     
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
        imagen_nueva = document.getElementById('imagen-1-vacuna').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-vacuna').innerText;
        texto_2 = document.getElementById('texto2-imagen1-vacuna').innerText;
        texto_3 = document.getElementById('texto3-imagen1-vacuna').innerText; 
    }

    if(tipo == 3){
        imagen_nueva = document.getElementById('imagen-1-laboratorio').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-laboratorio').innerText;
        texto_2 = document.getElementById('texto2-imagen1-laboratorio').innerText;
        texto_3 = document.getElementById('texto3-imagen1-laboratorio').innerText; 
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