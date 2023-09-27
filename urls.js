const urls = [
  {
    title: "Freelancer Profile",
    links: [
      "https://www.freelancer.com/u/elinazomerfeld",
      "https://www.freelancer.com/search/projects/?ngsw-bypass=&w=f",
    ],
  },
  {
    title: "GitHub Profile",
    links: ["https://github.com/SoftDeveloper-NL",
      "https://github.com/phantom0109",
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
    ],
  },
  {
    title: "Learning Ethereum (must read):",
    links: [
      "https://ethereum.org/en/# (Start by learning Ethereum here)",
      "https://github.com/ethereumbook/ethereumbook/# (Mastering Ethereum)",
      "https://github.com/chronaeon/beigepaper/blob/master/beigepaper.pdf# (Ethereum beige paper, which simplifies the yellow paper available here)",
      "https://ethereum.github.io/yellowpaper/paper.pdf# (understand the white paper before attempting to read the yellow paper - Yellow paper)" ,
      "https://weekinethereumnews.com/# (Stay up to date with the latest Ethereum development)",
    ],
  },
  {
    title: "Smart Contracts Development (must read):",
    links: [
      "https://cryptozombies.io/# (Cryptozombies)",
      "https://docs.openzeppelin.com/contracts/4.x/# (OpenZeppelin contracts)",
      "https://docs.soliditylang.org/en/v0.8.9/# (Solidity)",
    ],
  },
  {
    title: "More Ethereum:",
    links: [
      "https://github.com/Scanate/EthList/# (this list is awesome but a little overwhelming) - Collection of resources about all things related to Ethereum" ,
      "https://www.paradigm.xyz/# (Paradigm blog posts)",
    ],
  },
  {
    title: "DeFi:",
    links: [
      "https://github.com/OffcierCia/DeFi-Developer-Road-Map/# (DeFi Roadmap)",
    ],
  },
  {
    title: "Learning about DeFi Protocols (must read): - All of the following paper's are a great starting point to understand how these major DeFi protocols work.",
    links: [
      "https://hackmd.io/@HaydenAdams/HJ9jLsfTz?type=view/# (Uniswap whitepaper)",
      "https://docs.uniswap.org/protocol/V1/introduction/# (Uniswap V1)",
      "https://uniswap.org/whitepaper.pdf# (Uniswap V2)",
      "https://uniswap.org/whitepaper-v3.pdf# (Uniswap V3)",
      "https://compound.finance/docs/# (Compound)",
      "https://docs.aave.com/developers/# (Aave)",
    ],
  },
  {
    title: "Next.js",
    links: [
      "https://ine.com/", 
      "https://glovoapp.com/",
    ],
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
      "https://hape.io/# (react+threee.js)"
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
      "https://bellroy.com/# (Wallet Website)",
      "https://www.tilda.com/# (Tilda Rice)",
      "https://signals.network/# (Design Concept is good)",
      "https://simplychocolate.dk/# (Simply Chocolate)",
      "https://www.fatboy.com/# (Fat Boy)",
      "https://www.lumi.com/# (Packaging Redefined)",
      "https://ritual.com/# (Vitamins)",
      "http://www.southernstylespices.com/# (Spices)",
      "https://www.soylent.com/product/drink/# (Soylent Drink)",
      "https://kencko.com/# (Kencho instant drink)",
      "https://www.studioneat.com/# (Studio Neat)",
      "http://thecoloradan.com/# (Real Estate)",
      "http://tbilisigardens.ge/en/# (Apartments)",
      "https://www.forhims.com/# (Men Products)",
      "https://www.gainful.com/# (Gainful Protein)",

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
      "http://azomco.com/# (ONLINE STORE Wordpress Woocommerce)",
      ""
    ],
  },
  {
    title: "Three.js",
    links: [
      "https://bruno-simon.com",
      "https://hape.io/# (react+threee.js)",
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
      https://us.qualatex.com/en-us/ (Python/Django)
http://digicorp.com.bo/ (Python/Django)
https://sovasystems.com (SAAS based web application)
https://fannel.app
https://outsized.com
https://valence.community/

    ],
  },
  {
    title: "Games",
    links: [
      "https://www.risehero.io/#/",
      "https://www.genopets.me/",
      "https://www.top100arena.com/",
      "https://www.epicgames.com/store/en-US/",

      "https://rainship.io/# (NFT Game)",
      "https://mint.dentedfeelsnft.com/# (NFT Game)",
      "https://0xmfers.com/# (NFT Game)",

      "https://www.climbtoken.finance/# (Defi Game)",
      "https://app.highlord.io/# (Defi Game)",
      "https://potluckprotocol.com/# (Defi Game)",

      "https://www.samodao.finance/stake/# (DAO Game)",
      "https://app.metavault.org/# (DAO Game)",

      "https://magicdoge.net/# (MEME Token Game)",
      "https://www.fiestacoin.org/# (MEME Token Game)",
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
      "https://seamlessswap.com/# (Crypto)",
      "https://spacegirlcollection.com/# (NFT)",
      "Https://creditassassins.com/# (",
      "https://btwonproduction.co.za/# (Music)",
      "https://thebarbiebox.com/# (SPA)",
      "https://bellezacolombianaspa.com/# (SPA)",
      "http://simplybeautifiedmedspa.com/# (SPA)",
      "http://balineseluxurytouch.ae/# (SPA)",
      "https://lieblingscafe-salzhausen.de/# (Restaurant)",
      "https://greencounselingservicesllc.com/# (Consultation)",
      "https://ifxsfx.com/# (Video Production)",
      "https://chefshome.info/# (Chef)",
      "https://day2daypayments.com/# (",
      "https://motivatedprocleaning.com/# (cleaning)",
      "https://magneticpill.com/# (Medical)",
      "https://test.avoteo.io/# (Crypto)",
      "http://smktoken.com/# (HTML)",
      "http://www.cryptocashmachine.io/# (Crypto)",
      "https://www.citadel-advisors.net/",
      "https://www.purebalancelab.com/",
      "https://o-architecture.co.uk",
      "http://www.formationstone.com/",
      "https://show-case.caebusinesssolutions.co.uk",
      "http://matrixworld.org/# (BlockChain)",
      "https://dex.spintop.network/# (NFT)",
      "https://map.somniumspace.com/# (NFT)",
      "https://www.gem.xyz/collection/alienfrensnft/# (Ethereum)",
      "https://bsc.xbxcoin.com/# (token bridge)",
      "https://avaxfomo.netlify.app/# (staking site)",
      "https://stakemmx.herokuapp.com/# (staking site)",
      "https://Followupcoinpresale.com/# (presale token site)",
      "https://prxmultisender.herokuapp.com/# (multysend)",
      "https://amazing-visvesvaraya-aab45b.netlify.app/# (ido project)",
      "https://app.otterclam.finance/# (ido project)",
      "https://admin.usth.finance/# (dapp)",
      "https://solporate.netlify.app/# (NFT minting site)",
      "https://flamboyant-goldwasser-f48fb2.netlify.app/# (NFT minting site)",
      "https://nearnauts.io/# (NFT marketplace with NEAR PROTOCOL)",
      "https://www.bigtos.com/# (Portfolio)",
      "http://boweryfarming.com/# (Portfolio)",
      "https://www.poweroftext.com/# (Portfolio)",
      "http://www.findclassesnow.com/# (Portfolio)",
      "http://www.2mtns.com/# (Portfolio)",
      "https://www.kinghillstravels.com/# (Portfolio)",
      "https://www.cliquify.me/# (Portfolio)",
      "http://www.mobileemart.com/# (Portfolio)",
      "http://ereality.cz/# (Portfolio)",
      "http://conversejob.com/# (Portfolio)",
      "https://www.jenjoes.com/# (Portfolio)",
      "https://www.ninjaprotocol.io/# (Solana gaming)",
      "http://www.febcprocure.com/# (Procurement Management System)",
      "https://nationalcoronavirushotline.com/# (Corona Virus Management System)",
      "https://www.guestsandco.com/# (Renting property on AIR BND and similar Platforms)",
      "https://poopie-pibull.vercel.app/# (NFT)",
      "https://estimator.rdvault.co.uk/# (Estimator project)",
      "https://drive.google.com/drive/folders/18I44rJiJLAGalXkhq8_UuIwdtoelb4uM?usp=sharing/# (Online quiz system project)",
      "https://drive.google.com/drive/folders/1u40ZbwNvKzIlJX7oNwjaDHGdLisEdIOv?usp=sharing/# (Time tracker desktop application)",
      "URL : https://nailstry.com/# (Nailstry project)",
    ],
  },
];
