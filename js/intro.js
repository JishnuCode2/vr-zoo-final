AFRAME.registerComponent("intro", {
    init: function(){
        const scene = document.querySelector("#scene")

        var floor = document.createElement("a-circle");
        floor.setAttribute("id", "floor");
        floor.setAttribute("radius", 15);
        floor.setAttribute("position", "0 -3 -1");
        floor.setAttribute("rotation", "-90 0 0");
        floor.setAttribute("color", "#348C31");
        scene.appendChild(floor)

        var tigerEl = document.createElement("a-entity");
        tigerEl.setAttribute("rotation", "90 0 0");
        tigerEl.setAttribute("position", "-3 0 0");
        tigerEl.setAttribute("scale", "3 3 3");
        tigerEl.setAttribute("gltf-model", "./tiger/scene.gltf");
        floor.appendChild(tigerEl)

        var lionEl = document.createElement("a-entity");
        lionEl.setAttribute("rotation", "90 0 0");
        lionEl.setAttribute("scale", "18 18 18");
        lionEl.setAttribute("gltf-model", "./lion/scene.gltf");
        floor.appendChild(lionEl);

        var deerEl = document.createElement("a-entity");
        deerEl.setAttribute("gltf-model", "./deer/scene.gltf");
        deerEl.setAttribute("position", "3 0 2.8");
        deerEl.setAttribute("rotation", "90 0 0");
        deerEl.setAttribute("scale","9 9 9");
        floor.appendChild(deerEl)

        var box = document.createElement("a-box");
        box.setAttribute("color", "#09C3DB");
        box.setAttribute("width", 50);
        box.setAttribute("height", 50);
        box.setAttribute("position", "0 0 -3");
        floor.appendChild(box)

        window.addEventListener("keydown", (e)=>{
           // console.log(e)
            if(e.code === "Space"){
                if(floor != undefined){
                    floor.parentNode.removeChild(floor);
                    var a = document.querySelector("#intro-board");
                    a.parentNode.removeChild(a);

                    document.querySelector("#cursor").setAttribute("visible", true)
                    document.querySelector("#map").setAttribute("visible", true)
                    document.querySelector("#markers").setAttribute("visible", true)
                    document.querySelector("#info-board").setAttribute("visible", true);
                    document.querySelector("#border").setAttribute("visible", true);                    
                }
            }
        })
    }
})