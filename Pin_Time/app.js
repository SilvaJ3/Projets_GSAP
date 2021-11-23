const src = [
    "ressources/spartan.svg",
    "ressources/castle.svg",
    "ressources/da-vinci.svg",
    "ressources/airplane.svg",
];
  
const dates = [
  "-3300 | 476",
  "476 | 1492",
  "1492 | 1792",
  "1792 | AJD",
]
  

const sections = gsap.utils.toArray(".section"); // permet de créer un tableau en gsap avec les éléments passé s en paramètres

sections.forEach((section, index) => {
  
  ScrollTrigger.create({
    trigger: section,
    pin: ".tooltip",
    start: "top center",
    end: "bottom center ",
    onEnter: () => {
      gsap.set(".tooltip-img", {
        attr: {src: src[index]}
      })
      gsap.set(".tooltip p", {
        innerText: dates[index]
      })
    },
    onEnterBack: () => {
      gsap.set(".tooltip-img", {
        attr: {src: src[index]}
      })
      gsap.set(".tooltip p", {
        innerText: dates[index]
      })
    }
  })

});