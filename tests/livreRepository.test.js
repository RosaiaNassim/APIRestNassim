import { LivreRepository } from "../repositories/livreRepository";

test('Test livreRepository', async () => {
    const livre = await LivreRepository.findById(1);
    console.log(livre);
    expect(livre).toEqual({ id: 1, titre: 'Les Misérables', categorie_id: 1 });
});