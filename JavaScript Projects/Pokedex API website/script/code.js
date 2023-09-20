let apiUrl = "https://pokeapi.co/api/v2/pokemon";
let characterPlace = document.querySelector(".characterplace");
let searchInput = document.querySelector("#searchinput");
let nameElement = document.querySelector(".characterplace h1");
let picElement = document.querySelector("#pic");
let expElement = document.querySelector(".characterplace h2");

const updateImg = (imgurl) => {
  picElement.src = imgurl;
};

const pokedexData = async () => {
  try {
    let response = await axios.get(apiUrl);
    let data = response.data;
    console.log(data);

    searchInput.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const character = searchInput.value.trim();

        if (character) {
          apiUrl = `https://pokeapi.co/api/v2/pokemon/${character}`;

          const newResponse = await axios.get(apiUrl);

          let name = newResponse.data.name;

          nameElement.innerText = `${name}`;

          let pic = newResponse.data.sprites.front_shiny;

          let imageUrl = newResponse.data.sprites.front_default;

          updateImg(imageUrl);

          let exp = newResponse.data.base_experience;

          expElement.innerText = `Base EXP:${exp}`;
        }
      }
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

pokedexData();
