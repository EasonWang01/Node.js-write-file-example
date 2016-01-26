var http = require('https');
var fs = require('fs');

function test(i){
			 	if(i%2!=0){
			fs.createWriteStream("file"+i+".pdf");
				 http.get("https://tw.misumi-ec.com/pdf/fa/p"+i+".pdf", function(response) {
				  response.pipe(fs.createWriteStream("file"+i+".pdf"));
				  console.log(i);
				});

 	}

};


 for(i=2800;i<2801;i++){
///////////將function寫在外面，因http.get是閉包，所以如直接放在for內會每次都讀到for迴圈結束之值//
 	test(i);




 }
