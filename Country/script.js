let container = document.getElementById("container");
let btn = document.getElementById("btn");
let link = null;
btn.addEventListener("click", function(){
    Handleclick();
})

function Asc(){
    link = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=asc"
    getData(link);
  
}

function Desc(){
    link = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc"
    getData(link);
    
}

function Handleclick(){
   if(btn.innerHTML === "Desc"){
    Desc();
    btn.innerHTML = "Asc";
   }else if(btn.innerHTML === "Asc"){
    Asc();
    btn.innerHTML = "Desc";
   }

}

async function getData(link){
    let res = await fetch(link)   // Fetch data from API
    let data = await res.json();
    let val = data.data;
    showData(val);
   
}




function showData(val){
    container.innerHTML = "";
    
    val.forEach((ele, i)=>{
        
        let card = document.createElement("div");
        let CountryName = document.createElement("h2");
        let population = document.createElement("h4");
        let Rank = document.createElement("h3");

        CountryName.innerText = `Country: ${ele.country}`;
        population.innerText = `Population: ${ele.population}`;
        Rank.innerText = `Rank: ${ele.Rank}`;


        card.append(Rank, CountryName, population);
        container.append(card);
    });
   
}
const sortCountriesByPopulation = (countries, order) => {
    return countries.sort((a, b) => {
        if (order === 'asc') {
            return a.population - b.population;
        } else {
            return b.population - a.population;
        }
    });
};



// data.sort((a, b) => b.population - a.population);