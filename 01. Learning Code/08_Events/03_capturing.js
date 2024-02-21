// 2. Capturing: It is the opposite of bubbling. The event handler is first on its parent component and then on the component where it was actually wanted to fire that event handler. In short, it means that the event is first captured by the outermost element and propagated to the inner elements. It is also called trickle down.


//This is the example of the Event Capturing- capturing goes top to bottom
document.getElementById("images").addEventListener("click", function(e){
    console.log("clicked inside the ul")
}, true)  

document.getElementById("owl").addEventListener("click", function(e){
    console.log("clicked on the owl")
}, true)
