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
//STEP 2
const wishlistInput = document.getElementById("wishlist-input");
const wishlistAddBtn = document.getElementById("wishlist-add-btn");
const wishlistItems = document.getElementById("wishlist-items");

wishlistAddBtn.addEventListener("click", () => {
    const value = wishlistInput.value.trim();
    if (value === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = value;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    wishlistItems.appendChild(li);

    wishlistInput.value = "";
});
//STEP 3
const orderForm = document.getElementById("order-form");
const orderName = document.getElementById("order-name");
const orderJersey = document.getElementById("order-jersey");
const orderFeedback = document.getElementById("order-feedback");

orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = orderName.value.trim();
    const jerseyValue = orderJersey.value.trim();

    if (nameValue === "" || jerseyValue === "") {
        orderFeedback.textContent = "Please fill in both your name and the jersey you want.";
        orderFeedback.style.color = "red";
        return;
    }

    if (nameValue.length < 2) {
        orderFeedback.textContent = "Please enter a valid name.";
        orderFeedback.style.color = "red";
        return;
    }

    orderFeedback.textContent = `wagwan, ${nameValue}! We've received your inquiry for the ${jerseyValue}. We'll WhatsApp you shortly.`;
    orderFeedback.style.color = "green";

    orderForm.reset();
});