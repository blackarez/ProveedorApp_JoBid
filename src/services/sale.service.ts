import { Injectable } from "@angular/core";
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { afDBUser } from "../app/app.module";


@Injectable()
export class SaleService{
	
	afDBUser:AngularFireDatabase;
	constructor() {
		this.afDBUser = afDBUser;
	}
	
	//---new sale
	public newSale(keyUser,keySale,maxOffer){
		// let key = undefined;
		// //default star
		// let star = '3';
		// console.log('key:'+key);
		// console.log('keyNew:'+keyNew);
		// if(keyNew && keyNew != null  && keyNew != undefined){
		// 	keySale = keyNew;
		// }else{
		// 	var d = new Date();
		// 	key = d.getTime();
		// 	var keySale = "sale_"+(key);
		// }
		
		console.log('metodoNewSale');
		console.log(keyUser);
		console.log(keySale);
		console.log(maxOffer);
		this.afDBUser.object('/sale/'+keyUser+'/'+keySale).set({"status":"Published","sale":maxOffer,"providers":{"prof_1":{"offer":"87"},"prof_2":{"offer":"65"}}}).catch(error => {console.log('errorNewSale'); console.log(error);console.log(JSON.stringify(error));});
		//this.afDBUser.object('/sale/'+keyUser+'/'+keySale).set({"status":"new","sale":maxOffer});
		console.info('sale create');
	}

	getSale(keyUser,keySale){
		return this.afDBUser.object('/sale/'+keyUser+'/'+keySale);
	}
	getSales(keyUser){
		return this.afDBUser.object('/sale/'+keyUser);
	}

	public setStatus(keyUser,keyOffer,status){
		return this.afDBUser.object('/sale/'+keyUser+'/'+keyOffer+'/status/').set(status).catch(error => {console.log('error sale setstatus'); console.log(error);console.log(JSON.stringify(error));});
	}
	public setSale(keyUser,keyOffer,sale){
		return this.afDBUser.object('/sale/'+keyUser+'/'+keyOffer+'/sale/').set(sale).catch(error => {console.log('error sale setSale'); console.log(error);console.log(JSON.stringify(error));});
	}

	public setSaleProvider(keyUser,keyOffer,KeyProvider,sale){
		return this.afDBUser.object('/sale/'+keyUser+'/'+keyOffer+'/providers/'+KeyProvider+'/offer/').set(sale).catch(error => {console.log('error sale setSale'); console.log(error);console.log(JSON.stringify(error));});
	}

	public setProvider(keyUser,keyOffer,Provider){
		return this.afDBUser.object('/sale/'+keyUser+'/'+keyOffer+'/Profession/').set(Provider).catch(error => {console.log('error offer setUser'); console.log(error);console.log(JSON.stringify(error));});
	}

	//-get
	public getStatus(keyUser,keyOffer){
		return this.afDBUser.object('/sale/'+keyUser+'/'+keyOffer+'/status/');
	}

	public setSaleUserLocation(keyUser,keyOffer,keyProvider,UserLocation){
		console.info('set UserLocation');
		console.log(UserLocation);
		this.afDBUser.object('/sale/'+keyUser+'/'+keyOffer+'/providers/'+keyProvider+'/UserLocacion').set(UserLocation).catch(error => {console.log('error sale setSaleUserLocation'); console.log(error);console.log(JSON.stringify(error));});
	}
}