var request=require('request');
exports.geocodeAddress=(address)=> {
	return new Promise((resolve,reject)=>{
		var encodedAddress=encodeURIComponent(address);
         request({
	url:`https://api.mapbox.com/v4/geocode/mapbox.places/${encodedAddress}.json?access_token=<Your Mapbox Access Token>`,
	json:true
},(err,res,data)=>{
	if(!err&&res.statusCode==200){
		if(data.features.length!=0){
			resolve({
			address:data.features[0].place_name,
			latitude:data.features[1].center[1],
			longitude:data.features[0].center[0]
			})
		// callback(undefined,{
		// 	address:data.features[0].place_name,
		// 	latitude:data.features[1].center[1],
		// 	longitude:data.features[0].center[0]
		// })
		// console.log(JSON.stringify(data,undefined,4));
	}
	else
		// callback("Place not found!!")
	     reject('Place not found')
	}
	else
		// callbak("Unable to connect to the servers!!");
	     reject('Unable to connect to the servers!')
});
	})
}
module.exports=exports;