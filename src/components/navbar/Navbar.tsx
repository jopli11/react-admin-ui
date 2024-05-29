import "./navbar.scss";

import { AiOutlineSearch, AiOutlineAppstore, AiOutlineExpandAlt, AiOutlineBell, AiOutlineSetting } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://framerusercontent.com/images/inOfGpwEKS21e9yRjERGJTMA3g.png?scale-down-to=512" alt="" />
        <span>EventFull</span>
      </div>
      <div className="icons">
        <AiOutlineSearch className="icon"  size={"24px"} />
        <AiOutlineAppstore className="icon"  size={"24px"} />
        <AiOutlineExpandAlt className="icon" size={"24px"} />
        <div className="notification">
          <AiOutlineBell  size={"24px"} />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Jane</span>
        </div>
        <AiOutlineSetting className="icon"  size={"24px"} />
      </div>
    </div>
  );
};

export default Navbar;