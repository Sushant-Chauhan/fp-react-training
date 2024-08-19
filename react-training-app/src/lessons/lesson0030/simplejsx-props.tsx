import SimpleJsxFooter from "./simplejsx-footer";
import SimpleJsxHeader from "./simplejsx-header";
import SimpleJsxItem from "./simplejsx-item-props";
import "./simplejsx-props.css";

function SimpleJsxProps() {
  return (
    <div>
      <SimpleJsxHeader />
      <article className="body-items">
        <SimpleJsxItem
          hdr="MISSION"
          para="To protect, restore and enhance environmental quality towards good
          public health, environmental integrity and economic viability."
        />
        <SimpleJsxItem
          hdr="VISION"
          para="A nation empowered to protect our finite natural resources, attuned to
          the pursuit of sustainable development, for a clean and healthy
          environment that enhances the Filipino Quality of life for present and
          future generations."
        />
        <SimpleJsxItem
          hdr="THRUST"
          para="Ensure Attainment of an Environmental Quality that is conducive for
          present and future generations Air, Water and Toxic and Hazardous
          Chemicals Management Pursue Cooperation and Partnership Environmental
          Impact Assessment System Implementation Solid Waste Management
          Secretariat assistance to the Pollution Adjudication Board Lead by
          Example Environmental Compliance and Organizational Performance"
        />
      </article>
      <SimpleJsxFooter />
    </div>
  );
}

export default SimpleJsxProps;
