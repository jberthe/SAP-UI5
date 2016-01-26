sap.ui.controller("demo.ch.saphir.Demo_06_DUMMY.controllers.V_Vue1", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf demo.ch.saphir.Demo_06_DUMMY.views.V_Vue1
	 */
		onInit: function() {
			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
		},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf demo.ch.saphir.Demo_06_DUMMY.views.V_Vue1
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf demo.ch.saphir.Demo_06_DUMMY.views.V_Vue1
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf demo.ch.saphir.Demo_06_DUMMY.views.V_Vue1
	 */
	//	onExit: function() {
	//
	//	}
	
	onGoToVue2: function(oEvent){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("vue2Route");
	}

});