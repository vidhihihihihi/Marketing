import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ServiceCardTwo.css";

export type ServiceCardTwoType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const ServiceCardTwo: FunctionComponent<ServiceCardTwoType> = ({
  className = "",
  propFlex,
}) => {
  const serviceCardTwoStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`service-card-two ${className}`}
      style={serviceCardTwoStyle}
    >
      <div className="service-card7">
        <div className="card-isolated-media-top7">
          <div className="card-image-two">
            <div className="image-container-two" />
          </div>
          <div className="card-info-two">
            <div className="card-element-line-item21">
              <div className="signed-by-base-card-element-21" />
              <div className="paragraph25">Service</div>
            </div>
            <div className="card-element-line-item22">
              <div className="signed-by-base-card-element-22" />
              <div className="paragraph26">Paragraph</div>
            </div>
          </div>
        </div>
        <div className="signed-by-base-card-isolate14" />
        <div className="signed-by-base-card-isolate15" />
        <div className="card-element-line-item23">
          <div className="signed-by-base-card-element-23" />
          <b className="furniture7">Home Furniture</b>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardTwo;
