/*
// Quand utiliser les interfaces ::
– pour créer un contrat avec des propriétés et des fonctions
pour un objet qui sera utilisé à plusieurs endroits dans le code, en particulier dans plusieurs fichiers ou fonctions.
*/
export interface Employe {
  id?: number;
  nom?: string;
  prenom?: string;
}
