/* ***** BEGIN LICENSE BLOCK *****
 * Version: GPL 3.0
 *
 * The contents of this file are subject to the General Public License
 * 3.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.gnu.org/licenses/gpl.html
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * Author: Michel Verbraak (info@1st-setup.nl)
 * Website: http://www.1st-setup.nl/
 *
 * This interface/service is used for loadBalancing Request to Exchange
 *
 * ***** BEGIN LICENSE BLOCK *****/

var Cc = Components.classes;
var Ci = Components.interfaces;
var Cu = Components.utils;
var Cr = Components.results;
var components = Components;

Cu.import("resource://gre/modules/XPCOMUtils.jsm");
Cu.import("resource://gre/modules/Services.jsm");

function mivExchangeMsgAccountManagerExtension() {

    //this.logInfo("mivExchangeMsgAccountManagerExtension: init");

}

var mivExchangeMsgAccountManagerExtensionGUID = "9b353ed2-b8c9-42aa-8aad-e2ee853d33b6";

mivExchangeMsgAccountManagerExtension.prototype = {

    QueryInterface: XPCOMUtils.generateQI([Ci.mivExchangeMsgAccountManagerExtension,
        Ci.nsIMsgAccountManagerExtension,
        Ci.nsIClassInfo,
        Ci.nsISupports
    ]),

    _className: "mivExchangeMsgAccountManagerExtension",

    classDescription: "Exchange EWS Msg Account Manager Extension",

    classID: components.ID("{" + mivExchangeMsgAccountManagerExtensionGUID + "}"),
    contractID: "@mozilla.org/accountmanager/extension;1?name=exchangeWebServiceMail",
    flags: Ci.nsIClassInfo.THREADSAFE,
    implementationLanguage: Ci.nsIProgrammingLanguage.JAVASCRIPT,

    getInterfaces: function _getInterfaces(count) {
        var ifaces = [Ci.mivExchangeMsgAccountManagerExtension,
            Ci.nsIMsgAccountManagerExtension,
            Ci.nsIClassInfo,
            Ci.nsISupports
        ];
        count.value = ifaces.length;
        return ifaces;
    },

    //  readonly attribute ACString name;   // examples:  mdn
    get name() {
        dump("mivExchangeMsgAccountManagerExtension.name:\n");
        return "exchangeWebServiceMail";
    },

    //  boolean showPanel(in nsIMsgIncomingServer server);
    showPanel: function _showPanel(aServer) {
        dump("mivExchangeMsgAccountManagerExtension.showPanel: aServer.type:" + aServer.type + "\n");
    },

    //  readonly attribute ACString chromePackageName;  // example:  messenger, chrome://messenger/content/am-mdn.xul and chrome://messenger/locale/am-mdn.properties
    get chromePackageName() {
        dump("mivExchangeMsgAccountManagerExtension.chromePackageName:\n");
        return "exchangemail"
    },

};

function NSGetFactory(cid) {

    try {
        if (!NSGetFactory.mivExchangeMsgAccountManagerExtension) {
            NSGetFactory.mivExchangeMsgAccountManagerExtension = XPCOMUtils.generateNSGetFactory([mivExchangeMsgAccountManagerExtension]);

        }

    }
    catch (e) {
        Components.utils.reportError(e);
        dump(e);
        throw e;
    }

    return NSGetFactory.mivExchangeMsgAccountManagerExtension(cid);
}