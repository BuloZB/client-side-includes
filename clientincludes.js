function doClientIncludes()
{
	//only do this if we are running on a dev server that doesn't support server side includes
	//3501 is the default Yeoman server port, but this could be changed to anything
	var doClientSideIncludes = window.location.port == 3501;
	if(doClientSideIncludes){

		//match #include file=  or #include virtual=
		var reFile = /#include\s+(file|virtual)="([A-Za-z0-9_.\-\/\\]+)"/g;
	
		$("*").contents().filter(function(){ 
			return this.nodeType == 8; //if its a comment node
		}).each(function(i, e){
			//console.log('client side include comment text found: ' + e.nodeValue);

			var comment = e.nodeValue;
			var parsed = reFile.exec(comment);
			if( parsed != null && parsed.length >=2)
			{
				//console.log('client side include found: ' + parsed[0]);
				var file = parsed[2];
				file = file.replace("\\", "/"); //replace windowsy path separator with urly one

				//console.log('client side include fetching: ' + file);
				$.get(file, function(data){
					$(e).after(data);
				});
			}

		}); 
	}
}
