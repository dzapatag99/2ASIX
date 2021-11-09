let containerFav  = document.querySelector('#favContent');
let containerPost = document.querySelector('#main');
// init JSON favourites
let favPostsList = { "items": [] };


// Init content loaded
document.addEventListener("DOMContentLoaded", () => {
  loadPostsList();
});

// Load data from JSON
const loadPostsList = () => {
  fetch('./data/posts.json')
    .then(result => result.json())
    .then(data => {
      console.log(data);
      populatePostsList(data);
      populateFavouritePosts();
      handleClickStar();
    });
};

// Print main posts list
const populatePostsList = (list) => {
  containerPost.innerHTML = "";
  for (let post of list) {
    containerPost.innerHTML += `
    <article id="art-${post.id}" class="entrada">
      <h2><img id="post-${post.id}" data-post-id="${post.id}"  data-post-title="${post.title}" class="favorite" src="./img/favorite-off-icon-2.png" alt="Seleccionar como post favorito" />
          ${post.title}
      </h2>
      <img src="${post.img}" />
      <p>${post.description1}</p>
      <p>${post.description2}</p>
      <a href="#" class="boton">Leer Más</a>
    </article>
    `;
  }
};

// Print favourites
const populateFavouritePosts = () => {
  // Get favourites post from local storage
  if (localStorage.getItem('favoritePostsList')) {
    favPostsList = JSON.parse(localStorage.getItem('favoritePostsList'));
  }
  if (favPostsList.items.length > 0) {
    containerFav.innerHTML = "";
    for (let data of favPostsList.items) {
      // Dades entrada favorita
      containerFav.innerHTML += `
        <div id="fav-${data.id}">
          <h3>${data.title}</h3>
          <p>${data.desc}...</p>
        </div>
      `;
      // Actualitza la imatge: favorite on
      document.querySelector("#post-" + data.id).src = "img/favorite-on-icon.png";
    }
    containerFav.innerHTML += `
    <button type="button" name="button" onclick="deleteLocalStorage()">
      Borrar entradas favoritas
    </button>`;

  } else {
    containerFav.innerHTML = "No hay entradas favoritas";
  }
};


// Populate info favourite post
const addFavouritePost = (id, title) => {

  // New favourite object
  let descArticle = (document.querySelector(`#art-${id} p`).innerHTML).substring(0, 50);
  let favoritePost = {
    "id": id,
    "title": title,
    "desc": descArticle
  };

  // Get favourites post from local storage
  if (localStorage.getItem('favoritePostsList')) {
    favPostsList = JSON.parse(localStorage.getItem('favoritePostsList'));
  }

  // Update list
  favPostsList.items.push(favoritePost);
  localStorage.setItem("favoritePostsList", JSON.stringify(favPostsList));

  // Update icon
  document.querySelector("#post-" + id).src = "img/favorite-on-icon.png";

  console.log("After add:", favPostsList);

  // Change favorite array, we need to call populate populateFavouritePosts
  populateFavouritePosts();
};

// Delete one favorite post. 
// @param favouriteTag: it's the tag width the info post
const deleteFavouritePost = (favouriteTag) => {
  favPostsList.items = favPostsList.items.filter(item => item.id != favouriteTag.dataset.postId);
  localStorage.setItem("favoritePostsList", JSON.stringify(favPostsList));
  populateFavouritePosts();

  favouriteTag.src = "img/favorite-off-icon-2.png";
};

// Delete object from local storage (all favourite posts)
const deleteLocalStorage = () => {
  // Step 1: Delete from storage
  localStorage.removeItem('favoritePostsList');
  // Step 2: Init local variable favourite list
  favPostsList.items = [];

  // Step 3: Swap image favorite of all posts to off image
  // we can also use '.favorite' class to get all star images 
  let imgFavorites = document.querySelectorAll("article h2 img");
  for (let imgFav of imgFavorites) {
    imgFav.src = "./img/favorite-off-icon-2.png";
  }

  // Step 4: Delete panell of favourites
  document.querySelector('#favContent').innerHTML = "No hay entradas favoritas";
};

// Delete object from local storage (all favourite posts)
const handleClickStar = () => {
  const list = document.querySelectorAll('.favorite'); // star images
  list.forEach(fav => {
    // Configure the click event for each star
    fav.addEventListener("click", (e) => {
      // favPostsList.items.some(item=>item.id==fav.dataset.postId)
      
      if (e.target.src.includes("favorite-on-icon.png")){
        // if the star currenly is on, click event turns off star and delete favourite post  
        deleteFavouritePost(fav);
      }else{
        // else add a new post
        addFavouritePost(fav.dataset.postId, fav.dataset.postTitle);
      }
        
    });
  });
};