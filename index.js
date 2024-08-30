const starwarss = document.getElementById('starwarss');
console.log(starwarss);
const fetchstar = ()=>{    
  const promises = [];
    for(let i = 1 ; i<=83;i++){
      const url =`https://swapi.dev/api/people/${i}`;
      promises.push(fetch(url).then((res)=>res.json()));
    };
    Promise.all(promises).then(results=>{
      const star = results.map((data)=>({
          name:data.name,
          height:data.height,
          mass:data.mass,
          gender:data.gender,
          birth_year:data.birth_year,
          
          
      }));
      displaystar(star);
    });
  };   
            
const displaystar =(star)=>{
  console.log(star)
  const starwarhtml = star.map((starwars) =>
    `<li class = "card">
        <h3 class="card-title">${starwars.name}</h3>
        <h3 class="card-title">Height = ${starwars.height}</h3>
        <h3 class="card-title">BodyWeight = ${starwars.mass}</h3>
        <h3 class="card-title">Gender = ${starwars.gender}</h3>
        <h3 class="card-title">Birth = ${starwars.birth_year}</h3>
    `
  ).join('');
  starwarss.innerHTML = starwarhtml;
};
fetchstar();

const planetss = document.getElementById('planetss');
console.log(planetss);
const fetchplanet = ()=>{    
  const promises = [];
    for(let i = 1 ; i<=60;i++){
      const url =`https://swapi.dev/api/planets/${i}`;
      promises.push(fetch(url).then((res)=>res.json()));
    };
    Promise.all(promises).then(results=>{
      const planet = results.map((data)=>({
          name:data.name,
          diameter:data.diameter,
          gravity:data.gravity,
          population:data.population,
          terrain:data.terrain,
          
          
      }));
      displayplanet(planet);
    });
  };   
            
const displayplanet =(planet)=>{
  console.log(planet)
  const planetshtml = planet.map((planets) =>
    `<li class = "card">
        <h3 class="card-title">${planets.name}</h3>
        <h3 class="card-title">Diameter = ${planets.diameter}</h3>
        <h3 class="card-title">Gravity = ${planets.gravity}</h3>
        <h3 class="card-title">Population = ${planets.population}</h3>
        <h3 class="card-title">Terrain = ${planets.terrain}</h3>
    `
  ).join('');
  planetss.innerHTML = planetshtml;
};
fetchplanet();

const starshipss = document.getElementById('starshipss');
console.log(starshipss);
const fetchstarship = ()=>{    
  const promises = [];
    for(let i = 1 ; i<=60;i++){
      const url =`https://swapi.dev/api/starships/${i}`;
      promises.push(fetch(url).then((res)=>res.json()));
    };
    Promise.all(promises).then(results=>{
      const starship = results.map((data)=>({
          name:data.name,
          mdoel:data.mdoel,
          length:data.length,
          crew:data.crew,
          passengers:data.passengers,
          
          
      }));
      displaystarship(starship);
    });
  };   
            
const displaystarship =(starship)=>{
  console.log(starship)
  const starshipshtml = starship.map((starships) =>
    `<li class = "card">
        <h3 class="card-title">${starships.name}</h3>
        <h3 class="card-title">Model = ${starships.model}</h3>
        <h3 class="card-title">Length = ${starships.length}</h3>
        <h3 class="card-title">Crew = ${starships.crew}</h3>
        <h3 class="card-title">Passengers = ${starships.passengers}</h3>
    `
  ).join('');
  starshipss.innerHTML = starshipshtml;
};
fetchstarship();