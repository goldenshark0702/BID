const urls = [
  {
    title: "Freelancer Profile",
    links: [
      "https://www.freelancer.com/u/elinazomerfeld",
      "https://www.freelancer.com/search/projects/?ngsw-bypass=&w=f",
      "",
    ],
  },
  {
    title: "GitHub Profile",
    links: ["https://github.com/SoftDeveloper-NL",
      "https://github.com/phantom0109"
      ],
  },
  {
    title: "BlockChain",
    links: [
      "https://roastedbeef.io/",
      "https://app.cripto-country.com/",
      "https://cryptozoon.io",
      "https://risecity.io",
      "https://dearmonsters.info",
      "https://dex.spintop.network/",
      "https://map.somniumspace.com/",
      ""
    ],
  },
  {
    title: "Next.js",
    links: ["https://ine.com/", "https://glovoapp.com/"],
  },
  {
    title: "Bootstrap",
    links: [
      "https://goofy-shaw-6baa6e.netlify.app",
      "https://zen-perlman-12f25d.netlify.app",
      "https://angry-jang-7fdfcf.netlify.app",
      "https://www.easyday.be/",
    ],
  },
  {
    title: "React",
    links: [
      "https://luxury-hotteok-ea9c91.netlify.app",
      "https://incredible-gnome-281353.netlify.app",
      "https://www.producthunt.com/",
      "https://nzxt.com/",
      "https://30shine.com",
      "https://www.vrbo.com/",
      "https://hape.io/ (react+threee.js)"
    ],
  },
  {
    title: "Angular",
    links: [
      "https://www.smileright.com.au/",
      "https://hardcore-turing-c1c568.netlify.app/",
    ],
  },
  {
    title: "Vue",
    links: ["https://keap.com/"],
  },
  {
    title: "Shopify",
    links: [
      "https://subwayaalborg.dk/",
      "https://phoozy.com/",
      "https://www.alphaclothing.co/",
      "https://www.dtlr.com/",
      "https://creatorhandcrafts.com/",
    ],
  },
  {
    title: "Wordpress",
    links: [
      "https://www.sameer.restaurant/",
      "https://stopify.co/7TMBMJ",
      "http://myhomeshopoffice.com/",
      "https://www.gocoastalrealtor.com/",
      "https://bellroy.com/(Wallet Website)",
      "https://www.tilda.com/(Tilda Rice)",
      "https://signals.network/(Design Concept is good)",
      "https://simplychocolate.dk/(Simply Chocolate)",
      "https://www.fatboy.com/(Fat Boy)",
      "https://www.lumi.com/(Packaging Redefined)",
      "https://ritual.com/(Vitamins)",
      "http://www.southernstylespices.com/(Spices)",
      "https://www.soylent.com/product/drink/(Soylent Drink)",
      "https://kencko.com/(Kencho instant drink)",
      "https://www.studioneat.com/(Studio Neat)",
      "http://thecoloradan.com/(Real Estate)",
      "http://tbilisigardens.ge/en(Apartments)",
      "https://www.forhims.com/(Men Products)",
      "https://www.gainful.com/(Gainful Protein)",

    ],
  },
  {
    title: "Laravel",
    links: [
      "https://www.sylky.com.au/",
      "https://www.wattbike.com",
      "https://www.lambdaphx.org/",
      "https://www.peakcottages.com/",
      "http://www.restorationbodyworkaz.com",
    ],
  },
  {
    title: "Design",
    links: [
      "https://eainteriordesign.com/",
      "https://www.coravity.com/",
    ],
  },
  {
    title: "Python",
    links: [
      "https://www.vacasa.com/",
      "https://www.eyemyeye.com/",
    ],
  },
  {
    title: "Woocommerce",
    links: [
      "https://moeve-bikes.de/",
      "http://azomco.com/ ( ONLINE STORE Wordpress Woocommerce)",
      ""
    ],
  },
  {
    title: "Three.js",
    links: [
      "https://bruno-simon.com",
      "https://hape.io/ (react+threee.js)",
    ],
  },
  {
    title: "WebFlow",
    links: [
      "https://www.digitalofthings.com/",
      "https://www.lacucina.io/",
      "https://www.wearecandidly.com/",
      "https://www.racontenous.fr/",
      "https://www.aluce.agency/",
      "https://www.acton.space/",
      "https://midlandswhiskeyexperiences.ie/",
    ],
  },
  {
    title: "Django",
    links: [
      "https://react-main-avatar-cbtixfq40-anthonyjackson1019.vercel.app/#",
      "(Code)https://github.com/coolguy741/ax_dapp_recent",
    ],
  },
  {
    title: "LTD",
    links: [
      "https://www.alwinsley.com/wordpress/",
      "https://coffeestore.ps/",
      "https://laxel.co/",
      "http://www.brtemp.co.uk/mlr/",
      "https://www.bellaitaliadenver.com/",
      "https://hireahackers.com/",
      "https://rehobothremarket.com/",
      "https://kratomatlast.com",
      "https://seamlessswap.com/ (Crypto)",
      "https://spacegirlcollection.com/ (NFT)",
      "Https://creditassassins.com/ (",
      "https://btwonproduction.co.za (Music)",
      "https://thebarbiebox.com/ (SPA)",
      "https://bellezacolombianaspa.com/ (SPA)",
      "http://simplybeautifiedmedspa.com/ (SPA)",
      "http://balineseluxurytouch.ae/ (SPA)",
      "https://lieblingscafe-salzhausen.de/ (Restaurant)",
      "https://greencounselingservicesllc.com/ (Consultation)",
      "https://ifxsfx.com (Video Production)",
      "https://chefshome.info/ (Chef)",
      "https://day2daypayments.com/ (",
      "https://motivatedprocleaning.com/ (cleaning)",
      "https://magneticpill.com/ (Medical)",
      "https://test.avoteo.io/ (Crypto)",
      "http://smktoken.com (HTML)",
      "http://www.cryptocashmachine.io/# (Crypto)",
      "https://www.citadel-advisors.net/",
      "https://www.purebalancelab.com/",
      "https://o-architecture.co.uk",
      "http://www.formationstone.com/",
      "https://show-case.caebusinesssolutions.co.uk",
      "",
      "",
    ],
  },
];
