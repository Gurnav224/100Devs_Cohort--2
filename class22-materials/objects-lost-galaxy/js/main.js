//Create a mouse object that has four properties and three methods

const mouse ={}

mouse.brand = "logictech";
mouse.color = "black";
mouse.model = "MX Ergo";
mouse.wireless = true;


mouse.leftClick = function(){
    console.log("left click")
}

mouse.rightClick = function(){
    console.log("right click")
}

mouse.scroll = function(){
    console.log("Jump Jump Jump")
}

console.log(mouse)