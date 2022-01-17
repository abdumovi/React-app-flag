import { useState } from 'react';
import Header from './components/header-top/Header';
import HeaderBottom from './components/header-bottom/HeaderBottom';
import Cards from './components/cards/Cards';
import './genral-styles/genral.css';
import './genral-styles/flexboxgrid.css';
import './genral-styles/normalize.css';

function App() {
  const [itemList,setItemList] = useState([
    {id:1,img:'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png',name:'Germany',popul:'81,770,900',region:'Europe',capital:'Berlin'},
    {id:2,img:'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',name:'America',popul:'323,947,000',region:'Americas',capital:'Washington, D.C.'},
    {id:3,img:'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png',name:'Brazil',popul:' 206,135,893',region:'Americas',capital:'Brasília'},
    {id:4,img:'https://www.countryflags.com/wp-content/uploads/iceland-flag-png-large.png',name:'Iceland',popul:' 334,300',region:'Europe',capital:'Reykjavík'},
    {id:5,img:'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-1-1536x1024.jpg',name:'Afghanistan',popul:'27,657,145',region:'Asia',capital:'Kabul'},
    {id:6,img:'https://www.countryflags.com/wp-content/uploads/sweden-flag-png-large.png',name:'Åland Islands',popul:'28,875',region:'Europe',capital:'Mariehamn'},
    {id:7,img:'https://www.countryflags.com/wp-content/uploads/albania-albanian-flag-png-square-large.png',name:'Albania',popul:'2,886,026',region:'Europe',capital:'Tirana'},
    {id:8,img:'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-3-1536x1024.jpg',name:'Algeria',popul:'40,400,000',region:'Africa',capital:'Algiers'},
  ]);
  const [fil,setFil] = useState(itemList);
  const filterList = (item)=>{
    if(item !== 'Filter by Region'){
      setFil(itemList.filter((i)=> (item == i.region)));
    }
    else{
      setFil([...itemList]);
    }
    
  }
  return (
    <>
      <Header />
      <div className="container">
        <HeaderBottom filter={filterList}/>
        <div className='cards row'>
          {fil.map((i)=>(
            <Cards
              key={i.id}
              name={i.name}
              img={i.img}
              popul={i.popul}
              region={i.region}
              capital={i.capital}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
