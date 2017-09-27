function start() {
  var searchButton = document.querySelector('.search__imag');
  var menu = document.querySelector('.menu');
  var search = document.querySelector('.search');
   
  
  


  searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    search.classList.toggle('search--open');
    menu.classList.toggle('menu--hide');
  },false);

    
    /*
      c'est deuxième façon de faire avec des conditions 
      utilisitation des classes differants aussi comme contains, remove , add
    */
    // si mon search possède la class search--open, je retire search--open
    // sinon j'ajoute search--open
    /*if (search.classList.contains('search--open')) { 
      search.classList.remove('search--open');
      menu.classList.remove('menu--hide')

      } else {
           
        search.classList.add('search--open');
        menu.classList.add('menu--hide')
    }*/


}   



ready(start);







function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
