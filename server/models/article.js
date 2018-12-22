// const Theme = require('./theme');

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    thumbnail: {
      type: DataTypes.STRING,
    },
    theme_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: Theme,
      //   key: 'id',
      //   deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
      // },
    },
    destination_id: {
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.TEXT,
    },
    bottom_content: {
      type: DataTypes.TEXT,
    },
    top_titles: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    top_contents: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    top_images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    top_list_title: {
      type: DataTypes.STRING,
    },
    top_list_link: {
      type: DataTypes.STRING,
    },
    top_list_items: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    top_list_images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    published_at: DataTypes.DATE,
  });

  if (process.env.NODE_ENV !== 'production') {
    Article.sync({ force: true }).then(() => Article.bulkCreate([
      {
        id: 1,
        title: 'The Lopapeysa',
        slug: 'the-lopapeysa',
        description:
            'Lopapeysa is the name of the traditional wool sweater of Iceland. What is its origin and how to find the original one ? Find out on Traveling Maude.',
        image:
            'https://res.cloudinary.com/heyjltyh0/image/upload/v1543702414/Articles/The_lopapeysa.jpg',
        thumbnail:
            'https://res.cloudinary.com/heyjltyh0/image/upload/v1543888416/Articles/The_lopapeysa_thumbnail.jpg',
        theme_id: 2,
        destination_id: 1,
        content:
            'This is the traditional wool sweater that you will find all over Iceland. They are easy to spot by their distinct decorative patterns around the neck opening. Whether you are a local or a tourist, everyone wear them proudly in the streets of Reykjavik or in the many trails of this peaceful island.<br/><br/>The Icelandic name Lopapeysa is a literal translation of "wool sweater" ("lopa"=wool, "peysa"=sweater) but they are not made from your average wool. The unique breed of sheep, native from Iceland and protected from centuries of isolation, from where the wool is make these sweater uniques! It will keep you warm whatever the weather.<br/><br/>As their popularity grew, more variety began to appear in stores all over the country. If you want to find the original Lopapeysa, here are some tips that may help you:',
        published_at: new Date(2018, 11, 1),
        top_list_title: 'Things to look to find the original Lopapeysa:',
        top_list_items: [
          'Watch out the tags! If you find the indication “Designed in Iceland” it may not be either hand made in Iceland or contain Icelandic wool.',
          'Natural colors. The naturals colors are shades of grey, black white or brown/beige. If you find a Lopapeysa with other colors, they are likely dyed.',
          'Price! A hand made Lopapeysa with Icelandic wool is expensive. It will likely set you back 250-350$ (CAD). If you find a much lower price, it can be made elsewhere or from lower quality materials.',
          'Check for the decorative neck patterns. If do not have those, you probably won’t have a Lopapeysa sweater.',
          'Symmetry! This is mostly if you want a hand knitted one. They usually are symmetrical (no difference between the front and the back), by the way they are knitted.',
        ],
        top_list_images: [
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1543890846/Articles/Iceland_flag.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1543890940/Articles/Natural_wool.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1543891046/Articles/Price_tag.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1543892678/Articles/Lopapeysa_sweater.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1543891199/Articles/Lopapeysa_pattern.jpg',
        ],
      },
      {
        id: 2,
        title: 'Icelandic Foss',
        slug: 'icelandic-foss',
        description:
            'On your trip across Iceland, you will encounter many of their renowned waterfall. Some of them even hide small secrets for the watchful eye. Here are the top 5 “foss” that are worthy of going out of your way to reach.',
        image:
            'https://res.cloudinary.com/heyjltyh0/image/upload/v1545098114/Articles/Iceland_foss.jpg',
        thumbnail:
            'https://res.cloudinary.com/heyjltyh0/image/upload/v1545098105/Articles/Iceland_foss_thumbnail.jpg',
        theme_id: 3,
        destination_id: 1,
        content:
            'Iceland is known for many aspects of its landscape. Black volcanic plains from many ages ago, valley of moss covered stones, endless glaciers that constantly release ice blocks the size of houses, are all part of the natural vista there. Throughout all of this natural wonder, one marvel of nature’s power stand out all over the Icelandic territory, the “Foss”!<br/><br/>From the Old Norse word “fors”, “foss” literally translate to Waterfall. Some are easy to pronounce and even translate, such as “Goðafoss” or Waterfall of the gods, but others, such as “Seljalandsfoss” are a bit harder to grasp. Either way, keep a close eye for the “foss” suffix, as it will likely indicate the presence of a waterfall.<br/><br/>On your trip across Iceland, you will encounter many of their renowned waterfall. Some of them even hide small secrets for the watchful eye. Here are the top 5 “foss” that are worthy of going out of your way to reach.',
        published_at: new Date(2018, 11, 17),
        top_titles: [
          'Seljalandsfoss',
          'Skógafoss',
          'Gullfoss',
          'Bonus : Fjaðrárgljúfur',
          'Dettifoss',
          'Goðafoss',
        ],
        top_contents: [
          'At the extremity of the golden circle, this 65m high waterfall is one of the few in Iceland where you can go behind it! Bring some waterproof gear if you want to get close or behind as you will certainly get covered in cold water.<br/><br/>You can also trek a bit along the cliffs to see the waterfall from a distance.',
          'This is the most well-known waterfall in Iceland and for a reason. From the bottom or the top, the view you get there are breathtaking. If you have the chance, there is a camping not 200m from the base of the waterfall.<br/><br/>If you want to hike a bit and discover this place hidden secret, we recommend you climb up the stairs on the right of “Skógafoss” and then continue on the path. You will find that the waterfall you just climbed is only the last of a series of waterfalls that go up the mountains. Each time you come around a corner, you will discover another one!',
          'For its access from the golden circle and its luscious vegetation, Gullfoss is a must see. If you plan the golden circle tour, we highly recommend you stop there. The most impressive feature, other than the high water volume that tumble down this waterfall, was to see how much the waterfall has an impact on the local fauna. With all the moisture coming up and settling down onto both side of the ravine, thick grass and shrubs were flourishing. That is something you won’t see at other waterfall.',
          'Not a waterfall per name, this canyon containing small rivers is definitely something to see. To get there, you will need exit route 1, use the dirt road and drive about 4km. With this, you will be far from tourists buses that can’t reach this place. That makes it a quiet spot, where only locals and brave tourist will be present. You will find there a canyon covered in moss, where you will probably take the best picture of your trip.',
          'Contrary to most waterfall, this one pour water filled with volcanic ashes and dirt. Even if this is not your average clear water waterfall, the sheer volume of water passing through will amaze you. Considered the most powerful waterfall in Europe (Yes, Iceland is part or Europe) with it’s 200m3/s this is certainly a breath taker.',
          'Filled with history, this waterfall is also one of the most well-known in Iceland. The story says that after an Icelandic “Lögsögumad” (judge) convinced the “Alþingi” (Icelandic parliament) to adopts Christianity, he returned home to his village near this waterfall and, as an example of the new ways, decides to throw idols of the old Nordic religion in this fall. The “Goðafoss”, or waterfall of the gods was then named after this event.',
        ],
        top_images: [
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1545098534/Articles/Seljalandsfoss.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1545098619/Articles/Skogafoss.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1545098701/Articles/Gullfoss.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1545098795/Articles/Canyon.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1545098932/Articles/Dettifoss.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1545099099/Articles/Godafoss.jpg',
        ],
      },
      {
        id: 3,
        title: 'How to choose your Porto Cellar visit',
        slug: 'porto-cellar-visit',
        description:
            'On your trip in Porto, you will probably want to visit a Porto Cellar. We gathered some tricks to help you find the best visit!',
        image:
            'https://res.cloudinary.com/heyjltyh0/image/upload/v1545514334/Articles/Porto_cellar.jpg',
        thumbnail:
            'https://res.cloudinary.com/heyjltyh0/image/upload/v1545514334/Articles/Porto_cellar_thumbnail.jpg',
        theme_id: 2,
        destination_id: 2,
        content:
            'The city in front of Porto (Vila Nova de Gaia) is well known for its Port cellars. Even nowadays, if not a single drop of Port Wine is produced there, the city contains a rich history in making this wine.<br/><br/>All alongside the Douro river in this city, you will find many “Barco Rabelo”, old wooden boats that were once used to transfer the port from the vineyards upstream to the city for storage and aging. These are now used for marketing about the different Port House you may want to visit.<br/><br/>When choosing a Port Cellar visit, there are some characteristics you may want to consider, depending on the experience you want to have.<br/><br/>',
        bottom_content:
            'As for our experience, we highly recommend you check out the “<a href="http://portoaugustos.pt/site/?lang=en&utm_source=travelingmaude.com&utm_medium=referral" rel="noreferrer noopener">Porto Augusto\'s</a>” cellar, as it is a small Portuguese family owned cellar with a great guided tour and a great selection of tasting option. It cost 5 euros per person (The fee is reimbursed if you buy a bottle), and you can book your desired tour directly at their cellar with your desired tour language.',
        published_at: new Date(2018, 11, 22),
        top_list_title: 'Things to look for while booking your Port Cellar visit:',
        top_list_items: [
          'Cellar current owners. Much of the current port cellar in Gaia is no longer owned by the Portuguese. If you want to have the genuine experience, look for cellars still owned and run by Portuguese families.',
          'Type of visit. You will find two types of visit. Either an audio or a guided tour is usually available. We highly recommend a guided tour as you can easily get answer all the questions you may have on the origins, production, bottling, aging process, grape types, Vintage VS LBV ports, and even more.',
          'Available tasting. All cellar in the area offers a visit/tasting tour, but only some of them have the best experience for your bucks. Look for the cellar that deduct the price of the tour when you buy a bottle (You will most probably buy one either way), and ones that offer a wide variety of tasting ports. You may want to taste a young Ruby port, a white port, either a LBV or a Vintage and old port (20, 30 or even 40 years old). Those tastings will greatly help you determine which one you like the most.',
          'Exclusive or hard to find portos. Visiting a cellar is an opportunity to find bottles that are either not available in your region or too expensive.',
          'Last but not least, price. You can find an amazing guided cellar visit with a great selection of tasting options for around 10-15$ per person, depending on the season. Any higher that this and you may have overpaid for your visit.',
        ],
        top_list_images: [
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1545514866/Articles/Portugal_flag.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1545515003/Articles/Guide.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1545515117/Articles/Tasting.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1545515207/Articles/VIntage_port.jpg',
          'https://res.cloudinary.com/heyjltyh0/image/upload/v1543891046/Articles/Price_tag.jpg',
        ],
      },
    ]));
  }
  return Article;
};
