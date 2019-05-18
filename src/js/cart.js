require(["config"],()=>{
    require(["template","header","modal","footer","fixed"],(template,header)=>{
        class Cart{
            constructor(){
               
                this.render();
               
 
            }
            render(){
                let cart=JSON.parse(localStorage.cart)
                // for(let key in cart){
                //     let data=cart[key]
                //    $("tbody").append(template("data",{data})) 
                // }
                $("tbody").html(template("data",{cart}))
            }
           

            
            
        }
        new Cart();
    })
})
