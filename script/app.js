const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
    const cityDetails = data.cityDetail;
    const weather = data.weather;

    //update details
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;
    //remove d-none class
    if(card.classList.contains("d-none")) {
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) => {
    const cityDetail = await getCity(city);
    const weather = await getWeather(cityDetail.Key);

    return {
        cityDetail,
        weather
    };
};

form.addEventListener('submit', e => {
    e.preventDefault();

    //get city value
    const city = form.City.value.trim();
    form.reset();
    //update ui
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})