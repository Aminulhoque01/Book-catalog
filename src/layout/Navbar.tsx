import { Link } from 'react-router-dom';

import { Button } from '../components/ui/button';


import logo from '../assets/images/technet-logo.png';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { setUser } from '../redux/features/user/userSlice';

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            <img className="h-8" src={logo} alt="log" />
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/allbooks">All Books</Link>
                </Button>
              </li>

              {!user.email && (
                <>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                  </li>

                  <li>
                    <Button variant="link" asChild>
                      <Link to="/signup">Signup</Link>
                    </Button>
                  </li>
                </>
              )}
              {user.email && (
                <>
                  <Button variant="link" asChild>
                    <Link to="/AddNewBook">Add New</Link>
                  </Button>
                  <Button onClick={handleLogOut} asChild>
                    <Link to={''}>Logout</Link>
                  </Button>
                </>
              )}
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
