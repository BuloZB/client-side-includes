client-side-include
===================

Easy way to work with server side includes when your development server doesn't support them.  Uses a simple javascript library to pull in included files via ajax.

Depends on jQuery (tested with version 1.8.2).

How to use:
  1. Include clientincludes.js on your page page
  2. Call doClientIncludes() first thing in your page initialization, your $(document).ready() handler is a good place for a typical jQuery app
  3. Use a standard server side include statement comment on your page
	ex: <!--#include file="myfooter.html" -->
  4. This library will make an ajax request to retrieve the specified included file and insert it directly under the comment node in your page's dom.  

This library was created to help with reusing content on a Yeoman.io project, and assumes you are in "dev mode" if the port is 3501.  You can edit the port to be whatever you like.  In "dev mode" this function runs and does the client-side including.  In non dev mode, it does nothing and assumes your server will be providing real server side includes.

Because this function requires jQuery, you won't be able to use an include that includes jQuery (or your other base javascript libraries).

Also, since this technique is loading the includes via http get, the includes must be accessible from the path specified in the directive (i.e., there's no difference between using file and virtual directives in this case).


