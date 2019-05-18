


define(["jquery","template"],($,template)=>{
    function Main(){
        
        this.main= $("main");
        
        this.load().then(()=>{
            this.getData()
        });
           
      
        
    }
    $.extend(Main.prototype,{
        
        load(){
            return new Promise(resolve=>{
                this.main.load("/html/module/main.html",()=>{
                   
                    resolve();
                });
            })
            
        },

        getData(){
            $.get("http://rap2api.taobao.org/app/mock/166517/index/type",data=>{
                if(data.res_code===1){
                    this.renderData(data.res_body.list);
                }
            })
        },
        renderData(list){
           
            let html=template("shopName1",{list});
           $("#shop1").html(html);
           $("#shop2").html(html);
            
           
           
        }

            
        
    })

    return new Main();
})