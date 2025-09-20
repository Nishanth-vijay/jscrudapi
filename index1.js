let option=   {
  method: 'DELETE'
}

async function name1() {
    

for (let index = 0; index <10; index++) {
    let URL =  `http://localhost:3000/persons/${index}.address` ;
    

    let dat = await fetch(URL, option)
    let da = await dat.json()
    console.log(da.length);

    print(da)
}}
name1()