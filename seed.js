const { green, red } = require('chalk');
const db = require('./server/db');
const {
  User,
  Walk,
  Attraction,
  NavPoint,
  UserPin,
} = require('./server/db/models');

const seed = async () => {
  try {
    await db.sync({ force: true });

    //USERS

    //admin users
    const [ben, madi, michelle, test] = await Promise.all([
      User.create({
        firstName: 'ben',
        email: 'ben@stroll.io',
        isAdmin: true,
        password: 'abcdefg',
      }),
      User.create({
        firstName: 'madi',
        email: 'madi@stroll.io',
        isAdmin: true,
        password: 'abcdefg',
      }),
      User.create({
        firstName: 'michelle',
        email: 'michelle@stroll.io',
        isAdmin: true,
        password: 'abcdefg',
      }),
      User.create({
        firstName: 'test',
        email: 'test@test.com',
        isAdmin: true,
        password: 'test',
      }),
    ]);

    //guest users
    const [bob, jim, steve] = await Promise.all([
      User.create({
        firstName: 'bob',
        email: 'bob@bob.com',
        isAdmin: false,
        password: 'bob',
      }),
      User.create({
        firstName: 'jim',
        email: 'jim@jim.com',
        isAdmin: false,
        password: 'jim',
      }),
      User.create({
        firstName: 'steve',
        email: 'steve@steve.com',
        isAdmin: false,
        password: 'steve',
      }),
    ]);

    //WALKS

    const [fullstack, ogilvie, westTown, hydePark] = await Promise.all([
      Walk.create({
        name: `Fullstack Wonder Walk`,
        description: 'A great lunch walk around Fullstack',
        category: 'scenic',
        imageUrl: 'scenic.png',
        userId: 2,
        start: {
          type: 'Point',
          coordinates: [41.895553, -87.638584],
        },
      }),
      Walk.create({
        name: `Ben's Commute`,
        description: 'My walk from Fullstack to Ogilvie',
        category: 'nature',
        imageUrl: 'nature.png',
        userId: 1,
        start: {
          type: 'Point',
          coordinates: [41.879353, -87.636712],
        },
      }),
      Walk.create({
        name: `Madi's Commute`,
        description: 'My walk from home to Fullstack',
        category: 'scenic',
        imageUrl: 'scenic.png',
        userId: 2,
        start: {
          type: 'Point',
          coordinates: [41.879345, -87.632367],
        },
      }),

      Walk.create({
        name: `Michelle's Commute`,
        description: 'My walk from my apartment to my car',
        category: 'dog',
        imageUrl: 'dog.png',
        userId: 3,
        start: {
          type: 'Point',
          coordinates: [41.878131, -87.632356],
        },
      }),
    ]);

    const [
      milleniumPark,
      grantPark,
      museumCampus,
      michiganAve,
      theLoop,
      loopSculpture,
      navyPier,
      magMile,
      lincolnPark,
    ] = await Promise.all([
      Walk.create({
        name: `Millennium Park`,
        description: 'Cloud Gate, Crown Fountain, Lurie Garden',
        category: 'architecture',
        imageUrl: 'architecture.png',
        start: {
          type: 'Point',
          coordinates: [41.884278, -87.624225],
        },
      }),
      Walk.create({
        name: `Grant Park`,
        description: 'Rolling acres of green space',
        category: 'nature',
        imageUrl: 'nature.png',
        start: {
          type: 'Point',
          coordinates: [41.882289, -87.619441],
        },
      }),
      Walk.create({
        name: `Museum Campus`,
        description:
          'Adler Planetarium, Shedd Aquarium, and Field Museum of Natural History',
        category: 'historical',
        imageUrl: 'history.png',
        start: {
          type: 'Point',
          coordinates: [41.867492, -87.619216],
        },
      }),
      Walk.create({
        name: `Michigan Ave`,
        description: 'Tall buildings for tall folks',
        category: 'architecture',
        imageUrl: 'architecture.png',
        start: {
          type: 'Point',
          coordinates: [41.888909, -87.624261],
        },
      }),
      Walk.create({
        name: `The Loop Architectural Walk`,
        description: 'Chicago Architectural Highlights: Part I',
        category: 'architecture',
        imageUrl: 'architecture.png',
        start: {
          type: 'Point',
          coordinates: [41.884567, -87.632226],
        },
      }),
      Walk.create({
        name: 'Sculpture in the Loop',
        description: `Chicago's public art collection on display across the Loop`,
        category: 'architecture',
        imageUrl: 'architecture.png',
        start: {
          type: 'Point',
          coordinates: [41.884567, -87.632226],
        },
      }),
      Walk.create({
        name: 'Navy Pier',
        description: `Chicago's top tourist attractions, great for family entertainment`,
        category: 'architecture',
        imageUrl: 'architecture.png',
        start: {
          type: 'Point',
          coordinates: [41.891353, -87.609756],
        },
      }),
      Walk.create({
        name: 'Magnificent Mile',
        description:
          'The grand dame of shopping streets, rife with historical buildings',
        category: 'architecture',
        imageUrl: 'architecture.png',
        start: {
          type: 'Point',
          coordinates: [41.88895, -87.624381],
        },
      }),
      Walk.create({
        name: 'Lincoln Park Zoo',
        description: 'A nature walk, traversing the zoo and multiple ponds',
        category: 'nature',
        imageUrl: 'nature.png',
        start: {
          type: 'Point',
          coordinates: [41.930322, -87.637067],
        },
      }),
    ]);

    const newPin = await UserPin.create({
      location: {
        type: 'Point',
        coordinates: [41.895353, -87.639437],
      },
      name: 'Fullstack Academy',
      description: "It's pretty cool I guess.",
    });

    //ATTRACTIONS

    //millenium park

    const [
      milleniumMonument,
      cloudGate,
      crownFountain,
      pritzkerPavilion,
      lurieGarden,
      bpBridge,
    ] = await Promise.all([
      Attraction.create({
        id: 1,
        location: {
          type: 'Point',
          coordinates: [41.883931, -87.6238],
        },
        name: 'Millenium Monument',
        description: '',
      }),
      Attraction.create({
        id: 2,
        location: {
          type: 'Point',
          coordinates: [41.882815, -87.623284],
        },
        name: 'Cloud Gate',
        description: '',
      }),
      Attraction.create({
        id: 3,
        location: {
          type: 'Point',
          coordinates: [41.8812, -87.623775],
        },
        name: 'Crown Fountain',
        description: '',
      }),
      Attraction.create({
        id: 4,
        location: {
          type: 'Point',
          coordinates: [41.88327, -87.621802],
        },
        name: 'Jay Pritzker Pavilion',
        description: '',
      }),
      Attraction.create({
        id: 5,
        location: {
          type: 'Point',
          coordinates: [41.881113, -87.621829],
        },
        name: 'Lurie Garden',
        description: '',
      }),
      Attraction.create({
        id: 6,
        location: {
          type: 'Point',
          coordinates: [41.882728, -87.620179],
        },
        name: 'BP Bridge',
        description: '',
      }),
    ]);

    //grant park
    const [garden, roseGarden, bhamFountain] = await Promise.all([
      Attraction.create({
        id: 7,
        location: {
          type: 'Point',
          coordinates: [41.883644, -87.617362],
        },
        name: `Cancer Survivors' Garden`,
        description: '',
      }),
      Attraction.create({
        id: 8,
        location: {
          type: 'Point',
          coordinates: [41.877821, -87.618999],
        },
        name: 'North Rose Garden',
        description: '',
      }),
      Attraction.create({
        id: 9,
        location: {
          type: 'Point',
          coordinates: [41.875797, -87.618957],
        },
        name: 'Buckingham Fountain',
        description: '',
      }),
    ]);

    //museum campus
    const [shedd, adler, courtyard, field] = await Promise.all([
      Attraction.create({
        id: 10,
        location: {
          type: 'Point',
          coordinates: [41.867652, -87.613544],
        },
        name: 'Shedd Aquarium',
        description: '',
      }),
      Attraction.create({
        id: 11,
        location: {
          type: 'Point',
          coordinates: [41.866365, -87.607117],
        },
        name: 'Adler Planetarium',
        description: '',
      }),
      Attraction.create({
        id: 12,
        location: {
          type: 'Point',
          coordinates: [41.865815, -87.606499],
        },
        name: `America's Courtyard`,
        description: '',
      }),
      Attraction.create({
        id: 13,
        location: {
          type: 'Point',
          coordinates: [41.866359, -87.616957],
        },
        name: 'Field Museum',
        description: '',
      }),
    ]);

    //michigan ave
    const [
      dusable,
      carbide,
      culturalCtr,
      artInstitute,
      archiCenter,
    ] = await Promise.all([
      Attraction.create({
        id: 14,
        location: {
          type: 'Point',
          coordinates: [41.888909, -87.624261],
        },
        name: 'Dusable Bridge',
        description: '',
      }),
      Attraction.create({
        id: 15,
        location: {
          type: 'Point',
          coordinates: [41.88656, -87.624748],
        },
        name: 'Carbide and Carbon Building',
        description: '',
      }),
      Attraction.create({
        id: 16,
        location: {
          type: 'Point',
          coordinates: [41.883808, -87.624857],
        },
        name: 'Chicago Cultural Center',
        description: '',
      }),
      Attraction.create({
        id: 17,
        location: {
          type: 'Point',
          coordinates: [41.879635, -87.623644],
        },
        name: 'Art Institute of Chicago',
        description: '',
      }),
      Attraction.create({
        id: 18,
        location: {
          type: 'Point',
          coordinates: [41.878699, -87.624933],
        },
        name: 'ArchiCenter',
        description: '',
      }),
    ]);

    //loop architecture I
    const [
      thompson,
      delaware,
      marshall,
      reliance,
      carson,
      willis,
    ] = await Promise.all([
      Attraction.create({
        id: 19,
        location: {
          type: 'Point',
          coordinates: [41.885374, -87.6317],
        },
        name: 'Thompson Center',
        description: '',
      }),
      Attraction.create({
        id: 20,
        location: {
          type: 'Point',
          coordinates: [41.884677, -87.629567],
        },
        name: 'Delaware Building',
        description: '',
      }),
      Attraction.create({
        id: 21,
        location: {
          type: 'Point',
          coordinates: [41.883791, -87.627026],
        },
        name: `Marshall Field's Building`,
        description: '',
      }),
      Attraction.create({
        id: 22,
        location: {
          type: 'Point',
          coordinates: [41.883023, -87.628245],
        },
        name: 'Reliance Building',
        description: '',
      }),
      Attraction.create({
        id: 23,
        location: {
          type: 'Point',
          coordinates: [41.881818, -87.627476],
        },
        name: 'Carson Pirie Scott Building',
        description: '',
      }),
      Attraction.create({
        id: 24,
        location: {
          type: 'Point',
          coordinates: [41.878888, -87.636056],
        },
        name: 'Willis Tower',
        description: '',
      }),
    ]);

    //loop architecture II
    const [rook, board, prison, modnadnock, fedPlaza] = await Promise.all([
      Attraction.create({
        id: 25,
        location: {
          type: 'Point',
          coordinates: [41.8791, -87.631853],
        },
        name: 'Rookery Building',
        description: '',
      }),
      Attraction.create({
        id: 26,
        location: {
          type: 'Point',
          coordinates: [41.877509, -87.631823],
        },
        name: 'Chicago Board of Trade',
        description: '',
      }),
      Attraction.create({
        id: 27,
        location: {
          type: 'Point',
          coordinates: [41.876585, -87.630433],
        },
        name: 'Metropolitan Correctional Ctr',
        description: '',
      }),
      Attraction.create({
        id: 28,
        location: {
          type: 'Point',
          coordinates: [41.877442, -87.629626],
        },
        name: 'Modnadnock Building',
        description: '',
      }),
      Attraction.create({
        id: 29,
        location: {
          type: 'Point',
          coordinates: [41.879041, -87.629575],
        },
        name: 'Federal Plaza',
        description: '',
      }),
    ]);

    //sculpture in the loop
    const [
      dubuffet,
      picasso,
      miro,
      chagall,
      calder,
      nevelson,
      oldenburg,
    ] = await Promise.all([
      Attraction.create({
        id: 30,
        location: {
          type: 'Point',
          coordinates: [41.884742, -87.631128],
        },
        name: 'Monument with Standing Beast (Sculpture)',
        description: 'Sculpture by Jean Dubuffet',
      }),
      Attraction.create({
        id: 31,
        location: {
          type: 'Point',
          coordinates: [41.88364, -87.62992],
        },
        name: 'Untitled (Sculpture)',
        description: 'Sculpture by Pablo Picasso',
      }),
      Attraction.create({
        id: 32,
        location: {
          type: 'Point',
          coordinates: [41.883031, -87.630316],
        },
        name: 'Chicago (Sculpture)',
        description: 'Sculpture by Joan Miro',
      }),
      Attraction.create({
        id: 33,
        location: {
          type: 'Point',
          coordinates: [41.881129, -87.629708],
        },
        name: 'The Four Seasons (Mosaic)',
        description: 'Mosaic by Marc Chagall',
      }),
      Attraction.create({
        id: 34,
        location: {
          type: 'Point',
          coordinates: [41.878927, -87.62943],
        },
        name: 'Flamingo (Sculpture)',
        description: 'Sculpture by Alexander Calder',
      }),
      Attraction.create({
        id: 35,
        location: {
          type: 'Point',
          coordinates: [41.882182, -87.634148],
        },
        name: 'Dawn Shadows (Sculpture)',
        description: 'Sculpture by Louise Nevelson',
      }),
      Attraction.create({
        id: 36,
        location: {
          type: 'Point',
          coordinates: [41.882005, -87.643085],
        },
        name: 'Batcolumn (Sculpture)',
        description: 'Sculpture by Claes Oldenburg',
      }),
    ]);

    //navy pier
    const [
      childrensMuseum,
      crystalGarden,
      navyPierPark,
      funHouse,
      shakespeareTheatre,
      windyBoat,
      pierDeck,
    ] = await Promise.all([
      Attraction.create({
        id: 37,
        location: {
          type: 'Point',
          coordinates: [41.891401, -87.609164],
        },
        name: `Chicago Children's Museum`,
        description: '',
      }),
      Attraction.create({
        id: 38,
        location: {
          type: 'Point',
          coordinates: [41.891685, -87.608537],
        },
        name: 'Crystal Gardens',
        description: '',
      }),
      Attraction.create({
        id: 39,
        location: {
          type: 'Point',
          coordinates: [41.891719, -87.607832],
        },
        name: 'Navy Pier Park',
        description: '',
      }),
      Attraction.create({
        id: 40,
        location: {
          type: 'Point',
          coordinates: [41.891489, -87.605174],
        },
        name: 'Amazing Chicago Funhouse Maze',
        description: '',
      }),
      Attraction.create({
        id: 41,
        location: {
          type: 'Point',
          coordinates: [41.891517, -87.605761],
        },
        name: 'Chicago Shakespeare Theatre',
        description: '',
      }),
      Attraction.create({
        id: 42,
        location: {
          type: 'Point',
          coordinates: [41.891126, -87.60512],
        },
        name: 'The Windy of Chicago',
        description: 'A boat',
      }),
      Attraction.create({
        id: 43,
        location: {
          type: 'Point',
          coordinates: [41.892392, -87.600738],
        },
        name: 'Navy Pier Observation Deck',
        description: '',
      }),
    ]);

    //mag mile
    const [
      wrigley,
      plazaAmericas,
      tribuneTower,
      MCA,
      waterTower,
      presbyterianChurch,
      hancockBuilding,
    ] = await Promise.all([
      Attraction.create({
        id: 44,
        location: {
          type: 'Point',
          coordinates: [41.889806, -87.624595],
        },
        name: 'Wrigley Building',
        description: '',
      }),
      Attraction.create({
        id: 45,
        location: {
          type: 'Point',
          coordinates: [41.890157, -87.624653],
        },
        name: 'Plaza of the Americas',
        description: '',
      }),
      Attraction.create({
        id: 46,
        location: {
          type: 'Point',
          coordinates: [41.890477, -87.623274],
        },
        name: 'Tribute Tower',
        description: '',
      }),
      Attraction.create({
        id: 47,
        location: {
          type: 'Point',
          coordinates: [41.897258, -87.621244],
        },
        name: 'Museum of Contemporary Art',
        description: '',
      }),
      Attraction.create({
        id: 48,
        location: {
          type: 'Point',
          coordinates: [41.89716, -87.624418],
        },
        name: 'Water Tower Place',
        description: '',
      }),
      Attraction.create({
        id: 49,
        location: {
          type: 'Point',
          coordinates: [41.898984, -87.62468],
        },
        name: 'Fourth Presbyterian Church',
        description: '',
      }),
      Attraction.create({
        id: 50,
        location: {
          type: 'Point',
          coordinates: [41.898776, -87.622829],
        },
        name: 'John Hancock Building/ 360 Sky Deck',
        description: '',
      }),
    ]);

    //lincoln park zoo
    const [
      northPond,
      peggyNotebaert,
      lilyPool,
      lincolnParkZoo,
      lincolnParkConversatory,
    ] = await Promise.all([
      Attraction.create({
        id: 51,
        location: {
          type: 'Point',
          coordinates: [41.92803, -87.636693],
        },
        name: 'North Pond Nature Sanctuary',
        description: '',
      }),
      Attraction.create({
        id: 52,
        location: {
          type: 'Point',
          coordinates: [41.926663, -87.63512],
        },
        name: 'Peggy Notebaert Nature Museum',
        description: '',
      }),
      Attraction.create({
        id: 53,
        location: {
          type: 'Point',
          coordinates: [41.924942, -87.633975],
        },
        name: 'Alfred Caldwell Lily Pool',
        description: '',
      }),
      Attraction.create({
        id: 54,
        location: {
          type: 'Point',
          coordinates: [41.92327, -87.63337],
        },
        name: 'Lincoln Park Zoo',
        description: '',
      }),
      Attraction.create({
        id: 55,
        location: {
          type: 'Point',
          coordinates: [41.924136, -87.635296],
        },
        name: 'Lincoln Park Conservatory',
        description: '',
      }),
    ]);

    // creating navPoints for each walk
    // const archiWalkCoords = [
    //   [41.879353, -87.636712],
    //   [41.879345, -87.632367],
    //   [41.878131, -87.632356],
    //   [41.878147, -87.632774],
    //   [41.876861, -87.632753],
    //   [41.876941, -87.629298],
    //   [41.878994, -87.629394],
    // ];

    // let architectureWalk = await Promise.all([]);
    // const archFunc = async () => {
    //   let previous = null;
    //   for (let i = 0; i < archiWalkCoords.length; i++) {
    //     let previousId = null;
    //     let start = i === 0;
    //     if (previous !== null) {
    //       previousId = previous.dataValues.id;
    //     }

    //     let newPoint = await NavPoint.create({
    //       location: {
    //         type: 'Point',
    //         coordinates: [...archiWalkCoords[i]],
    //       },
    //       prev: previousId,
    //       next: null,
    //       start: start,
    //       walkId: 8,
    //     });

    //     architectureWalk.push(newPoint);

    //     if (previous !== null) {
    //       await previous.update({
    //         next: newPoint.dataValues.id,
    //       });
    //     }
    //     previous = newPoint;
    //   }
    // };

    // archFunc();

    // const fullstackWalkCoords = [
    //   [41.895553, -87.638584],
    //   [41.893958, -87.638504],
    //   [41.89393, -87.640011],
    //   [41.895493, -87.640056],
    // ];

    // let fullstackWalk = await Promise.all([]);

    // const fullstackFunc = async () => {
    //   let previous = null;
    //   for (let i = 0; i < fullstackWalkCoords.length; i++) {
    //     let previousId = null;
    //     let start = i === 0;
    //     if (previous !== null) {
    //       previousId = previous.dataValues.id;
    //     }

    //     let newPoint = await NavPoint.create({
    //       location: {
    //         type: 'Point',
    //         coordinates: [...fullstackWalkCoords[i]],
    //       },
    //       prev: previousId,
    //       next: null,
    //       start: start,
    //       walkId: 1,
    //     });

    //     architectureWalk.push(newPoint);

    //     if (previous !== null) {
    //       await previous.update({
    //         next: newPoint.dataValues.id,
    //       });
    //     }
    //     previous = newPoint;
    //   }
    // };

    // fullstackFunc();

    //setting history for users
    for (let i = 1; i < 6; i++) {
      madi.setWalkedByUser(i);
    }

    for (let i = 1; i < 4; i++) {
      madi.setFavoritedByUser(i);
    }

    for (let i = 1; i < 10; i++) {
      if (i % 2 !== 0) {
        test.setWalkedByUser(i);
      }
    }

    for (let j = 1; j < 14; j++) {
      test.setFavoritedByUser(j);
    }

    milleniumPark.setAttractions([1, 2, 3, 4, 5, 6]);
    grantPark.setAttractions([7, 8, 9]);
    museumCampus.setAttractions([10, 11, 12, 13]);
    michiganAve.setAttractions([14, 15, 16, 17, 18]);
    theLoop.setAttractions([19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
    loopSculpture.setAttractions([30, 31, 32, 33, 34, 35, 36]);
    navyPier.setAttractions([37, 38, 39, 40, 41, 42, 43]);
    magMile.setAttractions([44, 45, 46, 47, 48, 49, 50]);
    lincolnPark.setAttractions([51, 52, 53, 54, 55]);

    return [
      ben,
      madi,
      michelle,
      test,
      bob,
      jim,
      steve,
      fullstack,
      ogilvie,
      westTown,
      hydePark,
      milleniumPark,
      grantPark,
      museumCampus,
      michiganAve,
      theLoop,
      loopSculpture,
      navyPier,
      magMile,
      lincolnPark,
      newPin,
      milleniumMonument,
      cloudGate,
      crownFountain,
      pritzkerPavilion,
      lurieGarden,
      bpBridge,
      garden,
      roseGarden,
      bhamFountain,
      shedd,
      adler,
      courtyard,
      field,
      dusable,
      carbide,
      culturalCtr,
      artInstitute,
      archiCenter,
      thompson,
      delaware,
      marshall,
      reliance,
      carson,
      willis,
      rook,
      board,
      prison,
      modnadnock,
      fedPlaza,
      dubuffet,
      picasso,
      miro,
      chagall,
      calder,
      nevelson,
      oldenburg,
      childrensMuseum,
      crystalGarden,
      navyPierPark,
      funHouse,
      shakespeareTheatre,
      windyBoat,
      pierDeck,
      wrigley,
      plazaAmericas,
      tribuneTower,
      MCA,
      waterTower,
      presbyterianChurch,
      hancockBuilding,
      northPond,
      peggyNotebaert,
      lilyPool,
      lincolnParkZoo,
      lincolnParkConversatory,
    ];
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      // db.close();
    })
    .catch(err => {
      console.error(red('Oh no, something went wrong!'));
      console.error(err);
      // db.close();
    });
}
