import React, {useState} from 'react'
import './Cps1.css'

export default function Cps1(props) {
const [age, SetAge] = useState(50)
    const Ajouter = () => {
SetAge( age + 1)        
    }

const Diminuer = () => {
    SetAge( age - 1)
}
  return (
    <div id='contenaire1'>

        <h2 id='composant1'>
            Bonjour les amis, voici un autre composant. Il a 
        <button onClick={Ajouter} class='btn_cps1'>+</button>
            {age} 
        <button onClick={Diminuer} class='btn_cps1'>-</button>
            
            ans
        </h2>
        <p>
            Je suis {props.Nom} et je vous présente mon travail <br /> Et il utilise des {props.ObjetUtilise}, c'est trop cool n'est-ce pas!!
        </p>
    </div>
  )
}
