Vue.component( 'register-component', {
    data(){
        return {
            name : '' ,
            email : ''
        }
    },
    methods : {
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

            const name  = this.$refs.nameFormRegister.value  ;
            const email = this.$refs.emailFormRegister.value  ;

            const APP_RUTE = location.origin ;
            
            let bodyMessage  =  "<div>" ;
                bodyMessage  +=    "<img width='700' height='400' src='https://www.comsegcloud.cl/assets/logos/Imagotipo%20vectorial_%20COMSEG_page-0001.jpg' >" ;
                bodyMessage  +=     "<h3 style='margin-top:40px'> Solicitud de reunión </h3>" 
                bodyMessage  +=      "<p> Nombre : " +  name  +  "</p>" ;  
                bodyMessage  +=      "<p> Email  : " +  email +  "</p>" ;
                bodyMessage  +=  "</div>" 
            
            return bodyMessage ;
        },
        getForm : function( ) {
            const to = "jsoto@comseg.cl" ; 
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
        registerReunion : async function( e ){
            e.preventDefault() ;
            
            try {

                const isValidate = this.validateForm() ;

                if( !isValidate ) return false  ;

                this.$refs.alertFalse.classList.remove('show') ;
            
                const form          =  this.getForm() ;
                const sendResponse  =  await this.send( form ) ;

                if( !sendResponse.response ) {

                    this.$refs.alertFalse.classList.remove('d-none') ;
                    this.$refs.alertFalse.classList.add('show') ;
                    this.$refs.alertFalseText.textContent = 'Hubo un error al agendar. Intente más tarde.' ;
                    return false ;
                }

                this.$refs.alertTrue.classList.remove( 'd-none' ) ;
                this.$refs.alertTrue.classList.add('show') ;

                this.$refs.nameFormRegister.value  = '' ;
                this.$refs.emailFormRegister.value = '' ;
            } 
            catch ( e ) {
                console.log( 'e' , e ) ;
            }            
        },
        validateForm : function( ) {

            if( this.$refs.nameFormRegister.value == '' ){
                this.$refs.alertFalse.classList.remove('d-none') ;
                this.$refs.alertFalse.classList.add('show') ;
                this.$refs.alertFalseText.textContent =  'Debe ingresar nombre.' ;
                this.$refs.nameFormRegister.focus() ;
                return false ;
            }

            if( this.$refs.emailFormRegister.value == '' ){
                this.$refs.alertFalse.classList.remove('d-none') ;
                this.$refs.alertFalse.classList.add('show') ;
                this.$refs.alertFalseText.textContent =  'Debe ingresar email.' ;
                this.$refs.emailFormRegister.focus() ;
                return false ;
            }
            
            this.$refs.alertFalse.classList.add('d-none') ;
            this.$refs.alertFalse.classList.remove('show') ;

            const isValidate = this.validateEmail( this.$refs.emailFormRegister.value  ) ;

            if( !isValidate ) return false ;

            return true ;
        }
        ,
        hideAlert : function( ref ){
            this.$refs[ref].classList.remove('show') ;
        },
        validateEmail : function( email ){
            const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test( email ) ? true : false ; 
        }
    },

    mounted (){
        
        console.log('locations' , location.origin );
    },
    template : /*html*/ `

        <div class="acronis-component-register-reunion monserratSemiBold">
            <div class="container h-100">
                <div class="h-100 row align-items-center" >
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6  col-xl-6 py-3 d-none  d-sm-block d-md-none d-lg-block d-xl-block" >

                        <h1 class="text-white monserratSemiBold"> Agendar <br> una reunión </h1>
                    
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6  col-xl-6 py-3 d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none" >

                        <h3 class="text-white ml-5 monserratSemiBold"> Agendar  una reunión </h3>
                    
                    </div>
                    <div class="col acronis-component-border-left" >
                        <form ref="formContactRegister">
                            <div class="container  h-100">
                                <div class="row ml-3  h-100 align-items-center" >
                                    
                                    <div class="col text-white" >
                                        <div class="form-group">
                                            <label for="nameFormRegister">Nombre completo</label>
                                            <input 
                                                type="text" 
                                                class="form-control"  
                                                ref="nameFormRegister" 
                                                aria-describedby="emailHelp"
                                                name = "name"
                                                v-model="name"    
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label for="emailFormRegister">Correo electrónico</label>
                                            <input 
                                                type="email" 
                                                class="form-control" 
                                                ref="emailFormRegister" 
                                                name = "email"
                                                aria-describedby="emailHelp"
                                            >
                                        </div>
                                    </div>
                                    
                                </div>

                                <div class="row" >
                                    
                                    <div class="col text-white ml-4 mt-3" >
                                        <button 
                                            class="btn btn-primary btnBlack "
                                            v-on:click="registerReunion($event )"    
                                            type="button"
                                        > enviar </button>
                                    </div>
                                    
                                </div>
                                <div class="row" >
                                    
                                    <div class="col text-white ml-4 mt-3" >
                                        
                                        <div class="alert alert-success alert-dismissible fade d-none"  ref="alertTrue" role="alert">
                                            
                                            <span ref=""> Contacto enviado, nos contactaremos en brevedad. </span>

                                            <button type="button" v-on:click="hideAlert('alertTrue')" class="close" > 
                                                <span aria-hidden="true">&times  </span>    
                                            </button>
                                        </div>

                                        <div class="alert alert-danger alert-dismissible fade d-none"  ref="alertFalse" role="alert">
                                            <span ref="alertFalseText">  </span>

                                            <button type="button" v-on:click="hideAlert('alertFalse')" class="close" > 
                                                <span aria-hidden="true">&times  </span>    
                                            </button>
                                        </div>

                                    </div>
                                
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            
        </div>
          
    `
})
