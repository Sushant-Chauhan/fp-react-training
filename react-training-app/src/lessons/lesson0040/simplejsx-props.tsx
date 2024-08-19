import SimpleJsxFooter from "./simplejsx-footer";
import SimpleJsxHeader from "./simplejsx-header";
import SimpleJsxItemDataProp from "./simplejsx-item-props";

type Article = {
  hdr: string;
  para: string;
};

function SimpleJsxDataProps() {
  let articles: Article[] = [
    {
      hdr: "MISSION",
      para: "To protect, restore and enhance environmental quality towards good public health, environmental integrity and economic viability.",
    },
    {
      hdr: "VISION",
      para: "A nation empowered to protect our finite natural resources, attuned to the pursuit of sustainable development, for a clean and healthy environment that enhances the Filipino Quality of life for present and future generations.",
    },
    {
      hdr: "TRUST",
      para: "Ensure Attainment of an Environmental Quality that is conducive for present and future generations Air, Water and Toxic and Hazardous Chemicals Management Pursue Cooperation and Partnership Environmental Impact Assessment System Implementation Solid Waste Management Secretariat assistance to the Pollution Adjudication Board Lead by Example Environmental Compliance and Organizational Performance",
    },
  ];
  return (
    <div>
      <SimpleJsxHeader />
      <article className="body-items">
        <SimpleJsxItemDataProp hdr={articles[0].hdr} para={articles[0].para} />
        <SimpleJsxItemDataProp {...articles[1]} />
        <SimpleJsxItemDataProp hdr={articles[2].hdr} para={articles[2].para} />
      </article>
      <SimpleJsxFooter />
    </div>
  );
}

export default SimpleJsxDataProps;
