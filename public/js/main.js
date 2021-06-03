const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city = document.getElementById('city')
const temp_data = document.getElementById('temp_data')
const status = document.getElementById('status')
const dataHide = document.querySelector('middle_layer')

const getInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "") {
        city.innerText = "Please write the name before search";
        dataHide.classList.add('data_hide');
    }
    else {
       try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=01c0e466906c606fb43b2d92ac31be26`;
            const res = await fetch(url);
            const data = await res.json();
            const arrData = [data];
            city.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_data.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if(tempMood === "Clear") {
                status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood === "Clouds") {
                status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if(tempMood === "Rain") {
                status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else {
                status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            dataHide.classList.remove('data_hide');

       }
       catch {
            city.innerText = "Please enter the name properly";
            dataHide.classList.add('data_hide');
       }
    }
}

submitBtn.addEventListener('click', getInfo);