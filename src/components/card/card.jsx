import './card.css';

function FirstCard() {
    return(
        <div className='card'>
            <div className='card-front'>
                <div>1 Year Working</div>
            </div>
            <div className='card-back'>
                <ul className='content'>
                    <li>505HQ</li>
                    <li>CUJO AI</li>
                </ul>
            </div>
        </div>
    );
}

function SecondCard() {
    return(
        <div className='card'>
            <div className='card-front'>
                <div>2 Years Studying</div>
            </div>
            <div className='card-back'>
                <ul className='content'>
                    <li>CodeAcademy</li>
                    <li>Corner Case Technologies Academy</li>
                </ul>
            </div>
        </div>
    );
}

function ThirdCard() {
    return(
        <div className='card'>
            <div className='card-front'>
                <div>2 Projects</div>
            </div>
            <div className='card-back'>
                <ul className='content'>
                    <li>Cujo AI Partner App</li>
                    <li>SignSpace</li>
                </ul>
            </div>
        </div>
    );
}

export {FirstCard, SecondCard, ThirdCard}