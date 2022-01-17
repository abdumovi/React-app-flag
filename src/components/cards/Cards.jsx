import './cards.css';

const Cards = ({img,name,popul,region,capital,id}) =>{
  return(
    <div id={id} className='cards__item col-md-3 col-sm-6 col-xs-12'>
      <div className='cards__content'>
        <div className='cards__img'>
          <img src={img} alt="img" />
        </div>
        <div className='cards__texts'>
          <h2 className='cards__title'>{ name}</h2>
          <p className='cards__text'>Population: <span className='cards__lst'>{ popul}</span></p>
          <p className='cards__text'>Region: <span className='cards__lst'>{ region}</span></p>
          <p className='cards__text'>Capital: <span className='cards__lst'>{ capital}</span></p>
        </div>
      </div>
    </div>
  )
}
export default Cards;