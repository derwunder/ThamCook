module.exports = {
  filterRecipes: function(recipes,  searchText, searchCategoria, searchFavorito){
    searchText=searchText.toLowerCase();
    var filteredRecipes = recipes;

    //Filter by Completed
  /*  filteredRecipes =filteredRecipes.filter((todo)=>{
      return !todo.completed || showCompleted;
    });*/

    //filter by search
    filteredRecipes =filteredRecipes.filter((recipe)=>{
      var titulo = recipe.titulo.toLowerCase(); //.toLowerCase(); just to non sensitive case
      return searchText.length === 0 || titulo.indexOf(searchText) > -1 ;
    });

    //filter by Categoria
    filteredRecipes =filteredRecipes.filter((recipe)=>{
      var categoria = recipe.categCol; //.toLowerCase(); just to non sensitive case
      return searchCategoria.length === 0 || categoria.indexOf(searchCategoria) > -1 ;
    });

    //filter by Categoria
    filteredRecipes =filteredRecipes.filter((recipe)=>{
      //var categoria = recipe.favorito; //.toLowerCase(); just to non sensitive case
      return recipe.favorito===true || recipe.favorito===searchFavorito ;
    });

    //Sort by completed
  /*  filteredRecipes.sort((a,b)=>{
      if(!a.completed && b.completed)
        return -1;
      else if(a.completed && !b.completed)
        return 1;
      else
        return 0;

    });*/

    return filteredRecipes;
  }
};
