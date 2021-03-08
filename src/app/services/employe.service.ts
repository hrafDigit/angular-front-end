import { Injectable } from '@angular/core';
import { Employe } from '../interface/employe';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  // L'URL qui sera utilisee par le client pour realiser des requetes HTTP
  url: string = 'http://localhost:5555/employes/'
  // url: string = 'http://localhost:8080/employes/'

  employes: Array<Employe> = new Array<Employe>();

  // Injecter le service HttpClient
  constructor(private http: HttpClient) {
    this.employes.push({ nom : 'wick', prenom : 'John'});
    this.employes.push({ nom: 'green', prenom: 'bob'});
  }

  // == Recupèrer la liste des employés
    /*
    // = Méthode standard
     getAllEmployes() {
      return this.http.get<Array<Employe>>(this.url);
    }
  // = Méthode w/ RxJS 'pipe ()' function
  getAllEmployes() {
    console.log("this.url : " + this.url);
    let API_URL = `${this.url}` + "search";
    console.log("API_URL : " + API_URL);
    return this.http.get(API_URL);
  }
    */
   getAllEmployees() {
    return this.http.get<Array<Employe>>(this.url);
  }

  // == Ajouter un employé selon son identifiant
    /*
    // = Méthode standard
    addsomeEmploye(e: Employe) {
      return this.http.post(this.url, e);
    }

  // = Méthode w/ RxJS 'pipe ()' function
  // :: fonction 'pipe ()' de RxJS ::
  // !! WARNING : NE PAS CONFONDRE avec le components 'pipes' que l'on peut créer soi-même !!
  Vous pouvez utiliser des tubes pour relier les opérateurs entre eux. Les tuyaux vous permettent de combiner plusieurs fonctions en une seule fonction.
  • La fonction pipe () : prend comme arguments les fonctions que vous souhaitez combiner et renvoie une nouvelle fonction qui, lorsqu'elle est exécutée, exécute les fonctions composées dans l'ordre.
  • Opérateur 'catchError' : 'catchError ()' examinera la valeur Observable et fera quelque chose avec cette valeur. Si vous voulez lancer une erreur ou appeler une fonction si vous obtenez une erreur, vous pouvez le faire ici.
  Dans notre exemple, il appellera 'errorMgmt' et à l'intérieur de cela, il enregistrera simplement cette chaîne.
  addsomeEmploye(data: Employe): Observable<any> {
    let API_URL = `${this.url}`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
    */
 addsomeEmployee(e:Employe) {
  return this.http.post(this.url, e);
}

  // == Supprimer un employé selon son identifiant
    /*
    // = Méthode standard
    deletesomeEmploye(id: number) {
      return this.http.delete(this.url + id)
    }
  // = Méthode w/ RxJS 'pipe ()' function
    deletesomeEmploye(id:number): Observable<any> {
    var API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
    }
    */
   deletesomeEmployee(id:number) {
    return this.http.delete(this.url + id)
  }

    // == Recupèrer un employé selon son identifiant
    /*
    // = Méthode standard
    getsomeEmploye(id: number) {
      return this.http.get(this.url + id)
    }

  // = Méthode w/ RxJS 'pipe ()' function
  getsomeEmploye(id:number): Observable<any> {
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
    */
   getsomeEmployee(id:number) {
    return this.http.get(this.url + id)
  }

    // == Mettre-à-jour un employé selon son identifiant
    /*
    // = Méthode standard
    updatesomeEmploye(id: number, e: Employe){
      return this.http.put(this.url + id, e)
    }

  // = Méthode w/ RxJS 'pipe ()' function
  updatesomeEmploye(id:number, data:Employe): Observable<any> {
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
    */
   updatesomeEmployee(id:number, e:Employe){
    return this.http.put(this.url + id, e)
  }

  /*
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  */

  getAll() {
    return this.employes;
  }
  addEmployee(e:Employe) {
    this.employes.push(e);
  }

}
