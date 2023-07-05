function(instance, context) {

	// Add the custom element
    instance.data.vizhandle = new TableauViz();
    
    // Pending
    instance.data.appended = false;
    
    // Announce rendered
    instance.data.vizhandle.addEventListener(
    	TableauEventType.FirstInteractive,
        (e) => { instance.triggerEvent("rendered"); }
    );
    
    // Announce URL
    instance.data.vizhandle.addEventListener(
        TableauEventType.UrlAction,
    	(e) => {
            instance.publishState("url", e.detail.url);
            instance.triggerEvent("urlset");
        }
    );
    
    // Announce
    instance.publishState("initialized", true);
    instance.triggerEvent("initialized");
}