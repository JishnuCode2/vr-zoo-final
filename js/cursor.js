let exhibitInfo = [
    ["Deer", "Lion", "Giraffe", "Tiger", "Zebra"],
    ["Rhinoceros", "Hippopotamus", "Goat", "Wolf", "Pig"],
    ["Swan", "Ostrich", "Parrot", "Junglefowl", "Bald Eagle"],
    ["Black Mamba", "Tortoise", "Komodo Dragon", "Alligator", "Chameleon"],
    ["Clownfish", "Jellyfish", "Reef Needlefish", "Siamese Fighting Fish", "Dolphin"],
    ["None", "", "", "", ""]
]
AFRAME.registerComponent("cursor-event", {
    init: function(){
        window.addEventListener("mouseenter", (e) =>{
            var cursor = document.querySelector("#cursor");

            if(cursor.getAttribute("visible")){

                if(e.target.getAttribute("class") != null && e.target.getAttribute("class") === "marker"){
                    console.log(e.target)
                    var id= e.target.getAttribute("id");
                    
                    var displayName = document.querySelector("#display-name");
                    displayName.setAttribute("text", {value: id})

                    var exhibitType = this.getExhibitType(id);

                    var exhibits = document.querySelector("#exhibits")
                    exhibits.setAttribute("visible", true);
                    var childEls = exhibits.children
                    for(var i=0; i<childEls.length; i++){
                        var child =  childEls[i];
                        child.setAttribute("text", "value", exhibitInfo[exhibitType][i])
                    }

                    if(id != "Visitor Centre"){
                        document.querySelector(".visit-button").setAttribute("visible", true);

                        var pos = e.target.getAttribute("position");
                        document.querySelector(".visit-button").setAttribute("position", {x:pos.x, y:pos.y, z: 5});
                    }else{
                        document.querySelector(".visit-button").setAttribute("visible", false); 
                    }
                }else{
                    console.log("not marker")
                }
            }
        })
        window.addEventListener("click", (e)=>{
            if(e.detail.intersectedEl != undefined){
                var elClass = e.detail.intersectedEl.getAttribute("class");
                if(elClass === "visit-button"){
                    var id = document.querySelector("#display-name").getAttribute("text").value;
                    //document.querySelector(".visit-button").setAttribute("id", id);
                    
                    window.location.href = `animals.html?location=${id}`

                    //console.log("Setting a-sky")
                }
            }

        })
    },
    getExhibitType: function(id){
        var exhibitType;

        if(id === "Enclosure"){
            exhibitType = 0
        }else if(id === "Mammals"){
            exhibitType = 1
        }else if(id === "Birds"){
            exhibitType = 2
        }else if(id === "Reptiles"){
            exhibitType = 3
        }else if(id === "Fish"){
            exhibitType = 4
        }else{
            exhibitType = 5
        }

        return exhibitType
    }
})