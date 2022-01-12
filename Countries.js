class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Hello World!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Marhaban bialealam!", ["green", "white", "red"]);
let germany = new Country("Germany", "German", "Hallo Welt!", ["black", "red", "gold"]);
let france = new Country("Algeria", "French", "Bonjour le monde!", ["blue", "white", "red"]);


function SwitchCountry() {
    let input = document.getElementsById("CountryList").value
    let country : Country = 
    let countryname: string = `Country: ${}`
    if (input === "USA") {
        //set country to usa 
        country = usa;
        document.getElementById("BackgroundColor").id = "Color1";
            
    }
    else if (input === "Mexico") {
        country = mexico;
        document.getElementById("BackgroundColor").id = "Color4";

    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "France") {
        country = france;
    }
    else if (input === "Germany") {
        country = germany;
    }

}