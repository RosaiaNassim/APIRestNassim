import { AuteurRepository } from "../repositories/auteurRepository";

test('Test repository', async () => {
    const auteur = await AuteurRepository.findById(1);
    console.log(auteur);
    expect(auteur).toEqual({ id: 1, prenom: 'Nassim', nom: 'Rosaia' });
});