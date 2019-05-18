
define(["jquery", "template"], ($, template) => {
    function Shoplist() {
        this.main = $("main");
        this.toggle=true;
        this.load().then(() => {
            this.getData();
            $(".sort-price").on("click",()=>{
                if(this.toggle){
                    this.sortData(this.data);
                    this.toggle=false;
                }else{
                    this.DeSortData(this.data);
                    this.toggle=true;
                }
               
            })
        });
    }

    $.extend(Shoplist.prototype, {
        load() {
            return new Promise(resolve => {
                this.main.load("/html/module/list.html", () => {
                    resolve();
                })
            })
        },
        getData() {
            $.get("http://rap2api.taobao.org/app/mock/166517/index/list", data => {
                if (data.res_code === 1) {
                    this.data=data.res_body.list;
                    this.renderData(data.res_body.list)
                }
            })
        },
        renderData(list) {
           
            
            let html = template("shopList", { list })
            this.main.html(html);
        },
        sortData(data){
            data.sort(function(a,b){
                return(a.price-b.price) 
             })
             this.renderData(data);
        },
        DeSortData(data){
            data.sort(function(a,b){
                return(b.price-a.price) 
             })
             this.renderData(data);
        }
    })


    return new Shoplist()
})