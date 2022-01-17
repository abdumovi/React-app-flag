import './header.css';
const Header = () =>{
  return (
    <>
      <header className='header'>
        <dir className='container header__container'> 
          <a className='header__title' href="#">Where in the world?</a>
          <button className='header__btn'><i className='bi bi-moon'></i>Dark Mode</button>
        </dir>
      </header>
    </>
  )
}
export default Header;