Vue.component('acronis-component', {
    data(){
        return {

            plataforms : [
                {
                    title : 'Equipos Físicos' ,
                    file  : '../../assets/images/servidor.svg' ,
                    description : [
                        'Windows Server',
                        'Windows Server Essentials' ,
                        'Linux' ,
                        'Windows PC' ,
                        'Mac'
                    ]
                },
                {
                    title : 'Virtuales' ,
                    file  : '../../assets/images/database.svg' ,
                    description : [
                        'VMware vSphere',
                        'Microsoft Hyper-V' ,
                        'Citrix XenServer' ,
                        'Red Hat Virtualization' ,
                        'Linux KVM', 
                        'Oracle VM Server'
                    ]
                },
                {
                    title : 'Cloud' ,
                    file  : '../../assets/images/cloud.svg' ,
                    description : [
                        'Office 365',
                        'G Suite' ,
                        'Azure' ,
                        'Amazon EC2' ,
                        'Acronis Cloud', 
                        'Private Cloud'
                    ]
                },
                {
                    title : 'Equipos Finales' ,
                    file  : '../../assets/images/net.svg' ,
                    description : [
                        'Windows PC',
                        'Surface Family' ,
                        'Mac'
                    ]
                },
                {
                    title : 'Aplicaciones' ,
                    file  : '../../assets/images/notebook.svg' ,
                    description : [
                        'Oracle Database',
                        'Exchange' ,
                        'SQL Server' ,
                        'SharePoint' ,
                        'Active Directory' ,
                        'SAP HANA'
                    ]
                },
                {
                    title : 'Mobile' ,
                    file  : '../../assets/images/phone.svg' ,
                    description : [
                        'iPhone',
                        'iPad'  ,
                        'Android'
                    ]
                }
            ],

            contacts : [
                {
                    title : 'Visítanos' ,
                    file  : '../../assets/icons/map.svg' ,
                    description : 'General del canto 426, Providencia Santiago, Chile 7500632' 
                },
                {
                    title : 'Escribenos' ,
                    file  : '../../assets/icons/mail.svg' ,
                    description : "Para más informacion info@comseg.cl" 
                },
                {
                    title : 'Llámanos' ,
                    file  : '../../assets/icons/cellphone.svg' ,
                    description : "Lunes a viernes 09:00 a 18:00 hrs. +562 32746200" 
                }
            ],
            featuresCyberProtect :[
                {
                    number : '01' ,
                    title  : 'Identificar' ,
                    items  : [
                        'Descubrimiento autómatico de nuevos dispositivos.',
                        'Evaluaciones de vulnerabilidades.' ,
                        'Mapa de proteción de datos.'
                    ] 
                },
                {
                    number : '02' ,
                    title  : 'Proteger' ,
                    items  : [
                        'Intalación de agente remota.',
                        'Copia de seguridad y recuperación ante desastres.' ,
                        'Administración unificada de directivas de protección.'
                    ] 
                },
                {
                    number : '03' ,
                    title  : 'Detectar' ,
                    items  : [
                        'Protección contra malware/ransomware.',
                        'Copia de seguridad y recuperación ante desastres.' ,
                        'Paneles e informes.'
                    ] 
                },
                {
                    number : '04' ,
                    title  : 'Responder' ,
                    items  : [
                        'Administración de parches integrada con la copia de seguridad.',
                        'Cuarentena de malware.' ,
                        'Rescate con medio de arranque externo.'
                    ] 
                },
                {
                    number : '05' ,
                    title  : 'Recuperar' ,
                    items  : [
                        'Copia de seguridad y recuperación ante desastres.',
                        'Recupera dispositivos completos o archivos específcos.' ,
                        'Escritorio remoto.'
                    ] 
                }
            ]

        }
    },
    template : /*html*/ `
        <div>

            <div class="container ">
                
                <div class="row acronis-component-banner-principal">

                    <div class="col-sm-10 col-md-4  col-lg-4  col-xl-4  acronis-component-image-acronis ">
                        <img src="/assets/images/acronis.png" class="img-fluid " alt="">
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-7  col-lg-7 col-xl-7 acronis-component-border-text monserratSemiBold textGray border-left">
                        <p class=""> 
                            <span class="textPrimary"> 
                                Comseg Cyber Protect by Acronis </span> 
                                es una aplicación única que integra copia de seguridad con protección  anti-malware de última generación y herramientas 
                                de gestión de punto final.
                        </p>
                        
                    </div>


                </div>
                <div class="row acronis-component-banner-image-acronis">
                    <div class="col text-center">
                        <img  src="/assets/images/bitmap.png" class="" alt="">
                    </div>
                </div>
            </div>

            
            

            <div  class=" acronis-component-question  text-white text-center mt-3">
                <div class="container">
                    <div class="row">
                        <div class="col  py-5">
                            <h2 class="acronis-component-question-acronis monserratSemiBold"> ¿Qué puedes hacer con Comseg CyberProtect by Acronis? </h2>
                        </div>
                    </div>
                </div>    
                
            </div>

            <div id="itemAcronis" class="acronis-component-question-description  text-white w-100">

                <div class="container">
                    <div class="row">
                        <div  class="col my-5">
                            <div class="container monserratLight acronis-component-margin my-2" v-for=" (feature , key) in featuresCyberProtect ">
                                <div class="row ">
                                    <div class="col-sm-5 acronis-component-title">
                                        {{ feature.number }}. &nbsp; 
                                        <h3 class="d-inline monserratSemiBold"> {{ feature.title }} </h3>
                                    </div>
                                    <div class="col acronis-component-items">
                                        <ul>
                                            <li v-for="item in feature.items"> {{ item }} </li>
                                        </ul>
                                    </div>

                                </div>
                                <div v-if="(featuresCyberProtect.length != ( key + 1 ) )" class="row ">
                                    <div class="col"> <hr class ="hrWhite" /> </div>
                                </div>
                              

                            </div>
                        </div>    
                    </div>
                </div> 
            
            </div>

           

            <div class="container ">

                <div class="row my-5" >
                    <div class="col text-center" >
                        <h2 class="monserratSemiBold"> ¿Qué plataformas puedo proteger?</h2>
                    </div>

                </div>

            

                <div class="row monserratLight" >

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-5" v-for="plataform in plataforms" >
                        <div  class=" card w-100 noBorder centerItems" >
        
                            <img  v-bind:src="plataform.file" class=" h-100 w-50" alt="...">
                            <div class="card-body text-center">
                                <h5 class="card-title monserratSemiBold">{{ plataform.title }}</h5>
                                <ul class="textGray justifyContent">
                                    <li class="my-1 fontSizeSmall monserratSemiBold" v-for="item in plataform.description " >
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                        

                        </div>      
                    </div>
                
                </div>

            </div>
            
        </div>
    `
})