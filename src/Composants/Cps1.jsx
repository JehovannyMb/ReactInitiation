import React from 'react'
import './Cps1.css'

export default function Cps1(props) {
  return (
    <div id='contenaire1'>
        <h2 id='composant1'>
            Bonjour les amis, voici un autre composant. Il a {props.age} ans
        </h2>
        <p>
            Je suis {props.Nom} et je vous présente mon travail <br /> Et il utilise des {props.ObjetUtilise}, c'est trop cool n'est-ce pas!!
        </p>
    </div>
  )
}
