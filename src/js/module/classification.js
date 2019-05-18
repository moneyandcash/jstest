define(["jquery"],$=>{
    function Classification(){
        this.container=$(".classfication");
        this.load().then(()=>{
            console.log(3);
        })
    }
    $.extend(Classification.prototype,{
        load(){
            return new Promise(resolve=>{
                this.container.load("/html/module/classification.html",()=>{
                    resolve();
                })
            })
        }
    })

    return new Classification();
})