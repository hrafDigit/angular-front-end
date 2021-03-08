/*
// Quand utiliser des classes ::
– pour créer des objets contenant du code ; on utilisera alors un constructeur pour l'initialisation
ET/OU
– pour créer des instances avec 'new'
*/
export class Personne {

  constructor(private _num: number, private _nom : string, private _prenom : string) { }
  get num() {
      return this._num;
  }
  set num(_num: number) {
      this._num = _num;
  }
  get nom() {
      return this._nom;
  }
  set nom(_nom: string) {
      this._nom = _nom;
  }
  get prenom() {
      return this._prenom;
  }
  set prenom(_prenom: string) {
      this._prenom = _prenom;
  }

}
