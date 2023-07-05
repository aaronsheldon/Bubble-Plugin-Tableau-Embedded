function(instance, properties, context) {

    // Bail on missing
    if (instance.data.vizhandle == null) { return; }
    
    // Apply optionals
    if (!properties.bubble.fit_height()) {
    	instance.data.vizhandle.height = properties.bubble.height();
    }
    if (!properties.bubble.fit_width()) {
    	instance.data.vizhandle.width = properties.bubble.width();
    }
    if (properties.disablepopups != null) { instance.data.vizhandle.disableUrlActionsPopups = properties.disablepopups; }
    if (properties.hidetabs != null) { instance.data.vizhandle.hideTabs = properties.hidetabs; }
    if (properties.touchoptimize != null) { instance.data.vizhandle.touchOptimize = properties.touchoptimize; }
    if (properties.hideweb != null) { instance.data.vizhandle.hideEditButton = properties.hideweb; }
    if (properties.hidedesktop != null) { instance.data.vizhandle.hideEditInDesktopButton = properties.hidedesktop; }
    if (properties.suppressdefault != null) { instance.data.vizhandle.suppressDefaultEditBehavior = properties.suppressdefault; }
    
    // Check device
    instance.data.vizhandle.device = Object.values(TableauDeviceType).includes(properties.device || "") ? properties.device : null;
    
    // Check toolbar
    instance.data.vizhandle.toolbar = Object.values(TableauToolbar).includes(properties.toolbar || "") ? properties.toolbar : null;
}