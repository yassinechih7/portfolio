import React from "react";
import SkillCard from './SkillCard'
import {
  lock,links,house
} from "./ImgesImport"

function MainSkillset() {

  const MainSkillsetData = [
    [house, "Front end development", "Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly."],
    [links, "Back end development", "Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded."],
    [lock, "Ethical Hacking", "Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded."]
  ];

  return (
    <div className="MainSkillset">
      <div className="main-title">
        <h2>Main Skillset</h2>
      </div>
      <div className="sub-title">
        Skills that’s i have picked up durring my learning journey
      </div>

      {MainSkillsetData.map(e => <SkillCard icon={e[0]}  title={e[1]} text={e[2]}/>)}

    </div>
  );
}

export default MainSkillset;
