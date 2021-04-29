 var sehriTime= [ "0","4:51 AM","4:50 AM","4:49 AM","4:48 AM","4:47 AM","4:46 AM","4:45 AM","4:44 AM","4:43 AM","4:42 AM","4:41 AM","4:40 AM","4:39 AM","4:38 AM","4:37 AM","4:36 AM","4:35 AM","4:34 AM","4:33 AM","4:32 AM","4:31 AM","4:30 AM","4:29 AM","4:28 AM","4:27 AM","4:26 AM","4:25 AM","4:24 AM","4:23 AM"];
 var iftarTime=["0","6:55 PM","6:55 PM","6:56 PM","6:56 PM","6:57 PM","6:57 PM","6:58 PM","6:58 PM","6:59 PM","6:59 PM","7:00 PM","7:00 PM","7:01 PM","7:01 PM","7:02 PM","7:02 PM","7:03 PM","7:03 PM","7:04 PM","7:04 PM","7:05 PM","7:05 PM","7:06 PM","7:06 PM","7:07 PM","7:07 PM","7:08 PM","7:08 PM","7:09 PM"]
 var roza = +prompt("Enter Islamic Date");


document.write("<div class=cl-1>" + "<div class=cl-2>"+"<div class=cl-3><h1>RAMADAN KAREEM</h1></div>" + "<h1>On Roza " + roza +"</h1>" + "<h3>The sehri time is:" + sehriTime[--roza] + "<br>" + "The iftaar time is:" + iftarTime[roza] + "</h3>"+"</div>" + "</div>")

