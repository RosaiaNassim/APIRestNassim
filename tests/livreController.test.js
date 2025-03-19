import { LivreController } from "../repositories/livreController";

test('Test livreController', async () => {
    const livre = await LivreController.findById(1);
    console.log(livre);
    expect(livre).toEqual({ id: 1, titre: 'Les Misérables', categorie_id: 1 });
});  