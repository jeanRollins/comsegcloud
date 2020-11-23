
Vue.component( 'register-component', {
    data(){
        return {
            name : '' ,
            email : ''
        }
    },
    methods : {
        registerReunion : function(){
            console.log('click');
        }
    },

    mounted (){
        
        let recaptchaScript = document.createElement('script') ;
        recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js' ) ;
        document.head.appendChild(recaptchaScript) ;
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
                                            id="nameFormRegister" 
                                            aria-describedby="emailHelp"
                                            v-model="name"    
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="emailFormRegister">Correo electrónico</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            id="emailFormRegister" 
                                            aria-describedby="emailHelp"
                                            v-model="email"    
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
                        </div>
                    </div>
                </div>
            </div>
            <div aria-live="polite" aria-atomic="true" id="toastrMessage" style="position: relative; min-height: 200px;">
                <div class="toast" style="position: absolute; top: 0; right: 0;">
                    <div class="toast-header">
                        <img src="/assets/icons/favicon.png" class="rounded mr-2" alt="...">
                        <strong class="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>
        </div>
          
    `
})