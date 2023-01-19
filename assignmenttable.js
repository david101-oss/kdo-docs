function retrieveData(){
    let item= localStorage.setItem('')
    let convertBackToArray=JSON.parse(item)
    console.log(convertBackToArray)
}
let arr = []
// let USER = JSON.parse(localStorage.getItem("USER"))
// if (USER != null){
//     arr = USER
// }
function mac(){
    const a=document.getElementById('na')
    const b=document.getElementById('naa')
    const c=document.getElementById('naaa')
  
    let data = {
        Name:a.value,
      price:b.value,
       available:c.value,
       

    }
    arr.push(data);
   
  
    document.getElementById('content').innerHTML=""
    del()
    localStorage.setItem("USER", JSON.stringify(arr))
    console.log(arr);

} 
function del(){
    
    for(let i = 0; i<arr.length;i++){
     let item=arr[i]
     document.getElementById('content').innerHTML+=`
     <tr>
       <td>${item.Name}</td>
       <td>${item.price}</td>
       <td>${item.available}</td>
    
  
     </tr>`

     
    }


}
// function on(){
    
//     localStorage.setItem("USER", JSON.stringify(...arr))
//     console.log(arr);

// }