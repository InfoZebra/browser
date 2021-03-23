// ==UserScript==
// @name         Telegraph Views
// @namespace    https://open.lbry.com/@InfoZebra:1?r=7YcRBCZ7iR8tbx7H4uu3TJqP1Gc3qoEK
// @version      0.2
// @description  Show amount of views on Telegraph pages
// @author       InfoZebra
// @match        https://*.telegra.ph/*
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    setInterval(setDownloader, 1000);
    function setDownloader() {
        let link = document.getElementById('downloader');
        let LinkAPI = "https://api.telegra.ph/getViews" + window.location.pathname;

        function Get(LinkAPI){
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("GET",LinkAPI,false);
        Httpreq.send(null);
        return Httpreq.responseText;
        }

        var json_obj = JSON.parse(Get(LinkAPI));
        console.log("Количество просмотров: " + json_obj.result.views);

        if (!link) {
            var innerText = LinkAPI
            link = document.createElement('a');
            link.innerText = " • " + json_obj.result.views;
            link.setAttribute('target', '_blank');
            link.setAttribute('id', 'downloader');
            document.getElementsByTagName('address')[0].appendChild(link)
        }
        let hrefChannel = "https://open.lbry.com/@InfoZebra:1?r=7YcRBCZ7iR8tbx7H4uu3TJqP1Gc3qoEK";

        link.setAttribute('href', hrefChannel);
    }
})();
