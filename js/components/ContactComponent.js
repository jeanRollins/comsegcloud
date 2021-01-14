Vue.component('contact-component',{
    data(){
        return {
            name    : '' , 
            email   : '' ,
            asunto  : '' ,
            mensaje : ''
        }
    },
    mounted(){
        this.$refs.alertName.style.display    = 'none' ;
        this.$refs.alertAsunto.style.display  = 'none' ;
        this.$refs.alertEmail.style.display   = 'none' ;
        this.$refs.alertMessage.style.display = 'none' ;
        this.$refs.alertSendFail.style.display = 'none' ;
        this.$refs.alertMessageTrue.style.display = 'none' ;
    },
    methods :{
        validate : function(){
            if( this.name == '' ){
                this.$refs.alertName.style.display    = 'block' ;
                return false ;
            }
            this.$refs.alertName.style.display    = 'none' ;

            if( this.email == '' ){
                this.$refs.alertEmail.style.display   = 'block' ;            
                return false ;
            }
            this.$refs.alertEmail.style.display   = 'none' ;

            if( this.asunto == '' ){
                this.$refs.alertAsunto.style.display  = 'block' ;
                return false ;
            }
            this.$refs.alertAsunto.style.display  = 'none' ;

            if( this.mensaje == '' ){
                this.$refs.alertMessage.style.display = 'block' ;
                return false ;
            }
            this.$refs.alertMessage.style.display = 'none' ;

            return true ;
        },
        sendContact : async function( e ){
            e.preventDefault() ;
            const isValid = this.validate() ;
            if( !isValid ) return false ;

            const form = this.getForm() ;

            const response = await this.send( form ) ;
            if( !response.response ){
                this.$refs.alertSendFail.style.display = 'block' ;
                return false ;
            }

            this.$refs.alertSendFail.style.display = 'none' ;
            this.$refs.alertMessageTrue.style.display = 'block' ;
            this.$refs.formContact.reset() ;
            
        },
        getForm : function( ) {

            const to = "info@comseg.cl" ;
            //const to = "jsoto@comseg.cl" ;
            
            const form = new FormData( ) ;

            const messageBody = this.bin2hex( this.getMessageBody() ) ;

            let headers = "MIME-Version: 1.0\r\n";
            headers += "Content-type: text/html; charset=iso-8859-1\r\n";
            headers += "From:" + to + "\r\nCc: jsoto@comseg.cl" ;

            form.append( 'to'       , to ) ;
            form.append( 'subject'  , 'Agendar Reunión' ) ;
            form.append( 'msg_body' , messageBody ) ;
            form.append( 'headers'  , this.bin2hex( headers ) ) ;
            return form ;  
        },
        send : async function( form ){

            const url  = 'https://www.microplay.cl/version/addTareasMicroplay' ;
            const settings = {
                method : 'POST',
                body   :  form 
            };

            const fetchResponse = await fetch( url , settings);
            const response = await fetchResponse.json();
            return response ;
        },
        bin2hex : function ( s ){  
            let v , i, f = 0, a = [] ;  
            s += '' ;  
            f = s.length ;  
            for ( i = 0 ; i < f ; i++ ) a[i] = s.charCodeAt(i).toString(16).replace(/^([\da-f])$/, "0$1" ) ;  
            return a.join('') ;   
        } ,
        getMessageBody : function() {

            let bodyMessage  =  "<div>" ;
                bodyMessage  +=    "<img width='600' height='180' src='https://www.comsegcloud.cl/assets/logos/Imagotipo%20vectorial_%20COMSEG_page-0001.jpg' >" ;
                bodyMessage  +=     "<h3 style='margin-top:40px'> Solicitud de contacto </h3>" 
                bodyMessage  +=      "<p> Nombre : " +  this.name  +  "</p>" ;  
                bodyMessage  +=      "<p> Email  : " +  this.email +  "</p>" ;
                bodyMessage  +=      "<p> Asunto  : " +  this.asunto +  "</p>" ;
                bodyMessage  +=      "<p> Mensaje  : " +  this.mensaje +  "</p>" ;
                bodyMessage  +=  "</div>" ;
            return bodyMessage ;
        }
    },
    template: /*html*/ `
        <div>
            <div class="container monserratLight ">
                <div class="row contact-component-title  contact-component-padding" >
                    <div class="col p-0">
                        <h1 class="textPrimary monserratSemiBold contact-component-title-size"> Contacto </h1>
                    </div>    
                </div>
                        
            </div>

            <div class="container monserratLight contact-component-mbottom">
                <div class="row contact-component-padding ">
                    <div class="col mt-2 d-none d-xs-block d-sm-block  ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.674119557675!2d-70.6188894843022!3d-33.43173948077943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf640ebbc5e1%3A0xe6792eda132fed99!2sComercial%20Comseg%20Y%20Cia%20Ltda!5e0!3m2!1ses-419!2scl!4v1605713650026!5m2!1ses-419!2scl" class="w-75 contact-component-map-size " frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        <div class="w-100">
                            <h5 class="textPrimary  mt-4  fontSizeMedium monserratSemiBold"> Dirección </h5>
                            <p class=" fontSizeMedium monserratRegular"> General del Canto 426, Providencia <br/> Santiago, Chile. </p>
                        </div>
                        <div class="w-100">
                            <h5 class="textPrimary monserratSemiBold mt-4 fontSizeMedium"> Teléfono </h5>
                            <p class=" fontSizeMedium monserratRegular"> +56 23274 6200 </p>
                        </div> 
                        <div class="w-100">
                            <h5 class="textPrimary monserratSemiBold mt-4 fontSizeMedium"> Email </h5>
                            <p class="fontSizeMedium monserratRegular"> info@comseg.cl </p>
                        </div> 
                    </div> 
                    <div class="col fontSizeMedium">
                        <form ref="formContact">
                            <div class="form-group">
                                <label for="name" class="monserratBlack">Nombre Completo *</label>
                                <input type="text" class="form-control  fontSizeMedium" ref="name" v-model="name" id="name" placeholder="Carlos Luis...">
                                <div class="alert alert-danger mt-2" ref="alertName" role="alert">
                                    Nombre requerido
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email" class="monserratBlack">Correo  Electrónico * </label>
                                <input type="text" class="form-control  fontSizeMedium" ref="email" v-model="email" id="email" placeholder="carlos@ejemplo.com">
                                <div class="alert alert-danger mt-2" ref="alertEmail"  role="alert">
                                    Correo requerido
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>

                            </div>
                            <div class="form-group ">
                                <label for="asunto" class="monserratBlack">Asunto *</label>
                                <input type="text" class="form-control  fontSizeMedium" ref="asunto" v-model="asunto" id="asunto" placeholder="Comercial...">
                                <div class="alert alert-danger mt-2" ref="alertAsunto"  role="alert">
                                    Asunto requerido
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                            </div>
                            <div class="form-group">
                                <label for="mensaje" class="monserratBlack">Mensaje * </label>
                                <textarea class="form-control  fontSizeMedium" ref="mensaje" v-model="mensaje" id="mensaje" rows="3"></textarea>                                  
                                <div class="alert alert-danger mt-2" ref="alertMessage"  role="alert">
                                    Mensaje requerido
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>

                                <div class="alert alert-danger mt-2" ref="alertSendFail"  role="alert">
                                    Hubo un problema al enviar, intente más tarde.
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>

                            </div>
                            
                            <button class="btn btn-primary btnBlack monserratBlack mt-2 mb-3" v-on:click="sendContact($event)" > enviar </button>
                            <small class="textPrimary ml-3 monserratBlack contact-component-field mt-4 mb-3 float-right"> *Campo obligatorio </small>
                        </form>
                        <div class="alert alert-success" ref="alertMessageTrue" role="alert">
                            Contacto enviado
                        </div>
                    </div>    
                </div>
                        
            </div>
        </div>
    `
})