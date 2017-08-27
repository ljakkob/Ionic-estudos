import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {

    titulo: "Lari",
    data: "aug 26",
    descricao:"Olha o q eu fiz",
    qntd_likes: "125",
    qnt_comments: "36",
    time_comment: "15h ago"


    
  }

  public lista_filmes = new Array<any>();


  public nome_usuario:string="Lari Devona";
  constructor(public navCtrl: NavController, public navParams: NavParams, private MovieProvider: MovieProvider) {
    
  
  }
 
  public somaDoisNumeros (num1:number, num2:number): void{
    //alert(num1+num2);
  }


  ionViewDidLoad() {
   this.MovieProvider.getLatestMovies().subscribe(
   
   data=>{
    const response = (data as any);
    const objeto_retorno = JSON.parse(response._body);
    this.lista_filmes = objeto_retorno.results;
    console.log(objeto_retorno);
   }, error => {
     console.log(error);
   }
  )

  }

}
