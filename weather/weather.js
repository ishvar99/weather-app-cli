var request=require("request");
exports.currentTemperature=(lat,lon)=> {
	return new Promise((resolve,reject)=>{

    request({
	url:`https://api.darksky.net/forecast/276c07e902e62d018a1a832e44bd6783/${lat},${lon}`,
	json:true
},(err,res,data)=>{
	if(!err&&res.statusCode==200)
	{
		resolve({
			temperature:data.currently.temperature
		})
   // callback(undefined,{
   // 	temperature:data.currently.temperature
   // });
}
    else{
    	reject('Unable to fetch weather')
    	// callback('Unable to fetch weather');
    }
})
	})
}
module.exports=exports;