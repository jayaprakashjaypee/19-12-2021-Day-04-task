const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload=function()
{ if (request.status==200)
    {
    let a=JSON.parse(request.responseText)
    a.map((b)=>{
         console.log(b.name.official)});
    a.map((c)=>{
        console.log(c.region)
    });
    a.map((d)=>{
        console.log(d.subregion)
    });
    a.map((e)=>{
        console.log(e.population)
    });
}else{
    request.onerror=function(){
        console.log(error)
    }
}
}