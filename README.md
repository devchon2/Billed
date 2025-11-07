# Billed — Débuggez et testez un SaaS RH

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![Licence](https://img.shields.io/badge/Licence-MIT-blue)]()

> Projet OpenClassrooms — **Débuggez et testez un SaaS RH** (feature « note de frais »).  
> **Objectif général :** corriger bugs, écrire tests unitaires & d’intégration, produire un plan E2E manuel et atteindre une couverture de tests satisfaisante.

## 📚 Table des matières
- [Description](#-description)
- [Objectifs pédagogiques](#-objectifs-p%C3%A9dagogiques)
- [Compétences & Preuves](#-comp%C3%A9tences--preuves)
- [Stack & Versions](#-stack--versions)
- [Structure du projet](#-structure-du-projet)
- [Fonctionnalités clés](#-fonctionnalit%C3%A9s-cl%C3%A9s)
- [Installation & Lancement](#-installation--lancement)
- [Available Scripts](#available-scripts)
- [Tests](#-tests)
- [Démo & Captures](#-d%C3%A9mo--captures)
- [Licence](#-licence)
- [Contact](#-contact)
- [English version](#english-version)

---

## 🚀 Description
Projet orienté qualité logicielle : corriger et tester la fonctionnalité “note de frais” d’un SaaS RH. Livrables attendus : code corrigé, tests unitaires & d’intégration, plan E2E manuel et rapports Jest/couverture. Le projet a été validé avec un taux de couverture supérieur ou égal à 80%. :contentReference[oaicite:34]{index=34}

## 🎯 Objectifs pédagogiques
- Rédiger des tests unitaires et d’intégration (Jest).  
- Concevoir un plan de test E2E manuel en format Given / When / Then.  
- Utiliser Chrome Debugger pour identifier et corriger les bugs.

## 🧠 Compétences & Preuves
| Exigence pédagogique | Compétence recrutée | Mise en œuvre | Preuves |
|---|---|---|---|
| Tests unitaires & intégration | **Jest** | Tests organisés dans `__tests__` | Screenshots du rapport Jest et du rapport de couverture (livrables). :contentReference[oaicite:35]{index=35} |
| Debug | **Chrome Debugger** | Correction des bugs du parcours employé | Remarques d’évaluation et enregistrement de soutenance (livrable). :contentReference[oaicite:36]{index=36} |
| E2E manuel | **Conception de tests** | Plan E2E (>10 scénarios) | Document PDF du plan E2E (livrable). :contentReference[oaicite:37]{index=37} |

## 🧰 Stack & Versions
| Tech | Rôle |
|---|---|
| JavaScript (Node / Front) | Code & tests |
| Jest | Tests unitaires & intégration, coverage |
| Chrome Debugger | Débogage |

## 🗂️ Structure du projet
```txt
Billed/
├─ frontend/
├─ backend/
├─ __tests__/
└─ docs/
```
Consulter les README frontend/backend pour les instructions spécifiques. :contentReference[oaicite:38]{index=38}

## ✅ Fonctionnalités clés
* Rédaction et exécution de tests unitaires et d’intégration.  
* Rapport de couverture Jest ≥ 80%.  
* Plan E2E manuel (>10 scénarios).  
* Correction des bugs identifiés sur le parcours employé (Chrome Debugger).

## ⚡ Installation & Lancement
```bash
# 1) Cloner
git clone https://github.com/devchon2/Billed.git
cd Billed

# 2) Lire les README backend/frontend puis :
npm install
# Démarrer selon les README du backend et frontend (ex. npm run dev)
```
Les instructions détaillées (installation et lancement) se trouvent dans les README du backend et du frontend du dépôt. :contentReference[oaicite:39]{index=39}

## 📜 Available Scripts
```bash
# exemples usuels : suivre les README de chaque sous-projet
npm install
npm run test
npm run coverage
npm run dev
```
(Vérifier les scripts exacts dans chaque `package.json` du dépôt.) :contentReference[oaicite:40]{index=40}

## 🧪 Tests
* Lancer les tests unitaires / d’intégration : `npm test`.  
* Générer le rapport de couverture : `npm run coverage`.  
* Livrables de validation : screenshot rapport Jest, screenshot couverture, plan E2E PDF. :contentReference[oaicite:41]{index=41}

## 🎥 Démo & Captures
* Livrables : ZIP contenant code, rapports Jest, plan E2E, captures.  
* Soutenance enregistrée et validée (livrable). :contentReference[oaicite:42]{index=42}

## 📝 Licence
MIT (voir `LICENSE`).

## 📫 Contact
Rachid Chon — `rchon@rchon-dev.fr`

---

## English version

<details>
<summary>🇬🇧 Click to expand</summary>

# Billed — Debug & Test a HR SaaS

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![License](https://img.shields.io/badge/License-MIT-blue)]()

> Built during the OpenClassrooms training.  
> **Goal:** fix the expense feature, write unit & integration tests (Jest), and deliver a manual E2E test plan.

## 🚀 Description
Quality-focused project: locate, fix and test the “expense report” feature of an HR SaaS. Deliverables: corrected code, unit & integration tests, manual E2E plan and Jest coverage reports. Project validated with coverage ≥ 80%. :contentReference[oaicite:43]{index=43}

## 🎯 Learning objectives
- Write unit and integration tests using Jest.  
- Design a manual E2E test plan using Given/When/Then.  
- Use Chrome Debugger for diagnosing and fixing bugs.

## 🧠 Skills & Evidence
| Requirement | Skill | Implementation | Evidence |
|---|---|---|---|
| Unit & integration tests | **Jest** | Structured tests under `__tests__` | Jest report screenshots + coverage (deliverables). :contentReference[oaicite:44]{index=44} |
| Debugging | **Chrome Debugger** | Fix employee-flow bugs | Evaluation notes and defense recording. :contentReference[oaicite:45]{index=45} |
| Manual E2E | **Test design** | >10 scenarios in Given/When/Then | E2E plan PDF (deliverable). :contentReference[oaicite:46]{index=46} |

## 🧰 Stack & Versions
| Tech | Role |
|---|---|
| JavaScript (Node / Front) | Core code & tests |
| Jest | Testing & coverage |
| Chrome Debugger | Debugging |

## 🗂 Project structure
```txt
Billed/
├─ frontend/
├─ backend/
├─ __tests__/
└─ docs/
```

## ✅ Key features
* Unit & integration tests for UI and business logic.  
* Jest coverage report (≥ 80%).  
* Manual E2E test plan (≥ 10 scenarios).  
* Bug fixes for the employee flow.

## ⚡ Setup & Run
```bash
git clone https://github.com/devchon2/Billed.git
cd Billed
# follow backend/frontend README files
npm install
npm run dev
```

## 📜 Available Scripts
```bash
npm install
npm run test
npm run coverage
npm run dev
```
(Verify exact scripts in each `package.json`.)

## 🧪 Tests
* Run tests: `npm test`.  
* Coverage: `npm run coverage`.  
* Deliverables: Jest report screenshot, coverage screenshot, E2E plan PDF. :contentReference[oaicite:47]{index=47}

## 🎥 Demo & Screenshots
* Deliverables: ZIP with code, Jest reports, E2E plan, screenshots.  
* Defense recording available. :contentReference[oaicite:48]{index=48}

## 📝 License
MIT — see `LICENSE`.

## 📫 Contact
Rachid Chon — `rchon@rchon-dev.fr`

</details>
