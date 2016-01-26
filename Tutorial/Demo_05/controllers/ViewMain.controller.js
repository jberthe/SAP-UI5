sap.ui.controller("demo.ch.saphir.Demo_05.controllers.ViewMain", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf demo.ch.saphir.Demo_01.ViewMain
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf demo.ch.saphir.Demo_01.ViewMain
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf demo.ch.saphir.Demo_01.ViewMain
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf demo.ch.saphir.Demo_01.ViewMain
	 */
	//	onExit: function() {
	//
	//	}
	navigateToSecondPage: function(){
		myApp.to("idMyViewSecond");
	},
	
	onEnableInput: function(oEvent){
		// Récupération du model SETTINGS
		var oModel = sap.ui.getCore().getModel("settings");
		
		// On valire le paramètre ENABLE
		var isEnabled = oModel.getProperty("/enable");
		
		if(isEnabled === true ){
			isEnabled = false;
		} else {
			isEnabled = true;
		}
		
		// Modifier la valeur du paramètre ENABLE
		oModel.setProperty("/enable", isEnabled);
		
	},
	
	onLiveChange: function(oEvent){
		var sValue = oEvent.getParameters("value").newValue;
		
		if (!sValue.length){
			this.isError(true);
		} else {
			this.isError(false);
		}
		
	},
	
	isError: function(bIsError){
		// Récupération du model SETTINGS
		var oModel = sap.ui.getCore().getModel("settings");
		var newState = "Success";
		
		if	(bIsError === true){
			newState = "Error";
		}
		oModel.setProperty("/state", newState );
		
		
	}

});