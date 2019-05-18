

 //定义header 要依赖到jquery 所以要引入
 define(["jquery","template","cookie"],($,template)=>{
    function Header(){
       
        this.container = $("header");
        this.load().then(()=>{
            this.bindEvent();
            this.headCount();
            this.search();
            
        });
    }

    //extend 合并对象  和 原生Object.assign 功能一样
    $.extend(Header.prototype,{
        //es6 中增强写法  将 load :function(){}
        load(){

            return new Promise(resolve=>{

            this.container.load("/html/module/header.html",()=>{
                resolve();
            })

            })
            //load 为jquery 方法 
            
        },
        bindEvent(){
            
          let username= $.cookie("username");
          if(username){
              $(".log").hide();
              $(".user").show();
              $(".user").first().html(username);
          }else{
            $(".user").hide();
            $(".log").show();
          }
           $(".logout").on("click",()=>{
            $.removeCookie("username",{path:"/"});
            $(".log").show();
            $(".user").hide();
           })
        },
        headCount(){
            this.count=0
            let cart=JSON.parse(localStorage.cart)
            cart.forEach((item,index) => {
                this.count+= item.num
            });
            
            $("#cartNum").html(this.count);
            $(".fixed span").html(this.count);
        },
        search(){
            $("#search input").on("keyup",function(){
                let keyWord=$(this).val();
             
                
                    
                        $.getJSON('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?&wd='+keyWord,data=>{ 
                                data=data.s
                               let a= template("input-search",{data});
                              $("header .result").html(a);
                        })
                       
                  
                    
                    
              
            })
        }
        
        


    })

    return new Header();
 })