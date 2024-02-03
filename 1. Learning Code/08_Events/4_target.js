//target property-: The read-only target property of the Event interface is a reference to the object onto which the event was dispatched. It is different from Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event.


//The target property returns the element where the event occured.
// The target property is read-only.


document.querySelector("#images").addEventListener("click", function(e){
    console.log(e.target.tagName)
        if(e.target.tagName==='IMG'){
            console.log(e.target.id)
            let removeIt=e.target.parentNode
            removeIt.remove()
            //Another method is
            // removeIt.parentNode.removeChild(removeIt)
            //Both methis is good
    }
})
