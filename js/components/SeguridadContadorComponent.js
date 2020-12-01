Vue.component( 'seguridad-contador-component' , {
    data(){
        return{

        }
    },
    template : /*html*/ `
        <div class="container monserratLight">
            <div class="row  mt-4">
                <div class="col">
                    <h2 class="textPrimary monserratSemiBold text-xl-center text-lg-center seguridad-contador-component-margin-title text-md-center"> 
                        Contadores de Personas 
                    </h2>
                </div>
            </div>
        
            <div class="row  mt-4">
                <div class="col ">
                    <div class="seguridad-contador-component">
                    </div>
                </div>
            </div>

            <div class="row  seguridad-contador-component-margin-content">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5  seguridad-contador-component-item-left  text-lg-right">
                    <h1 class="textPrimary monserratSemiBold seguridad-contador-component-title-secondary text-md-right"> 
                        <span class="lyricsWithBorder" > Detección </span> de entrada y salida 
                        
                    </h1>

                </div>

                <div class="col seguridad-contador-component-item-padding  seguridad-contador-component-item-right border-left">
                    <p class="monserratBlack "> 
                        Los contadores de personas nos indican el número de visitantes que han entrado en un lugar determinado, ya sea
                        un centro comercial, una tienda, un local o en una zona determinada del mismo.
                    </p>
                    <p class=""> 
                        Permite determinar las horas de máxima y mínima afluencia, los días con más tránsito. Si esta información la cruzamos
                        con las ventas por día, hora, podemos calcular la tasa de conversión (ventas/tráfico), permitiendo hacer gestión sobre 
                        las ventas y manejos de turnos.
                    </p>
                </div>
            </div>

        </div>
    `
})