AFRAME.registerComponent("terrain-rotation-reader",{
    schema:{
        speedofrotation:{
            type:"number",
            default:0
        }
    },
    init:
    function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key=="ArrowRight"){
                if(this.data.speedofrotation<0.1){
                    this.data.speedofrotation+=0.01
                }
            }
            if(e.key=="ArrowLeft"){
                if(this.data.speedofrotation>-0.1){
                    this.data.speedofrotation-=0.01
                }
            }
        })
    },
    tick:
    function(){
        var mapRotation= this.el.getAttribute("rotation")
        mapRotation.y+= this.data.speedofrotation
        this.el.setAttribute("rotation",{
            x:mapRotation.x,
            y:mapRotation.y,
            z:mapRotation.z
        })
    }
})

