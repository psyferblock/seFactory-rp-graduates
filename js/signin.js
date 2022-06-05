let signin=document.getElementById("sign-in");
let modal_wrapper=document.getElementById("modal-wrapper");
let sign_in_form=document.getElementById("sign-in-form")

let sign_in_email=document.getElementById("sign-in-email")
let sign_in_password=document.getElementById("sign-in-password")
let sign_in_admin=document.getElementById("sign-in-admin")

signin.addEventListener("click",()=>{
    modal_wrapper.classList.remove("none")
    sign_in_form.classList.remove("none")
    console.log("yay")
})


sign_in_admin.addEventListener("click",(e)=>{
    e.preventDefault()
    
    let url="http://localhost/SeFactory-Backend/signInApi.php"
    url+="?email="+sign_in_email.value
    url+="&password="+sign_in_password.value

    console.log(url)

axios({
    method:"GET",
    url:url,
 
}).then((response)=>{
    console.log(response)
    if (response.data["message"]){
        document.location="../admin.html"

    }
})


})

