const APIKEY ="8bc6654a8ae93dfec6b25ff7634e7159";


/*let url ="https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=8bc6654a8ae93dfec6b25ff7634e7159&units=metric&lang=fr"
fetch(url).then( response =>
    response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = data.main.temp +'°C';
        document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
    })
    ).catch(err=> console.log('Erreur : ' +err));*/

    let apiCall = function(city){
        let url ='https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=8bc6654a8ae93dfec6b25ff7634e7159&units=metric';
fetch(url).then( response =>
    response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = '<i class="fa-solid fa-temperature-half"></i>'+data.main.temp +'°C';
        document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-water'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
    })
    ).catch(err=> console.log('Erreur : ' +err));
    }



    document.querySelector('form').addEventListener('submit',function(e){
        e.preventDefault();
       let ville = document.querySelector('#inputCity').value;

       apiCall(ville);
        
    })

    apiCall('LeMans');
