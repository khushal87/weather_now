const form1=document.querySelector('form');
const city=form1.City.value.trim();

const searchQuery = async(city) => {
    const base="https://api.teleport.org/api/cities/";
    const query=`?search=${city}`;
    const response= await fetch(bas+query);
    const data=await response.json();
    console.log(data);
}
