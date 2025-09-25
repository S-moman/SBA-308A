const apiUrl =  'https://dragonball-api.com/api/characters?characters?page2&limit=20' // Base API URL
const cSection = document.getElementById("container")
const infoSection = document.getElementById("info-section")
const mContainer = document.getElementById("main-container")
const charSelect = document.getElementById("characters-select")



export async function initialStart() {
    const getInfo = await fetch(apiUrl);
    // console.log(getInfo);
    const infoData = await getInfo.json();
    // console.log(infoData);
    let character = infoData.items

     character.forEach((characters) => {
        // console.log(characters.name)
        const cCharacters = document.createElement("option")
        cCharacters.value = characters.id;
        cCharacters.textContent = characters.name;

        charSelect.appendChild(cCharacters);

        
    });


}



export async function getCharData(e) {
    const getCharInfo = await fetch(apiUrl)
    const charInfo = await getCharInfo.json();
    console.log(charInfo);
    let charData = charInfo.items
    let id = charSelect.value
    

    charData.forEach((data) => {
        // console.log(data);
        const cName = data.name
        const cKi = data.ki
        const mKi = data.maxKi
        const cRace = data.race
        const cDescrp = data.description

        if(id == data.id) {
            


        infoSection.innerHTML = `
        <div>Name: ${cName}</div>
        <br>
        <div class="lang-en"><strong>Description:</strong> ${cDescrp}</div>
        <br>
        <div><strong>Ki:</strong> ${cKi}</div>
        <br>
        <div><strong>Max Ki:</strong> ${mKi}</div>
        <br>
        <div><strong>Race:</strong> ${cRace}</div>
        `
        }

    })


}


charSelect.addEventListener('change', getCharData);

