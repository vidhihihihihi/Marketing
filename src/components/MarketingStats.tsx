import { FunctionComponent } from "react";
import ExampleItem from "./ExampleItem";
import FrameComponent10 from "./FrameComponent10";
import "./MarketingStats.css";

export type MarketingStatsType = {
  className?: string;
};

const MarketingStats: FunctionComponent<MarketingStatsType> = ({
  className = "",
}) => {
  return (
    <section className={`marketing-stats ${className}`}>
      <div className="marketing-stats-content">
        <ExampleItem propFlex="unset" />
        <div className="frame-parent40">
          <div className="frame-wrapper4">
            <div className="frame-parent41">
              <div className="rectangle-wrapper">
                <textarea className="rectangle-textarea" rows={16} cols={17} />
              </div>
              <FrameComponent10 />
              <div className="introduction-b2b-marketing-sta-parent">
                <div className="introduction-b2b-marketing3">
                  Introduction B2B Marketing Stats will help you definitely
                  because a lot of things are changing in th...
                </div>
                <div className="introduction-b2b-marketing4">
                  Introduction B2B Marketing Stats will help you definitely
                  because a lot of things are changing in th...
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent10">
            <textarea className="frame-child19" rows={16} cols={17} />
            <div className="frame-wrapper5">
              <FrameComponent10
                propFlex="1"
                propGap="22px"
                propAlignSelf="unset"
              />
            </div>
            <div className="frame-wrapper6">
              <div className="introduction-b2b-marketing-sta-group">
                <div className="introduction-b2b-marketing5">
                  Introduction B2B Marketing Stats will help you definitely
                  because a lot of things are changing in th...
                </div>
                <div className="introduction-b2b-marketing6">
                  Introduction B2B Marketing Stats will help you definitely
                  because a lot of things are changing in th...
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent11">
            <textarea className="frame-child20" rows={16} cols={17} />
            <FrameComponent10
              propFlex="unset"
              propGap="13px"
              propAlignSelf="stretch"
            />
            <div className="introduction-b2b-marketing-sta-container">
              <div className="introduction-b2b-marketing7">
                Introduction B2B Marketing Stats will help you definitely
                because a lot of things are changing in th...
              </div>
              <div className="introduction-b2b-marketing8">
                Introduction B2B Marketing Stats will help you definitely
                because a lot of things are changing in th...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingStats;
