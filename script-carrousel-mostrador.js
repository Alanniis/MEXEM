
//SELECCIÓN EN LA LISTA

document.getElementById('esfera').addEventListener('click', function(){
        
       document.getElementById('slider-esferas').style.display = 'flex';

       document.getElementById('slider-craneos').style.display = 'none';
       document.getElementById('slider-conos').style.display = 'none';
       document.getElementById('slider-huevos').style.display = 'none';
       document.getElementById('slider-discos').style.display = 'none';
       document.getElementById('slider-macetas').style.display = 'none';
       document.getElementById('slider-cestas').style.display = 'none';
       document.getElementById('slider-sombreros').style.display = 'none';
       document.getElementById('slider-placas').style.display = 'none';
       opcion_mostrador(1);
});

document.getElementById('craneo').addEventListener('click', function(){
        
    document.getElementById('slider-craneos').style.display = 'flex';

    document.getElementById('slider-esferas').style.display = 'none';
    document.getElementById('slider-conos').style.display = 'none';
    document.getElementById('slider-huevos').style.display = 'none';
    document.getElementById('slider-discos').style.display = 'none';
    document.getElementById('slider-macetas').style.display = 'none';
    document.getElementById('slider-cestas').style.display = 'none';
    document.getElementById('slider-sombreros').style.display = 'none';
    document.getElementById('slider-placas').style.display = 'none';
    opcion_mostrador(2);
});

document.getElementById('cono').addEventListener('click', function(){
        
    document.getElementById('slider-conos').style.display = 'flex';

    document.getElementById('slider-esferas').style.display = 'none';
    document.getElementById('slider-craneos').style.display = 'none';
    document.getElementById('slider-huevos').style.display = 'none';
    document.getElementById('slider-discos').style.display = 'none';
    document.getElementById('slider-macetas').style.display = 'none';
    document.getElementById('slider-cestas').style.display = 'none';
    document.getElementById('slider-sombreros').style.display = 'none';
    document.getElementById('slider-placas').style.display = 'none';
    opcion_mostrador(3);
});

document.getElementById('huevo').addEventListener('click', function(){
        
    document.getElementById('slider-huevos').style.display = 'flex';

    document.getElementById('slider-esferas').style.display = 'none';
    document.getElementById('slider-craneos').style.display = 'none';
    document.getElementById('slider-conos').style.display = 'none';
    document.getElementById('slider-discos').style.display = 'none';
    document.getElementById('slider-macetas').style.display = 'none';
    document.getElementById('slider-cestas').style.display = 'none';
    document.getElementById('slider-sombreros').style.display = 'none';
    document.getElementById('slider-placas').style.display = 'none';
    opcion_mostrador(4);
});

document.getElementById('disco').addEventListener('click', function(){
        
    document.getElementById('slider-discos').style.display = 'flex';

    document.getElementById('slider-esferas').style.display = 'none';
    document.getElementById('slider-craneos').style.display = 'none';
    document.getElementById('slider-conos').style.display = 'none';
    document.getElementById('slider-huevos').style.display = 'none';
    document.getElementById('slider-macetas').style.display = 'none';
    document.getElementById('slider-cestas').style.display = 'none';
    document.getElementById('slider-sombreros').style.display = 'none';
    document.getElementById('slider-placas').style.display = 'none';
    opcion_mostrador(5);
});

document.getElementById('maceta').addEventListener('click', function(){
        
    document.getElementById('slider-macetas').style.display = 'flex';

    document.getElementById('slider-esferas').style.display = 'none';
    document.getElementById('slider-craneos').style.display = 'none';
    document.getElementById('slider-conos').style.display = 'none';
    document.getElementById('slider-huevos').style.display = 'none';
    document.getElementById('slider-discos').style.display = 'none';
    document.getElementById('slider-cestas').style.display = 'none';
    document.getElementById('slider-sombreros').style.display = 'none';
    document.getElementById('slider-placas').style.display = 'none';
    opcion_mostrador(6);
});

document.getElementById('cesta').addEventListener('click', function(){
        
    document.getElementById('slider-cestas').style.display = 'flex';

    document.getElementById('slider-esferas').style.display = 'none';
    document.getElementById('slider-craneos').style.display = 'none';
    document.getElementById('slider-conos').style.display = 'none';
    document.getElementById('slider-huevos').style.display = 'none';
    document.getElementById('slider-discos').style.display = 'none';
    document.getElementById('slider-macetas').style.display = 'none';
    document.getElementById('slider-sombreros').style.display = 'none';
    document.getElementById('slider-placas').style.display = 'none';
    opcion_mostrador(7);
});

document.getElementById('sombrero').addEventListener('click', function(){
        
    document.getElementById('slider-sombreros').style.display = 'flex';

    document.getElementById('slider-esferas').style.display = 'none';
    document.getElementById('slider-craneos').style.display = 'none';
    document.getElementById('slider-conos').style.display = 'none';
    document.getElementById('slider-huevos').style.display = 'none';
    document.getElementById('slider-discos').style.display = 'none';
    document.getElementById('slider-macetas').style.display = 'none';
    document.getElementById('slider-cestas').style.display = 'none';
    document.getElementById('slider-placas').style.display = 'none';
    opcion_mostrador(8);
});

document.getElementById('placa').addEventListener('click', function(){
        
    document.getElementById('slider-placas').style.display = 'flex';

    document.getElementById('slider-esferas').style.display = 'none';
    document.getElementById('slider-craneos').style.display = 'none';
    document.getElementById('slider-conos').style.display = 'none';
    document.getElementById('slider-huevos').style.display = 'none';
    document.getElementById('slider-discos').style.display = 'none';
    document.getElementById('slider-macetas').style.display = 'none';
    document.getElementById('slider-cestas').style.display = 'none';
    document.getElementById('slider-sombreros').style.display = 'none';
    opcion_mostrador(9);
});


//ESFERAS
document.getElementById('imagen-1').addEventListener('click',function (){
    
     let imagen_nueva = document.getElementById('imagen-1').src;
    //  console.log(imagen_nueva)
    document.getElementById('imagen-mostrador').src = imagen_nueva; 
      
      //Obtenemos la información de los textos de las imágenes
      let texto_1 = document.getElementById('texto1-imagen1').innerText;
      let texto_2 = document.getElementById('texto2-imagen1').innerText; 
      let texto_3 = document.getElementById('texto3-imagen1').innerText; 

      
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

document.getElementById('imagen-2').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-2').src;
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen2').innerText;
     let texto_2 = document.getElementById('texto2-imagen2').innerText;
     let texto_3 = document.getElementById('texto3-imagen2').innerText;  

     
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

document.getElementById('imagen-3').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-3').src;
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen3').innerText;
     let texto_2 = document.getElementById('texto2-imagen3').innerText;
     let texto_3 = document.getElementById('texto3-imagen3').innerText; 

     
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

document.getElementById('imagen-4').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-4').src;
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen4').innerText;
     let texto_2 = document.getElementById('texto2-imagen4').innerText;
     let texto_3 = document.getElementById('texto3-imagen4').innerText;  

     
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

document.getElementById('imagen-5').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-5').src;
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen5').innerText;
     let texto_2 = document.getElementById('texto2-imagen5').innerText;
     let texto_3 = document.getElementById('texto3-imagen5').innerText;  

     
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

document.getElementById('imagen-6').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-6').src;
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen6').innerText;
     let texto_2 = document.getElementById('texto2-imagen6').innerText;
     let texto_3 = document.getElementById('texto3-imagen6').innerText;  

     
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




//CRÁNEOS
document.getElementById('imagen-1-craneos').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-1-craneos').src;
   //  console.log(imagen_nueva)
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-craneos').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-craneos').innerText; 
     let texto_3 = document.getElementById('texto3-imagen1-craneos').innerText; 

     
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

document.getElementById('imagen-2-craneos').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-2-craneos').src;
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen2-craneos').innerText;
    let texto_2 = document.getElementById('texto2-imagen2-craneos').innerText;
    let texto_3 = document.getElementById('texto3-imagen2-craneos').innerText; 

    //TEXTO 3
 const parent3 = document.getElementById('texto-3');
 const child3 = document.getElementById('nodo-hijo-3');
 const throwawayNode3 = parent3.removeChild(child3);
 const nuevo_contenedor_3 = document.createElement("span");
 nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
 let nuevo_texto_3 =  document.createTextNode(texto_3);
 nuevo_contenedor_3.appendChild(nuevo_texto_3);
 parent3.appendChild(nuevo_contenedor_3);

    
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
});

document.getElementById('imagen-3-craneos').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-3-craneos').src;
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen3-craneos').innerText;
    let texto_2 = document.getElementById('texto2-imagen3-craneos').innerText; 
    let texto_3 = document.getElementById('texto3-imagen3-craneos').innerText; 

    //TEXTO 3
 const parent3 = document.getElementById('texto-3');
 const child3 = document.getElementById('nodo-hijo-3');
 const throwawayNode3 = parent3.removeChild(child3);
 const nuevo_contenedor_3 = document.createElement("span");
 nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
 let nuevo_texto_3 =  document.createTextNode(texto_3);
 nuevo_contenedor_3.appendChild(nuevo_texto_3);
 parent3.appendChild(nuevo_contenedor_3);

    
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
});

document.getElementById('imagen-4-craneos').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-4-craneos').src;
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen4-craneos').innerText;
    let texto_2 = document.getElementById('texto2-imagen4-craneos').innerText;
    let texto_3 = document.getElementById('texto3-imagen4-craneos').innerText; 

    //TEXTO 3
 const parent3 = document.getElementById('texto-3');
 const child3 = document.getElementById('nodo-hijo-3');
 const throwawayNode3 = parent3.removeChild(child3);
 const nuevo_contenedor_3 = document.createElement("span");
 nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
 let nuevo_texto_3 =  document.createTextNode(texto_3);
 nuevo_contenedor_3.appendChild(nuevo_texto_3);
 parent3.appendChild(nuevo_contenedor_3); 

    
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
});

document.getElementById('imagen-5-craneos').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-5-craneos').src;
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen5-craneos').innerText;
    let texto_2 = document.getElementById('texto2-imagen5-craneos').innerText; 
    let texto_3 = document.getElementById('texto3-imagen5-craneos').innerText; 

    //TEXTO 3
 const parent3 = document.getElementById('texto-3');
 const child3 = document.getElementById('nodo-hijo-3');
 const throwawayNode3 = parent3.removeChild(child3);
 const nuevo_contenedor_3 = document.createElement("span");
 nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
 let nuevo_texto_3 =  document.createTextNode(texto_3);
 nuevo_contenedor_3.appendChild(nuevo_texto_3);
 parent3.appendChild(nuevo_contenedor_3);

    
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
});

document.getElementById('imagen-6-craneos').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-6-craneos').src;
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen6-craneos').innerText;
    let texto_2 = document.getElementById('texto2-imagen6-craneos').innerText; 
    let texto_3 = document.getElementById('texto3-imagen6-craneos').innerText; 

    //TEXTO 3
 const parent3 = document.getElementById('texto-3');
 const child3 = document.getElementById('nodo-hijo-3');
 const throwawayNode3 = parent3.removeChild(child3);
 const nuevo_contenedor_3 = document.createElement("span");
 nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
 let nuevo_texto_3 =  document.createTextNode(texto_3);
 nuevo_contenedor_3.appendChild(nuevo_texto_3);
 parent3.appendChild(nuevo_contenedor_3);

    
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
});

document.getElementById('imagen-7-craneos').addEventListener('click',function (){
   
    let imagen_nueva = document.getElementById('imagen-7-craneos').src;
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen7-craneos').innerText;
     let texto_2 = document.getElementById('texto2-imagen7-craneos').innerText; 
     let texto_3 = document.getElementById('texto3-imagen7-craneos').innerText; 
 
     //TEXTO 3
  const parent3 = document.getElementById('texto-3');
  const child3 = document.getElementById('nodo-hijo-3');
  const throwawayNode3 = parent3.removeChild(child3);
  const nuevo_contenedor_3 = document.createElement("span");
  nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
  let nuevo_texto_3 =  document.createTextNode(texto_3);
  nuevo_contenedor_3.appendChild(nuevo_texto_3);
  parent3.appendChild(nuevo_contenedor_3);
 
     
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
 });

 document.getElementById('imagen-8-craneos').addEventListener('click',function (){
   
    let imagen_nueva = document.getElementById('imagen-8-craneos').src;
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen8-craneos').innerText;
     let texto_2 = document.getElementById('texto2-imagen8-craneos').innerText; 
     let texto_3 = document.getElementById('texto3-imagen8-craneos').innerText; 
 
     //TEXTO 3
  const parent3 = document.getElementById('texto-3');
  const child3 = document.getElementById('nodo-hijo-3');
  const throwawayNode3 = parent3.removeChild(child3);
  const nuevo_contenedor_3 = document.createElement("span");
  nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
  let nuevo_texto_3 =  document.createTextNode(texto_3);
  nuevo_contenedor_3.appendChild(nuevo_texto_3);
  parent3.appendChild(nuevo_contenedor_3);
 
     
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
 });

//CONOS
document.getElementById('imagen-1-conos').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-1-conos').src;
   //  console.log(imagen_nueva)
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-conos').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-conos').innerText;
     let texto_3 = document.getElementById('texto3-imagen1-conos').innerText; 

       //TEXTO 3
  const parent3 = document.getElementById('texto-3');
  const child3 = document.getElementById('nodo-hijo-3');
  const throwawayNode3 = parent3.removeChild(child3);
  const nuevo_contenedor_3 = document.createElement("span");
  nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
  let nuevo_texto_3 =  document.createTextNode(texto_3);
  nuevo_contenedor_3.appendChild(nuevo_texto_3);
  parent3.appendChild(nuevo_contenedor_3);

     
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
});

document.getElementById('imagen-2-conos').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-2-conos').src;
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen2-conos').innerText;
    let texto_2 = document.getElementById('texto2-imagen2-conos').innerText;
    let texto_3 = document.getElementById('texto3-imagen2-conos').innerText; 

       //TEXTO 3
  const parent3 = document.getElementById('texto-3');
  const child3 = document.getElementById('nodo-hijo-3');
  const throwawayNode3 = parent3.removeChild(child3);
  const nuevo_contenedor_3 = document.createElement("span");
  nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
  let nuevo_texto_3 =  document.createTextNode(texto_3);
  nuevo_contenedor_3.appendChild(nuevo_texto_3);
  parent3.appendChild(nuevo_contenedor_3);

    
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
});

document.getElementById('imagen-3-conos').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-3-conos').src;
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen3-conos').innerText;
    let texto_2 = document.getElementById('texto2-imagen3-conos').innerText;
    let texto_3 = document.getElementById('texto3-imagen3-conos').innerText; 

       //TEXTO 3
  const parent3 = document.getElementById('texto-3');
  const child3 = document.getElementById('nodo-hijo-3');
  const throwawayNode3 = parent3.removeChild(child3);
  const nuevo_contenedor_3 = document.createElement("span");
  nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
  let nuevo_texto_3 =  document.createTextNode(texto_3);
  nuevo_contenedor_3.appendChild(nuevo_texto_3);
  parent3.appendChild(nuevo_contenedor_3); 

    
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
});

document.getElementById('imagen-4-conos').addEventListener('click',function (){
   
  let imagen_nueva = document.getElementById('imagen-4-conos').src;
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen4-conos').innerText;
   let texto_2 = document.getElementById('texto2-imagen4-conos').innerText;
   let texto_3 = document.getElementById('texto3-imagen4-conos').innerText; 

      //TEXTO 3
 const parent3 = document.getElementById('texto-3');
 const child3 = document.getElementById('nodo-hijo-3');
 const throwawayNode3 = parent3.removeChild(child3);
 const nuevo_contenedor_3 = document.createElement("span");
 nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
 let nuevo_texto_3 =  document.createTextNode(texto_3);
 nuevo_contenedor_3.appendChild(nuevo_texto_3);
 parent3.appendChild(nuevo_contenedor_3); 

   
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
});

document.getElementById('imagen-5-conos').addEventListener('click',function (){
   
  let imagen_nueva = document.getElementById('imagen-5-conos').src;
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen5-conos').innerText;
   let texto_2 = document.getElementById('texto2-imagen5-conos').innerText;
   let texto_3 = document.getElementById('texto3-imagen5-conos').innerText; 

      //TEXTO 3
 const parent3 = document.getElementById('texto-3');
 const child3 = document.getElementById('nodo-hijo-3');
 const throwawayNode3 = parent3.removeChild(child3);
 const nuevo_contenedor_3 = document.createElement("span");
 nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
 let nuevo_texto_3 =  document.createTextNode(texto_3);
 nuevo_contenedor_3.appendChild(nuevo_texto_3);
 parent3.appendChild(nuevo_contenedor_3); 

   
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
});


//HUEVOS
document.getElementById('imagen-1-huevos').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-1-huevos').src;
   //  console.log(imagen_nueva)
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-huevos').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-huevos').innerText;
     let texto_3 = document.getElementById('texto3-imagen1-huevos').innerText; 

       //TEXTO 3
  const parent3 = document.getElementById('texto-3');
  const child3 = document.getElementById('nodo-hijo-3');
  const throwawayNode3 = parent3.removeChild(child3);
  const nuevo_contenedor_3 = document.createElement("span");
  nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
  let nuevo_texto_3 =  document.createTextNode(texto_3);
  nuevo_contenedor_3.appendChild(nuevo_texto_3);
  parent3.appendChild(nuevo_contenedor_3);  

     
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
});

document.getElementById('imagen-2-huevos').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-2-huevos').src;
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen2-huevos').innerText;
    let texto_2 = document.getElementById('texto2-imagen2-huevos').innerText; 
    let texto_3 = document.getElementById('texto3-imagen2-huevos').innerText; 

       //TEXTO 3
  const parent3 = document.getElementById('texto-3');
  const child3 = document.getElementById('nodo-hijo-3');
  const throwawayNode3 = parent3.removeChild(child3);
  const nuevo_contenedor_3 = document.createElement("span");
  nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
  let nuevo_texto_3 =  document.createTextNode(texto_3);
  nuevo_contenedor_3.appendChild(nuevo_texto_3);
  parent3.appendChild(nuevo_contenedor_3); 

    
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
});

document.getElementById('imagen-3-huevos').addEventListener('click',function (){
   
  let imagen_nueva = document.getElementById('imagen-3-huevos').src;
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen3-huevos').innerText;
   let texto_2 = document.getElementById('texto2-imagen3-huevos').innerText; 
   let texto_3 = document.getElementById('texto3-imagen3-huevos').innerText; 

      //TEXTO 3
 const parent3 = document.getElementById('texto-3');
 const child3 = document.getElementById('nodo-hijo-3');
 const throwawayNode3 = parent3.removeChild(child3);
 const nuevo_contenedor_3 = document.createElement("span");
 nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
 let nuevo_texto_3 =  document.createTextNode(texto_3);
 nuevo_contenedor_3.appendChild(nuevo_texto_3);
 parent3.appendChild(nuevo_contenedor_3); 

   
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
});

document.getElementById('imagen-4-huevos').addEventListener('click',function (){
   
  let imagen_nueva = document.getElementById('imagen-4-huevos').src;
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen4-huevos').innerText;
   let texto_2 = document.getElementById('texto2-imagen4-huevos').innerText; 
   let texto_3 = document.getElementById('texto3-imagen4-huevos').innerText; 

      //TEXTO 3
 const parent3 = document.getElementById('texto-3');
 const child3 = document.getElementById('nodo-hijo-3');
 const throwawayNode3 = parent3.removeChild(child3);
 const nuevo_contenedor_3 = document.createElement("span");
 nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
 let nuevo_texto_3 =  document.createTextNode(texto_3);
 nuevo_contenedor_3.appendChild(nuevo_texto_3);
 parent3.appendChild(nuevo_contenedor_3); 

   
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
});

document.getElementById('imagen-5-huevos').addEventListener('click',function (){
   
  let imagen_nueva = document.getElementById('imagen-5-huevos').src;
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen5-huevos').innerText;
   let texto_2 = document.getElementById('texto2-imagen5-huevos').innerText; 
   let texto_3 = document.getElementById('texto3-imagen5-huevos').innerText; 

      //TEXTO 3
 const parent3 = document.getElementById('texto-3');
 const child3 = document.getElementById('nodo-hijo-3');
 const throwawayNode3 = parent3.removeChild(child3);
 const nuevo_contenedor_3 = document.createElement("span");
 nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
 let nuevo_texto_3 =  document.createTextNode(texto_3);
 nuevo_contenedor_3.appendChild(nuevo_texto_3);
 parent3.appendChild(nuevo_contenedor_3); 

   
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
});

//DISCOS
document.getElementById('imagen-1-discos').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-1-discos').src;
   //  console.log(imagen_nueva)
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-discos').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-discos').innerText;
     let texto_3 = document.getElementById('texto3-imagen1-discos').innerText; 

     //TEXTO 3
    const parent3 = document.getElementById('texto-3');
    const child3 = document.getElementById('nodo-hijo-3');
    const throwawayNode3 = parent3.removeChild(child3);
    const nuevo_contenedor_3 = document.createElement("span");
    nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
    let nuevo_texto_3 =  document.createTextNode(texto_3);
    nuevo_contenedor_3.appendChild(nuevo_texto_3);
    parent3.appendChild(nuevo_contenedor_3); 

     
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
});

document.getElementById('imagen-2-discos').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-2-discos').src;
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen2-discos').innerText;
    let texto_2 = document.getElementById('texto2-imagen2-discos').innerText; 
    let texto_3 = document.getElementById('texto3-imagen2-discos').innerText; 

     //TEXTO 3
    const parent3 = document.getElementById('texto-3');
    const child3 = document.getElementById('nodo-hijo-3');
    const throwawayNode3 = parent3.removeChild(child3);
    const nuevo_contenedor_3 = document.createElement("span");
    nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
    let nuevo_texto_3 =  document.createTextNode(texto_3);
    nuevo_contenedor_3.appendChild(nuevo_texto_3);
    parent3.appendChild(nuevo_contenedor_3); 
    
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
});

document.getElementById('imagen-3-discos').addEventListener('click',function (){
   
   let imagen_nueva = document.getElementById('imagen-3-discos').src;
  document.getElementById('imagen-mostrador').src = imagen_nueva; 
    
    //Obtenemos la información de los textos de las imágenes
    let texto_1 = document.getElementById('texto1-imagen3-discos').innerText;
    let texto_2 = document.getElementById('texto2-imagen3-discos').innerText; 
    let texto_3 = document.getElementById('texto3-imagen3-discos').innerText; 

     //TEXTO 3
    const parent3 = document.getElementById('texto-3');
    const child3 = document.getElementById('nodo-hijo-3');
    const throwawayNode3 = parent3.removeChild(child3);
    const nuevo_contenedor_3 = document.createElement("span");
    nuevo_contenedor_3.setAttribute("id",'nodo-hijo-3');
    let nuevo_texto_3 =  document.createTextNode(texto_3);
    nuevo_contenedor_3.appendChild(nuevo_texto_3);
    parent3.appendChild(nuevo_contenedor_3); 
    
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
});

//MACETAS
document.getElementById('imagen-1-macetas').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-1-macetas').src;
   //  console.log(imagen_nueva)
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-macetas').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-macetas').innerText; 
     let texto_3 = document.getElementById('texto3-imagen1-macetas').innerText;
     
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

document.getElementById('imagen-2-macetas').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-2-macetas').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen2-macetas').innerText;
   let texto_2 = document.getElementById('texto2-imagen2-macetas').innerText; 
   let texto_3 = document.getElementById('texto3-imagen2-macetas').innerText;
   
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

document.getElementById('imagen-3-macetas').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-3-macetas').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen3-macetas').innerText;
   let texto_2 = document.getElementById('texto2-imagen3-macetas').innerText; 
   let texto_3 = document.getElementById('texto3-imagen3-macetas').innerText;
   
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

document.getElementById('imagen-4-macetas').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-4-macetas').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen4-macetas').innerText;
   let texto_2 = document.getElementById('texto2-imagen4-macetas').innerText; 
   let texto_3 = document.getElementById('texto3-imagen4-macetas').innerText;
   
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

document.getElementById('imagen-5-macetas').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-5-macetas').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen5-macetas').innerText;
   let texto_2 = document.getElementById('texto2-imagen5-macetas').innerText; 
   let texto_3 = document.getElementById('texto3-imagen5-macetas').innerText;
   
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

document.getElementById('imagen-6-macetas').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-6-macetas').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen6-macetas').innerText;
   let texto_2 = document.getElementById('texto2-imagen6-macetas').innerText; 
   let texto_3 = document.getElementById('texto3-imagen6-macetas').innerText;
   
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



//CESTAS
document.getElementById('imagen-1-cestas').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-1-cestas').src;
   //  console.log(imagen_nueva)
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-cestas').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-cestas').innerText; 
     let texto_3 = document.getElementById('texto3-imagen1-cestas').innerText; 

     
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

document.getElementById('imagen-2-cestas').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-2-cestas').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen2-cestas').innerText;
   let texto_2 = document.getElementById('texto2-imagen2-cestas').innerText; 
   let texto_3 = document.getElementById('texto3-imagen2-cestas').innerText; 

   
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

document.getElementById('imagen-3-cestas').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-3-cestas').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen3-cestas').innerText;
   let texto_2 = document.getElementById('texto2-imagen3-cestas').innerText; 
   let texto_3 = document.getElementById('texto3-imagen3-cestas').innerText; 

   
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

document.getElementById('imagen-4-cestas').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-4-cestas').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen4-cestas').innerText;
   let texto_2 = document.getElementById('texto2-imagen4-cestas').innerText; 
   let texto_3 = document.getElementById('texto3-imagen4-cestas').innerText; 

   
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

//SOMBREROS
document.getElementById('imagen-1-sombreros').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-1-sombreros').src;
   //  console.log(imagen_nueva)
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-sombreros').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-sombreros').innerText; 
     let texto_3 = document.getElementById('texto3-imagen1-sombreros').innerText; 
     
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

document.getElementById('imagen-2-sombreros').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-2-sombreros').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen2-sombreros').innerText;
   let texto_2 = document.getElementById('texto2-imagen2-sombreros').innerText; 
   let texto_3 = document.getElementById('texto3-imagen2-sombreros').innerText; 
   
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

document.getElementById('imagen-3-sombreros').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-3-sombreros').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen3-sombreros').innerText;
   let texto_2 = document.getElementById('texto2-imagen3-sombreros').innerText; 
   let texto_3 = document.getElementById('texto3-imagen3-sombreros').innerText; 
   
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

document.getElementById('imagen-4-sombreros').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-4-sombreros').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen4-sombreros').innerText;
   let texto_2 = document.getElementById('texto2-imagen4-sombreros').innerText; 
   let texto_3 = document.getElementById('texto3-imagen4-sombreros').innerText; 
   
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


//PLACAS
document.getElementById('imagen-1-placas').addEventListener('click',function (){
    
    let imagen_nueva = document.getElementById('imagen-1-placas').src;
   //  console.log(imagen_nueva)
   document.getElementById('imagen-mostrador').src = imagen_nueva; 
     
     //Obtenemos la información de los textos de las imágenes
     let texto_1 = document.getElementById('texto1-imagen1-placas').innerText;
     let texto_2 = document.getElementById('texto2-imagen1-placas').innerText;
     let texto_3 = document.getElementById('texto3-imagen1-placas').innerText; 

     
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

document.getElementById('imagen-2-placas').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-2-placas').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen2-placas').innerText;
   let texto_2 = document.getElementById('texto2-imagen2-placas').innerText;
   let texto_3 = document.getElementById('texto3-imagen2-placas').innerText; 

   
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

document.getElementById('imagen-3-placas').addEventListener('click',function (){
    
  let imagen_nueva = document.getElementById('imagen-3-placas').src;
 //  console.log(imagen_nueva)
 document.getElementById('imagen-mostrador').src = imagen_nueva; 
   
   //Obtenemos la información de los textos de las imágenes
   let texto_1 = document.getElementById('texto1-imagen3-placas').innerText;
   let texto_2 = document.getElementById('texto2-imagen3-placas').innerText;
   let texto_3 = document.getElementById('texto3-imagen3-placas').innerText; 

   
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



//CAMBIAR EL MOSTRADOR

function opcion_mostrador(tipo){
     
    let imagen_nueva;
    let texto_1,texto_2,texto_3;

    if(tipo == 1){
        imagen_nueva = document.getElementById('imagen-1').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1').innerText;
        texto_2 = document.getElementById('texto2-imagen1').innerText; 
        texto_3 = document.getElementById('texto3-imagen1').innerText; 
    }

    if(tipo == 2){
        imagen_nueva = document.getElementById('imagen-1-craneos').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-craneos').innerText;
        texto_2 = document.getElementById('texto2-imagen1-craneos').innerText;
        texto_3 = document.getElementById('texto3-imagen1-craneos').innerText; 
    }

    if(tipo == 3){
        imagen_nueva = document.getElementById('imagen-1-conos').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-conos').innerText;
        texto_2 = document.getElementById('texto2-imagen1-conos').innerText;
        texto_3 = document.getElementById('texto3-imagen1-conos').innerText; 
    }
    
    if(tipo == 4){
        imagen_nueva = document.getElementById('imagen-1-huevos').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-huevos').innerText;
        texto_2 = document.getElementById('texto2-imagen1-huevos').innerText; 
        texto_3 = document.getElementById('texto3-imagen1-huevos').innerText; 
    }

    if(tipo == 5){
        imagen_nueva = document.getElementById('imagen-1-discos').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-discos').innerText;
        texto_2 = document.getElementById('texto2-imagen1-discos').innerText;
        texto_3 = document.getElementById('texto3-imagen1-discos').innerText; 
    }

    if(tipo == 6){
        imagen_nueva = document.getElementById('imagen-1-macetas').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-macetas').innerText;
        texto_2 = document.getElementById('texto2-imagen1-macetas').innerText; 
        texto_3 = document.getElementById('texto3-macetas').innerText; 
    }
    
    if(tipo == 7){
        imagen_nueva = document.getElementById('imagen-1-cestas').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-cestas').innerText;
        texto_2 = document.getElementById('texto2-imagen1-cestas').innerText;
        texto_3 = document.getElementById('texto3-imagen1-cestas').innerText;  
    }

    if(tipo == 8){
        imagen_nueva = document.getElementById('imagen-1-sombreros').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-sombreros').innerText;
        texto_2 = document.getElementById('texto2-imagen1-sombreros').innerText;
        texto_3 = document.getElementById('texto3-imagen1-sombreros').innerText;  
    }
    
    if(tipo == 9){
        imagen_nueva = document.getElementById('imagen-1-placas').src;
        document.getElementById('imagen-mostrador').src = imagen_nueva;
        //Obtenemos la información de los textos de las imágenes
        texto_1 = document.getElementById('texto1-imagen1-placas').innerText;
        texto_2 = document.getElementById('texto2-imagen1-placas').innerText;
        texto_3 = document.getElementById('texto3-imagen1-placas').innerText;  
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