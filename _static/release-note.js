var ua = {};
$(document).ready(function(){
    $("a[href='genindex.html']").hide();
    ua.name = window.navigator.userAgent.toLocaleLowerCase();
    ua.isIPhone = ua.name.indexOf('iphone') >= 0;
    ua.isAndroid = ua.name.indexOf('android') >= 0;
    if (ua.isIPhone || ua.isAndroid) {
        $("img").each(function(i,v){
           cur_class = $(v).attr("class");
           if (typeof cur_class == "undefined") {cur_class = "";}
           $(v).attr("class", cur_class + " sp");
        });
    }
    var dummy_ ;
    $("a.internal[href^='glossary.html']").each(function(i,v) {
        var url = $(v).attr("href");
        if (url.match(/^(.+)(#.+)$/)) {
            var _url = url.match(/^(.+)(#.+)$/)[1];
            var ref_id = url.match(/^(.+)(#.+)$/)[2];
        }
        if (typeof _url == "undefined" || typeof ref_id == "undefined") {
            return;
        }
        if (typeof dummy_ == "undefined") {
        	dummy_ = $("<iframe />").attr("src",_url).attr("id","_link_").css("width","0px").appendTo("body");
        	if (typeof dummy_ == "undefined") {
            	return;
            }
        }
        setTimeout(function(){
	        var cont_ = dummy_.contents().find(ref_id);
	        var cont_elm = dummy_.contents().find(ref_id).next();
	        var cont_obj = $("<div/>").append(cont_.clone()).append(cont_elm.clone());
	        $(v).balloon({ 
	            contents: cont_obj,
	            position:"top center",
				css: {
				    "font-size": "85%",
				    "opacity": "0.97",
				    border: 'solid 4px #5baec0',
				    padding: '10px',
				    maxWidth: '360px',
				    fontWeight: 'normal',
				    lineHeight: '1',
				    backgroundColor: '#f0f8ff',
				    color: '#000'
				} });
	       
        },1000);
        $(v).click(function(){return false});
        var target = null;
        if (location.hash != "") {
            target = $(location.hash);
        }
        setTimeout(function(){
               $.smoothScroll({ 
                   scrollElement:$("body"),
                   scrollTarget:target
        });},500);
        
       
    });

});