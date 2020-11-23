Vue.component( 'redes-wan-component' , {
    data(){
        return{
            ventajas : [
                {
                    number : 1 ,
                    title  : 'Gestión' ,
                    text   : `Permite administrar de mejor manera el ancho de banda, adaptándolo a las necesidades 
                                y prioridades de las empresas de forma totalmente personalizada. Todo este control y gestión se realiza
                                desde una única plataforma centralizada, lo que permite, gracias a esto, que cualquier cambio, se aplique casi
                                inmediatamente.` 
                },
                {
                    number : 2 ,
                    title  : 'Seguridad' ,
                    text   : `Seguridad en las comunicaciones, ya que los datos están cifrados de extremo a extremo, y están supervisadas
                                todas las comunicaciones por un firewall totalmente gestionable.` 
                },
                {
                    number : 3 ,
                    title  : 'Rapidez' ,
                    text   : `Rapidez en la aplicación de los cambios, al estar todo gestionado por software, se controla todo desde un solo lugar.` 
                }
            ]
        }
    },
    template : /*html*/ `
        <div class="container  monserratLight">
            <div class="row my-5">
                <div class="col titlePadding">
                    <h3 class=" monserratSemiBold textGray text-xl-center text-lg-center">
                        Redes por software <span class="textPrimary "> SD-Wan </span>
                    </h3>
                </div>
            </div>

            <div class="row">
                <div class="col titlePadding text-xl-center text-lg-center ">
                    <p class=" fontSizeLarge">
                        Con SD-Wan podrá gestionar y controlar de forma centralizada todos los componentes de Red a través de 
                        software, y todo ello de una manera sencilla. <br>
                        Una de las claves de SD-WAN es poder permitir a las empresas construir su WAN a medida, pagando por 
                        lo que se necesita realmente.
                    </p>
                </div>
            </div>

            <div class="row my-5">
                <div class="col  ">
                    <img src="/assets/images/redes/redes_sd_wan.png" class="img-fluid">
                </div>
            </div>

            <div class="row my-5">
                <div class="col titlePadding">
                    <h3 class=" monserratSemiBold textGray text-xl-center text-lg-center">
                        Ventajas de <span class="textPrimary "> SD-WAN </span>
                    </h3>
                </div>
            </div>

            <div class="row my-5">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 border-left redes-wan-component-item" v-for="item in ventajas">
                    <h3 class="redes-wan-component-item-number monserratSemiBold textPrimary px-3 "> {{ item.number }}. </h3>
                    <h3 class="redes-wan-component-item-title monserratSemiBold textGray  px-3"> {{ item.title }} </h3>
                    <p class="fontSizeMedium px-3 mt-3"> {{ item.text }} </p>
                </div>
            </div>
        </div>
    `
})