import React from 'react' 
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import cat from './images/cat.png'

const cards = [
    {
        id:1, 
        name:"Сказочное заморское яство", 
        title:"Нямушка", 
        taste: 'с фуа-гра', 
        portion: 10, 
        present: "мышь в подарок", 
        img:cat, 
        weight: 0.5,
        availability: {
            isAvailable: true,
            unAvailableText: "Печалька, с фуа-гра закончился"
        },
        selected: {
            isSelected: false,
            selectedText:"Печень утки разварная с артишоками.",
            selectedHoverText: 'Котэ не одобряет?',
        }
    },
    {
        id:2, 
        name:"Сказочное заморское яство", 
        title:"Нямушка", 
        taste: 'с рыбой', 
        portion: 40, 
        present: "2 мыши в подарок", 
        img:cat, 
        weight: 2,
        availability: {
            isAvailable: true,
            unAvailableText: "Печалька, с рыбой закончился"
        },
        selected: {
            isSelected: false,
            selectedText:"Головы щучьи с чесноком да свежайшая сёмгушка.",
            selectedHoverText: 'Котэ не одобряет?'
        }
    },
    {
        id:3, 
        name:"Сказочное заморское яство", 
        title:"Нямушка", 
        taste: 'с курой', 
        portion: 100, 
        present: "5 мышей в подарок заказчик доволен", 
        img:cat, 
        weight: 5, 
        availability: {
            isAvailable: false,
            unAvailableText: "Печалька, с курой закончился"
        },
        selected: {
            isSelected: false,
            selectedText:"Филе из цыплят с трюфелями в бульоне.",
            selectedHoverText: 'Котэ не одобряет?'
        }
    },
]

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Cards cards={cards}/>
        </div>
    )
}

export default App;