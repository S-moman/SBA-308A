// @ts-check
const apiUrl =
  "https://dragonball-api.com/api/characters"; // Base API URL
const cSection = document.getElementById("container");
const infoSection = document.getElementById("info-section");
const mContainer = document.getElementById("main-container");
const charSelect = document.getElementById("characters-select");


// Async function to get everything started
export async function initialStart() {
  const getInfo = await fetch(apiUrl);
  const infoData = await getInfo.json();
  console.log(infoData);
  let character = infoData.items;
  let links = infoData.links
  let fLink = links.next
  const getMoreChar = await fetch(fLink);
  const moreChar = await getMoreChar.json();
  console.log(moreChar);

  character.forEach((characters) => {
    // console.log(characters.name)
    const cCharacters = document.createElement("option");
    cCharacters.value = characters.id;
    cCharacters.textContent = characters.name;

    charSelect.appendChild(cCharacters);
  });
  moreChar.items.forEach((characters) => {
    // console.log(characters.name)
    const cCharacters = document.createElement("option");
    cCharacters.value = characters.id;
    cCharacters.textContent = characters.name;

    charSelect.appendChild(cCharacters);
  });
}

// Grabbing the character information
export async function getCharData(e) {
  const getCharInfo = await fetch(apiUrl);
  const charInfo = await getCharInfo.json();
  console.log(charInfo);
  let charData = charInfo.items;
  let id = charSelect.value;

  // Cycling through to get the information needed
  charData.forEach((data) => {
    // console.log(data);
    const cName = data.name;
    const cKi = data.ki;
    const mKi = data.maxKi;
    const cRace = data.race;
    const cDescrp = data.description;
    const cAffiliaiton = data.affiliation
    const cPhoto = data.image;
    

    if (id == data.id) {
      const photoZone = document.getElementById("character-photo");
      const photo = document.querySelector("img");
      photo.src = cPhoto;
      photo.alt = cName;
    

      infoSection.innerHTML = `
        <h2>Name: ${cName}</h2>
        <br>
        <div class="lang-en"><strong>Description:</strong> ${cDescrp}</div>
        <br>
        <div><strong>Ki:</strong> ${cKi}</div>
        <br>
        <div><strong>Max Ki: <i>${mKi}</div></i></strong>
        <br>
        <div><strong>Race:</strong> ${cRace}</div>
        <br>
        <div><strong>Affiliation:</strong> ${cAffiliaiton}</div>
        `;
    }
  });
}

charSelect.addEventListener("change", getCharData);
 

export async function getPlanet() {
  const getPlanetInfo = await fetch("https://dragonball-api.com/api/planets")
  const planetInfo = await getPlanetInfo.json()
  console.log(planetInfo);
  const planets = planetInfo.items
  console.log(planets)

  planets.forEach((planet) => {
    document.body.style.backgroundImage = planet.image 
  })

}