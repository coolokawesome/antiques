import React from 'react'

const Objects = [
    {
        id: "item1",
        category: 'Glass',
        name: 'Murano Green Glass Vase, 20th Century',
        price: 2000.00,
        desc: 'Late 20th century large murano glass decorative vase with flowery top. The vase is in great condition. Minor wear consistent with age. Makers mark undersigned. The vase stands about 13 inches tall.',
        desc2: 'This item cannot be returned.',
        img: require('../../imgs/Objects/vase4.jpg')
    },
    {
        id: "item2",
        category: 'Glass',
        name: 'Murano Blue Glass Vase, 20th century',
        price: 900.00,
        desc: 'Late 20th century large murano glass decorative vase with swirl design details. The vase is in great condition. Minor wear consistent with age. Makers mark undersigned. The vase stands about 14inches tall X 8 inches top diameter X 7 inches base diameter.',
        desc2: 'This item cannot be returned.',
        img: require('../../imgs/Objects/vase3.jpg')
    },
    {
        id: "item3",
        category: 'Glass',
        name: '21st Century Karim Rashid Small Bowl',
        price: 470.00,
        desc: 'Karim Rashid has conceived for Purho a mini collection of bowls and vases characterized by their faceted, structural form and abstract elegance. Irresistible because of the unusual and geometrical surfaces and bold colors, Kastle are available in different sizes offering a wide range of uses. Kastle are made of Murano glass although mirror finish is available only on request. Murano glass is available in 21 finishes and customized version.',
        desc2: 'A return for this item may be initiated within 7 days of delivery.',
        img: require('../../imgs/Objects/vase2.jpg')
    },
    {
        id: "item4",
        category: 'Glass',
        name: 'Murano Glass Zebras, 20th century',
        price: 1100.00,
        desc: 'Two zebras out of Murano glass, one is red and white striped, the other one blue and white. Both are labeled “Genuine Venetian Glass, Made in Murano, Italy”.',
        desc2: 'A return for this item may be initiated within 7 days of delivery.',
        img: require('../../imgs/Objects/zebras.jpg')
    },
    {
        id: "item5",
        category: 'Glass',
        name: 'Murano Glass Vase, Mid-20th Century',
        price: 238.00,
        desc: 'Small thick-walled glass vase with red and white decor on blue background.',
        desc2: 'A return for this item may be initiated within 7 days of delivery.',
        img: require('../../imgs/Objects/vase1.jpg')
    },
    {
        id: "item6",
        category: 'Rugs',
        name: 'Antique Kurdish Rug 42" x 54"',
        price: 3200.00,
        desc: 'Originating in Iran. Red rug with geometric, sawtooth-like patterns throughout. Manufactured in 1909',
        desc2: 'Due to this items age, it may be subject to wear and tear. any and all imperfections should be seen as a testament to its quality.',
        img: require('../../imgs/Objects/kurdish-rug-red-1.webp')
    },
    {
        id: "item7",
        category: 'Rugs',
        name: "Antique Persian Rug 5.0' x 8.0' ",
        price: 8700.00,
        desc: 'Originating in Persia. Red rug with floral patterns accompanied by an accent border and depictions of people throughout. Manufactured in 1829',
        desc2: 'Due to this items age, it may be subject to wear and tear. any and all imperfections should be seen as a testament to its quality.',
        img: require('../../imgs/Objects/perisan-rug-red-1.jpg')
    },
    {
        id: "item8",
        category: 'Rugs',
        name: "Antique Persian Mahal '10.0 x '16.0 ",
        price: 22500.00,
        desc: 'Originating in Persia. Red rug with floral patterns accompanied by an accent border. Manufactured in 1829',
        desc2: 'Due to this items age, it may be subject to wear and tear. any and all imperfections should be seen as a testament to its quality.',
        img: require('../../imgs/Objects/mahal.webp')
    }
    ,
    {
        id: "item9",
        category: 'Rugs',
        name: "Antique Persian Mahal '8.5 x '11.5 ",
        price: 8800.00,
        desc: 'Originating in Persia. Red rug with delicate palmettes, leafy tendrils, floral sprigs, rosettes, curved sickle leaves, and stylized flowers throughout. Manufactured in 1960',
        desc2: 'Due to this items age, it may be subject to wear and tear. any and all imperfections should be seen as a testament to its quality.',
        img: require('../../imgs/Objects/mahal2.jpg')
    }
    ,
    {
        id: "item10",
        category: 'Rugs',
        name: "Antique Serapi Persian Rug '10 x '13 ",
        price: 8800.00,
        desc: 'Originating in Persia. Red rug with delicate palmettes, geometric sprigs accompanied with a blue background. Manufactured in 1960',
        desc2: 'Due to this items age, it may be subject to wear and tear. any and all imperfections should be seen as a testament to its quality.',
        img: require('../../imgs/Objects/serapi.jpg')
    }
    ,
    {
        id: "item11",
        category: 'Rugs',
        name: "Arat 16th Century Revival Rug '10 x '13 ",
        price: 20000.00,
        desc: `The source of carpet comes from the book how to Read - Islamic Carpets, Walter B. Denny, The Metropolitan Museum of Art, New York 2014. The five-star-medallion carpet was designed in the early 16th century by Mamluk Sultane of Cairo, Egypt.`,
        desc2: 'Due to this items age, it may be subject to wear and tear. any and all imperfections should be seen as a testament to its quality.',
        img: require('../../imgs/Objects/arat.jpg')
    }
    ,
    {
        id: "item12",
        category: 'Glass',
        name: "Seguso Murano Orange Yellow Clear Sommerso Ashtray",
        price: 2600.00,
        desc: `Oversized midcentury Murano art glass centerpiece with pulled details. Attributed to Seguso, Italy, 1960s
        An spectacular hand blown Murano art glass vase in shades of orange yellow and clear glass with pulled details thorough. Very attractive when light hits it.`,
        desc2: "Wear consistent with age and use. Dark imperfection during the hand blown technique at the central part. It doesn't rest importance to the piece. See pictures in detail.",
        img: require('../../imgs/Objects/ashtray.jpg')
    }
    ,
    {
        id: "item13",
        category: 'Glass',
        name: "Cranberry Red Salviati Murano Vase",
        price: 280.00,
        desc: `Asymetrical Salviati Murano layered glass vase in shades of rich cranberry contrasted with soft blue gray.`,
        desc2: "A return for this item may be initiated within 7 days of delivery.",
        img: require('../../imgs/Objects/vase5.jpg')
    }
    ,
    {
        id: "item14",
        category: 'Glass',
        name: 'Alessandro Mendini Large Vase - "Honey"',
        price: 280.00,
        desc: `21st century Alessandro Mendini Freccia large vase in Murano glass various colors.
        Designed by Alessandro Mendini, Freccia is a triangular base vase with an integral side which serves to give both direction and an arrow shape. The top is diagonal instead of horizontal, in order to obtain a dynamic form emphasized by the matte finish of the Murano blown glass.`,
        desc2: "A return for this item may be initiated within 7 days of delivery.",
        img: require('../../imgs/Objects/vase6.jpg')
    }
    ,
    {
        id: "item15",
        category: 'Glass',
        name: 'Small Geometric Vase, Violet "Sommerso" ',
        price: 210.00,
        desc: `The present vase is indeed realised in the "Sommerso" style, and is very charming. It is very well preserved, without visible scoff marks or dents. It presents the expectable patina of a 50+ years old glass object.`,
        desc2: "A return for this item may be initiated within 3 days of delivery.",
        img: require('../../imgs/Objects/vase7.jpg')
    }
    ,
    {
        id: "item16",
        category: 'Glass',
        name: 'Small 1950s Italian Sommerso Murano Glass Vase',
        price: 210.00,
        desc: `Attributed to mid-century Italian designer Flavio Poli, this 1950's vase is composed of green in amber sommerso Murano glass blown in a teardrop form with a bulbous bottom gracefully transitioning into a narrow, stemlike neck.`,
        desc2: "A return for this item may be initiated within 2 days of delivery.",
        img: require('../../imgs/Objects/vase8.jpg')
    },
    {
        id: "item17",
        category: 'Decor',
        name: 'Villemot Spirale Red Bracelet Original Vintage Poster',
        price: 899.00,
        desc: `Villemot spirale red bracelet original vintage poster.`,
        desc2: "A return for this item may be initiated within 2 days of delivery.",
        img: require('../../imgs/Objects/poster8.jpg')
    }
    ,
    {
        id: "item18",
        category: 'Decor',
        name: 'Original Vintage Soviet Poster United Nations Anniversary USSR UN Sword Plough',
        price: 899.00,
        desc: `Original vintage Soviet poster for the 40 anniversary of the United Nations (established 1945) - Перекуем мечи на орала! Let's forge swords into ploughs - featuring a dynamic design of a man holding up a hammer and bending a sword in front of the world map and olive tree branches UN logo in white representing world peace against the blue background. `,
        desc2: "Fair condition, folds, creasing, staining, small paper losses.",
        img: require('../../imgs/Objects/poster7.jpg')
    }
    ,
    {
        id: "item19",
        category: 'Decor',
        name: 'Gilda Original Vintage Belgium Film Movie Poster',
        price: 4700.00,
        desc: `Very rare film poster for vintage Classic noir Gilda starring Rita Hayworth.`,
        desc2: "Professionally cleaned, de-acidified and linen-backed. Touch up to bottom left hand corner. Original cinema snipe and stamps which lend to its authenticity",
        img: require('../../imgs/Objects/poster6.jpg')
    }
    ,
    {
        id: "item20",
        category: 'Decor',
        name: 'Belgium Zoo Polar Bear Vintage Poster - 1950s',
        price: 4700.00,
        desc: `Original Antwerp Zoo Polar bear, 1950 poster with fabulous design by René Van Poppel. One of the most famous Zoo posters made by the Van Poppel studio with the glancing bear wonderfully contrasted against the blue background of Antwerp.`,
        desc2: "Very rare, especially in this larger size and with authentic tax stamp.        ",
        img: require('../../imgs/Objects/poster5.jpg')
    }
    ,
    {
        id: "item21",
        category: 'Decor',
        name: 'AGIS Polar Bear Original Vintage Poster',
        price: 1000.00,
        desc: `AGIS Polar Bear Original Vintage Poster
        Unique and rare poster from 1949, advertising the hot drink AGIS. A very desirable poster that suits any home space.`,
        desc2: "This item cannot be returned.",
        img: require('../../imgs/Objects/poster4.jpg')
    }
    ,
    {
        id: "item22",
        category: 'Decor',
        name: ' Rolling Stones European Tour Poster - 1970s',
        price: 4700.00,
        desc: `Original vintage music concert poster promoting the English rock band The Rolling Stones European Tour 1970 featuring a stunning Art Deco illustration of a black classic car driving in front of a large red, white and blue ocean liner ship with a stylised plane flying above snowy mountain peaks and palm trees in the background, the bold heading in white letters above - The Rolling Stones European Tour 1970 A SBA Presentation - and sponsors below - Finnair, Lufthansa and Hertz. Design by the British graphic artist John Pasche (b.1945), who also designed the iconic Rolling Stones tongue and lips logo in 1970. Printed by Fred Kehler Reklame in Denmark. Good condition, creasing.`,
        desc2: "Professionally cleaned, de-acidified and linen-backed.",
        img: require('../../imgs/Objects/poster3.jpg')
    }
    ,
    {
        id: "item23",
        category: 'Decor',
        name: 'Original Vintage Poster A Film About Jimi Hendrix',
        price: 490.00,
        desc: `Original vintage movie poster for the 1973 documentary A Film About Jimi Hendrix directed by Joe Boyd, John Head and Gary Weis for Warner Bros featuring music concert footage of the influential American musician, singer and songwriter Jimi Hendrix (Johnny Allen Hendrix; 1942-1970), including performances at a Berkeley concert, Woodstock and the 1970 Isle of Wight festival with interviews with his friends and family`,
        desc2: "Professionally cleaned, de-acidified and linen-backed. Touch up to bottom left hand corner. Original cinema snipe and stamps which lend to its authenticity",
        img: require('../../imgs/Objects/poster2.jpg')
    }
    ,
    {
        id: "item24",
        category: 'Decor',
        name: 'Henri Matisse "Nice" Poster',
        price: 1130.00,
        desc: `This contemporary colorful original vintage poster was commissioned in the 1960s by the French Government to promote tourism. This piece is also titled: La Danseuse Creole (or the Creole Dancer).`,
        desc2: "Professionally cleaned, de-acidified and linen-backed. Touch up to bottom left hand corner. Original cinema snipe and stamps which lend to its authenticity",
        img: require('../../imgs/Objects/poster.jpg')
    },
    {
        id: "item25",
        category: 'Furniture',
        name: 'Contemporary Picasso Round Center Coffee Table',
        price: 1130.00,
        desc: `Picasso Center Table celebrates the 20th-century art movement, Cubism, with handcraft expertise and his leader Pablo Picasso. Rough and natural materials approach us with an exact message: modest luxury. This artistic yet modern coffee table invites you to join a contemporary interior design project.
        `,
        desc2: `
        Top in Gloss black Bird Eye Veneer and Gloss White Bird Eye Venner Marquetry; Legs in Gloss Black Lacquer.

Dimensions: Width: 100 cm 39.4 in - Depth: 100 cm 39.4 in - Height: 45 cm 17.7 in
        `,
        img: require('../../imgs/Objects/furniture1.jpg')
    },
    {
        id: "item26",
        category: 'Furniture',
        name: 'Luigi Massoni - "Supervalif" Coffee Table',
        price: 2130.00,
        desc: `
        Vintage coffee table "Supercalif" by Luigi Massoni for Galotti & Radice, Italy 1980's.
The 2-part base is in colored mirror glass and can be positioned freely under the 15 mm thick glass top. The top is new and therefore without scratches or damage.
A little piece of glass has been glued to the top of one part of the base (see photo)
        `,
        desc2: "Professionally cleaned, de-acidified and linen-backed. Touch up to bottom left hand corner. Original cinema snipe and stamps which lend to its authenticity",
        img: require('../../imgs/Objects/table2.jpg')
    },
    {
        id: "item27",
        category: 'Furniture',
        name: 'Pierangelo Galotti Modern Brass - 4 Nesting Tables',
        price: 3800.00,
        desc: `Pierangelo Galotti for Galotti & Radice Italian Modern set of four nesting tables in chrome and glass, produced in the early 1980s.`,
        desc2: "Wear consistent with age and use. Wear consistent with age and use.",
        img: require('../../imgs/Objects/table3.jpg')
    }
    ,
    {
        id: "item28",
        category: 'Objects',
        name: 'Sweden Vintage FM Ronneby Tall Crystal Glass Tree ',
        price: 160.00,
        desc: `Crystal fir tree of organic sleek modern design, a vintage creation signed with etched FM Ronneby Sweden, individually handcrafted. High-quality crystal worked with spikes, creating flowing pine-like branches.`,
        desc2: "Wear consistent with age and use. Wear consistent with age and use.",
        img: require('../../imgs/Objects/object1.jpeg')
    }
    ,
    {
        id: "item29",
        category: 'Runners',
        name: 'Antique Persian Runner Rug Gabbeh Design ',
        price: 5460.00,
        desc: `Antique Persian runner rug handwoven from the finest sheep’s wool. It’s colored with all-natural vegetable dyes that are safe for humans and pets. It’s a traditional Gabbeh design handwoven by expert artisans. It’s a lovely runner rug that can be incorporated with virtually any home interior design. It has a dimension of 2'10" x 10'4" which works well for living rooms, hallways and bedrooms.`,
        desc2: "Wear consistent with age and use. Wear consistent with age and use.",
        img: require('../../imgs/Objects/runner1.jpg')
    }
    ,
    {
        id: "item30",
        category: 'Runners',
        name: 'Antique Geometric Runner Rug',
        price: 4700.00,
        desc: `Antique Persian runner rug handwoven from the finest sheep’s wool. It’s colored with all-natural vegetable dyes that are safe for humans and pets. It’s a traditional Gabbeh design handwoven by expert artisans. It’s a lovely runner rug that can be incorporated with virtually any home interior design. It has a dimension of 2'10" x 10'4" which works well for living rooms, hallways and bedrooms.`,
        desc2: "Wear consistent with age and use. Wear consistent with age and use.",
        img: require('../../imgs/Objects/runner2.jpg')
    }
]


export default Objects