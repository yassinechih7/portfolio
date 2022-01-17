import React from "react";
import Image from "next/image";




function Footer() {
  return (
    <div className="Footer">
      <div className="rights-text">© 2021 Yassine Chih</div>
      <div className="social-media">
        <ul>
          <li>
            <Image src={fb} alt="fb" width={50} height={50} />
          </li>
          <li>
            <Image src={twitter} alt="twitter" width={50} height={50} />
          </li>
          <li>
            <Image src={ig} alt="ig" width={50} height={50} />
          </li>
          <li>
            <Image src={github} alt="github" width={50} height={50} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
