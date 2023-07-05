function(instance, properties, context) {
    
    // Bail on missing
    if (instance.data.vizhandle == null) { return; }
    if (!instance.data.appended) { return; }
	if (!Object.values(TableauDialogType).includes(properties.type || "")) { return; }
    
	// Go
    instance.data.vizhandle.displayDialogAsync(properties.type);
}