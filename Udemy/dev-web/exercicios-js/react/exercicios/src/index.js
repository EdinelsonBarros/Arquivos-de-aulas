import React from 'react'
import ReactDOM from 'react-dom'

import Saudacao from './componentes/saudacao'


ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Edinelson"/>
    </div>
,document.getElementById('root'))

// ReactDOM.render(< BomDia />, document.getElementById('root'))