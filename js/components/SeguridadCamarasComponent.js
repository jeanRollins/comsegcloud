Vue.component( 'seguridad-camaras-component' , {
    data(){
        return{
            items:[
                {
                    number : 1 ,
                    text : `Cuántos puntos de entrada tiene la propiedad o negocio a proteger.`
                },
                {
                    number : 2 ,
                    text : `Qué condiciones afectan al lugar (condiciones atmosféricas, nivel de luz, riesgo vandalismo, etc.)`
                },
                {
                    number : 3 ,
                    text : `Cuál es el tamaño del lugar y cómo está dispuesto (puntos ciegos, distancia máxima a grabar, etc.)`
                }
            ]
        }
    },
    template : /*html*/ `
        <div class="container monserratLight">
            <div class="row titlePadding mt-4">
                <div class="col">
                    <h2 class="textPrimary monserratSemiBold text-xl-center text-lg-center "> Cámaras de seguridad </h2>
                </div>
            </div>
            <div class="row titlePadding  mt-4 ">
                <div class="col">
                    <p class="textGray  text-xl-center text-lg-center"> 
                        En la actualidad existe una gran variedad de cámaras de seguridad, que varían según su función, localización
                        o conexión. Entre ellas podemos encontrar:
                    </p>
                </div>
            </div>
            <div class="row titlePadding  mt-4  textGray">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg- col-xl-4 ">
                    <li class=" seguridad-camaras-component-item-list">  Cámaras Análogas</li>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-6 col-xl-6">        
                    <li class="seguridad-camaras-component-item-list">  Cámaras IP, Cableadas o Wifi</li>

                </div>
        
                
            </div>

            <div class="row mt-5 p-2 ">
                <div class="col titlePadding">
                    <img src="/assets/images/seguridad/camara_seguridad.png" class="w-100 h-75" >

                </div>
            </div>

            <div class="row monserratLight titlePadding">
                
                <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                    <h2  class="textPrimary monserratSemiBold seguridad-camaras-component-title-item"> A la hora de escoger el mejor sistema de cámaras de debe considerar </h2>
                    
                </div>

                <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 ">
                    <div class="w-100 seguridad-camaras-component-item " v-for=" item in items ">
                        <table >
                            <tr>
                                <td>
                                    <h1 class="textPrimary monserratSemiBold mr-3"> {{ item.number }}. </h1>
                                </td>
                                <td>
                                    <p class=""> {{ item.text }} </p>
                                </td>
                            </tr>

                        </table>
                                                
                    </div>   
                </div>

            </div>

        </div>
    `
});