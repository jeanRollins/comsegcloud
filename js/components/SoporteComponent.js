Vue.component( 'soporte-component' , {
    data(){
        return{

        }
    },
    methods: {
        changeCharacter : function(ref){
            const content = this.$refs[ref].textContent.trim() ;
            this.$refs[ref].textContent = ( content == '+' ) ? '-' : '+' ;
        }
    },
    mounted (){
     
    },

    template : /*html*/ `
        <div class="container monserratLight  marginBottom">
            <div class="row soporte-component-padding soporte-component-title-margin-top">
                <div class="col monserratSemiBold  textGray">
                    <h3 class="soporte-component-title-principal text-md-center text-lg-center text-xl-center "> 
                        Ya sea para el <span class=" textPrimary"> servicio de outsourcing o outtasking,</span>  
                        Comseg ofrece distintos tipos de asistencias informáticas.
                    </h3>
                </div>
            </div>
            <div class="row soporte-component-padding  mt-4 fontSizeLarge">
                <div class="col">
                    <p class="textGray soporte-component-description text-md-center text-lg-center text-xl-center  "> 
                        En la actualidad existe un amplio número de servicios que pueden externalizarce en empresas 
                        especializadas donde obtiene una gama completa de sus servicios tecnológicos, la externalización
                        es de acuerdo a sus lineamientos y objetivos, lo que permite un conocimiento mutuo entre cliente
                        y proveedor a largo plaza.
                    </p>
                </div>
            </div>

            <div class="row  soporte-component-item soporte-component-item-margin-top fontSizeLarge ">
                <div class="col-xs-12 col-sm-12 col-md-6 col-md-lg col-md-xl ">
                    <img 
                        src   = "/assets/images/soporte/procesador.jpg"  
                        class = " w-100 soporte-component-padding-image1"    
                    />
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-md-lg col-md-xl ">
                    <div class=" soporte-component-item-padding " >
                        <table cellspacing="0">
                            <tr>
                                <td> 
                                    <span class="textPrimary monserratSemiBold  soporte-component-number-title"> 1. </span> 
                                </td>
                                <td class="soporte-component-item-padding-left">
                                    <p class=" monserratSemiBold soporte-component-title m-0"> Soporte y configuración de computadores personales </p> 
                                </td>
                            </tr>
                        </table>
                        
                    </div>
                    <p class="textGray fontSizeMedium monserratBlack soporte-component-title-item soporte-component-padding-description"> 
                        Sabemos que es primordial la continuidad operativa  de sus colaboradores, 
                        para  ello ofrecemos servicios de instalación y configuración de sistemas operativos, antivirus, 
                        programas de ofimática, limpieza interna y externa, a través de los siguientes tipos de asistencia :
                    </p>
                    <div id="someListItem" class="  monserratSemiBold fontSizeMedium textGray soporte-component-title-item-list-padding" >
                        <li class=""> 
                            Remota  
                            <a 
                                class="link textPrimary float-right pr-2 fontSizeLarge" 
                                data-toggle="collapse" 
                                role="button" 
                                aria-expanded="false" 
                                aria-controls="collapseExample1" 
                                href="#collapseExample1" 
                                v-on:click="changeCharacter('collapseExample1')"
                                ref ="collapseExample1"
                            > +  
                            </a>   
                            <div class="collapse" id="collapseExample1">
                                <p class="mt-2">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.                          
                                
                                </p>
                            </div>
                            <hr/>                  
                        </li>
                        
                        <li class=""> 
                            Visita Mensual Programada  
                            <a 
                                class="link textPrimary float-right pr-2 fontSizeLarge" 
                                data-toggle="collapse" 
                                role="button" 
                                aria-expanded="false" 
                                aria-controls="collapseExample2" 
                                href="#collapseExample2" 
                                v-on:click="changeCharacter('collapseExample2')"
                                ref ="collapseExample2"
                                > +  
                            </a>   
                            <div class="collapse" id="collapseExample2">
                                <p class="mt-2">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.                          
                                
                                </p>
                            </div>
                            <hr/>    
                        </li>
                        <li class=""> 
                            Visita  por llamados  
                            <a 
                                class="link textPrimary float-right pr-2 fontSizeLarge" 
                                data-toggle="collapse" 
                                role="button" 
                                aria-expanded="false" 
                                aria-controls="collapseExample3" 
                                href="#collapseExample3" 
                                v-on:click="changeCharacter('collapseExample3')"
                                ref ="collapseExample3"
                                > +  
                            </a>   
                                <div class="collapse" id="collapseExample3">
                                <p class="mt-2">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.                          
                                
                                </p>
                            </div>
                            <hr/>         
                        </li>

                    </div>
                </div>
            </div>


            <div class="row  py-4 soporte-component-item fontSizeLarge ">
                
                <div class=" col-xs-12 col-sm-12 col-md-6 col-md-lg col-md-xl soporte-component-order2">
                    <div class="soporte-component-item-padding " >
                        <table cellspacing="0">
                            <tr>
                                <td> 
                                    <span class="textPrimary monserratSemiBold  soporte-component-number-title"> 2. </span> 

                                </td>
                                <td class="soporte-component-item-padding-left">
                                    <p class=" monserratSemiBold soporte-component-title m-0"> Soporte y administración <br/> de servidores </p>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <p class="textGray fontSizeMedium monserratBlack soporte-component-title-item soporte-component-padding-description"> 
                        Mantener la operación de su negocio sin interrupciones es un factor primordial para su empresa, 
                        es por esto que ofrecemos un servicio de <span class="textPrimary">Administración y Mantenimiento</span> reactivo y proactivo para su 
                        infraestructura tecnológica.
                    </p>
                    <p class="textGray fontSizeMedium monserratBlack soporte-component-padding-description"> 
                        Habilitación y administración de servidores y aplicaciones Windows y Linux.
                    </p>
                    
                </div>
                <div class=" col-xs-12 col-sm-12 col-md-6 col-md-lg col-md-xl soporte-component-order1">
                    <img 
                        src   = "/assets/images/soporte/soporte_admin.jpg"  
                        class = "w-100 h-100 soporte-component-padding-image2"    
                    />
                </div>
            </div>

            <div class="row py-4 soporte-component-item fontSizeLarge align-items-center">
                <div class="col-xs-12 col-sm-12 col-md-6 col-md-lg col-md-xl ">
                    <img 
                        src   = "/assets/images/soporte/shutterstock_1355147585.jpg"  
                        class = "w-100 h-100"    
                    />
                </div>
                
                <div class="col-xs-12 col-sm-12 col-md-6 col-md-lg col-md-xl ">
                    <div class="soporte-component-item-padding " >
                        <table>
                            <tr>
                                <td> 
                                    <span class="textPrimary monserratSemiBold  soporte-component-number-title"> 3. </span> 
                                </td>
                                <td class="soporte-component-item-padding-left">
                                    <p class=" monserratSemiBold soporte-component-title m-0 "> Soporte y configuración de computadores personales </p>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <p class="textGray fontSizeMedium monserratBlack  soporte-component-title-item soporte-component-padding-description"> 
                        Administrar de manera segura y fiable sus redes es parte importante de la operación de su negocio, 
                        los podemos asesorar en : 
                    </p>
                    <div class="textGray fontSizeMedium monserratBlack soporte-component-title-item-list-padding ">
                        <li class=""> Diseño de Redes. </li>
                        <li class=""> Administración y configuración de firewall.  </li>
                        <li class=""> Cableado estructurado.  </li>
                    </div>

                    
                </div>
            </div>

            <div class="row py-4 soporte-component-item fontSizeLarge align-items-center">
                
                <div class="col-xs-12 col-sm-12 col-md-6 col-md-lg col-md-xl soporte-component-order2">
                    <div class="soporte-component-item-padding " >
                        <table>
                            <tr>
                                <td> 
                                    <span class="textPrimary monserratSemiBold  soporte-component-number-title "> 4. </span> 

                                </td>
                                <td class="soporte-component-item-padding-left">
                                    <p class=" monserratSemiBold soporte-component-title m-0"> Soporte y administración <br/> de cámaras </p>
                                </td>
                            </tr>
                        </table>
                        
                    </div>
                    <p class="textGray fontSizeMedium monserratBlack  soporte-component-title-item soporte-component-padding-description"> 
                        Todo sistema de cámaras de seguridad requiere una revision periódica, ya sea para limpiar, 
                        reenfocar y cambiar conectores que con el paso del tiempo disminuyen su funcionamiento, 
                        en Comseg encontraras la asesoría que necesitas para:
                    </p>
                    <div class="textGray fontSizeMedium monserratBlack soporte-component-title-item-list-padding">
                        
                        <li class=""> Proyectos de instalación de cámaras de seguridad. </li>
                        <li class=""> Mantención cámaras.  </li>
                        <li class=""> Configuración y puesta en marcha.  </li>
                        
                    </div>
                
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-md-lg col-md-xl soporte-component-order1">
                    <img 
                        src   = "/assets/images/soporte/shutterstock_189833753.jpg"  
                        class = "h-100 w-100 soporte-component-padding-image3"    
                    />
                </div>
            </div>

        </div>
    ` 
});