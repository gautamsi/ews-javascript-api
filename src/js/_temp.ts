function soapResponseToJson(xml) {
    var json = xmlToJson(xml).Body;

    console.debug(json);

    var response = {};
    for (var outterKey in json) {
        if (json.hasOwnProperty(outterKey)) {
            var temp = json[outterKey];
            for (var innerKey in temp) {
                if (temp.hasOwnProperty(innerKey)) {
                    response[innerKey] = temp[innerKey].text;
                }
            }
        }
    }

    console.debug(<any>response);
    return response;
}

//use this to work with node - https://github.com/jindw/xmldom - tested working with latest commit f053be7ceb
//var DOMParser = require('xmldom').DOMParser;
//var dom = new DOMParser().parseFromString("xml data", 'text/xml');
//console.log(JSON.stringify(xmlToJson(dom.documentElement)));
// Changes XML to JSON
function xmlToJson(xml: XMLDocument): any {

    // Create the return object
    var obj = {};

    if (xml.nodeType == Node.ELEMENT_NODE /*1*/) {// element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == Node.TEXT_NODE /*3*/) {// text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName.substring(item.nodeName.indexOf(":") + 1).replace('#', '');
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};

//module.exports = soapResponseToJson;