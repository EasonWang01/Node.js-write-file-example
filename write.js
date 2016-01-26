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

 	test(i);




 }
