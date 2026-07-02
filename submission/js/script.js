const trendingJerseys = [
    { name: "Man United Home Kit", price: "KSh 1,850" },
    { name: "Real Madrid Away Kit", price: "KSh 2,500" },
    { name: "Kenya National Jersey", price: "KSh 2,000" },
    { name: "Argentina World Cup Kit", price: "KSh 2,200" },
    { name: "Custom Name & Number Kit", price: "KSh 2,050" }
];
const servicesList = document.getElementById("services-list");
trendingJerseys.forEach((jersey) => {
    const item = document.createElement("div");
    item.classList.add("trending-item");
    item.innerHTML = `<h3>${jersey.name}</h3><span>${jersey.price}</span>`;
    servicesList.appendChild(item);
});