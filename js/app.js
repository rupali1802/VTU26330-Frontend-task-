const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
menu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
const darkBtn = document.getElementById("darkBtn");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
    );
});
if(localStorage.getItem("theme") === "true"){
    document.body.classList.add("dark");
}
document.getElementById("contactForm")
.addEventListener("submit", function(e){
    e.preventDefault();
    const name =
    document.getElementById("name").value;
    const email =
    document.getElementById("email").value;
    const message =
    document.getElementById("message").value;
    if(name === "" ||
       email === "" ||
       message === ""){
        alert("All fields are required");
        return;
    }
    alert("Form Submitted Successfully");
});
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const blogContainer = document.getElementById("blog-container");
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    if(!response.ok){
        throw new Error("Failed to fetch");
    }
    return response.json();
})
.then(data => {
    loading.style.display = "none";
    const posts = data.slice(0,6);
    const titles = [
    "Time Management",
    "Project Planning",
    "Task Organization",
    "Team Collaboration",
    "Productivity Tips",
    "Work Efficiency"
];
    posts.forEach((post,index) => {
        const card =
        document.createElement("div");
        card.classList.add("blog-card");
        card.innerHTML = `<h3>${titles[index]}</h3> </h3> <p>${post.body.substring(0,100)}...</p> <button class="btn">Read More</button>`;
        blogContainer.appendChild(card);
    });
})
.catch(err => {
    loading.style.display = "none";
    error.textContent =
    "Unable to load blog posts.";
    console.log(err);
});