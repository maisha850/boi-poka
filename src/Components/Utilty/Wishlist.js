import Swal from "sweetalert2";

const getWishData=()=>{
    const storedBookstr=localStorage.getItem("wishList");
    if(storedBookstr){
        const storedBookData=JSON.parse(storedBookstr);
        return storedBookData
    }
    else{
        return []
    }
    

}

const addWishData=(id)=>{
    const storedBookData=getWishData();
    if(storedBookData.includes(id)){
    Swal.fire({
  title: 'Info!',
  text: 'Data already exists',
  icon: 'info',
  confirmButtonText: 'ok',
  
})
    }
    else{
        storedBookData.push(id)
        const data=JSON.stringify(storedBookData)
        localStorage.setItem("wishList",data)
    }
    console.log(storedBookData)
}

export {addWishData, getWishData}