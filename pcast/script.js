const emailInput = document.querySelector(".emailInput")
const passwordInput = document.querySelector(".passwordInput")
const loginBtn = document.querySelector(".loginBtn")

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const login = "https://nox-podcast-api.vercel.app/login"

    fetch(login, {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value
        }),
    })
        .then((response) => response.json())
        .catch(err => {
            alert("Giris Yapilamadi")
        })
        .then((data) => {
            console.log(data);
            if (data.error) {

            }
            else {
                window.open(
                    "browse.html"
                );
            }
        })

})