// Используй публичный API Rest Countries, а именно ресурс name, возвращающий массив объектов стран удовлетворивших критерий поиска. 
// Добавь минимальное оформление элементов интерфейса.

// Напиши функцию fetchCountries(name) которая делает HTTP - запрос на ресурс name и возвращает промис с массивом стран - результатом запроса. 
// Вынеси её в отдельный файл fetchCountries.js и сделай именованный экспорт.


const countriesBase = 'https://restcountries.com/v3.1/name/';
const countriesInfoFields = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${countriesBase}${name}?${countriesInfoFields}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}