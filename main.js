const btn = document.getElementById("keysubmit")
const key = document.getElementById("key")
const result = document.getElementById("result")
const final = document.getElementById("final")

final.style.display = "none";

btn.addEventListener("click", () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
    "key": "meme69201020112012urmomkidbozo6969420moaner"
    });
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch("https://passwordchecker.cyclic.app/api", requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result); 
        result.innerText = result.body.authenticated;
        setTimeout(() => {
            btn.style.display = "none";
            key.style.display = "none";
            result.style.display = "none";
        }, 5000)
        final.style.display = "block";})
    .catch(error => console.log('error', error));
    }
)