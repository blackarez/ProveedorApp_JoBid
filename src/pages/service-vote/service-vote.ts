import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//-services
import {UserService} from '../../services/user.service';
import { NotificacionService } from '../../services/notificacion.service';
/**
 * Generated class for the ServiceVotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-vote',
  templateUrl: 'service-vote.html',
})
export class ServiceVotePage {
  //-data
  DataService:any;
  DataUser:any;
  userActual:any;
  user:any;
  //-view
  //-view
  vote:any=[];
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private userService : UserService, 
    private notificacionService : NotificacionService,
  ) {
    this.loadView();
    this.notificacionVote();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceVotePage');
  }
  goCleaningOk(){
    console.log(this.vote);
    this.vote['providerId']=this.userActual;
    this.userService.setComment(this.user,this.vote);
    //-cambiar calificacion proveedor
    let userServiceSubs = this.userService.getUser(this.user).subscribe(
      (userDB)=>{
        if(userServiceSubs != undefined){
          console.log('userServiceSubs S - service-vote');
          if(userDB['user_star']){
            let calificacion = (Number(this.vote.estrellas) + Number(userDB['user_star']) )/2;
            console.log(calificacion);
            this.userService.setStar(this.user,calificacion);
          }
          console.log('userServiceSubs US - service-vote');
          userServiceSubs.unsubscribe();
        }
      }
    );
    this.navCtrl.setRoot('ShowPage');
  }

  loadView(){
    this.DataService =  this.navParams.get('service');
    this.DataUser = this.navParams.get('user');
    console.log(this.DataService);
    console.log(this.DataUser);
    this.user = this.DataService['idUser'];
    //-localStorage
    this.userActual = localStorage.getItem('verificacion');
    console.log(this.userActual);

    // this.user ="user_1509139021478";
  }

  //-notification
  notificacionVote(){
    console.info('Nota: Do not forget to rate your client');
    this.notificacionService.mostrar('Do not forget to rate your client',7);
  }
}
