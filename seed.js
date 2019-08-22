const { green, red } = require('chalk');
const db = require('./server/db');
const Walk = require('./server/db/models/walk');
const User = require('./server/db/models/user');
const NavPoint = require('./server/db/models/navPoint');
const UserPin = require('./server/db/models/userPin');

// // const Favorite = require('./server/db/favorite');
// const Pin = require('./server/db/userPin');

// const navpoints = [
//   {
//     latitude: 41.895546,
//     longitude: -87.639462,
//     walkId: 1,
//     prev: null,
//     next: null
//   },
//   {
//     latitude: 41.895498,
//     longitude: -87.641509,
//     walkId: 1,
//     prevId: 1,
//     nextId: 3
//   },
//   {
//     latitude: 41.893483,
//     longitude: -87.641477,
//     walkId: 1,
//     prevId: 2,
//     nextId: 4
//   },
//   {
//     latitude: 41.889138,
//     longitude: -87.638076,
//     walkId: 1,
//     prevId: 3,
//     nextId: 5
//   },
//   {
//     latitude: 41.889074,
//     longitude: -87.640007,
//     walkId: 1,
//     prevId: 4,
//     nextId: 6
//   },
//   {
//     latitude: 41.88394,
//     longitude: -87.639782,
//     walkId: 1,
//     prevId: 5,
//     nextId:  null,
//   }
// ];

// const favorites = [
//   {
//     userId: 1,
//     walkId: 1
//   }
// ]

// const userPins = [
//   {
//     imageUrl:
//       "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg",
//     text: "I saw a cute puppy here!",
//     latitude: 41.88394,
//     longitude: -87.640017,
//   }
// ];

const seed = async () => {
  try {
    await db.sync({ force: true });

    const fullStackPin = await UserPin.create({
      location: {
        type: "Point",
        coordinates: [41.895272, -87.63901]
      },
      name: "Fullstack Academy",
      description: "It's pretty cool I guess."
    });

    const steves = await UserPin.create({
        location: {
          type: "Point",
          coordinates: [41.896738, -87.635378]
        },
        name: "Steve's",
        description: 'People go here to get a food.'
      })


    const jimmy = await UserPin.create({
        location: {
          type: "Point",
          coordinates: [41.896312, -87.640955]
        },
        name: "Jimmy J's",
        description: "The new Cubano is actually pretty good"
      })

    const [ben, madi, michelle] = await Promise.all([
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
    ]);

    // const [
    //   ogilvie,
    //   westTown,
    //   hydePark,
    //   millenium,
    //   grant,
    //   art,
    //   museum,
    //   loop
    // ] =
    await Promise.all([
      Walk.create({
        name: `The Loop Architectural Walk`,
        description: "A tour of the architectual highlights of the loop",
        category: "architecture",
        imageUrl: "https://picsum.photos/id/1047/200/300",
        userId: 1,
        start: {
          type: "Point",
          coordinates: [41.879373, -87.63619]
        }
      }),
      // Walk.create({
      //   name: ``,
      //   description: "My walk from home to Fullstack",
      //   category: "scenic",
      //   imageUrl: "https://picsum.photos/id/1047/200/300",
      //   userId: 2,
      //   start: {
      //     type: "Point",
      //     coordinates: [41.879345, -87.632367]
      //   }
      // }),
      // Walk.create({
      //   name: `Fullstack Wonder Walk`,
      //   description: "A great lunch walk around Fullstack",
      //   category: "scenic",
      //   imageUrl: "https://picsum.photos/id/1047/200/300",
      //   userId: 2,
      //   start: {
      //     type: "Point",
      //     coordinates: [41.895553, -87.638584]
      //   }
      // }),
      // Walk.create({
      //   name: `Michelle's Commute`,
      //   description: "My walk from my apartment to my car",
      //   category: "dog",
      //   imageUrl: "https://picsum.photos/id/1047/200/300",
      //   userId: 3,
      //   start: {
      //     type: "Point",
      //     coordinates: [41.878131, -87.632356]
      //   }
      // }),
      // Walk.create({
      //   name: `Millennium Park`,
      //   description: "Lurie Garden, the Bean, and all that jazz",
      //   category: "scenic",
      //   imageUrl: "https://picsum.photos/id/1047/200/300",
      //   start: {
      //     type: "Point",
      //     coordinates: [41.878994, -87.629394]
      //   }
      // }),
      // Walk.create({
      //   name: `Grant Park`,
      //   description: "A big lawn with a big fountain to match",
      //   category: "nature",
      //   imageUrl: "https://picsum.photos/id/1047/200/300",
      //   start: {
      //     type: "Point",
      //     coordinates: [41.897765, -87.627853]
      //   }
      // }),
      // Walk.create({
      //   name: `The Art Institute`,
      //   description: "Many expensive paintings",
      //   category: "architecture",
      //   imageUrl: null,
      //   start: { type: "Point", coordinates: [41.900201, -87.631222] }
      // }),
      // Walk.create({
      //   name: `Museum Campus`,
      //   description: "The Planetarium, Shedd Aquarium, and Field Museum",
      //   category: "historical",
      //   imageUrl: null,
      //   start: {
      //     type: "Point",
      //     coordinates: [41.887567, -87.621791]
      //   }
      // }),
      // Walk.create({
      //   name: `The Loop Architectural Walk`,
      //   description: "Tall buildings for tall folks",
      //   category: "architecture",
      //   imageUrl: null,
      //   start: {
      //     type: "Point",
      //     coordinates: [41.879353, -87.636712]
      //   }
      // })
    ]);

    const archiWalkCoords = [
      [41.879373, -87.63619],
      [41.879405, -87.632306],
      [41.876876, -87.633701],
      [41.876903, -87.62927],
      [41.878349, -87.629329]
    ];

    let architectureWalk = await Promise.all([]);
    const archFunc = async () => {
      let previous = null;
      for (let i = 0; i < archiWalkCoords.length; i++) {
        let previousId = null;
        let start = i === 0;
        if (previous !== null) {
          previousId = previous.dataValues.id;
        }

        let newPoint = await NavPoint.create({
          location: {
            type: 'Point',
            coordinates: [...archiWalkCoords[i]],
          },
          prev: previousId,
          next: null,
          start: start,
          walkId: 7,
        });

        architectureWalk.push(newPoint);

        if (previous !== null) {
          await previous.update({
            next: newPoint.dataValues.id,
          });
        }
        previous = newPoint;
      }
    };

    archFunc();

    const fullstackWalkCoords = [
      [41.895553, -87.638584],
      [41.893958, -87.638504],
      [41.89393, -87.640011],
      [41.895493, -87.640056],
    ];

    let fullstackWalk = await Promise.all([]);

    const fullstackFunc = async () => {
      let previous = null;
      for (let i = 0; i < fullstackWalkCoords.length; i++) {
        let previousId = null;
        let start = i === 0;
        if (previous !== null) {
          previousId = previous.dataValues.id;
        }

        let newPoint = await NavPoint.create({
          location: {
            type: 'Point',
            coordinates: [...fullstackWalkCoords[i]],
          },
          prev: previousId,
          next: null,
          start: start,
          walkId: 1,
        });

        architectureWalk.push(newPoint);

        if (previous !== null) {
          await previous.update({
            next: newPoint.dataValues.id,
          });
        }
        previous = newPoint;
      }
    };

    fullstackFunc();

    for (let i = 1; i < 6; i++) {
      madi.setWalkedByUser(i);
    }

    for (let i = 1; i < 4; i++) {
      madi.setFavoritedByUser(i);
    }

    // return [
    //   ben,
    //   madi,
    //   michelle,
    //   ogilvie,
    //   westTown,
    //   hydePark,
    //   millenium,
    //   grant,
    //   art,
    //   museum,
    //   loop,
    //   architectureWalk,
    //   fullstackWalk,
    // ];
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
