    $('.services__tabs button').each(function(i){
        $(this).on('click', function(k){
            $(this).addClass('services__tab-btn_active')
            $(this).siblings().removeClass('services__tab-btn_active')
            
            $(`.service-main-navigation-second-type-item:nth-child(${k})`)
            
        }) 
    })