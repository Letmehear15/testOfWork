import React from 'react'
import './cards.scss'
import { useState } from 'react'

const Cards = ({cards}) => {

    const[isSelect, setSelect] = useState([...cards]);
    const[isHover, setHover] = useState(false)

    const onSelect = (id) => {
        let index = isSelect.findIndex(el => el.id === id)
        let select = isSelect[index]
        select = {...select,selected: {...select.selected, isSelected:!select.selected.isSelected}}
        let newArr = [...isSelect.slice(0, index), select ,...isSelect.slice(index+1)]
        setSelect([...newArr])
    }


    const items = isSelect.map(el => {
        const {isAvailable, unAvailableText} = el.availability;
        const {isSelected, selectedText} = el.selected
        
        return <div key={el.id} className="wrapper">
            <div 
                onClick={() => isAvailable?onSelect(el.id):null}
                onMouseOver={() => isSelected?setHover(false):null}
                onMouseLeave={() => isSelected?setHover(true):null} 
                className={`item ${!isAvailable&&'item_unavailable'} ${isSelected&&isAvailable?'item_selected':""}`}>
                    
                <span className="item__name">
                    {isSelected&&isAvailable&&!isHover?el.name:null}
                    {!isSelected&&isAvailable?el.name:null}
                    {isHover&&isSelected&&el.selected.selectedHoverText}
                </span>
                <h2 className="item__title">{el.title}</h2>
                <span className="item__taste">{el.taste}</span>

                <div className="item__descr">
                    <span className="item__portion"><b>{el.portion}</b> порций</span>
                    <span className="item__present">{el.present}</span>
                </div>

                <img className="item__img" src={el.img} alt="cat"/>
                <div className="item__circle">{el.weight} <span>кг</span></div>

            </div>
            <div className="item__sub">
                {isAvailable&&!isSelected&&<span>Чего сидишь? Порадуй котэ, <a onClick={() => onSelect(el.id)} href="#">купи</a>.</span>}
                {!isAvailable&&<span className="notAvailable">{unAvailableText}</span>}
                {isSelected&&isAvailable&&<span className='selectedText'>{selectedText}</span>}
            </div>
        </div>
    })

    return (
        <div className="items">
            {items}
        </div>
    )
}

export default Cards