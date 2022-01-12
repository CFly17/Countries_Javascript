class Country {
    name: string;
    language: string;
    helloWorld: string;
    colors: string[];

    constructor(name: string, language: string, helloWorld: string, colors: string[]) {
        this.name = name;
        this.language = language;
        this.helloWorld = helloWorld;
        this.colors = colors;
    }
}

//Like in C#, an array can be of any type built in or user created
let countries: Country[] = [];

//Push functions like add for C# lists, it will add the new element 
//to he final spot in the array
countries.push(new Country("USA", "English", "Hello World!", ["red", "white", "blue"]));
countries.push(new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]));
countries.push(new Country("Algeria", "Arabic", "Marhaban bialealam!", ["green", "white", "red"]);
countries.push(new Country("Germany", "German", "Hallo Welt!", ["black", "red", "gold"]));
countries.push(new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"]));

console.log(countries);


function SwitchCountry() {
    let input = document.getElementsById("CountryList").value
    let country: Country =
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

function SwitchCountry(): Country {
    let countrySelected: string = document.getElementById("ClassMate").value;
    let stu: Student = classMates[index];

    let info: string = document.getElementById("Info").value;
    let output: string = `Name: ${stu.name}`;
    if (info === "homeTown") {
        output += `Home Town: ${stu.homeTown}`;
    }
    else {
        output += `Favorite Food: ${stu.favoriteFood} `;
    }

    document.getElementById("Output").innerText = output;


}