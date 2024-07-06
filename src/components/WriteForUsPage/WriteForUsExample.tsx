import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./WriteForUsExample.css";

export type WriteForUsExampleType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const WriteForUsExample: FunctionComponent<WriteForUsExampleType> = ({
  className = "",
  propFlex,
}) => {
  const exampleItemStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={`example-item ${className}`} style={exampleItemStyle}>
      <div className="example-details">
        <div className="example-content">
          <div className="example-image-container">
            <textarea className="example-image" rows={16} cols={17} />
          </div>
          <div className="example-sub-title-parent">
            <div className="example-sub-title">
              <div className="best-helpful-b2b">
                40 Best Helpful B2B Marketing Stats For You In 2024
              </div>
            </div>
            <div className="example-stats-icon">
              <div className="stats-circle" />
              <img
                className="vector-icon9"
                loading="lazy"
                alt=""
                src="/vector-51.svg"
              />
            </div>
          </div>
          <div className="introduction-b2b-marketing">
            Introduction B2B Marketing Stats will help you definitely because a
            lot of things are changing in th...
          </div>
        </div>
      </div>
      <div className="marketing-example">
        <textarea className="marketing-image" rows={16} cols={17} />
        <div className="marketing-sub-title-wrapper">
          <div className="marketing-sub-title">
            <div className="best-helpful-b2b-marketing-sta-wrapper">
              <div className="best-helpful-b2b1">
                40 Best Helpful B2B Marketing Stats For You In 2024
              </div>
            </div>
            <div className="marketing-circle">
              <div className="marketing-circle-child" />
              <img
                className="vector-icon10"
                loading="lazy"
                alt=""
                src="/vector-51.svg"
              />
            </div>
          </div>
        </div>
        <div className="marketing-summary">
          <div className="introduction-b2b-marketing1">
            Introduction B2B Marketing Stats will help you definitely because a
            lot of things are changing in th...
          </div>
        </div>
      </div>
      <div className="stats-image-container">
        <textarea className="stats-background" rows={16} cols={17} />
        <div className="stats-details">
          <div className="example-title-container">
            <div className="best-helpful-b2b2">
              40 Best Helpful B2B Marketing Stats For You In 2024
            </div>
          </div>
          <div className="example-stats">
            <div className="example-circle" />
            <img
              className="vector-icon11"
              loading="lazy"
              alt=""
              src="/vector-51.svg"
            />
          </div>
        </div>
        <div className="introduction-b2b-marketing2">
          Introduction B2B Marketing Stats will help you definitely because a
          lot of things are changing in th...
        </div>
      </div>
    </div>
  );
};

export default WriteForUsExample;
