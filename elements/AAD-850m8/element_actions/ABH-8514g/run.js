function(instance, properties, context) {
    
    // Bail on missing
    if (instance.data.vizhandle == null) { return; }

	// Go
    instance.data.vizhandle.addFilter(properties.field, properties.values);
}