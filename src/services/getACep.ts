export function getACep(cep:any) {
    fetch("viacep.com.br/ws/01001000/json/").then((res) => {
        res.json();
    }).then((data) => console.log(data))
}