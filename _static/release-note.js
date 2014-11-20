$(document).ready(function(){
    $("a.internal:has('em')").each(function(i,v) {
        var url = $(v).attr("href");
        var ref_id = url.match(/(#.+$)/)[0];
        if (typeof url == "undefined" || typeof ref_id == "undefined") {
            return;
        }
        var dummy_ = $("<iframe />").attr("src",url).attr("id","_link_").css("width","0px").appendTo("body");
        if (typeof dummy_ == "undefined") {
            return;
        }
        setTimeout(function(){
	        var cont_ = dummy_.contents().find(ref_id);
	        var cont_elm = dummy_.contents().find(ref_id).next();
	        var cont_obj = $("<div/>").append(cont_.clone()).append(cont_elm.clone());
	        $(v).balloon({ 
	            contents: cont_obj,
	            position:"top center",
				css: {
				    "font-size": "70%",
				    "opacity": "0.97",
				    border: 'solid 4px #5baec0',
				    padding: '10px',
				    maxWidth: '300px',
				    fontWeight: 'bold',
				    lineHeight: '1',
				    backgroundColor: '#666',
				    color: '#fff'
				} });
	        $("#_link_").remove();
        },1000);
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