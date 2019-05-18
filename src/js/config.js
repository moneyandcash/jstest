require.config({
    baseUrl : "/",
    paths : {
        "header" : "js/module/header",
        "banner" : "js/module/banner",
        "main" :"js/module/main",
        "footer":"js/module/footer",
        "fixed" : "js/module/fixed",
        "shopList":"js/module/shopList",
        "modal":"js/module/modal",
        "shopDetail":"js/module/shopDetail",
        "classification" : "js/module/classification",
        "jquery" : "libs/jquery/jquery-3.2.1",
        "template":"libs/art-template/template-web",
        "zoom":"libs/jquery-plugins/jquery.elevateZoom-3.0.8.min",
        "cookie":"libs/jquery-plugins/jquery.cookie",
        "swiper":"libs/swiper/js/swiper",
        "fly":"libs/jquery-plugins/jquery.fly"
    },
    shim :{
        "zoom": {
            deps :["jquery"]
        },
        "cookie" :{
            deps:["jquery"]
        },
        "fly" :{
            deps:["jquery"]
        }
        
    }
})