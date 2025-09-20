//your JS code here. If required.
function allMethods() {
   const properties = Object.getOwnPropertyNames(Math);
	const methods = properties.filter(prop => typeof Math[prop] === "function");
	return methods.join(", ");
}

alert(allMethods());
