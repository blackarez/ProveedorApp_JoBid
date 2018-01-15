import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { afDBUser } from "../app/app.module";

@Injectable()

export class ProfessionalsService{

	afDBUser:AngularFireDatabase;
	constructor() {
		this.afDBUser = afDBUser;
	}

	getIni(){
		this.afDBUser.list('/professionals/').subscribe(
			(data)=>{
				console.log(data);
			}
		);
	}
	//-get
	public getProfessionals(){
		// console.log(this.afDBUser.list('/professionals/'));
		return this.afDBUser.list('/professionals/');
	}

	public getProfessional(id){
		console.log('getProfessionalId');
		// console.log(id);
		return this.afDBUser.object('/professionals/'+id);
	}

	public getProfessionalExists( email: any ){
		// alert("consulta proveedor");
		return this.afDBUser.list('/professionals',{
			query: {
			  orderByChild: 'prof_email',
			  equalTo: email
			}
		});
	}

	public getProfessionalUidFace( uid: any ){
		return this.afDBUser.list('/professionals',{
			query: {
			  orderByChild: 'prof_uidFace',
			  equalTo: uid
			}
		});
	}

	public getUserLoginPwd(pwd: any ){
		// let password = this.encriptyService.GenerateEncripty(pwd);
		let password = pwd;
		let listBD =this.afDBUser.list('/professionals',{
			query: {
				orderByChild: 'prof_password',
				equalTo: password
			  }
		})
		// console.log(listBD);
		// console.log(JSON.stringify( listBD) );
		return listBD;
	}

	getContract(keyProvider){
		console.info('get contracts');
		return this.afDBUser.object('/Contracts/'+keyProvider);
	}

	public getServicesProfessional(keyProvider){
		return this.afDBUser.object('/professionals/'+keyProvider+'/Service/');
	}

	public getServiceProfessional(keyProvider,KeyService){
		return this.afDBUser.object('/professionals/'+keyProvider+'/Service/'+KeyService);
	}

	public getStar(keyProvider){
		// console.log('getStar');
		return this.afDBUser.object('/professionals/'+keyProvider+'/prof_star');
	}
	public getGalleryService(keyProveedor,keyService){
		return this.afDBUser.object('/professionals/'+keyProveedor+'/Service/'+keyService+'/serv_detail/serv_gallery');
	}
	//-new
	public newUser(userData : any = [],keyNew?:any ){
		//userData = {"username":"","password":"","email":"","name":"","lastName":"","date":"","socialSecurity":"","zipcode":"","state":"","picture":"","verificacion":"","pais":"","direccion":"","tel":"","uidFace":"","star":""};
		// alert("new proveedor");
		let key = undefined;
		//default star
		let star = 5;
		// console.log('key:'+key);
		// console.log('keyNew:'+keyNew);
		if(keyNew && keyNew != null  && keyNew != undefined){
			keyUser = keyNew;
		}else{
			var d = new Date();
			key = d.getTime();
			var keyUser = "prof_"+(key);
		}
		if(userData['star'] != undefined && userData['star'] != null && userData['star'] != " "){
			if(userData['star'] != star){
				star= userData['star'];
			}
		}
		
		console.log('userKey'+keyUser);
		//console.log(newKeyAddres);
		
		let username = userData['username'];
		//let password = this.encriptyService.GenerateEncripty(userData["password"]);
		let password = userData['password'];
		let email = userData['email'];
		let name = userData['name'];
		let lastName = userData['lastName'];
		let date = userData['date'];
		let socialSecurity = userData['socialSecurity'];
		let zipcode = userData['zipcode'];
		let state = userData['state'];
		let picture = '';
		if(userData['picture'] != undefined){
			picture = userData['picture'];
		}
		// let verificacion = userData['verificacion'];
		let pais = userData['pais'];
		let direccion = userData['direccion'];
		let tel = userData['tel'];
		let uidFace = '';
		if(userData["uidFace"] != undefined){
			uidFace = userData["uidFace"];
		}
		// let uidFace = userData['uidFace'];

		console.log(userData);

		if( (userData['username']) && (userData['password']) && (userData['email']) ){
			if( (userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null) ){
				this.afDBUser.object('/professionals/'+keyUser).set({"prof_username":username,"prof_password":password,"prof_email":email,"prof_name":name,"prof_lastName":lastName,"prof_date":date,"prof_socialSecurity":socialSecurity,"prof_zipcode":zipcode,"prof_state":state,"prof_picture":picture,"prof_pais":pais,"prof_direccion":direccion,"prof_tel":tel,"prof_uidFace":uidFace,"prof_star":star});
				console.info('user create profession');
			}
		}
	}
	public updateUser(userData : any = [],keyNew?:any ){
		//userData = {"username":"","password":"","email":"","name":"","lastName":"","date":"","socialSecurity":"","zipcode":"","state":"","picture":"","verificacion":"","pais":"","direccion":"","tel":"","uidFace":"","star":""};
		let key = undefined;
		//default star
		let star = 5;
		// console.log('key:'+key);
		// console.log('keyNew:'+keyNew);
		if(keyNew && keyNew != null  && keyNew != undefined){
			keyUser = keyNew;
		}else{
			var d = new Date();
			key = d.getTime();
			var keyUser = "prof_"+(key);
		}
		
		if(userData['star'] != undefined && userData['star'] != null && userData['star'] != " "){
			if(userData['star'] != star){
				star= userData['star'];
			}
		}
		
		console.log('userKey'+keyUser);
		//console.log(newKeyAddres);
		
		let username = userData['username'];
		//let password = this.encriptyService.GenerateEncripty(userData["password"]);
		let password = userData['password'];
		let email = userData['email'];
		let name = userData['name'];
		let lastName = userData['lastName'];
		let date = userData['date'];
		let socialSecurity = userData['socialSecurity'];
		let zipcode = userData['zipcode'];
		let state = userData['state'];
		let picture = '';
		if(userData['picture'] != undefined){
			picture = userData['picture'];
		}
		// let verificacion = userData['verificacion'];
		let pais = userData['pais'];
		let direccion = userData['direccion'];
		let tel = userData['tel'];
		let uidFace = '';
		if(userData["uidFace"] != undefined){
			uidFace = userData["uidFace"];
		}
		// let uidFace = userData['uidFace'];

		console.log(userData);

		if( (userData['username']) && (userData['password']) && (userData['email']) ){
			if( (userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null) ){
				this.afDBUser.object('/professionals/'+keyUser+'/prof_username').set(username);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_password').set(password);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_email').set(email);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_name').set(name);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_lastName').set(lastName);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_date').set(date);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_socialSecurity').set(socialSecurity);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_zipcode').set(zipcode);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_state').set(state);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_picture').set(picture);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_pais').set(pais);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_direccion').set(direccion);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_tel').set(tel);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_uidFace').set(uidFace);
				this.afDBUser.object('/professionals/'+keyUser+'/prof_star').set(star);
				// this.afDBUser.object('/professionals/'+keyUser).set({"prof_username":username,"prof_password":password,"prof_email":email,"prof_name":name,"prof_lastName":lastName,"prof_date":date,"prof_socialSecurity":socialSecurity,"prof_zipcode":zipcode,"prof_state":state,"prof_picture":picture,"prof_pais":pais,"prof_direccion":direccion,"prof_tel":tel,"prof_star":star});
				console.info('user update profession');
			}
		}
	}

	public newContract(keyProvider,keyOffer,objContract){
		console.log(objContract);
		// this.afDBUser.object('/professionals/'+keyProvider+'/Contracts/'+keyOffer).set(objContract).catch(error => {console.log('error professionals NewCont'); console.log(error);console.log(JSON.stringify(error));});
		this.afDBUser.object('/Contracts/'+keyProvider+'/'+keyOffer).set(objContract).catch(error => {console.log('error professionals NewCont'); console.log(error);console.log(JSON.stringify(error));});
		console.info('professionals new contract');
	}

	//-set
	setInfoServiceUser(KeyProveedor,serviceData,KeyService?){
		let keyS;
		
		if(KeyService && KeyService != null  && KeyService != undefined){
			keyS = KeyService;
		}else{
			var Key = new Date().getTime();
			keyS = "Serv_"+(Key);
		}

		console.log(serviceData);
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyS+'/serv_service').set(serviceData.serv_service).catch(error => {console.log('error professionals setInf'); console.log(error);console.log(JSON.stringify(error));});
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyS+'/serv_subService').set(serviceData.serv_subService).catch(error => {console.log('error professionals setInf'); console.log(error);console.log(JSON.stringify(error));});
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyS+'/serv_detail/serv_certificate').set(serviceData.serv_detail.serv_certificate).catch(error => {console.log('error professionals setInf'); console.log(error);console.log(JSON.stringify(error));});
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyS+'/serv_detail/serv_experiencia').set(serviceData.serv_detail.serv_experiencia).catch(error => {console.log('error professionals setInf'); console.log(error);console.log(JSON.stringify(error));});
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyS+'/serv_detail/serv_insurance').set(serviceData.serv_detail.serv_insurance).catch(error => {console.log('error professionals setInf'); console.log(error);console.log(JSON.stringify(error));});
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyS+'/serv_detail/serv_moreInformation').set(serviceData.serv_detail.serv_moreInformation).catch(error => {console.log('error professionals setInf'); console.log(error);console.log(JSON.stringify(error));});
		
		console.info('professionals info service create or set');
	}
	
	//-set
	setInfoServiceUserGallery(KeyProveedor,serviceData,KeyService){
		let keyS;
		
		if(KeyService && KeyService != null  && KeyService != undefined){
			keyS = KeyService;
		}else{
			var Key = new Date().getTime();
			keyS = "Serv_"+(Key);
		}

		console.log(serviceData);
		console.log(KeyProveedor);
		console.log(KeyService);

		if(serviceData.fotoA != undefined){
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyS+'/serv_detail/serv_gallery/prof_galleryA').set(serviceData.fotoA).catch(error => {console.log('error professionals setInf'); console.log(error);console.log(JSON.stringify(error));});
		}
		if(serviceData.fotoB != undefined){
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyS+'/serv_detail/serv_gallery/prof_galleryB').set(serviceData.fotoB).catch(error => {console.log('error professionals setInf'); console.log(error);console.log(JSON.stringify(error));});
		}
		if(serviceData.fotoC != undefined){
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyS+'/serv_detail/serv_gallery/prof_galleryC').set(serviceData.fotoC).catch(error => {console.log('error professionals setInf'); console.log(error);console.log(JSON.stringify(error));});
		}
		if(serviceData.fotoD != undefined){
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyS+'/serv_detail/serv_gallery/prof_galleryD').set(serviceData.fotoD).catch(error => {console.log('error professionals setInf'); console.log(error);console.log(JSON.stringify(error));});
		}
		console.info('professionals info service create or set');
	}

	setContractStatus(keyProvider,keyOffer,status){
		this.afDBUser.object('/Contracts/'+keyProvider+'/'+keyOffer+'/status').set(status).catch(error => {console.log('error professionals NewCont'); console.log(error);console.log(JSON.stringify(error));});
		console.info('professionals ContractStatus create or set');
	}

	setDocument(keyProvider,Document,Licencia){
		console.log(keyProvider);
		console.log(Document);
		console.log(Licencia);
		this.afDBUser.object('/professionals/'+keyProvider+'/prof_document').set(Document).catch(error => {console.log('error setDocument'); console.log(error);console.log(JSON.stringify(error));});
		this.afDBUser.object('/professionals/'+keyProvider+'/prof_licencia').set(Licencia).catch(error => {console.log('error setDocument'); console.log(error);console.log(JSON.stringify(error));});
	}
	//-drop
	public dropService(KeyProveedor,keyService){
		this.afDBUser.object('/professionals/'+KeyProveedor+'/Service/'+keyService+'/').remove();
	}
}