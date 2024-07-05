import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ServiceCardInstance.css";

export type ServiceCardInstanceType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const ServiceCardInstance: FunctionComponent<ServiceCardInstanceType> = ({
  className = "",
  propFlex,
}) => {
  const serviceCardInstanceStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`service-card-instance ${className}`}
      style={serviceCardInstanceStyle}
    >
      <div className="service-card7">
        <div className="card-isolated-media-top7">
          <div className="image-container">
            <div className="image1" />
          </div>
          <div className="card-element-line-item-parent1">
            <div className="card-element-line-item21">
              <div className="signed-by-base-card-element-21" />
              <div className="paragraph24">Quality</div>
            </div>
            <div className="card-element-line-item22">
              <div className="signed-by-base-card-element-22" />
              <div className="paragraph25">Paragraph</div>
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

export default ServiceCardInstance;