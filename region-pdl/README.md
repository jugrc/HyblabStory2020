# Descriptif du projet [Transition Énergétique](http://hyblab.polytech.univ-nantes.fr/region-pdl/)

Porteur de projet : **Région Pays de la Loire (Olivier Guillon)**

Nom d'équipe : **GreenLight**

Participants :

- Sciencescom :
    - Nina Naulleau
    - Vinciane Le Borgne
- AGR :
    - Mathilde Mousset
    - Marine Boismain
- Polytech :  
    - Nathan Seva
    - Nicolas Vautier
    - Mathis Le Berrigaud
    - Julien Garcia
    - Xavier Tremillon


# Environnement de développement

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Passage en production

- Se mettre dans la branche de sa fonctionnalité prête.
- Quand une fonctionnalité est prête faire : `git merge dev` et résoudre les conflits s'il y en a (faire un commit quand les conflits sont résolus).
- Merge la nouvelle fonctionnalité dans dev : `git merge ma_fonctionnalité`.
- Merge dev dans master, **seulement quand on est sûr que ça marche bien** : `git checkout master` puis `git merge dev`.
- Push les modifications : `git push`
- Se connecter sur [L'espace SSH du projet](https://hyblab.polytech.univ-nantes.fr/ssh/) avec l'identifiant **region-pdl** et le mot de passe **story4region-pdl**.
- Lancer simplement la commande : `./sync_project`


# Set up linter

Install:
 - https://github.com/steelbrain/linter
 - https://github.com/hedefalk/atom-vue
 - https://github.com/AtomLinter/linter-eslint
   - put this `source.js, source.jsx, source.js.jsx, source.flow, source.babel, source.js-semantic, text.html.vue` in Settings -> List of scopes...
