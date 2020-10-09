import React, {useState} from 'react';
import './App.scss';

// Crear un componente con tres cards (referencia en daily UI) dentro de un contenedor Slider,
// mostrar solo la card por default 
// añadir los botones 'preview' y 'next'
// usar reducer con switch cases para mover hacia atras y hacia adelante 

const Wizard = ({ children }) => { //meter dentro de components e importar en app
 
  const [activeCard, setActiveCard] = useState(0)
  const cards = React.Children.toArray(children);
  const currentCard = cards[activeCard];

  
  const onPrevClick = () => {
    setActiveCard(index => index - 1)
  }

  const onNextClick = () => {
    setActiveCard(index => index + 1)
  }

  return (
    <div className="wizard">

      <div className="wizard__content">
        {currentCard}
      </div>

      <div className="wizard__buttons">
        { activeCard > 0 ? 
        (  
          <button
          type="button"
          className="wizard__buttons_left"
          onClick= {onPrevClick}
          >
            Preview 
            {/* reemplazar por iconos de fontAwesome */}
          </button>
        ): null } 

        { activeCard < cards.length ? 
        (
          <button
          type="button"
          className="wizard__buttons_right"
          onClick= {onNextClick}
          >
            Next
            
          </button>
        ) : null  } 

      </div>
    </div>
  )
}

const Card1 = () => <h1>Card 1</h1>
const Card2 = () => <h1>Card 2</h1>
const Card3 = () => <h1>Card 3</h1>

export default function App() {
  return(
    <Wizard>
      <Card1 />
      <Card2 />
      <Card3 />
    </Wizard>
  )
}

//TO DO'S :
// pasar wizard a un componente aparte,
// hacer las cards