Vue.component( 'register-component', {
    data(){
        return {
            name : '' ,
            email : ''
        }
    },
    methods : {
        registerReunion : function(){
            

            const isValidate = this.validateForm() ;
            
            console.log('isValidate' , isValidate);
            
            if( !isValidate ) return false  ;
            

            this.$refs.alertFalse.classList.remove('show') ;
         
            this.$refs.alertTrue.classList.add('show') ;

            this.$refs.nameFormRegister.value  = '' ;
            this.$refs.emailFormRegister.value = '' ;


        },
        validateForm : function( ) {

            if( this.$refs.nameFormRegister.value == '' ){
                this.$refs.alertFalse.classList.add('show') ;
                this.$refs.alertFalseText.textContent =  'Debe ingresar nombre.' ;
                this.$refs.nameFormRegister.focus() ;
                return false ;
            }

            if( this.$refs.emailFormRegister.value == '' ){
                this.$refs.alertFalse.classList.add('show') ;
                this.$refs.alertFalseText.textContent =  'Debe ingresar email.' ;
                this.$refs.emailFormRegister.focus() ;
                return false ;
            }
            
            const isValidate = this.validateEmail( this.$refs.emailFormRegister.value  ) ;

            if( !isValidate ) return false 
            

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
                                            v-model="name"    
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="emailFormRegister">Correo electrónico</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            ref="emailFormRegister" 
                                            aria-describedby="emailHelp"
                                        >
                                    </div>
                                </div>
                                
                            </div>

                            <div class="row" >
                                
                                <div class="col text-white ml-4 mt-3" >
                                    <button 
                                        class="btn btn-primary btnBlack "
                                        v-on:click="registerReunion()"    
                                    > enviar </button>
                                </div>
                                
                            </div>
                            <div class="row" >
                                
                                <div class="col text-white ml-4 mt-3" >
                                    
                                    <div class="alert alert-success alert-dismissible fade"  ref="alertTrue" role="alert">
                                        
                                        <span ref=""> Contacto enviado, nos contactaremos en brevedad. </span>

                                        <button type="button" v-on:click="hideAlert('alertTrue')" class="close" > 
                                            <span aria-hidden="true">&times  </span>    
                                        </button>
                                    </div>

                                    <div class="alert alert-danger alert-dismissible fade"  ref="alertFalse" role="alert">
                                        <span ref="alertFalseText">  </span>

                                        <button type="button" v-on:click="hideAlert('alertFalse')" class="close" > 
                                            <span aria-hidden="true">&times  </span>    
                                        </button>
                                    </div>

                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
          
    `
})
