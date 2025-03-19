import { LivreService } from "../repositories/livreService";

test('Test livreService', async () => {
    const livre = await LivreService.findById(1);
    console.log(livre);
    expect(livre).toEqual({ id: 1, titre: 'Les Misérables', categorie_id: 1 });
});