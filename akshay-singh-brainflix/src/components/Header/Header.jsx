import logo from '../../assests/Logo/BrainFlix-logo.svg';

function Header(){
    return (
        <header>
        <img src={logo} alt="BrainFlix logo" />
        <form>
          <input type="text" name="" id="" placeholder="Search" />
          <button>Submit</button>
        </form>
      </header>
    );
}

export default Header;