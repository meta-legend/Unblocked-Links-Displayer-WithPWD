const btn = document.getElementById("keysubmit")
const key = document.getElementById("key")
const resultt = document.getElementById("result")
const final = document.getElementById("final")

final.style.display = "none";

btn.addEventListener("click", () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
    "key": key.value
    });
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch("https://passwordchecker.cyclic.app/api", requestOptions)
    .then(response => response.json())
    .then(result => {console.log(JSON.parse(result)); 
        resultt.innerText = JSON.parse(result);
        setTimeout(() => {
            btn.style.display = "none";
            key.style.display = "none";
            resultt.style.display = "none";
        }, 5000)
        final.style.display = "block";})
    .catch(error => console.log('error', error));
    }
)