/* Enhanced priority display */

var Cu=Components.utils;
var Cc=Components.classes;
var Ci=Components.interfaces;
var prefService = Cc["@mozilla.org/preferences-service;1"]
                     .getService(Ci.nsIPrefBranch); 
 
function gCP(pref) {
	return prefService.getCharPref("extensions.extras." + pref);
} 

function gBP(pref) {
	return prefService.getBoolPref("extensions.extras." + pref);
} 

function enhancePriority(){
	this._document=document;
	this._window=window;
	 
} 

enhancePriority.prototype={
 
		execute:function _execute() { 
 
			    var extrasObserver = {
 					observe: function(aMsgFolder, aTopic, aData) {  
			 		    if (gDBView) {
				    			var columnHandler = {
				    			    getCellText: function(row, col) {
					    				if (gBP("Iconify"))
					    			    return "";
					    				return gDBView.cellTextForColumn(row, "priorityCol");
				    			    },
				
				    			    getSortStringForRow: function(hdr) {
					    				if (columnHandler.old)
					    				    return columnHandler.old.getSortStringForRow(hdr);
					    				return null;
				    			    },
				
				    			    isString: function() {
				    			    	return ! gBP("Iconify");
				    			    },
				
				    			    _atoms: {},
				    			    _getAtom: function(aName) {
					    				if (!this._atoms[aName]) {
					    				    var as = Cc["@mozilla.org/atom-service;1"].
					    					getService(Ci.nsIAtomService);
					    				    this._atoms[aName] = as.getAtom(aName);
					    				}
					    				return this._atoms[aName];
				    			    },
				
				    			    setProperty: function(prop, value) {
					    				if (prop) {
					    				    prop.AppendElement(this._getAtom(value));
					    				    return "";
					    				} else {
					    				    return " " + value;
					    				}
				    			    },
				
				    			    getExtensionProperties: function(row, props, which) {
					    				var properties = "";
					    				var hdr = gDBView.getMsgHdrAt(row);
					    				var priority = hdr.getStringProperty("priority");
					    				var doHigh = gBP(which + "High");
					    				var doLow = gBP(which + "Low");
					    				var property;
					    				switch (priority) {
					    				case "6":
					    				    if (doHigh)
					    					property = gCP("HighestColor"); 
					    				    break;
					    				case "5":
					    				    if (doHigh)
					    					property = gCP("HighColor");
					    				    break;
					    				case "3":
					    				    if (doLow)
					    					property = gCP("LowColor");
					    				    break;
					    				case "2":
					    				    if (doLow)
					    					property = gCP("LowestColor");
					    				    break;
					    				}
					    				if (property) {  
					    				    properties += this.setProperty(props,property);
					    				}
					    				return properties;
				    			    },
				
				    			    getCellProperties: function(row, col, props) {
				    			    	
				    			    },
				
				    			    getRowProperties: function(row, props) {
				    			    	var properties = "";
				    			     
					    				var hdr = gDBView.getMsgHdrAt(row);
					    				var priority = hdr.getStringProperty("priority");
					    				var doHigh = gBP( "ShadeHigh");
					    				var doLow = gBP( "ShadeLow");
					    				var property;
					    				switch (priority) {
					    				case "6":
					    				    if (doHigh)
					    					property = gCP("HighestColor"); 
					    				    break;
					    				case "5":
					    				    if (doHigh)
					    					property = gCP("HighColor");
					    				    break;
					    				case "3":
					    				    if (doLow)
					    					property = gCP("LowColor");
					    				    break;
					    				case "2":
					    				    if (doLow)
					    					property = gCP("LowestColor");
					    				    break;
					    				}
					    				if (property) {  
					    					property='lc-'+property.substr(1);
					    				    properties += this.setProperty(props,property);
					    				}
    					    		                              ;
					    				if (columnHandler.old)
					    				    properties += (columnHandler.old.
					    						   getRowProperties(row, props));
					    				return properties;
				    			    },
				
				    			    getImageSrc: function(row, col) {
				    				if ( !gBP("Iconify"))
				    				    return null;
				    				var hdr = gDBView.getMsgHdrAt(row);
				    				
				    				var priority = hdr.getStringProperty("priority");
				    					switch (priority) {
						    				case "6":
						    				    return gCP("HighestIcon");
						    				case "5":
						    				    return gCP("HighIcon");
						    				case "3":
						    				    return gCP("LowIcon");
						    				case "2":
						    				    return gCP("LowestIcon");
						    				default:
						    				    if (columnHandler.old)
						    					return columnHandler.old.getImageSrc(row, col);
 				    					}
				    			    },
				
				    			    getSortLongForRow: function(hdr) {
				    				if (columnHandler.old)
				    				    return columnHandler.old.getSortLongForRow(hdr);
				    				return null;
				    			    }
				    			}; //end-columnHandler
				
				    			try {
				    			    columnHandler.old = gDBView.getColumnHandler("priorityCol");
				    			}
				    			catch (ex) {}
				    			
				    			gDBView.addColumnHandler("priorityCol", columnHandler); 
				    			
			    		    }//ifend
			    		}
				    };
			var ObserverService = Cc["@mozilla.org/observer-service;1"]
			    .getService(Ci.nsIObserverService);
				ObserverService.addObserver( extrasObserver, "MsgCreateDBView", false);
	    },
	    
		onload:function _onload(){ 
				
				                     
				prefService.setCharPref("extensions.extras.HighestIcon",
				                          "chrome://exchangecalendar/skin/highest.gif");
				prefService.setCharPref("extensions.extras.HighIcon",
				                          "chrome://exchangecalendar/skin/high.gif");
				prefService.setCharPref("extensions.extras.LowIcon",
				                          "chrome://exchangecalendar/skin/low.gif");
				prefService.setCharPref("extensions.extras.LowestIcon",
				                          "chrome://exchangecalendar/skin/lowest.gif");
				
				if ( gBP("Iconify") == null ) 
				 prefService.setBoolPref("extensions.extras.Iconify", true); 
				if (  gBP("ShadeHigh")  == null ) 
				prefService.setBoolPref("extensions.extras.ShadeHigh", true);
				if (  gBP("ShadeHigh")  == null  ) 
				prefService.setBoolPref("extensions.extras.ShadeLow", false);
				
				if ( gCP("HighestColor") == null ) 
					prefService.setBoolPref("extensions.extras.HighestColor", "#FF0000");
	    },
	
};
var tmpEnhancePriority=new enhancePriority(window,document);
window.addEventListener("load", tmpEnhancePriority.onload(), false);
window.addEventListener("load", tmpEnhancePriority.execute(), false);