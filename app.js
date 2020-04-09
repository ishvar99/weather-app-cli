const yargs=require("yargs");
const geocode=require("./geocode/geocode");
const request=require("request");
const weather=require("./weather/weather")
const argv=yargs
.options({
	a:{
		describe:'Enter the location to find the weather',
		alias:'address',
		demand:true,
		string:true
	}
})
.help()
.argv;
geocode.geocodeAddress(argv.a)
.then((res)=>{
	console.log(`Location: ${res.address}`);
	weather.currentTemperature(res.latitude,res.longitude)
	.then((weather)=>{
        console.log(`It is currently ${weather.temperature} F`);
	})
	.catch((err)=>{
		console.log(err);
	})
})
.catch((err)=>{
	console.log(err)
})
    //  OR
// .then((res)=>{
// 	console.log(res);
// },(err)=>{
// 	console.log(err);
// })


// geocode.geocodeAddress(argv.a,(err,results)=>{
// if(err)
// 	console.log(err);
// else{
//     //console.log(JSON.stringify(results,undefined,2));
//     console.log(results.address);
//     weather.currentTemperature(results.latitude,results.longitude,(err,weatherResults)=>{
//            if(err)
//            	console.log(err);
//            else
//            	console.log(`It is currently ${weatherResults.temperature}`);
//     });
// }
// });

