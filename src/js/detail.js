require(["config"], () => {
    require(["template", "header", "footer", "modal", "zoom","cookie","fly","fixed"], (template,header) => {
        
        class Detail {
            constructor() {
                this.init();
            }

            init() {
                let id = Number(location.search.slice(4));
                $.get("http://rap2api.taobao.org/app/mock/166517/detail/shop", { id }, res => {
                    if (res.res_code === 1) {

                        let { data } = res.res_body
                        data = { ...data, id };
                        this.data=data;

                        this.render(data);
                        this.addCart();

                    }
                })
            }

            render(data) {
                $("main").html(template("detail-template", { data }))
                this.zoom();
            }

            zoom() {
                $(".zoom-img").elevateZoom({
                    gallery: 'gal1',
                    cursor: 'pointer',
                    galleryActiveClass: 'active',
                    borderSize: '1',
                    borderColor: '#888'
                });
            }

          


        }
        new Detail();
    })
})