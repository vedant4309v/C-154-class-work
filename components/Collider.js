AFRAME.registerComponent("birds",{
    init: function () {
        for (var i = 1; i <= 20; i++){
            var id = 'bird${i}';
            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + -1000);
            var position = {x:posX,y:posY,z:posZ}
            this.CreateBirds(id, position);
        }
    },
    CreateBirds: function (id,position) {
        var terrainE1 = document.querySelector("#terrain")
        var birdE1 = document.createElement("a-entity")
        birdE1.setAttribute("id",id)
        birdE1.setAttribute("position",position)
        birdE1.setAttribute("scale", {x:500,y:500,z:500})
        birdE1.setAttribute("gltf-model","C:\Users\Sai\Downloads\PRO-C154-Student-Activity-main\PRO-C154-Student-Activity-main\assets\models\flying_bird\scene.gltf")
        birdE1.setAttribute("animation-mixture",{})

        terrainE1.appendChild(birdE1);
    }
})
   