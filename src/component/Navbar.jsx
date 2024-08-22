import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user)

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to='/' className="text-4xl font-bold cursor-pointer">
        <p className="flicker">
          <span className="rotate-thick-pink">C</span>INEMA <span className="rotate-thick-pink">S</span>PHERE
        </p>
        <style jsx="true">{`
          @keyframes flicker {
            0% { color: #FFFFFF; }
            25% { color: #FF1493; }
            50% { color: #1E90FF; }
            75% { color: #FFFF00; }
            100% { color: #FFFFFF; }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }
          .flicker { animation: flicker 2s infinite; }
          .rotate-thick-pink {
            display: inline-block;
            animation: rotate 4s infinite;
            color: #FF69B4;
            font-weight: bold;
            font-size: 1.3em;
          }
        `}</style>
      </Link>

      {user?.email ? (
        <div className="flex items-center">
          <Link to='/account'>
            <button className="text-white pr-3">{user.email}</button>
          </Link>
          <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white ml-2">Logout</button>
        </div>
      ) : (
        <div className="flex items-center">
          <Link to='/login'>
            <button className="bg-blue-400 px-3 py-2 rounded text-white mr-2">Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className="bg-red-600 px-3 py-2 rounded cursor-pointer text-white">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
