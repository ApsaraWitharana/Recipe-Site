const registerButton = document.getElementById("register");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("ContainerForm");

registerButton.addEventListener("click", () =>{
    container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () =>{
    container.classList.remove("right-panel-active");
})

