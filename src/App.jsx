import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cps1 from './Composants/Cps1'

function App() {
  // const [count, setCount] = useState(0)
const Nom = 'Jehovanny Mbenga'
const ObjetUtilise = 'props'
  return (
    <>
    <Cps1 Nom={Nom} ObjetUtilise={ObjetUtilise} />
    <Cps1 Nom={Nom} ObjetUtilise={ObjetUtilise} />
    <Cps1 Nom={Nom} ObjetUtilise={ObjetUtilise} />
    <Cps1 Nom={Nom} ObjetUtilise={ObjetUtilise} />
    <Cps1 Nom={Nom} ObjetUtilise={ObjetUtilise} />

  <header>
    <p class="nav">
      <span class="title">Répertoire des contacts</span>
    </p>
  </header>
  <div class="Repertoire">
    <section class="formulaire">
      <p class="form-title">Formulaire de contact</p>
      <form accept="text" method="dialog">
        <label for="Prenom">Prénom</label>
        <input type="text" id="Prenom" name="Prenom"/>
        <p class="error" id="prenomError"></p>

        <label for="Nom">Nom</label>
        <input type="text" id="Nom" name="Nom" />
        <p class="error" id="nomError"></p>

        <label for="Telephone">Téléphone</label>
        <input type="tel" id="Telephone" name="Telephone" />
        <p class="error" id="telError"></p>

        <label for="Groupe">Groupe</label>
        <input type="text" id="Groupe" name="Groupe" />
        <p class="error" id="groupeError"></p>

        <label for="Email">Email</label>
        <input type="email" id="Email" name="Email" />
        <p class="error" id="emailError"></p>

        <label for="Bio">Bio</label>
        <textarea rows="5" id="Bio" name="Bio" ></textarea>
        <p class="error" id="bioError"></p>

        <div class="dropBox">
          <p id="paragraphePhoto">Déposez la photo ici <input draggable="true" type="file" id="uploadFile" /></p>
        </div>
        <button class="creer" >Créer</button>
        <button class="renit" >Rénit</button>
        <button id="bouttonModifier" hidden="true">Modifier</button>
        <button id="bouttonAnnuler" hidden="true">Annuler</button>
      </form>
    </section>

    <section class="list">
      <p class="list-title">Liste des contacts</p>
      <div id="contacts">
  
      </div>
     
    </section>
  </div>
  <script src="script.js"></script>
    </>
  )
}

export default App
