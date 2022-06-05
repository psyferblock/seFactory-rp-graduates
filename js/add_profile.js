let add_graduate=document.getElementById("add-graduate")
let add_rp=document.getElementById("add-rp")
let main_container=document.getElementById("main-container")
let graduate_container=document.getElementById("graduate-container")
let rp_container=document.getElementById("rp-container")


add_graduate.addEventListener("click",()=>{
    if ( rp_container.classList=="none"){
    graduate_container.classList.remove("none")
    }else{
        rp_container.classList.add("none")
        graduate_container.classList.remove("none")
    }
    console.log("something")
})
add_rp.addEventListener("click",()=>{
    if (graduate_container.classList=="none"){
    rp_container.classList.remove("none")
    }else{
        graduate_container.classList.add("none")
        rp_container.classList.remove("none")
        
    }
})
let graduates_name=document.getElementById("name-graduates")
let graduates_email=document.getElementById("graduates-email")
let gender=document.getElementById("gender")
let graduates_linkedin=document.getElementById("graduates-linkedin")
let graduates_rp=document.getElementById("graduates-rp")
let graduates_location=document.getElementById("graduates-location")
let graduates_github=document.getElementById("graduates-github")
let graduates_submit=document.getElementById("graduates-submit")

graduates_submit.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("woohooo")

    let data= new FormData()
    data.append("name",graduates_name.value)
    data.append("email",graduates_email.value)
    data.append("gender",gender.value)
    data.append("linkedin",graduates_linkedin.value)
    data.append("rp",graduates_rp.value)
    data.append("location",graduates_location.value)
    data.append("github",graduates_github.value)

       
    axios({
        method:"POST",
        url:"http://localhost/SeFactory-Backend/addSeGradApi.php",
        data:data,

    }).then((response)=>{
            console.log(response)
            // document.location="HTML/admin.html"

    })
    graduate_container.classList.add("none")


})
let rp_name=document.getElementById("rp-name")
let rp_email=document.getElementById("rp-email")
let rp_password=document.getElementById("rp-password")
let rp_location=document.getElementById("rp-location")
let rp_linkedin=document.getElementById("rp-linkedin")
let rp_title=document.getElementById("rp-title")
let rp_current_position=document.getElementById("rp-current-position")
let rp_submit=document.getElementById("rp-submit")

rp_submit.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("woohooo")
    let data= new FormData()
    data.append("name",rp_name.value)
    data.append("email",rp_email.value)
    data.append("password",rp_password.value)
    data.append("title",rp_title.value)
    data.append("linkedin",rp_linkedin.value)
    data.append("current-position",rp_current_position.value)
    data.append("location",rp_location.value)

    axios({
        method:"POST",
        url:"http://localhost/SeFactory-Backend/addRpApi.php",
        data:data,
    }).then((response)=>{
        console.log (response)
        // document.location="HTML/admin.html"
    })
    rp_container.classList.add("none")

})


