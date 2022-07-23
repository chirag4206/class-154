AFRAME.registerComponent("flying-bird",{
    init:function(){
        for(var i=1;i<=20;i++){
            var id = `hurdle${i}`
            var posX = (Math.random()*3000+(-1000))
            var posY = (Math.random()*2+(-1))
            var posZ = (Math.random()*3000+(-1000))
            var position = {x:posX,y:posY,z:posZ}
            this.FlyingBirds(id,position)
        }
    },
    FlyingBirds:(id,position)=>{
        var Terraine1 = document.querySelector("#terrain")
        var Birde1 = document.createElement("a-entity")
        Birde1.setAttribute("id",id)
        Birde1.setAttribute("position",position)
        Birde1.setAttribute("scale",{x:500,y:500,z:500})
        Birde1.setAttribute("gltf-model","../assets/models/flying_bird/scene.gltf")
        Birde1.setAttribute("animation-mixer",{})
        Terraine1.appendChild(Birde1)
    }
})