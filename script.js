const apiUrl =  'https://dragonball-api.com/api/characters' // Base API URL
const cSection = document.getElementById("container")
const infoSection = document.getElementById("info-section")
const mContainer = document.getElementById("main-container")
const charSelect = document.getElementById("characters-select")



export async function initialStart() {
    const getInfo = await fetch(apiUrl+ `?characters?page2&limit=20`);
    // console.log(getInfo);
    const infoData = await getInfo.json();
    console.log(infoData);
    let character = infoData.items

     character.forEach((characters) => {
        console.log(characters.name)
        const cCharacters = document.createElement("option")
        cCharacters.value = characters.race;
        cCharacters.textContent = characters.name;

        charSelect.appendChild(cCharacters);

        
    });


}



export async function getCharData(e) {
    const getCharInfo = await fetch(apiUrl + `?characters?page2&limit=20`)
    console.log(e.target.value)
}


charSelect.addEventListener('change', getCharData);

