/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"practice/Fragment_assignment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});