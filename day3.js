function print()
{
    let name=document.querySelector("#name").value;
    let city=document.querySelector("#city").value;
    document.querySelector("#bg").innerHTML=`<h1>${name}-${city}</h1>`;
}