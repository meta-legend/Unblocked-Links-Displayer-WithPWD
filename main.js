const btn = document.getElementById("keysubmit")
const key = document.getElementById("key")
const result = document.getElementById("result")
const final = document.getElementById("final")

final.style.display = "none";

btn.addEventListener("click", () => {
    fetch("https://passwordchecker.cyclic.app", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "key": "meme69201020112012urmomkidbozo6969420moaner" })
    }).then((res) => {
        res.json()
    }).then((data) => {
        console.log(data)
        result.innerText = data.body.authenticated;
        setTimeout(() => {
            btn.style.display = "none";
            key.style.display = "none";
            result.style.display = "none";
        }, 5000)
        final.style.display = "block";
    })
})