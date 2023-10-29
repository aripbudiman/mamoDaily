

const pushNegaraToDatabase=(data)=>{
    fetch("https://mamo-daily-default-rtdb.asia-southeast1.firebasedatabase.app/tes.json",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then((res)=>{
        alert("Data Berhasil")
    });
}

export {pushNegaraToDatabase};