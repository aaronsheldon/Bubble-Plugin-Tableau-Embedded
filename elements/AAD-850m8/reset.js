function(instance, context) {

    // Destroy
    if (instance.data.vizhandle) {
        instance.canvas.removeChild(instance.data.vizhandle);
        delete instance.data.vizhandle;
    }
    
	// Add the custom element
    instance.data.vizhandle = new TableauViz();
    instance.canvas.appendChild(instance.data.vizhandle);
    
    // Announce
    instance.triggerEvent("initialized");
}