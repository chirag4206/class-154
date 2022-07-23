AFRAME.registerComponent("target-ring",{
    init:function(){
        for(var i=1;i<=20;i++){
            var id = `rings${i}`
            var posX = (Math.random()*3000+(-1000))
            var posY = (Math.random()*2+(-1))
            var posZ = (Math.random()*3000+(-1000))
            var position = {x:posX,y:posY,z:posZ}
            this.createRings(id,position) 
        }
    },
    createRings:function(id,position){
        var Terraine1 = document.querySelector("#terrain")
        var Ringe1 = document.createElement("a-entity")
        Ringe1.setAttribute("id",id)
        Ringe1.setAttribute("position",position)
        Ringe1.setAttribute("material","color","#000000")
        Ringe1.setAttribute("geometry",{primitive:"torus",radius:8})
        Terraine1.appendChild(Ringe1)
    }
})