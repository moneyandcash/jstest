define(["jquery"],$=>{
    function Footer() {
        this.footer=$("footer");
        this.load();
    }
    $.extend(Footer.prototype,{
        load(){
            this.footer.load("/html/module/footer.html")
        }
    })
    return new Footer();
})