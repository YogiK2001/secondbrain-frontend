import logo from '../../assets/img/logo.png';

const Nav = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 justify-start items-center px-4">
        <div>
          <img src={logo} alt="mindlo" />
        </div>
        <span className="text-2xl font-bold font-helvetica-black">
          mindlo
        </span>
      </div>
      <div>
        <button className="font-helvetica-black">Home</button>
        <button className="font-helvetica-bold">Pricing</button>
        <button className="font-helvetica-light">Get in Touch</button>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Login
      </button>
    </div>
  );
};

export default Nav;
