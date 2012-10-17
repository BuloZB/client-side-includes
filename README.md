client-side-include (SSI alternative for Yeoman)
===================

Easy way to work with server side includes when your development server doesn't support them.  Uses a simple javascript library to pull in included files via ajax.

Depends on jQuery (tested with version 1.8.2).

How to use:
  1. Include clientincludes.js on your page page
  2. Call doClientIncludes() first thing in your page initialization, your $(document).ready() handler is a good place for a typical jQuery app
  3. Use a standard server side include statement at your page HTML source eg: <!--#include file="myfooter.html" --> and the corresponding file will be included just as in your production server.
  4. The script uses port number 3501 to determine whether or not to include files, you can edit the script to look for any other port number.


This is a script that can be used when working on a project that requires server side includes (SSI) and that will be hosted on an (apache, nginx etc.) type of server.

By Including the script on your project, you can then break your HTML pages to contain common areas like Headers & Footers via SSI and see them while on "dev mode on Yeoman"  [ $yeoman server ]. After you finish your work your final production files will simply use the SSI provided by your production server since it will use the same html code required to pull in those includes. This makes this script a good non-invasive choice.


Enjoy :-)