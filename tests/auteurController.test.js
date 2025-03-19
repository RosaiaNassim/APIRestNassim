import { AuteurController } from "../repositories/auteurController";

test('Test controller', async () => {
    const auteur = await AuteurController.findById(1);
    console.log(auteur);
    expect(auteur).toEqual({ id: 1, prenom: 'Nassim', nom: 'Rosaia' });
});