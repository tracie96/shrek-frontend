import React from 'react'
import pop_one from '../../assets/img/gallery/popular_sub1.png'
import pop_two from '../../assets/img/gallery/popular_sub2.png'
import pop_three from '../../assets/img/gallery/popular_sub3.png'
import pop_four from '../../assets/img/gallery/popular_sub3.png'
import Book from '../Home_Component/single_book_component'
import TabComponent from '../Books_Component/tab_component'

export default function Books({books}) {
    
    return (
        <TabComponent books={books}>

        </TabComponent>
    )
}
