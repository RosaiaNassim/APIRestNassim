CREATE TABLE follows (
  following_user_id INTEGER,
  followed_user_id INTEGER,
  created_at TIMESTAMP,
  FOREIGN KEY (following_user_id) REFERENCES users(id),
  FOREIGN KEY (followed_user_id) REFERENCES users(id)
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  role TEXT,
  created_at TIMESTAMP
);

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  body TEXT,
  user_id INTEGER NOT NULL,
  status TEXT,
  created_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE CATEGORIE (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nom TEXT UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE LIVRE (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titre TEXT NOT NULL,
  categorie_id INTEGER,
  FOREIGN KEY (categorie_id) REFERENCES CATEGORIE(id)
);

CREATE TABLE AUTEUR (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nom TEXT NOT NULL,
  prenom TEXT
);

CREATE TABLE LIVRE_AUTEUR (
  livre_id INTEGER,
  auteur_id INTEGER,
  PRIMARY KEY (livre_id, auteur_id),
  FOREIGN KEY (livre_id) REFERENCES LIVRE(id),
  FOREIGN KEY (auteur_id) REFERENCES AUTEUR(id)
);

CREATE TABLE MEMBRE (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nom TEXT NOT NULL,
  prenom TEXT,
  email TEXT UNIQUE NOT NULL,
  date_inscription TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE EXEMPLAIRE (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  etat TEXT NOT NULL,
  localisation TEXT NOT NULL,
  date_acquisition DATE NOT NULL,
  livre_id INTEGER,
  FOREIGN KEY (livre_id) REFERENCES LIVRE(id)
);

CREATE TABLE EMPRUNT (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date_emprunt DATE NOT NULL,
  date_retour_prevue DATE NOT NULL,
  date_retour_effective DATE,
  exemplaire_id INTEGER,
  membre_id INTEGER,
  FOREIGN KEY (exemplaire_id) REFERENCES EXEMPLAIRE(id),
  FOREIGN KEY (membre_id) REFERENCES MEMBRE(id)
);

CREATE TABLE HISTORIQUE_ETAT_EXEMPLAIRE (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  exemplaire_id INTEGER,
  ancien_etat TEXT,
  nouvel_etat TEXT,
  date_changement TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (exemplaire_id) REFERENCES EXEMPLAIRE(id)
);


CREATE INDEX idx_livre_titre ON LIVRE (titre);
CREATE INDEX idx_auteur_nom ON AUTEUR (nom);
CREATE INDEX idx_membre_nom ON MEMBRE (nom);
CREATE INDEX idx_livre_categorie ON LIVRE (categorie_id);
CREATE INDEX idx_livre_auteur_livre ON LIVRE_AUTEUR (livre_id);
CREATE INDEX idx_livre_auteur_auteur ON LIVRE_AUTEUR (auteur_id);
CREATE INDEX idx_emprunt_exemplaire ON EMPRUNT (exemplaire_id);
CREATE INDEX idx_emprunt_membre ON EMPRUNT (membre_id);