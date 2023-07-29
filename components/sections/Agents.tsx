"use client";

import Image from "next/image";
import teslLogo from "../../assets/teslaLogo.png";
import BoschLogo from "../../assets/BoschLogo.png";
import weltmeister from "../../assets/weltmeister.png";
import JAC from "../../assets/JAC.png";
import ANKAI from "../../assets/ANKAI.png";
import LEVC from "../../assets/LEVC.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTranslate from '../../hooks/useTranslate';

const Agents = () => {
  const isSmallLayout = useMediaQuery("(max-width:1020px)");
  const { t } = useTranslate('home');
  return (
    <div id="agents" className="AgentsSectionStyle">
      <h3 className="AgentsTitleStyle">{t('agents.title')}</h3>
      <div className="AgentsLogosStyle">
        <div className="first-row">
          <div className="componey-logo">
            <Image src={teslLogo} width={200} alt="Componey Logo" />
          </div>
          <div className="componey-logo">
            <Image
              src={BoschLogo}
              width={100}
              className="componey-logo"
              alt="Componey Logo"
            />
          </div>
        </div>
        <div className="second-row">
          <div className="componey-logo">
            <Image
              src={weltmeister}
              className="componey-logo"
              alt="Componey Logo"
            />
          </div>
          <div className="componey-logo">
            <Image
              src={JAC}
              width={100}
              className="componey-logo"
              alt="Componey Logo"
            />
          </div>
          <div className="componey-logo">
            <Image
              src={ANKAI}
              width={100}
              className="componey-logo"
              alt="Componey Logo"
            />
          </div>
          <div className="componey-logo">
            <Image
              src={LEVC}
              width={100}
              className="componey-logo"
              alt="Componey Logo"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .AgentsSectionStyle {
          background: #f4f7fe;
          height: ${isSmallLayout ? "fit-content" : "352px"};
          display: flex;
          justify-content: ${isSmallLayout ? "center" : "space-between"};
          align-items: center;
          padding: ${isSmallLayout ? "30px" : "100px"};
          margin-bottom: 70px;
          flex-wrap: ${isSmallLayout ? "wrap" : ""};
        }
        .AgentsTitleStyle {
          color: #333;
          text-align: start;
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: 45px;
          margin-bottom: ${isSmallLayout ? "30px" : ""};
        }
        .AgentsLogosStyle {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: ${isSmallLayout ? "100%" : "50%"};
        }
        .first-row {
          margin-bottom: 50px;
          text-align: center;
          ${isSmallLayout ? "" : 
          "display: flex; justify-content: space-between; align-items: center;"}
        }
        .second-row {
          text-align: center;
          ${isSmallLayout ? "" : 
          "display: flex; justify-content: space-between; align-items: center;"}
        }
        .componey-logo {
          margin: ${isSmallLayout ? "20px" : ""};
        }
      `}</style>
    </div>
  );
};

export default Agents;
