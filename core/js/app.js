const fetchHolidays = () => {
    const countrySelect = document.getElementById('country-select');
    const countryCode = countrySelect.value;
    const url = `https://date.nager.at/api/v3/PublicHolidays/2023/${countryCode}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const daysList = document.getElementById('days-list');
            daysList.innerHTML = ''; 

            data.forEach(day => {
                const li = document.createElement('li');
                li.textContent = `${day.date} - ${day.localName}`;
                daysList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error al obtener los días festivos:', error);
        });
}