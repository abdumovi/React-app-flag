import './headerBottom.css';
const HeaderBottom = ({filter}) => {
  return (
    <dir className='inputs'>
      <form className='inputs__form'>
        <i className='bi bi-search'></i>
        <input placeholder='Search for a country…' className='inputs__input' type="text" />
      </form>
      <select className='form-select' onChange={(i)=> filter(i.target.value)}  aria-label="Default select example">
        <option defaultValue>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
    </dir>
  )
}
export default HeaderBottom;