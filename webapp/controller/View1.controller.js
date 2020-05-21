sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/suite/ui/commons/TimelineItem"
], function (Controller, TimelineItem) {
	"use strict";

	return Controller.extend("ovly.holidays.controller.View1", {
		
		endpoint: "https://calendarific.com/api/v2/holidays",
		apiKey: "aef5051bebab0ec52b7cf2e22a4ab26d9cc06de0",
		
		onInit: function () {
			
		},
		
		onSearchPress: function () {
			this.byId("timeline").setBusy(true);
			this.callAPI();
		},
		
		callAPI: function () {
			var callback = $.proxy(this._updateTimline, this);
			
			$.get(this.endpoint, this._getParameters(), callback);
		},
		
		_getParameters: function () {
			var sCountry = this.byId("country-select").getSelectedKey();
			var sDate = this.byId("date-picker").getValue().substring(6);
			
			return {
				api_key: this.apiKey,
				country: sCountry,
				year: sDate
			};
		},
		
		_updateTimline: function (result) {
			var aHoliday = result.response.holidays;
			this.byId("timeline").removeAllContent();
			
			$.each(aHoliday, function (index, element) {
				var dDate = new Date(element.date.iso);
				var year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dDate);
				var month = new Intl.DateTimeFormat('en', { month: 'short' }).format(dDate);
				var day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dDate);
				var sFormatedDate = day + "-" + month + "-" + year;
				
				var oContent = new TimelineItem({
					title: element.name,
					text: element.description,
					icon: "sap-icon://date-time",
					dateTime: sFormatedDate
				});
				
				this.byId("timeline").addContent(oContent);
			}.bind(this));
			
			this.byId("timeline").setBusy(false);
		}
	});
});