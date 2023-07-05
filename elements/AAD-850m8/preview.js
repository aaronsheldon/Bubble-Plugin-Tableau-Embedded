function(instance, properties) {
    
    // Reserve space
    const wrapper = document.createElement("div");
    instance.canvas.appendChild(wrapper);
    wrapper.style.minWidth = properties.bubble.min_width_css();
    wrapper.style.minHeight = properties.bubble.min_height_css();
    wrapper.style.maxWidth = properties.bubble.max_width_css();
    wrapper.style.maxHeight = properties.bubble.max_height_css();
    wrapper.style.height = properties.bubble.height().toString() + "px";
    wrapper.style.width = properties.bubble.width().toString() + "px";
    wrapper.style.overflow = "hidden";
    wrapper.style.background = "repeating-linear-gradient(45deg,#999999,#999999 10px,#FFFFFF 10px,#FFFFFF 20px)";
}