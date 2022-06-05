let search_bar=document.getElementById("search-bar")            
let search_button=document.getElementById("search-button")
let ul_results=document.getElementById("ul-results")



search_button.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(search_bar.value)

    
    let data = new FormData()

    axios({
        method:"get",
        url:"http://localhost/SeFactory-Backend/getRpApi.php",
        data:data,
    }).then((response)=>{
        // var response_name=response.name
        // var response_email=response.email
        // var response_linkedin=response.linkedin
        // var response_location=response.location
        // var response_github=response.git_hub
        console.log(response.data)
        


        for  (var i =0;i<response.length;i++){
            let search_li=document.createElement("li");
            ul_results.appendChild(
                // console.log("anything for an api to work")
                search_li.innerHTML=`
                <div class="profile-box">
                    <div class="card">
                        <p>Name: <span>${response_name}</span></p>
                        <p>Name: <span>${response_email}</span></p>
                        <p>Name: <span>${response_linkedin}<span></p>
                        <p>Name: <span>${response_github}<span></p>
                        <p>Name: <span>${response_location}<span></p>


                    </div>
                <?div>
                
                `)
        }

    })
})
