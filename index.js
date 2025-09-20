let button = document.getElementsByClassName("btn")
let data;
let schema = ["id" ,"name", "phone", "username", "city", "age", "gender" ]
let URL = "http://localhost:3000/persons";
// console.log(button[3]);
let readdiv = document.getElementById("readdata")
let creatediv = document.getElementById("creatediv")
 let schema1 = schema
    schema1.shift();
    console.log(schema);

function getValuw(value) {
    if (value && value.trim() !== "") {
        return value;
    } else {
        return "";
    }
}

button[0].onclick = async () => {


    let dat = await fetch(URL)
    let da = await dat.json()


   
    
    readdiv.innerText = ""
    creatediv.innerText = ""
    deletediv.innerText=""
    updatediv.innerText=""
    let inpdata = []
    let inpdata1 = []
    data = "POST"
   

    console.log(button[0].innerText);

    schema1.forEach(element => {
        let inp = document.createElement("input")
        inp.placeholder = element
        creatediv.appendChild(inp)
        inpdata1.push(inp)

    });
    let btn = document.createElement("button")
    btn.innerText = "submit"
    creatediv.appendChild(btn)

    btn.onclick = () => {
        inpdata = inpdata1.map(inp => inp.value);

 let option = ({
        method: data,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "id": `${da.length + 1}`,
            "name": getValuw(inpdata[0]),
            "phone": getValuw(inpdata[1]),
            "username": getValuw(inpdata[2]),
            "city": getValuw(inpdata[3]),
            "age": getValuw(inpdata[4]),
            "gender" : getValuw(inpdata[5])

        })
    })
    
    
    
         fetchdetails(URL, option)
        console.log(inpdata);
         
            

}}
button[1].onclick = () => {
    readdiv.innerText = ""
    creatediv.innerText = ""
    deletediv.innerText=""
    updatediv.innerText=""

    console.log(button[1].innerText);
    data = "GET"
    fetchdetails(data)

}
button[2].onclick = () => {
    readdiv.innerText = ""
    creatediv.innerText = ""
    deletediv.innerText=""
    updatediv.innerText=""
    console.log(button[2].innerText);
    data = "PATCH"
    let array=[]
    let valuesofarray =[]
    schema1.forEach(element => {
        let inputpatch= document.createElement("input")
        inputpatch.type="checkbox"
        inputpatch.id= element
        let label = document.createElement("label") 
        label.innerText=element
        label.htmlFor=element
        array.push(inputpatch.value)
        document.getElementById("updatediv").append(inputpatch,label)
    });



}
button[3].onclick = () => {
     readdiv.innerText = ""
    creatediv.innerText = ""
    deletediv.innerText=""
    updatediv.innerText=""

    console.log(button[3].innerText);
    data = "DELETE"
    let option= { method: data }
     let inp = document.createElement("input")
     inp.placeholder= "enter id to delete"
    //  inp.type=Number;
    inp.type = "number"
    
     document.getElementById("deletediv").appendChild(inp)
      let submit = document.createElement("button")
      submit.innerText= "Submit"
     document.getElementById("deletediv").appendChild(submit   )
     
     submit.onclick= ()=>{
         let nish = inp.value ;
         // URL= `http://localhost:3000/persons?id=${id1}`
         console.log(nish);
// URL1  = URL+`?id=${nish}`
URL1  = URL+`/${nish}`
console.log(URL1);

 try {

    fetch(URL1,option);
    // alert("Deleted!");
    
 } catch (error) {
    console.log(error);
    
    
 }
  
    }
}

async function fetchdetails(data, option) {
    // try {

    //     if (!Response.ok) {
    //  throw new Error("servere erreor");
            
    //     }

         let dat = await fetch(URL, option)
    let da = await dat.json()
    console.log(da.length);
    print(da)
        
    // } catch (error) {
    //     console.log(error);
        
        
    // }
   
}


function print(data) {

    let table = document.createElement("table")

    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")
    let tr = document.createElement("tr")
    schema.forEach(ele => {
        let td = document.createElement("td")
        td.innerText = ele
        tr.appendChild(td)
    });
    thead.appendChild(tr)
    data.forEach(element => {
        // console.log(element);
        let trow = document.createElement("tr")
        for (const key in element) {
            let td = document.createElement("td")
            
            // if (key == "image") {
            //     let img = document.createElement("img")
            //     img.src = element[key]
            //     // td.innerText=img1
            //     td.appendChild(img)
            // }
           
                td.innerText = element[key]
            trow.appendChild(td)
        }
        tbody.appendChild(trow)

    });
    table.append(thead, tbody)
    readdiv.append(table)
    //  document.body.appendChild(div)
}

