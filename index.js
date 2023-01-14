const subHeading = document.getElementById("subheading")
const subtext=document.getElementById("subtext")
// console.log(subHeading);

// console.log(countries_data.length)
subHeading.innerText= `Curretly, we have ${countries_data.length} Countries `;
sortPopulation = countries_data.sort(function (a,b){
    return b.population-a.population
})
let totalpop=0;
countries_data.forEach(function (Element){
    totalpop = totalpop + Element.population
})

const display = document.createElement("div")
att=document.createAttribute("id")
att.value="disbody"
display.setAttributeNodeNS(att)
document.body.appendChild(display)
console.log(countries_data[0].population)
const disget = document.getElementById("disbody")
var clear =document.getElementById("disbody")
population()
function population(){
    clear.innerHTML=""
    subtext.innerHTML="10 Most populated countries in the world"
    disget.innerHTML=`<div id="country"><p id="name">World</p><div id="percent"><div id="graph" style="width: 100%;background-color: orange;"></div></div><p id="pops">${totalpop}</p></div>`
    for(let i=0;i<=10;i++){
        console.log(sortPopulation[i])
        const oneset = document.createElement("div")
        countval=document.createAttribute("id")
        countval.value="country"
        oneset.setAttributeNodeNS(countval)
        disget.appendChild(oneset)


        const name = document.createElement("p")
        const nameid=document.createAttribute("id")
        nameid.value="name"
        name.setAttributeNodeNS(nameid)
        console.log(name)
        name.innerHTML=sortPopulation[i].name
        oneset.appendChild(name)

        const percent = document.createElement("div")
        const percentid=document.createAttribute("id")
        percentid.value="percent"
        percent.setAttributeNodeNS(percentid)
        console.log(percent)
        
        const pergraph = document.createElement("div")
        const graphid=document.createAttribute("id")
        graphid.value="graph"
        pergraph.setAttributeNodeNS(graphid)
        console.log(pergraph)
        percent.appendChild(pergraph)
        let per = (sortPopulation[i].population/totalpop)*100
        pergraph.style.width=`${per}%`
        // pergraph.style.border=`solid yellow`
        pergraph.style.backgroundColor=` orange`
        oneset.appendChild(percent)

        const popu = document.createElement("p")
        const popuid=document.createAttribute("id")
        popuid.value="pops"
        popu.setAttributeNodeNS(popuid)
        console.log(popu)
        popu.innerHTML=sortPopulation[i].population
        oneset.appendChild(popu)

    }

}
var languagesarr = []
console.log(countries_data)
countries_data.map((ele)=>{
    // console.log(ele.languages)
    languagesarr.push(ele.languages)
})
// console.log(languagesarr)
const flatarry = languagesarr.flat()
// console.log(flatarry)
var languate={}
flatarry.forEach((ele)=>{
    languate[ele] = (languate[ele]||0)+1;
});
const langarray = Object.entries(languate);
const sortLanguage = langarray.sort((a,b)=>{
   return b[1]-a[1]
});
let totallang = 0

console.log(sortLanguage)
function language(){    
    clear.innerHTML=""
    subtext.innerHTML="10 Most spoken languages in the world"
    for(let i=0;i<=10;i++){
        console.log(sortLanguage[i])
        const oneset = document.createElement("div")
        countval=document.createAttribute("id")
        countval.value="country"
        oneset.setAttributeNodeNS(countval)
        disget.appendChild(oneset)


        const name = document.createElement("p")
        const nameid=document.createAttribute("id")
        nameid.value="name"
        name.setAttributeNodeNS(nameid)
        console.log(name)
        name.innerHTML=sortLanguage[i][0]
        oneset.appendChild(name)

        const percent = document.createElement("div")
        const percentid=document.createAttribute("id")
        percentid.value="percent"
        percent.setAttributeNodeNS(percentid)
        console.log(percent)
        
        const pergraph = document.createElement("div")
        const graphid=document.createAttribute("id")
        graphid.value="graph"
        pergraph.setAttributeNodeNS(graphid)
        console.log(pergraph)
        percent.appendChild(pergraph)
        let per = (sortLanguage[i][1]/sortLanguage.length)*100
        console.log(per)
        pergraph.style.width=`${per}%`
        // pergraph.style.border=`solid orange`
        pergraph.style.backgroundColor=` orange`
        oneset.appendChild(percent)

        const popu = document.createElement("p")
        const popuid=document.createAttribute("id")
        popuid.value="pops"
        popu.setAttributeNodeNS(popuid)
        console.log(popu)
        popu.innerHTML=sortLanguage[i][1]
        oneset.appendChild(popu)
        
    }   
}