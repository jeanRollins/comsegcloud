Vue.component('menu-component', {

    data (){
        return {

        }
    },
    methods : {

        openNav : function (e) {
            e.preventDefault() ;
            document.getElementById("mySidenav").style.width = "100%";
        },
        closeNav : function () {
            document.getElementById("mySidenav").style.width = "0";
        }
    
    },
    template : /*html*/ `
        <div > 
            <a  v-on:click="openNav($event)"> <img src="../../assets/icons/menu.svg" > </a>   
            <div id="mySidenav" class="menu-component-sidenav ">
                <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
                <div class="container ">
                    <div class="row">
                        <div class="col">
                            <hr>
                            <a href="#" class="link text-white">Inicio</a>
                        
                        </div>    
                    </div>
                    <div class="row">
                        <div class="col">
                        <hr>
                            <a href="#" class="link text-white">Nosotros</a>
                        
                        </div>    
                    </div>
                    <div class="row">
                        <div class="col">
                        <hr>
                            <a href="#" class="link text-white">Servicios</a>
                        
                        </div>    
                    </div>
                    <div class="row">
                        <div class="col">
                        <hr>
                            <a href="#" class="link text-white">Contacto</a>
                        
                        </div>    
                    </div>
                </div>

            </div>

        </div>

        

            `
})