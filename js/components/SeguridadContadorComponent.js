Vue.component( 'seguridad-contador-component' , {
    data(){
        return{

        }
    },
    template : /*html*/ `
        <div class="container monserratLight">
            <div class="row titlePadding mt-4">
                <div class="col">
                    <h2 class="textPrimary monserratSemiBold text-xl-center text-lg-center "> Contadores de Personas </h2>
                </div>
            </div>
        
            <div class="row titlePadding mt-4">
                <div class="col">
                    <img src="/assets/images/seguridad/contadores.png" class="img-fluid">
                </div>
            </div>

            <div class="row titlePadding mt-5">
                <div class="col seguridad-contador-component-item-padding">
                    <h1 class="textPrimary monserratSemiBold seguridad-contador-component-title-secondary"> 
                        <span class="lyricsWithBorder" > Detección </span> de entrada y salida 
                        
                    </h1>

                </div>

                <div class="col seguridad-contador-component-item-padding">
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