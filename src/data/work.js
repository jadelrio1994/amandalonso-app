/*
pinturas: [ array > array
    [ // array > objects
      {
        serie: string,
        title: string,
        date: number,
        dim: { object
          al: number,
          an: number
        },
        materiales: string,
        imageUrl: string,
      },
    ]
cocina: [ array > objects
    {
      serie: string,
      title: string,
      anho: number,
      images: [], // array > string
      desc: string,
      menu: [], // array > string or null
    },
  ]
 performance: [ // array > objects
    {
      title: string,
      anho: number,
      desc: [], // array > string
      images: ["1.jpg", "2.jpg"],
    },
  ]
 balada: {
    groupName: string,
    logo: string,
    list: [ // array > objects
      {
        title: string,
        anho: number,
        images: [], array > string,
        desc: string,
      }
    ]
  }
*/

export const work = {
  pinturas: [
    [
      {
        serie: "El límite de la convergencia",
        title: "Fuego",
        date: 2014,
        dim: {
          al: 96,
          an: 120
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "1fuego.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Tierra",
        date: 2014,
        dim: {
          al: 96,
          an: 120
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "2tierra.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Aire",
        date: 2014,
        dim: {
          al: 96,
          an: 120
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "3aire.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Agua",
        date: 2014,
        dim: {
          al: 96,
          an: 120
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "4agua.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Síntesis",
        date: 2014,
        dim: {
          al: 120,
          an: 120
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "5sintesis.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Tetraedro",
        date: 2014,
        dim: {
          al: 30,
          an: 40
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "6tetraedro.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Cubo",
        date: 2014,
        dim: {
          al: 30,
          an: 40
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "7cubo.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Octaedro",
        date: 2014,
        dim: {
          al: 30,
          an: 40
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "8octaedro.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Icosaedro",
        date: 2014,
        dim: {
          al: 30,
          an: 40
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "9icosaedro.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Dodecaedro",
        date: 2014,
        dim: {
          al: 30,
          an: 40
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "10dodecaedro.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Tetraedro",
        date: 2014,
        dim: {
          al: 100,
          an: 100
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "11tetraedro.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Cubo",
        date: 2014,
        dim: {
          al: 100,
          an: 100
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "12cubo.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Octaedro",
        date: 2014,
        dim: {
          al: 100,
          an: 100
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "13octaedro.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Dodecaedro",
        date: 2014,
        dim: {
          al: 120,
          an: 120
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "15dodecaedro.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Estaciones",
        date: 2014,
        dim: {
          al: 30,
          an: 40
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "18estaciones.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Heptágono estrellado",
        date: 2014,
        dim: {
          al: 30,
          an: 40
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "19heptagono_estrellado.jpg",
      },
      {
        serie: "El límite de la convergencia",
        title: "Cardinales, Fijos y Mutables",
        date: 2014,
        dim: {
          al: 30,
          an: 40
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "20cardinales.jpg",
      },
    ],
    [
      {
        serie: "Casa de Luz Radiante",
        title: "El Sol del Tarot",
        date: 2017,
        dim: {
          al: 100,
          an: 55,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "El_Sol_del_Tarot.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "El Maestro",
        date: 2017,
        dim: {
          al: 100,
          an: 55,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "El_Maestro.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Atrapasueños No 1",
        date: 2017,
        dim: {
          al: 100,
          an: 55,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Atrapasueños1.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Primer Chakra. La raíz",
        date: 2016,
        dim: {
          al: 70,
          an: 70,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Chakra1.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Segundo Chakra. La creatividad",
        date: 2016,
        dim: {
          al: 70,
          an: 70,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Chakra2.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Tercer Chakra. El plexo solar",
        date: 2016,
        dim: {
          al: 70,
          an: 70,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Chakra3.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Cuarto Chakra. El diamante",
        date: 2016,
        dim: {
          al: 70,
          an: 70,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Chakra4.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Quinto Chakra. La comunización",
        date: 2016,
        dim: {
          al: 70,
          an: 70,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Chakra5.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Sexto Chakra. El tercer ojo",
        date: 2016,
        dim: {
          al: 70,
          an: 70,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Chakra6.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Séptimo Chakra. El ser puro",
        date: 2016,
        dim: {
          al: 70,
          an: 70,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Chakra7.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Elefante de agua y fuego",
        date: 2017,
        dim: {
          al: 50,
          an: 50,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Elefante_de_agua_y_fuego.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Herradura",
        date: 2017,
        dim: {
          al: 50,
          an: 50,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Herradura.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Mano de Fátima (Jamsa)",
        date: 2017,
        dim: {
          al: 50,
          an: 50,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Jamsa.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Ojo de Tigre",
        date: 2017,
        dim: {
          al: 50,
          an: 50,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Ojo_de_Tigre.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Ojo turco (Nazar)",
        date: 2017,
        dim: {
          al: 50,
          an: 50,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Ojo_turco.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Ojos de Santa Lucía",
        date: 2017,
        dim: {
          al: 50,
          an: 50,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Ojos_de_Santa_Lucía.png",
      },
      {
        serie: "Casa de Luz Radiante",
        title: "Trébol de cuatro hojas",
        date: 2017,
        dim: {
          al: 50,
          an: 50,
        },
        materiales: "Acrílico/lienzo",
        imageUrl: "Trébol_de_cuatro_hojas.png",
      },
    ],
    [
      {
        serie: "Atrapasueños",
        title: "Atrapasueños",
        date: 2017,
        dim: {
          al: 21,
          an: 30,
        },
        materiales: "Tinta/papel",
        imageUrl: "1.jpg",
      },
      {
        serie: "Atrapasueños",
        title: "Atrapasueños",
        date: 2017,
        dim: {
          al: 21,
          an: 30,
        },
        materiales: "Tinta/papel",
        imageUrl: "2.jpg",
      },
      {
        serie: "Atrapasueños",
        title: "Atrapasueños",
        date: 2017,
        dim: {
          al: 21,
          an: 30,
        },
        materiales: "Tinta/papel",
        imageUrl: "3.jpg",
      },
      {
        serie: "Atrapasueños",
        title: "Atrapasueños",
        date: 2017,
        dim: {
          al: 21,
          an: 30,
        },
        materiales: "Tinta/papel",
        imageUrl: "4.jpg",
      },
      {
        serie: "Atrapasueños",
        title: "Atrapasueños",
        date: 2017,
        dim: {
          al: 21,
          an: 30,
        },
        materiales: "Tinta/papel",
        imageUrl: "5.jpg",
      },
      {
        serie: "Atrapasueños",
        title: "Atrapasueños",
        date: 2017,
        dim: {
          al: 21,
          an: 30,
        },
        materiales: "Tinta/papel",
        imageUrl: "6.jpg",
      },
      {
        serie: "Atrapasueños",
        title: "Atrapasueños",
        date: 2017,
        dim: {
          al: 21,
          an: 30,
        },
        materiales: "Tinta/papel",
        imageUrl: "7.jpg",
      },
      {
        serie: "Atrapasueños",
        title: "Atrapasueños",
        date: 2017,
        dim: {
          al: 21,
          an: 30,
        },
        materiales: "Tinta/papel",
        imageUrl: "8.jpg",
      },
      {
        serie: "Atrapasueños",
        title: "Atrapasueños",
        date: 2017,
        dim: {
          al: 21,
          an: 30,
        },
        materiales: "Tinta/papel",
        imageUrl: "9.jpg",
      },
      {
        serie: "Atrapasueños",
        title: "Atrapasueños",
        date: 2017,
        dim: {
          al: 21,
          an: 30,
        },
        materiales: "Tinta/papel",
        imageUrl: "10.jpg",
      },
    ],
  ],
  performance: [
    {
      title: "Cotidiana",
      anho: 2010,
      desc: [
        "Documentacion de la acción: Plato de comida, tenedor, vaso de agua.",
        "Documentacion de la acción: Sábana y almohada.",
      ],
      images: ["1.jpg", "2.jpg"],
    },
    {
      title: "Espacio que nos separa",
      anho: 2010,
      desc: [
        "Acción que consiste en encender una y otra vez velas de hielo. (Hilo encerado, encendedor y agua de mar congelada)",
      ],
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },
    {
      title: "Nado sincronizado",
      anho: 2011,
      desc: [
        "Personaje que se mantiene corriendo hasta el agotamiento dentro de una piscina totalmente vacía mientras escucha el sonido de la emisora Radio reloj. En cada minuto marcado por la radio, hace una pausa, escucha la hora indicada y luego reanuda su carrera, así lo repite una y otra vez hasta que poco a poco va perdiendo la sincronía con el tiempo dado.",
      ],
      images: ["1.jpg", "2.jpg"],
    },
    {
      title: "Observaciones pictóricas",
      anho: 2011,
      desc: [
        "Acción. Acrílico/Lienzo, cordel de pesca, clavo.",
        "Acción que consiste en permanecer durante todo el tiempo inaugural de la exposición, intentando elegir la posición adecuada para esta obra pictórica, dispuesta sobre la pared. El cuadro es un pretexto para establecer con el público un diálogo que va más allá de las propias connotaciones que pueda ofrecer la pintura como manifestación artística. Actuando, en este caso, únicamente en función del montaje.",
      ],
      images: ["1.jpg", "2.jpg"],
    },
  ],
  cocina: [
    {
      serie: "Hors d’œuvre",
      title: "Post it 5",
      anho: 2018,
      images: [
        "tarjeta.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
      ],
      desc: "Exposición colectiva Post it 5. Galería Galiano. La Habana",
      menu: [
        "Pepinos con salsa Mil islas.",
        "Tostadas de guacamole.",
        "Tostadas con queso azul.",
        "Pudín de pasta.",
      ],
    },
    {
      serie: "Hors d’œuvre",
      title: "Vandálica",
      anho: 2018,
      images: ["tarjeta.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"],
      desc:
        "Catering para la exposición “Vandálica” de José A. Vincench y Henry Eric. Galería Acacia. La Habana.",
      menu: [
        "Croquetas con salsa de perejil.",
        "Coctel de camarones.",
        "Salmón ahumado en crema de queso y piña glasé.",
        "Banderillas.",
      ],
    },
    {
      serie: "Hors d’œuvre",
      title: "Realidad inducida (aproximación a una estructura política)",
      anho: 2018,
      images: ["tarjeta.jpg", "1.jpg"],
      desc:
        "Catering para expo “Realidad inducida (aproximación a una estructura política)” de Sergio Marrero y Leonardo Luis Roque. Centro de Desarrollo de las Artes Visuales. La Habana",
      menu: null,
    },
    {
      serie: "Hors d’œuvre",
      title: "La tierra dada",
      anho: 2018,
      images: ["tarjeta.jpg", "1.jpg", "2.jpg"],
      desc: "Exposición colectiva “La tierra dada”. Pabellón Cuba. La Habana.",
      menu: [
        "Comida criolla",
        "Tostones rellenos de congri",
        "Carne de cerdo y ensalada",
      ],
    },
    {
      serie: "Hors d’œuvre",
      title: "PREié",
      anho: 2019,
      images: [
        "tarjeta.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
      ],
      desc:
        "Catering para la exposición “PREié” de Víctor Manuel Piverno Barrios. Galería La Nave (Génesis).",
      menu: [
        "Huevos de codorniz hervido con plátano frito.",
        "Huevo frito de codorniz con plátano fruta.",
        "Cebolla encurtida con rollo de lechuga.",
        "Crema de limón con bombón de chocolate",
      ],
    },
    {
      serie: "Hors d’œuvre",
      title: "El Banquete",
      anho: 2019,
      images: [
        "tarjeta.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
      ],
      desc:
        "Catering para la exposición “El Banquete”de Osmara Alberteris en Galería Artesano.",
      menu: null,
    },
    {
      serie: "Hors d’œuvre",
      title: "A stone in a shoe",
      anho: 2019,
      images: ["tarjeta.jpg", "1.jpg", "2.jpg"],
      desc: "Exposición colectiva “A Stone in a Shoe”. D´Nasco Studio.",
      menu: null,
    },
  ],
  balada: {
    groupName: "Balada Tropical",
    logo: "logo.png",
    list: [
      {
        title: "Halterofilia",
        anho: 2011,
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
        desc: "Complejo Deportivo del ISA, La Habana.",
      },
      {
        title: "Prófugos del Glamour",
        anho: 2011,
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "cartel.jpg"],
        desc: "Facultad de Artes Plásticas del ISA, La Habana.",
      },
      {
        title: "Halterofilia II",
        anho: 2012,
        images: ["1.jpg", "2.jpg", "cartel.jpg"],
        desc: "Complejo Deportivo del ISA, La Habana.",
      },
      {
        title: "Acciones que te harían sentir culpable de no hacerlas",
        anho: 2013,
        images: ["1.jpg", "2.jpg", "3.jpg"],
        desc: "Estudio teatral Vivarta, La Habana.",
      },
      {
        title: "El Síndrome de Estocolmo",
        anho: 2014,
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "cartel.jpg"],
        desc: "Pabellón Cuba, La Habana.",
      },
      {
        title: "Cocktail Balada Tropical",
        anho: 2017,
        images: ["1.jpg", "2.jpg", "3.jpg"],
        desc: "Museo del Ron, La Habana.",
      },
      {
        title: "Basado en hechos reales: Balada Tropical visita la Tierra",
        anho: 2017,
        images: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg",
          "8.jpg",
          "9.jpg",
          "10.jpg",
          "11.jpg",
          "12.jpg",
          "cartel.jpg",
        ],
        desc: "Centro de Desarrollo de Artes Visuales, La Habana.",
      },
      {
        title: "Cañas y Palmas",
        anho: 2018,
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
        desc: "Arte continua, La Habana.",
      },
      {
        title: "Speakeasy",
        anho: 2019,
        images: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "cartel.jpg",
        ],
        desc:
          "Un proyecto del colectivo Balada Tropical, XIII Bienal de La Habana",
      },
    ],
  },
};
