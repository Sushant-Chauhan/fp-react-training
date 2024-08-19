import React from "react";
import { useState } from "react";
import srcOwl1 from "./images/Great-horned-owl.webp";
import srcOwl2 from "./images/Elf-owl.webp";
import srcOwl3 from "./images/Short-eared-owl.webp";
import srcOwl4 from "./images/owl-feathers-display.webp";
import "./compcondstyle.css";
import ArticleComponent from "./comp-article";

const ComponentForLoop = () => {
  const owlArray = [
    {
      imgData: srcOwl2,
      altData: "Owl 2",
      paraData:
        "The size range of owls is about the same as that of their               day-active counterparts, the hawks, with lengths of about 13–70 cm               (5–28 inches) and wingspans between 0.3–2.0 metres (1–6.6 feet).               Most owl species are at the lower end of the size range. Owls               apparently feed only on animals. Rodents are the most common prey;               the smaller species, however, eat insects. All owls have the same               general appearance, which is characterized by a flat face with a               small hooked beak and large, forward-facing eyes. The tail is               short and the wings are rounded. Like the diurnal birds of prey               (order Falconiformes), they have large feet with sharp talons.               Diversity occurs in size, in the presence or absence of 'ear' tufts, and in the shape of the plumage around the face.",
    },
    {
      imgData: srcOwl3,
      altData: "Owl 3",
      paraData:
        "Owls utilize virtually all habitats, from grassland and tundra to dense woodland and rainforest. The distribution and density of most species seem to be limited by the availability of suitable nesting sites, rather than by the number of potential prey animals. In general the type of prey taken is dictated by the size of the owl and by the relative abundance of potential prey. Owls that hunt over grassland, such as the barn owl and short-eared owl, hunt by sustained flight, dropping into the grass to catch rodents.",
    },
    {
      imgData: srcOwl4,
      altData: "Owl 4",
      paraData:
        "Sound is important to owls, especially in mating and territoria defense. Camouflage, daytime immobility, and silent flight combine to make it as difficult for owls to see each other as it is for natural enemies and human observers to see them. Usual own sounds include snaps of the bill, claps of the wings in flight, and a variety of vocalizations, with pitches, timbres, and rhythms unique to each species.",
    },
  ];

  return (
    <div>
      <article>
        <p>
          Owl, (order Strigiformes), any member of a homogeneous order of
          primarily nocturnal raptors found nearly worldwide. The bird of
          Athena, the Greek goddess of practical reason, is the little owl
          (Athene noctua).
        </p>
        <section className="panel-disp">
          <img className="image-disp" src={srcOwl1} alt={"Owl 1"} />
          <p>
            Owls became symbolic of intelligence because it was thought that
            they presaged events. On the other hand, because of their nocturnal
            existence and ominous hooting sounds, owls have also been symbols
            associated with the occult and the otherworldly. Their secretive
            habits, quiet flight, and haunting calls have made them the objects
            of superstition and even fear in many parts of the world. In the
            Middle Ages the little owl was used as a symbol of the “darkness”
            before the coming of Christ; by further extension it was used to
            symbolize a nonbeliever who dwells in this darkness. Similarly the
            barn owl (Tyto alba) was looked upon as a bird of ill omen, and it
            subsequently became a symbol of disgrace. Scientific study of owls
            is difficult owing to their silent nighttime activity, with the
            result that the ecology, behaviour, and taxonomy of many species
            remain poorly understood.
          </p>
        </section>
      </article>
      {owlArray.map((owl, indx) => {
        return (
          <ArticleComponent
            key={indx}
            src={owl.imgData}
            alt={owl.altData}
            para={owl.paraData}
          />
        );
      })}
    </div>
  );
};

export default ComponentForLoop;
