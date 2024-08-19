import React from "react";
import { useState } from "react";
import ArticleComponent from "./comp-article";

const CompLiftingState = () => {
  const [selected, setSelected] = useState(0);

  function handleSelection(idx: number): void {
    setSelected(idx);
  }

  const owlArray = [
    {
      title: "General Description",
      paraData:
        "Owl, (order Strigiformes), any member of a homogeneous order of primarily nocturnal raptors found nearly worldwide. The bird of Athena, the Greek goddess of practical reason, is the little owl (Athene noctua).",
    },
    {
      title: "Physical Features",
      paraData:
        "The size range of owls is about the same as that of their               day-active counterparts, the hawks, with lengths of about 13–70 cm               (5–28 inches) and wingspans between 0.3–2.0 metres (1–6.6 feet).               Most owl species are at the lower end of the size range. Owls               apparently feed only on animals. Rodents are the most common prey;               the smaller species, however, eat insects. All owls have the same               general appearance, which is characterized by a flat face with a               small hooked beak and large, forward-facing eyes. The tail is               short and the wings are rounded. Like the diurnal birds of prey               (order Falconiformes), they have large feet with sharp talons.               Diversity occurs in size, in the presence or absence of 'ear' tufts, and in the shape of the plumage around the face.",
    },
    {
      title: "Habitats",
      paraData:
        "Owls utilize virtually all habitats, from grassland and tundra to dense woodland and rainforest. The distribution and density of most species seem to be limited by the availability of suitable nesting sites, rather than by the number of potential prey animals. In general the type of prey taken is dictated by the size of the owl and by the relative abundance of potential prey. Owls that hunt over grassland, such as the barn owl and short-eared owl, hunt by sustained flight, dropping into the grass to catch rodents.",
    },
    {
      title: "Behavior",
      paraData:
        "Sound is important to owls, especially in mating and territoria defense. Camouflage, daytime immobility, and silent flight combine to make it as difficult for owls to see each other as it is for natural enemies and human observers to see them. Usual own sounds include snaps of the bill, claps of the wings in flight, and a variety of vocalizations, with pitches, timbres, and rhythms unique to each species.",
    },
  ];

  return (
    <div>
      <h2>Current Selected: </h2>
      <p>{owlArray[selected].title}</p>
      {owlArray.map((owl, indx) => {
        return (
          <ArticleComponent
            key={indx}
            select={handleSelection}
            selected={selected}
            title={owl.title}
            para={owl.paraData}
            index={indx}
          />
        );
      })}
    </div>
  );
};

export default CompLiftingState;
