import React from 'react'
import ReactDOM from 'react-dom';
import Preloader from './preloader_component' 
import Header from './header_component'
import Content from "./content_component"

export default function Home({books,loader}) {
    return (
        <Content books={books} loader={loader}>
            
        </Content>


    )
}
