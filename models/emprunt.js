export class Emprunt {
    constructor(id, membre_id, exemplaire_id, date_emprunt, date_retour) {
        this.id = id;
        this.membre_id = membre_id;
        this.exemplaire_id = exemplaire_id;
        this.date_emprunt = date_emprunt;
        this.date_retour = date_retour;
    }
}
