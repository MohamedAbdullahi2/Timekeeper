const db = require("../config/connection");
const Product = require("../models/Product");
// const watches = require("./watchdata.json");

db.once("open", async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(

      [
          {
            "name": "Casio Edifice",
            "image": "edifice2.png",
            "description": "Go big with the classic EDIFICE chronograph in a bold pairing of fine detail and oversized design. Inspired by motorsports, these timepieces feature dynamic color combinations and striking inset dials for a style that exudes speed and intelligence. ",
            "price": 118.26,
            "brand": "Casio",
            "model": "EFV620D",
            "category": ["sport", "quartz", "chronograph", "analog", "fashion"],
            "tags": ["sport", "quartz", "chronograph", "analog", "fashion"],
            "quantity": 10
          },
          {
            "name": "Casio G Shock",
            "image": "gshock1.png",
            "description": "A slapshot by a professional hockey player was all it took to send this G-Shock into history and into a goalies mitt, literally. If it can handle a slapshot, it can handle your life. We like to refer to it as the quintessential G-Shock.",
            "price": 136.0,
            "brand": "Casio",
            "model": "DW5600E",
            "category": ["sport", "quartz", "digital"],
            "tags": ["sport", "quartz", "digital"],
            "quantity": 10
          },
          {
            "name": "Casio G Shock",
            "image": "gshock2.png",
            "description": "Casual solar-powered watch with multiple functions including multi-band atomic timekeeping, shock resistance, LED backlight, world time (29 time zones, 48 cities), city code display, five daily alarms, 1/100-second stopwatch, countdown timer, full auto-calendar, battery indicator, and power-saving function",
            "price": 179.99,
            "brand": "Casio",
            "model": "DWM5610",
            "category": ["sport", "quartz", "digital", "solar"],
            "tags": ["sport", "quartz", "digital", "solar"],
            "quantity": 10
          },
          {
            "name": "Casio G Shock",
            "image": "gshock3.png",
            "description": "200-meter water resistance and a convenient EL backlight display packed into a design that is tough, rugged, and fashionable.",
            "price": 116.66,
            "brand": "Casio",
            "model": "DWM5610",
            "category": ["sport", "quartz", "digital"],
            "tags": ["sport", "quartz", "digital"],
            "quantity": 10
          },
          {
            "name": "Casio Pro Trek",
            "image": "protrek1.png",
            "description": "From the Triple Sensor Version 3 PRO TREK lineup come new designs that are suitable for both outdoor and daily wear. This model feature big Arabic numeral hour markers along with bold stainless steel bezels. This high-contrast simple designs make it perfect for daily use in addition to outdoor wear. Other features include Triple Sensor (bearing, altitude/barometric pressure, temperature), one-touch measurement button, Tough Solar, and more.",
            "price": 249.99,
            "brand": "Casio",
            "model": "PRG600",
            "category": ["sport", "quartz", "hybrid", "solar", "gps"],
            "tags": ["sport", "quartz", "hybrid", "solar", "gps"],
            "quantity": 10
          },
          {
            "name": "Citizen Corso",
            "image": "citizen1.png",
            "description": "The byword is versatility for this handsome 3-hand timepiece crafted in stainless steel. Features include a smart black dial with centre pattern, luminous hands and markers and a date indicator, all set beneath sapphire crystal. Sporting a 41mm screw-back case,and a fold over clasp with push button. Water resistant up to 100 metres.",
            "price": 250.98,
            "brand": "Citizen",
            "model": "BM7100",
            "category": ["classic", "quartz", "solar", "dress", "analog"],
            "tags": ["classic", "quartz", "solar", "dress", "analog"],
            "quantity": 10
          },
          {
            "name": "Citizen Corso",
            "image": "citizen2.png",
            "description": "This CITIZEN® Corso collection offers timepieces that are accented with vibrant diamond hour markers in a combination of functional simplicity with a touch of elegance. This timepiece, shown here in a gold-tone stainless steel case and bracelet, adds an extra touch with the azure blue dial. Featuring our Eco-Drive technology – powered by light, any light. Never needs a battery.",
            "price": 374.98,
            "brand": "Citizen",
            "model": "BM7103",
            "category": ["classic", "quartz", "solar", "dress", "analog", "female"],
            "tags": ["classic", "quartz", "solar", "dress", "analog"],
            "quantity": 10
          },
          {
            "name": "Citizen Promaster Dive",
            "image": "citizen3.png",
            "description": "Explore the deepest depths of style with Citizen Promaster Eco-Drive Dive watch featuring the beloved blue and red bezel. This must-have diving watch also features a silver-tone stainless steel case, a blue dial with a 3-hand movement and date, luminous hands and markers. ISO compliant with a screw-down crown and water resistance to 200 metres.",
            "price": 320.46,
            "brand": "Citizen",
            "model": "BN0168",
            "category": ["sport", "quartz", "solar", "analog"],
            "tags": ["sport", "quartz", "solar", "analog"],
            "quantity": 10
          },
          {
            "name": "Citizen Promaster Skyhawk",
            "image": "citizen4.png",
            "description": "This precision and grace is exhibited in the CITIZEN® PROMASTER Blue Angels Skyhawk A-T with atomic timekeeping in 43 cities. Other features include a 1/100-second chronograph measuring up to 24 hours, a perpetual calendar, dual time, 2 alarms, a countdown timer, digital backlight and UTC displays, a power reserve indicator, and a pilot's rotating slide rule bezel.",
            "price": 575.75,
            "brand": "Citizen",
            "model": "JY8078",
            "category": ["sport", "quartz", "solar", "hybrid", "chronograph"],
            "tags": ["sport", "quartz", "solar", "hybrid", "chronograph"],
            "quantity": 10
          },
          {
            "name": "Fossil HR",
            "image": "fossil1.png",
            "description": "The Fossil Hybrid HR is a smartwatch that combines the traditional look of an analog watch with the advanced features of a smartwatch. It has a heart rate monitor, fitness tracking, notifications, and customizable buttons, all while maintaining a classic, timeless style.",
            "price": 219.0,
            "brand": "Fossil",
            "model": "FTW7079",
            "category": [
              "sport",
              "quartz",
              "smartwatch",
              "digital",
              "female",
              "fashion"
            ],
            "tags": ["sport", "quartz", "smartwatch", "digital", "fashion"],
            "quantity": 10
          },
          {
            "name": "Fossil Carlie",
            "image": "fossil2.png",
            "description": "The Fossil Carlie is a women's watch featuring a 35mm rose gold-tone stainless steel case, a white mother-of-pearl dial, and a matching rose gold-tone bracelet strap. It also includes three subdials for tracking day, date, and 24-hour time, as well as a water resistance of up to 50 meters.",
            "price": 143.99,
            "brand": "Fossil",
            "model": "ES4699",
            "category": ["classic", "quartz", "analog", "female", "fashion"],
            "tags": ["classic", "quartz", "analog", "fashion"],
            "quantity": 10
          },
          {
            "name": "Fossil Gen 6",
            "image": "fossil3.png",
            "description": "The Fossil Gen 6 is a stylish smartwatch that runs on Google's Wear OS platform and features a circular AMOLED touchscreen display. It offers fitness tracking, heart rate monitoring, smartphone notifications, and voice control via Google Assistant.",
            "price": 429.0,
            "brand": "Fossil",
            "model": "FTW4069V",
            "category": [
              "sport",
              "quartz",
              "female",
              "smartwatch",
              "fashion",
              "digital",
              "gps"
            ],
            "tags": ["sport", "quartz", "smartwatch", "fashion", "digital", "gps"],
            "quantity": 10
          },
          {
            "name": "Fossil Jacqueline",
            "image": "fossil4.png",
            "description": "The Fossil Jacqueline is a women's watch with a classic and elegant design. It features a 36mm stainless steel case, a quartz movement, and a leather strap, making it a timeless accessory suitable for any occasion.",
            "price": 134.27,
            "brand": "Fossil",
            "model": "ES3843",
            "category": ["classic", "quartz", "female", "fashion", "analog"],
            "tags": ["classic", "quartz", "fashion", "analog"],
            "quantity": 10
          },
          {
            "name": "Garmin Fenix 6 Pro",
            "image": "garmin1.png",
            "description": "The Garmin Fenix 6 Pro is a premium GPS multisport watch designed for outdoor enthusiasts and athletes. It offers advanced features such as onboard maps, music storage, heart rate monitoring, and a long battery life, making it a top choice for those seeking a reliable and rugged wearable device.",
            "price": 564.99,
            "brand": "Garmin",
            "model": "010-02158-01",
            "category": [
              "sport",
              "quartz",
              "female",
              "fashion",
              "digital",
              "smartwatch",
              "gps"
            ],
            "tags": ["sport", "quartz", "fashion", "digital", "smartwatch", "gps"],
            "quantity": 10
          },
          {
            "name": "Garmin Instinct Solar",
            "image": "garmin2.png",
            "description": "The Garmin Instinct Solar is a rugged GPS smartwatch designed for outdoor enthusiasts. It features a solar charging lens, heart rate monitoring, GPS tracking, and a range of activity tracking features to help you stay on top of your fitness goals while exploring the great outdoors.",
            "price": 299.99,
            "brand": "Garmin",
            "model": "010-02293-10",
            "category": ["sport", "quartz", "female", "digital", "smartwatch", "gps"],
            "tags": ["sport", "quartz", "digital", "smartwatch", "gps"],
            "quantity": 10
          },
          {
            "name": "Garmin Vivoactive 4s",
            "image": "garmin3.png",
            "description": "The Garmin vivoactive 4s is a versatile smartwatch that combines fitness tracking and smart features in a compact size. With a range of sensors and built-in GPS, it can track a variety of activities including running, swimming, and cycling, while also providing notifications, music control, and mobile payments.",
            "price": 512.78,
            "brand": "Garmin",
            "model": "010-02172-11",
            "category": [
              "sport",
              "quartz",
              "female",
              "digital",
              "smartwatch",
              "gps",
              "fashion"
            ],
            "tags": ["sport", "quartz", "digital", "smartwatch", "gps", "fashion"],
            "quantity": 10
          },
          {
            "name": "Grand Seiko Diver",
            "image": "grandseiko1.png",
            "description": "With its screw-down crown, distinctive hands generously coated with Lumibrite, one-way rotating bezel and water resistant to a depth of 200 meters, this watch provides all the security and legibility that the diver requires. It also offers the precision and durability of Grand Seiko's divers' high-beat movement, Caliber 9S85.",
            "price": 9500.0,
            "brand": "Grand Seiko",
            "model": "SBGH289",
            "category": ["sport", "mechanical", "luxury", "analog"],
            "tags": ["sport", "mechanical", "luxury", "analog"],
            "quantity": 10
          },
          {
            "name": "Grand Seiko Snowflake",
            "image": "grandseiko2.png",
            "description": "The SBGA211 is powered by Spring Drive, which combines the motive force of a mainspring found with the high precision of a quartz watch. The case and bracelet are made with high-intensity titanium, providing a scratch and corrosion resistant finish. The blue steel second hand moves smoothly in glide motion, and glows over the contrasting pure white face to create an even more dramatic movement. It has a 72-hour (3-day) power reserve, and a power reserve indicator on the bottom left of the dial.",
            "price": 8000.0,
            "brand": "Grand Seiko",
            "model": "SBGA211",
            "category": ["classic", "mechanical", "luxury", "analog", "dress"],
            "tags": ["classic", "mechanical", "luxury", "analog", "dress"],
            "quantity": 10
          },
          {
            "name": "Grand Seiko Snowflake",
            "image": "grandseiko3.png",
            "description": "The SBGA413 is powered by Spring Drive, which combines the motive force of a mainspring found with the high precision of a quartz watch. The case and bracelet are made with high-intensity titanium, providing a scratch and corrosion resistant finish. The silver steel second hand moves smoothly in glide motion, and glows over the contrasting pure white face to create an even more dramatic movement. It has a 72-hour (3-day) power reserve, and a power reserve indicator on the bottom left of the dial.",
            "price": 8600.0,
            "brand": "Grand Seiko",
            "model": "SBGA413",
            "category": [
              "classic",
              "mechanical",
              "luxury",
              "female",
              "analog",
              "dress"
            ],
            "tags": ["classic", "mechanical", "luxury", "analog", "dress"],
            "quantity": 10
          },
          {
            "name": "Michael Kors Parker",
            "image": "mk1.png",
            "description": "This sleek and chic timepiece is trimmed with sparkling pavé stones for an elegant, uptown sensibility. We updated this favorite with a fresh mix of tones and textures, like a brushed stainless steel and high-shine acetate bracelet for modern, feminine appeal. With just the right amount of sparkle, it’s the perfect watch to glam up an everyday look, or to complete a sophisticated ensemble.",
            "price": 292.5,
            "brand": "Michael Kors",
            "model": "MK5896",
            "category": [
              "classic",
              "quartz",
              "fashion",
              "female",
              "chronograph",
              "analog"
            ],
            "tags": ["classic", "quartz", "fashion", "chronograph", "analog"],
            "quantity": 10
          },
          {
            "name": "Michael Kors Ritz",
            "image": "mk2.png",
            "description": "Radiant and refined, the Ritz watch offers a feminine take on classic menswear styling. With a rose gold-tone finish, this stainless steel timepiece is detailed with chronograph dials and pavé stones around the bezel.",
            "price": 180.0,
            "brand": "Michael Kors",
            "model": "MK6357",
            "category": [
              "classic",
              "quartz",
              "fashion",
              "female",
              "chronograph",
              "analog"
            ],
            "tags": ["classic", "quartz", "fashion", "chronograph", "analog"],
            "quantity": 10
          },
          {
            "name": "Michael Kors Runway",
            "image": "mk3.png",
            "description": "A perennial favorite, our iconic Runway watch gets a slim update this season. We love how the sleek, understated dial reads modern, and in rose gold-tone stainless steel, easily adds a feminine touch to your favorite looks.",
            "price": 234.99,
            "brand": "Michael Kors",
            "model": "MK3197",
            "category": ["classic", "quartz", "fashion", "female", "analog"],
            "tags": ["classic", "quartz", "fashion", "analog"],
            "quantity": 10
          },
          {
            "name": "Michael Kors Runway",
            "image": "mk4.png",
            "description": "A monochrome masterpiece, our Slim Runway watch is designed with a polished all-black finish for a tough-luxe vibe. With tonal time stops and our signature engraved logo, this bold piece is the epitome of chic. Slip it on with everything from your favorite off-duty looks to go-to daytime uniforms for a sleek finish.",
            "price": 221.25,
            "brand": "Michael Kors",
            "model": "MK8507",
            "category": ["classic", "quartz", "fashion", "analog"],
            "tags": ["classic", "quartz", "fashion", "analog"],
            "quantity": 10
          },
          {
            "name": "Seiko Alpinist",
            "image": "seiko1.png",
            "description": "The Seiko Alpinist is a highly-regarded watch that combines classic design with practical features for outdoor enthusiasts. It features a compass bezel, date display, and a durable yet stylish stainless steel case and bracelet.",
            "price": 1380.0,
            "brand": "Seiko",
            "model": "SPB119",
            "category": ["classic", "mechanical", "analog"],
            "tags": ["classic", "mechanical", "analog"],
            "quantity": 10
          },
          {
            "name": "Seiko Cocktail Time",
            "image": "seiko2.png",
            "description": "The Seiko Cocktail Time is a popular dress watch collection that takes inspiration from the world of mixology. This watch feature a green dial color and patterns that are designed to mimic the appearance of cocktails, making a stylish and unique addition to any outfit.",
            "price": 661.5,
            "brand": "Seiko",
            "model": "SRPD37",
            "category": ["classic", "mechanical", "analog", "dress"],
            "tags": ["classic", "mechanical", "analog", "dress"],
            "quantity": 10
          },
          {
            "name": "Seiko Cocktail Time",
            "image": "seiko3.png",
            "description": "The Seiko Cocktail Time is a popular dress watch collection that takes inspiration from the world of mixology. This watch feature a cream dial color and patterns that are designed to mimic the appearance of cocktails, making a stylish and unique addition to any outfit.",
            "price": 514.09,
            "brand": "Seiko",
            "model": "SRRY028",
            "category": ["classic", "mechanical", "analog", "dress", "female"],
            "tags": ["classic", "mechanical", "analog", "dress"],
            "quantity": 10
          },
          {
            "name": "Seiko 5 Diver",
            "image": "seiko4.png",
            "description": "The Seiko5 SRPD51 diver is a mechanical watch with a 41mm stainless steel case and bracelet. It features a day-date display, luminous hands and markers, and is powered by the 4R36 automatic movement with a power reserve of approximately 41 hours.",
            "price": 373.38,
            "brand": "Seiko",
            "model": "SRPD51",
            "category": ["sport", "mechanical", "analog", "fashion"],
            "tags": ["sport", "mechanical", "analog", "fashion"],
            "quantity": 10
          },
          {
            "name": "Seiko 5 GMT",
            "image": "seiko5.png",
            "description": "The Seiko 5 SSK001 is a mechanical watch that features a 21-jewel automatic movement with a power reserve of up to 41 hours. It has a stainless steel case and bracelet, a dark blue dial with luminous hands and markers, and is water-resistant up to 100 meters, making it a reliable and durable timepiece suitable for everyday wear.",
            "price": 656.25,
            "brand": "Seiko",
            "model": "SSK001",
            "category": ["sport", "mechanical", "analog", "gmt"],
            "tags": ["sport", "mechanical", "analog", "gmt"],
            "quantity": 10
          },
          {
            "name": "Suunto 7",
            "image": "suunto1.png",
            "description": "Suunto 7 combines Suunto's versatile sports experience, sleep and health insights, free offline outdoor maps with navigation, and helpful smartwatch features from Wear OS by Google™. Suunto 7 Titanium features a robust titanium bezel and an ultra-soft microfiber textile strap that flexes perfectly around your wrist for a comfortable, breathable, and secure fit. Grade 5 titanium provides lighter weight and supreme comfort. Titanium is hard, scratch resistant and hypoallergenic, the best choice for your skin.",
            "price": 5199.99,
            "brand": "Suunto",
            "model": "SS050568000",
            "category": [
              "sport",
              "quartz",
              "digital",
              "gps",
              "smartwatch",
              "female",
              "fashion"
            ],
            "tags": ["sport", "quartz", "digital", "gps", "smartwatch", "fashion"],
            "quantity": 10
          },
          {
            "name": "Suunto Core",
            "image": "suunto2.png",
            "description": "Suunto Core Classic packs the key outdoor features in robust construction with a comfortable elastomer strap. Combining an altimeter, barometer and compass with weather information, Suunto Core Classic is the essential tool for your adventures.",
            "price": 232.09,
            "brand": "Suunto",
            "model": "SS014279010",
            "category": [
              "sport",
              "quartz",
              "digital",
              "gps",
              "smartwatch",
              "female",
              "fashion"
            ],
            "tags": ["sport", "quartz", "digital", "gps", "smartwatch", "fashion"],
            "quantity": 10
          },
          {
            "name": "Timex Expedition",
            "image": "timex1.png",
            "description": "The Timex Expedition is a watch designed for outdoor enthusiasts and adventurers. It features rugged designs and water resistance.",
            "price": 53.32,
            "brand": "Timex",
            "model": "T49870GP",
            "category": ["sport", "quartz", "analog"],
            "tags": ["sport", "quartz", "analog"],
            "quantity": 10
          },
          {
            "name": "Timex Metropolitan R",
            "image": "timex2.png",
            "description": "The Timex Metropolitan R is a smartwatch that combines classic analog style with modern technology. It features a heart rate monitor, GPS tracking, notifications, and customizable watch faces, making it a versatile and functional accessory for everyday wear.",
            "price": 188.99,
            "brand": "Timex",
            "model": "TW5M43000",
            "category": [
              "sport",
              "quartz",
              "digital",
              "smartwatch",
              "female",
              "fashion"
            ],
            "tags": ["sport", "quartz", "digital", "smartwatch", "fashion"],
            "quantity": 10
          },
          {
            "name": "Timex Weekender",
            "image": "timex3.png",
            "description": "These weekender essentials are designed with slip-thru straps, so you can easily change them depending on your outfit or mood. Go beyond the basics; have some fun; make a suit feel less stuffy; do the unexpected.",
            "price": 49.67,
            "brand": "Timex",
            "model": "T2N651GP",
            "category": [
              "sport",
              "quartz",
              "digital",
              "smartwatch",
              "female",
              "fashion"
            ],
            "tags": ["sport", "quartz", "digital", "smartwatch", "fashion"],
            "quantity": 10
          },
          {
            "name": "Tissot Le Locle",
            "image": "tissot1.png",
            "description": "Named after Tissot's hometown, the cradle of the watchmaking industry, the Tissot Le Locle encases the brand DNA and craftsmanship values. The Le Locle Automatic Lady, powered by an automatic Swiss movement, displays exquisite elegance. Details such as Roman numerals and a traditional Le Locle signature complete the picture of classical chic. These finish off soave daytime and evening looks with a flourish.",
            "price": 945.0,
            "brand": "Tissot",
            "model": "t41218333",
            "category": [
              "classic",
              "mechanical",
              "analog",
              "dress",
              "female",
              "luxury"
            ],
            "tags": ["classic", "mechanical", "analog", "dress", "luxury"],
            "quantity": 10
          },
          {
            "name": "Tissot Le Locle",
            "image": "tissot2.png",
            "description": "The name Le Locle seems to be a reliable ingredient of success. As well as being the name of Tissot's home and heritage, nestled in the Swiss Jura Mountains, it is the name of a hugely popular automatic watch family. The models display exquisite elegance with details such as Roman numerals and a traditional Le Locle signature which complete the picture of classical chic.",
            "price": 775.0,
            "brand": "Tissot",
            "model": "t0064071603300",
            "category": ["classic", "mechanical", "analog", "dress", "luxury"],
            "tags": ["classic", "mechanical", "analog", "dress", "luxury"],
            "quantity": 10
          },
          {
            "name": "Tissot V8",
            "image": "tissot3.png",
            "description": "The Tissot V8 is a powerful engine for the wrist. Inspired by the racing cars from the 60s, the bold 3 hands model confidently takes its position on the Tissot product “grid” with their dashboard-inspired tachymeter bezels. The Tissot V8 models will appeal to wearers with a good dose of adrenalin in their lives and zero tolerance for missing the action.Not only attractive to look at, the Tissot V8 is just as appealing for its slick technicality.",
            "price": 650.0,
            "brand": "Tissot",
            "model": "t1064071605100",
            "category": ["sport", "mechanical", "analog", "luxury"],
            "tags": ["sport", "mechanical", "analog", "luxury"],
            "quantity": 10
          }
        ]
     
    );

    console.log("Data has been seeded successfully.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
