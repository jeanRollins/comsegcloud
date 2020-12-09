Vue.component( 'seguridad-alarmas-component' , {
    data(){
        return{

        }
    },
    template : /*html*/`
        <div class="container">
            <div class="row titlePadding ">
                <div class="col">
                    <h2 class="textPrimary monserratSemiBold text-xl-center text-md-center text-lg-center titleMargin"> Sistemas de alarmas </h2>
                </div>
            </div>

            <div class="row ">
                <div class="col ">
                    <img src="/assets/images/seguridad/alarmas_principal.png" class="w-100 h-100" >

                </div>
            </div>

            <div class="row monserratLight marginBottom fontSizeMedium seguridad-alarmas-component-item-margin">
                
                <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 mt-5">
                    <div class=" seguridad-alarmas-component-item-title">
                        <h2 class="textPrimary monserratBold "> Sistemas <br/> inteligentes </h2>
                    </div>
                    <p class="seguridad-alarmas-component-item ">
                        Los sistemas de alarmas inteligentes están compuestos por una comnincación de productos de seguridad que pueden controlar de 
                        manera remota por el usuario a través de un smartphone o un PC, si a esto le sumamos la posibilidad de ejecutar acciones 
                        cuando un sensor de la alarma se alerta, podemos minimizar los daños frente a siniestros. 
                    </p>
                </div>

                <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 mt-5">
                    <div class="seguridad-alarmas-component-item-title">
                        <h2 class="textPrimary monserratBold "> Encuentra <br/> la mejor solución </h2>
                    </div>
                    <p class="seguridad-alarmas-component-item">
                        Existen sensores de humo, gases, temperatura, humedad, agua entre otros, que pueden generar acciones como habilitación 
                        de sistemas de extracción de aire, aumento o disminución de temperatura y cortes de llaves de pase de agua. En Comseg te
                        ayudaremos a encontrar la solución que mejor se adapte a tus necesidades. 
                    </p>
                </div>

            </div>

        </div>
    `
});