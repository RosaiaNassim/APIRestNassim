import { AuteurService } from "../repositories/auteurService.js";

test('Test service', async () => {
    const auteur = await AuteurService.findById(1);
    console.log(auteur);
    expect(auteur).toEqual({ id: 1, prenom: 'Nassim', nom: 'Rosaia' });
});