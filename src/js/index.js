require(["config"],() =>{
    require(["swiper","header","modal","main","footer","fixed"],(swiper)=>{
              
  var mySwiper = new swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    
   
    
    autoplay:true,
  })        
 
    })
})