function(instance, properties, context) {

    // Bail on missing
    if (instance.data.vizhandle == null) { return; }
    
    // Set the source
    instance.data.vizhandle.src = properties.sourceurl || "";
    
    // Render
    if (!instance.data.appended) {
        instance.canvas.appendChild(instance.data.vizhandle);
        instance.data.appended = true;
    }
}