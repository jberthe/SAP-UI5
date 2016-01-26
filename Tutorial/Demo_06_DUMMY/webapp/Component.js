sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("demo.ch.saphir.Demo_06_DUMMY.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {

			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			
			// disable batch grouping for v2 API of the northwind service
			//this.getModel("fonds").setUseBatch(false);
			
			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});

});