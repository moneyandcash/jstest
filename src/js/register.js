require(["config"],()=>{
    require(["jquery"],$=>{
        $("#register").on("click",()=>{
           let username= $("#username").val();
           let password= $("#password").val();
           $.post("http://localhost/dnf/v1/register.php",{username,password},data=>{
               alert(data.res_message+"即将跳转返回原登陆界面");
               history.back();
           },"json")
           
        })
    })
})