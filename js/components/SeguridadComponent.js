Vue.component( 'seguridad-component' , {
    data(){
        return{
            sistemas : [
                {
                    title : 'Sistemas de alarmas' ,
                    file  : '/assets/images/seguridad/alarmas.png' , 
                    url   : '/seguridad_alarmas.html'
                },
                {
                    title : 'Sistemas de control de acceso' ,
                    file  : '/assets/images/seguridad/control_acceso.png' , 
                    url   : '/seguridad_control_acceso.html'
                },
                {
                    title : 'Cámaras de seguridad' ,
                    file  : '/assets/images/seguridad/camara_seguridad.png' , 
                    url   : '/seguridad_camaras.html'
                },
                {
                    title : 'Contadores de personas' ,
                    file  : '/assets/images/seguridad/contadores.png' , 
                    url   : '/seguridad_contador.html'
                },
                {
                    title : 'Proyectos a medida' ,
                    file  : '/assets/images/seguridad/a_medida.png' , 
                    url   : '/'
                },
                {
                    title : 'Mantenimiento' ,
                    file  : '/assets/images/seguridad/mantenimiento.png' , 
                    url   : '/'
                }
            ]
        }
    },
    template : /*html*/`
    <div class="container">
        <div class="row titlePadding mt-5">
            <div class="col-sm-12 col-xs-12 col-md-3 col-xl-3 col-lg-3 ">
                <img src="/assets/images/seguridad/seguridad_principal.svg" class="seguridad-component-image" >
            </div>

            <div class="col seguridad-component-padding-title">
                <h2 class="textPrimary monserratSemiBold "> ¿Qué sistema de seguridad? </h2>
                <p class=" monserratSemiBold mt-3 fontSizeLarge seguridad-component-description textGray"> 
                    En COMSEG contamops con el conocimiento y la experiencia para gestionar completamente un sistema de seguridad, desde el 
                    análisis de las opciones más adecuadas, la instalación e incluso el mantenimiento. 
                </p>

                <p class="  monserratLight mt-3 fontSizeMedium"> 
                    Lo asesoramos en cual sistema de seguridad es el adecuado para su negocio, tenemos el conocimiento para hacer que todo funcione,
                    sea escalable e integrable a los sistemas existentes. Nosotros le ayudamos a que tome la desición correcto, disponemos de la 
                    tecnología más adecuada para su empresa, también contamos con el equipo técnico para evaluar, instalar, y realizar las mantenciones.
                </p>

            </div>

        </div>
        <div class="row titlePadding mt-5  ">
            <div 
                class  = "col-sm-12 col-xs-12 col-md-6 col-xl-6 col-lg-6   my-2  seguridad-component-item px-2 " 
                v-for  = "sistema in sistemas"
                >
                <a 
                    :style = "' background-image: url(' + sistema.file + ');  background-repeat: no-repeat; background-size: 100% 100%;  '"
                    class  = "w-100 h-100 verticalAlignEnd text-decoration-none" 
                    :href  = "sistema.url"
                >  
                    <div class="text-white monserratSemiBold  w-100  seguridad-component-item-text-padding"> {{ sistema.title }} <img src="/assets/icons/icon_right_black.svg" class="seguridad-component-item-icon" ></div>
                
                </a>

                
            </div>            
        </div>
    </div>

    `
});