
import React, {useState} from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

const GifExpertApp = () =>{

    // const categorias = ['cosa1', 'cosa2', 'cosa3'];

    const [categorias, setCategorias] = useState(['Castlevania'])

    // const handleAdd = () => {

    //     // setCategorias( [...categorias, 'cosa4'] );
    //     setCategorias(cate => [...cate, 'cosa4'])

    // }


    return (
        <>
            <h2> { 'GifExpertApp' } </h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr />

            <ol>
                {
                    categorias.map( (category)=> 
                        <GifGrid
                            key= { category }
                            categoria= { category }
                          />
                    )
                }
            </ol>
        </>
    );
        
}
   
export default  GifExpertApp;