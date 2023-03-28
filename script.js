const row = document.querySelector('.row');
const mySelect = document.getElementById("mySelect");


    mySelect.addEventListener("change", () => {
       const region = mySelect.value;
        fetch(`https://restcountries.com/v3.1/region/${region}/`)
            .then(response => response.json())
            .then(data => {
                row.innerHTML = '';
                Object.values(data).map(country => {
                    row.innerHTML += ` <div class="col-4">
                           <div class="box">
                              <div class="img-wrapper">
                                  <h3> ${country.name.common} </h3>
                                  <img class="flag" src="${country.flags.png}" alt=""><div>
                                </div>
                                <div class="capital"> Capital: <h4> ${country.capital[0]} </h4>
                                </div>
                                <div class="languages"> Languages: <h4> ${Object.values(country.languages)} </h4> 
                                </div>
                                <div class="area"> Area : <h4> ${country.area} </h4> km2 </div>
                                <div class="poulation"> Population : <h4> ${country.population} </h4>
                                </div>
                                <div class="map"> <a href="${Object.values(country.maps.googleMaps).join('')}" 
                                target="__blank"> <img class="img-map" src="./assets/map.png" alt="" width="35px"
                                title="Google MAP...."></a> </div>
                             </div>
                           </div>
                           </div>`
                })
            })
    })
mySelect.dispatchEvent(new Event('change'));

