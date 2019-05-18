

define(["jquery","cookie"],$=>{
    function Modal(){
        this.modal=$("#modal");
        
       
        this.load().then(()=>{
            this.bindEvents();
        })
    }
    $.extend(Modal.prototype,{
        load(){
            return new Promise(resolve=>{
                this.modal.load("/html/module/modal.html",()=>{
                    resolve();
                })
            })
        },
        bindEvents(){
            if($.cookie("username") && $.cookie("password")){
               
                $("#username").val($.cookie("username"));
                $("#password").val($.cookie("password"));
            }
            $("#login").on("click",()=>{
                
                let username=$("#username").val();
                let password=$("#password").val();
                $.ajax({
                    url : "http://localhost/dnf/v1/login.php",
                    type: "post",
                    data: {username, password},
                    success: data => {
                    if(data.res_code === 1) {
                        console.log(data.res_message);
                        this.login(username,password);
                        
                       setTimeout($(".close").click(),1000);
                    }else{
                        alert(data.res_message)
                    }
                    },
                    dataType: 'json'
              })
            });
            $("#register").on("click",function(){
                location.href="/html/register.html"
            })
        },
        login(username,password){
                
               let expires= $(".remember")[0].checked ? {expires:10} : {};
               
                expires=Object.assign({path:"/"},expires);
                $.cookie("username",username,expires);
                $.cookie("password",password,expires);
                alert("登陆成功");
                $(".log").hide();
                $(".user").show();
                $(".user").first().html(username);
                
           
            
        }
    })


    return new Modal();
})