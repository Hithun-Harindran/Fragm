sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("practice.Fragment_assignment.controller.View1", {
		onValueHelp: function (oEvent) {
         var oDialog = new sap.ui.xmlfragment("practice.Fragment_assignment.fragments.SelectDialog",this);
		this.getView().addDependent(oDialog);
		oDialog.bindAggregation("items",{
			path:"Country>/country",
			template:new sap.m.StandardListItem({
			title : "{Country>CountrynName}"	
			})
		});
		oDialog.open();	
		},
		
		onValueHelpOkPress: function (oEvent) {

var Otitle = oEvent.getParameter("selectedItem").getTitle();

		this._oInput = this.getView().byId("country");
	     this._oInput.setValue(Otitle);
		}
	});
});