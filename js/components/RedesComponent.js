Vue.component( 'redes-component' , {
    
    data(){
        return{
            redes : [
                {
                    title : 'Redes Inalámbricas' ,
                    file  : '/assets/images/redes_principal/shutterstock_91802108.jpg' , 
                    description : `Las redes inalámbricas permiten tener movilidad, son fáciles de instalar ya que 
                                    no usan cables, y flexibles ya que entregan cobertura donde los cables no pueden llegar` ,
                    url : '/'
                },
                {
                    title : 'Redes Cableadas' ,
                    file  : '/assets/images/redes_principal/shutterstock_1395760892.jpg' , 
                    description : `Las redes cableadas ofrecen una mayor velocidad de transmición de datos, mayor 
                                    seguridad ya que para conectarse requiere un cable y una baja interferencia del 
                                    medio ambiente.` ,
                    url : '/redes_cableadas.html'
                },
                {
                    title : 'Redes por Software SD-Wan' ,
                    file  : '/assets/images/redes_principal/shutterstock_1717318993.jpg' , 
                    description : `Las redes administradas mediante SD-Wan permiten gestionar y controlar de forma 
                                    centralizada todos los componentes de Red a través de de software. .` ,
                    url : '/redes_sdwan.html'
                }
            ]
        }
    },

    
    template: /*html*/`
    <div class="container monserratRegular">
        <div class="row">
            <div class="col redes-component-padding monserratSemiBold text-md-center text-xl-center text-lg-center">
                <h3 class="redes-component-title">
                    La <span class="textPrimary "> velocidad y la capacidad de respuesta </span> en los negocios están en constante
                    crecimiento y son un punto competitivo en muchas industrias.
                </h3>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col redes-component-padding  text-md-center text-xl-center text-lg-center redes-component-mbottom">
                <p class="redes-component-description">
                    Para ello se hace indispensable contar con una plataforma o infraestructura de red, ya sea cableada
                    e inalámbrica, que soporte toda la conectividad que su empresa requiere.
                    En Comseg buscamos la solución que mejor se adapte a tus necesidades.

                </p>
            </div>
        </div>

        <div class="row redes-component-card-mbottom redes-component-padding-general">
            <div class="col redes-component-no-padding" >
                <div class="card-deck">
                    <div class="card noBorder my-5" v-for="red in redes">
                        <img :src="red.file" class="img-fluid" alt="...">
                        <div class="card-body p-0 pt-4 pr-2 pb-3">
                            <h5 class="card-title monserratSemiBold redes-component-title-card"> {{ red.title }} </h5>
                            <p class="card-text fontSizeMedium redes-component-title-description">{{ red.description }}</p>
                        </div>
                        <div class="card-footer noBorder bg-white p-0">
                            <a 
                                class = "btn btn-primary btnRedBlack monserratBlack " 
                                :href = "red.url"    
                            > ver más</a>
                        </div>
                    </div>
                   
                </div>
            </div>
            
            
            
        </div>
    </div>
    `
});