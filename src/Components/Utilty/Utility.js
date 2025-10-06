import Swal from "sweetalert2";

const getData=()=>{
    const storedBookstr=localStorage.getItem("readList");
    if(storedBookstr){
        const storedBookData=JSON.parse(storedBookstr);
        return storedBookData
    }
    else{
        return []
    }
    

}

const addData=(id)=>{
    const storedBookData=getData();
    if(storedBookData.includes(id)){
   Swal.fire({
  title: 'Info!',
  text: 'Data already exits',
  icon: 'info',
  confirmButtonText: 'Ok'
})
    }
    else{
        storedBookData.push(id)
        const data=JSON.stringify(storedBookData)
        localStorage.setItem("readList",data)
    }
    console.log(storedBookData)
}

export {addData, getData}