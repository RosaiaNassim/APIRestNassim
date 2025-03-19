export default {
    transform: {}, // Désactiver les transformations automatiques
    testEnvironment: "node", // Utiliser Node.js comme environnement de test
    extensionsToTreatAsEsm: [".ts", ".tsx"], // Ne pas inclure ".js" ici
    moduleNameMapper: {
      "moduleNameMapper": {
        "/^(\.{1,2}\/.*)\.js$/": "$1"
      }, // Permet d'importer des fichiers .js sans erreur
    }
  };