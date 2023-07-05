function(instance, properties, context) {

    // Bail on missing
    if (instance.data.vizhandle == null) { return; }
    if (!instance.data.appended) { return; }

	// Go
    instance.data.vizhandle.refreshDataAsync();
}