const ws = new WebSocket("ws://127.0.0.1:8888");

ws.onopen = (event) =>{
   // console.log('Соединение установлено');
   // ws.send("hello server");
};
let staus = "";

ws.onmessage = (event) =>
{
   // console.log(event.data);
    let gm = JSON.parse(event.data);
    //console.log()

    let filed = gm['field'];
    let status = gm['status'];

    let cell = document.getElementById(filed);
    console.log(filed);
    console.log(status);
    cell.innerText = status;
    staus = status;

};

let cell = document.querySelectorAll(".itm");
console.log(cell);

cell.forEach(cel=>{
    cel.addEventListener("click", function(event){
        if(staus == "" || staus == "o")
        {
            event.target.textContent = "x";
            staus = "x";

            let xo = {
                "field":event.target.id,
                "status":staus
            };
            ws.send(JSON.stringify(xo))
        }else{
            event.target.textContent = "o";
            staus = "o";
            let xo = {
                "field":event.target.id,
                "status":staus
            };
            ws.send(JSON.stringify(xo))
        }
        
    })
})


let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i = 0; i<arr.length; i++)
{
    for(let j = 0; j<arr[i].length; j++)
    {
        console.log(arr[i][j]);
    }
    
}