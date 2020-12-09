Vue.component( 'seguridad-control-acceso-component', {
    data(){
        return {
            funciones : [
                `La autenticación que permite la identificación de las personas o vehículos que solicitan acceder 
                a una empresa o a una zona.` ,
                `La autorización que gracias al software del sistema realiza las comprobaciones y envía la orden de abrir o no un acceso.`,
                `La Trazabilidad que facilita la obtención de listados de las personas.`
            ] ,
            typesOfControl : [
                {
                    title : `Sistema de proximidad` ,
                    text  : `Permite la utilzación de tarjetas u otros objetos que al acercarlos al terminal inicia la autenticación.` ,
                    file  : `/assets/images/seguridad/shutterstock_739165318.jpg` ,
                    style : `   background-image : url(/assets/images/seguridad/shutterstock_739165318.jpg) ;
                                background-position: -10px -38px;
                                background-size: 208px 140px;`,
                    class : `seguridad-control-acceso-component-image1`

                },
                {
                    title : `Sistemas biométricos` ,
                    text  : `Que se basan en el reconocimiento de una característica física de la persona que solicita 
                            el acceso para que pueda ser verificada de forma automática e instantánea.` ,
                    file  : `/assets/images/seguridad/control_acceso.png` ,
                    style : `   background-image : url(/assets/images/seguridad/control_acceso.png) ;
                                background-position: -57px -21px;
                                background-size: 240px 166px;`,
                    class : `seguridad-control-acceso-component-image2`

                },
                {
                    title : `Sistemas de  reconocimiento de matrícula o TAG` ,
                    text  : `Controlan el acceso mediante la identificación de la persona, del vehículo o la combinación de ambas.` ,
                    file  : `/assets/images/seguridad/shutterstock_1408823888.jpg` ,
                    style : `   background-image : url(/assets/images/seguridad/shutterstock_1408823888.jpg) ;
                                background-size: 190px 113px;
                                background-position-x: -3px;
                                background-position-y: center;
                            `,
                    class : `seguridad-control-acceso-component-image3`

                }
            ] ,
            funcionamientos : [
                {
                    number : 1  ,
                    title  : `Sistemas de <br/> acceso en red` ,
                    text   : `Son los que utilizan herramientas como los softwares de control de acceso y que ofrecen un alto nivel de seguridad.` ,
                    class: `mr-2`                    
                },
                {
                    number : 2  ,
                    title  : "Sistemas de <br/>  acceso autónomo" ,
                    text   : `En los que se requiere nungún tipo de conectividad ya que los propios terminales disponen de memoria para la gestión de los usuarios.`,
                    class  : ``
            
                }
            ]
        }
    },
    template : /*html*/ `
        <div class="">
            <div class="container monserratLight">
                <div class="row  " >

                    <div class="col ">
                        <h2 class="textPrimary monserratSemiBold text-xl-center text-md-center text-lg-center  titleMargin"> 
                            Sistema de Control de Acceso 
                        </h2>
                    </div>
                </div>

                <div class="row seguridad-control-acceso-component-title" >

                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">

                        <div class="seguridad-control-acceso-component-image">
                        
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 seguridad-control-acceso-component-padding-text">
                        <h5 class="monserratSemiBold mt-4 textBlack seguridad-control-acceso-component-title-secondary"> Un sistema de control de acceso tiene tres funciones principales: </h5>
              
                        <ul class="px-3">
                            <li v-for="funcion in  funciones" class="mt-4 fontSizeMedium"> 
                                {{ funcion }}
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

            <div class="seguridad-control-acceso-bg mt-5 ">
                <div class="container monserratLight  ">
                    <div class="row  px-4  " >

                        <div class="col seguridad-control-acceso-title-third">
                            <h4 class="text-white monserratSemiBold text-md-center text-xl-center text-lg-center   "> 
                                En base a esto podemos encontrar diferentes tipos de control de acceso según el sistema de 
                                identificación que utilicen:
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="container monserratLight titlePadding">
                    <div 
                        v-for="( typeControl , index ) in typesOfControl"
                        class="row  my-2" >

                        <div class="col ">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 p-0">
                                    
                                        <div
                                            :style  = "typeControl.style " 
                                            class   = "seguridad-control-acceso-component-item-img "
                                            :class  = "typeControl.class "
                                            
                                        >
                                        </div>
                                    </div>
                                    <div class="col mt-3">
                                        <h5 class="text-white float-left monserratSemiBold fontSizeMedium"  > {{ typeControl.title }} </h5>
                                        <p class="text-white float-left monserratLight fontSizeSmall" > {{ typeControl.text }} </p>

                                    </div>
                                </div>

                                <div class="row" v-if="(index  != ( typesOfControl.length - 1 ))">
                                    <div class="col">
                                        <hr  class ="hrWhite" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="container" >
                <div class="row titlePadding"  >
                    
                    <div class="col ">
                        <h2 class="textDark monserratBold text-xl-center px-lg-3 text-lg-center text-md-center titleMargin seguridad-control-acceso-title "> 
                            Existen distintas formas de funcionamiento de los controles de accesos:
                        </h2>
                        
                    </div>
                </div>

                <div class="row monserratLight titlePadding marginBottom" >
                    
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2  seguridad-control-acceso-component-margin" v-for="funcionamiento in funcionamientos">
                        <table>
                            <tr>
                                <td> 
                                    <h1 
                                        class  = "textDark monserratSemiBold px-2  seguridad-control-acceso-component-item-number"
                                        :class = "funcionamiento.class"
                                        > 
                                            {{ funcionamiento.number }}. 
                                    </h1> 
                                </td>
                                <td> 
                                    <h4 class="textPrimary monserratSemiBold  seguridad-control-acceso-component-item-title"
                                        v-html="funcionamiento.title"
                                        >  
    
                                    </h4>
                                </td>

                            </tr>
                            <tr>
                                <td>  </td>
                                <td> 
                                    <p class="  seguridad-control-acceso-component-text-item">  
                                        {{ funcionamiento.text }}
                                    </p>
                                </td>

                            </tr>

                        </table>

                    </div>

                   

                </div>

            </div>
            

            
        </div>


    `
})