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
                    file  : `/assets/images/seguridad/shutterstock_739165318.jpg`
                },
                {
                    title : `Sistemas biométricos` ,
                    text  : `Que se basan en el reconocimiento de una característica física de la persona que solicita 
                            el acceso para que pueda ser verificada de forma automática e instantánea.            
                    ` ,
                    file  : `/assets/images/seguridad/control_acceso.png`
                },
                {
                    title : `Sistemas de reconocimiento de matrícula o TAG` ,
                    text  : `Controlan el acceso mediante la identificación de la persona, del vehículo o la combinación de ambas.` ,
                    file  : `/assets/images/seguridad/shutterstock_1408823888.jpg`
                }
            ] ,
            funcionamientos : [
                {
                    number : 1  ,
                    title  : `Sistemas de acceso en red` ,
                    text   : `Son los que utilizan herramientas como los softwares de control de acceso y que ofrecen un alto nivel de seguridad.`
                },
                {
                    number : 2  ,
                    title  : `Sistemas de acceso autónomo` ,
                    text   : `En los que se requiere nungún tipo de conectividad ya que los propios terminales disponen de memoria para la gestión de los usuarios.`
                }
            ]
        }
    },
    template : /*html*/ `
        <div class="">
            <div class="container monserratLight">
                <div class="row text-center " >

                    <div class="col">
                        <h2 class="textPrimary monserratSemiBold text-xl-center text-lg-center seguridad-control-acceso-component-title"> Sistema de Control de Acceso </h2>
                    </div>
                </div>

                <div class="row  mt-5 " >

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img src="/assets/images/seguridad/shutterstock_1033910839.jpg" class="img-fluid">
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2 seguridad-control-acceso-component-padding-text">
                        <h5 class="monserratSemiBold my-4 textGray pl-4"> Un sistema de control de acceso tiene tres funciones principales: </h5>

                        <ul >
                            <li v-for="funcion in  funciones" class="mt-3 pl-2"> 
                                {{ funcion }}
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

            <div class="seguridad-control-acceso-bg mt-5 ">
                <div class="container monserratLight  ">
                    <div class="row titlePadding   " >

                        <div class="col my-5">
                            <h4 class="text-white monserratSemiBold  text-xl-center text-lg-center seguridad-control-acceso-component-title"> 
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
                                    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                        <img 
                                            :src  = "typeControl.file"
                                            class = "img-fluid" 
                                        >
                                    </div>
                                    <div class="col mt-3">
                                        <h5 class="text-white float-left monserratSemiBold" > {{ typeControl.title }} </h5>
                                        <p class="text-white float-left monserratLight" > {{ typeControl.text }} </p>

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
                <div class="row" >
                    
                    <div class="col my-5">
                        <h2 class="textGray monserratSemiBold text-xl-center text-lg-center seguridad-control-acceso-component-title"> 
                            Existen distintas formas de funcionamiento de los controles de accesos :
                        </h2>
                        
                    </div>
                </div>

                <div class="row monserratLight titlePadding" >
                    
                    <div class="col px-2" v-for="funcionamiento in funcionamientos">
                        <table>
                            <tr>
                                <td> <h1 class="textPrimary monserratSemiBold px-2 seguridad-control-acceso-component-item-number"> {{ funcionamiento.number }}. </h1> </td>
                                <td> 
                                    <h4 class="textPrimary monserratSemiBold  seguridad-control-acceso-component-item-title">  
                                        {{ funcionamiento.title }}
                                    </h4>
                                </td>

                            </tr>
                            <tr>
                                <td>  </td>
                                <td> 
                                    <p class="  fontSizeMedium">  
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