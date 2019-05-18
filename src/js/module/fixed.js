define(["jquery"],$=>{
    function Fixed(){
        this.body=$(".fixed");
        this.load()
    }
    $.extend(Fixed.prototype,{
        load(){
           this.body.load("/html/module/fixed.html");
        }
    }) 

    return new Fixed();
})