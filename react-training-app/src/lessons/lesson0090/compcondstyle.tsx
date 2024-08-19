import React from "react";
import { useState } from "react";
import srcOwl1 from "./images/Great-horned-owl.webp";
import srcOwl2 from "./images/Elf-owl.webp";
import srcOwl3 from "./images/Short-eared-owl.webp";
import srcOwl4 from "./images/owl-feathers-display.webp";
import "./compcondstyle.css";

const ComponentConditionalStyling = () => {
  const [val, setVal] = useState(0);

  const onBtnSelect = (code: number) => {
    setVal(code);
  };

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
      <button
        className={val === 1 ? "button-disp active" : "button-disp"}
        onClick={() => {
          onBtnSelect(1);
        }}
      >
        General Features
      </button>
      <button
        className={val === 2 ? "button-disp active" : "button-disp"}
        onClick={() => {
          onBtnSelect(2);
        }}
      >
        Ecology
      </button>
      <button
        className={val === 3 ? "button-disp active" : "button-disp"}
        onClick={() => {
          onBtnSelect(3);
        }}
      >
        Behaviour
      </button>
      <article>
        {val === 0 && <p>Please select topic to display</p>}
        {val === 1 && (
          <section className="panel-disp">
            <img className="image-disp" src={srcOwl2} alt={"Owl 2"} />
            <p>
              The size range of owls is about the same as that of their
              day-active counterparts, the hawks, with lengths of about 13–70 cm
              (5–28 inches) and wingspans between 0.3–2.0 metres (1–6.6 feet).
              Most owl species are at the lower end of the size range. Owls
              apparently feed only on animals. Rodents are the most common prey;
              the smaller species, however, eat insects. All owls have the same
              general appearance, which is characterized by a flat face with a
              small hooked beak and large, forward-facing eyes. The tail is
              short and the wings are rounded. Like the diurnal birds of prey
              (order Falconiformes), they have large feet with sharp talons.
              Diversity occurs in size, in the presence or absence of “ear”
              tufts, and in the shape of the plumage around the face.
            </p>
          </section>
        )}
        {val === 2 && (
          <section className="panel-disp">
            <img className="image-disp" src={srcOwl3} alt={"Owl 3"} />
            <p>
              Owls utilize virtually all habitats, from grassland and tundra to
              dense woodland and rainforest. The distribution and density of
              most species seem to be limited by the availability of suitable
              nesting sites, rather than by the number of potential prey
              animals. In general the type of prey taken is dictated by the size
              of the owl and by the relative abundance of potential prey. Owls
              that hunt over grassland, such as the barn owl and short-eared
              owl, hunt by sustained flight, dropping into the grass to catch
              rodents. Many woodland owls secure prey by dropping from perches
              at the edges of forest openings. The Southeast Asian hawk owl
              (Ninox scutulata) sallies from a perch to take flying insects. The
              whiskered owl (Otus trichopsis) takes flying insects in foliage.
              Fish owls (Ketupa and Scotopelia) are adapted for taking live fish
              but also eat other animals. Specialized forms of feeding behaviour
              have been observed in some owls. The elf owl (Micrathene
              whitneyi), for instance, has been seen hovering before blossoms,
              where it scares insects into flight with its wings and then
              catches them with its beak. A bay owl (Phodilus badius) has been
              documented stationing itself within a cave to catch bats as they
              issued forth at dusk. A variety of owls may depend on a single
              prey species when it becomes exceptionally abundant. Prey is
              generally swallowed whole, and indigestible material, such as
              feathers, fur, and bones, are regurgitated in the form of a
              compact pellet.
            </p>
          </section>
        )}
        {val === 3 && (
          <section className="panel-disp">
            <img className="image-disp" src={srcOwl4} alt={"Owl 4"} />
            <p>
              Sound is important to owls, especially in mating and territorial
              defense. Camouflage, daytime immobility, and silent flight may
              combine to make it as difficult for owls to see each other as it
              is for natural enemies and human observers to see them. Usual owl
              sounds include snaps of the bill, claps of the wings in flight,
              and a variety of vocalizations, with pitches, timbres, and rhythms
              unique to each species. Pitch differs between sexes (the female
              higher). Although less melodious than the calls of some birds, the
              vocalizations of many owls are “songs” in the biological sense and
              can even be musical to the human ear. The song varies from deep
              hoots in some large species to chirps, whistles, or warblings in
              many small owls. When nestlings of the burrowing owl (Speotyto
              cunicularia) are threatened, the young emit a call that resembles
              the warning buzz of a rattlesnake—a frequent inhabitant of rodent
              burrows.{" "}
            </p>
          </section>
        )}
      </article>
    </div>
  );
};

export default ComponentConditionalStyling;
