import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/register' }
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">MediCare+</div>
      <nav>
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
