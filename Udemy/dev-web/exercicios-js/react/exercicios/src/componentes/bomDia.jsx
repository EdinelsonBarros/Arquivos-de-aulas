import React, { Fragment} from 'react'

// Para usar mais de um tag é necessário usar um dos método abaixo

//Usando o Fragment
//Atenção para usa-lo é necessárop importar o Fragment
export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}</h1>
        <h2>Até Breve!</h2>

    </Fragment>

    //Usando o React.fragment não é necessário fazer o import do Fragment

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Até Breve!</h2>

//     </React.Fragment>

    //Usando Array
 
//     export default props => [
//     <h1>Bom dia {props.nome}</h1>,
//     <h2>Até Breve!</h2>
// ]
     