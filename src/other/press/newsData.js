// newsData.js

import { originalPath } from '../constants';

import cadePrize from './cade-prize.jpg'
import floridaInstitute from './florida-institute.jpeg'
import fitLogo from './FIT_logo_normal.png';

import fire from './fire.jpeg'
import roots from './roots.jpeg'
import light from './light.jpeg'


const newsData = [
  {
    title: "About Us",
    imageSrc: light, // Adjust the path as necessary
    caption: `We lead people to encounter God, embrace
    others and elevate their world.`,
    buttonText: "LEARN MORE",
    link:  `${originalPath}/who-we-are`,
    paragraphs: [
      `We are honored to be recognized among 21 Fibonacci 
      Finalists in this year’s Cade Prize competition. Since 2010, 
      the Cade Prize has celebrated innovation by identifying, 
      recognizing, and celebrating inventors and entrepreneurs, who, 
      through an innovative invention, demonstrate a creative approach 
      to addressing problems in their field of expertise.
      `
    ],
  },
  {
    title: "Service Times",
    imageSrc: roots, // Adjust the path as necessary
    caption: [
      `Join us at one of our Weekly Services`,
      `<b>Sunday Family Service</b>`,
      `10:00 am – 12:30 pm`,
      `<b>Thanksgiving Service First Sunday’s</b>`,
      `10:00 am – 12:30 pm`,
      `<b>Bible Study (Digging Deep) every Wednesday</b>`,
      `9:00pm to 9:45pm`
    ],
    // caption: `Join us at one of our Weekly Services

    //   Sunday Family Service 
    //   10:00 am – 12:30 pm

    //   Thanksgiving Service First Sunday’s 
    //   10:00 am – 12:30 pm

    //   Bible Study (Digging Deep) every Wednesday
    //   9:00pm to 9:45pm`,
    // buttonText: "READ MORE",
    // link: `${originalPath}/press-release/orlando-based-aviana-molecular-technologies-receives-follow-on-funding`,
    paragraphs: [
      
      // `GAINESVILLE and BOCA RATON, Fla., March 8, 2017 
      // /PRNewswire-USNewswire/ — The Florida Institute for the 
      // Commercialization of Public Research (the Florida Institute) 
      // announced today that Aviana Molecular Technologies, LLC, an 
      // Orlando-based point of care (POC) diagnostics company with 
      // technology licensed from the University of Central Florida, 
      // received follow-on second round financing after achieving 
      // significant development milestones since its initial funding. 
      // The Florida Institute supports new company creation based on 
      // publicly-funded research, and bridges early funding gaps for 
      // companies spinning out of Florida-based universities and 
      // research institutions.`,
      // `Aviana is developing miniaturized 
      // biosensors capable of attaching to a smartphone/smart device 
      // through Bluetooth or other wireless connections. The company 
      // received initial funding from the Institute through its Florida 
      // Technology Seed Capital Fund in September 2015 and since then 
      // has closed $1.3 Million in additional investment from angels, 
      // consisting primarily of physicians. Aviana has hired additional 
      // employees, and completed initial functioning systems 
      // development. The capital raised will allow the company to 
      // optimize the system and obtain preliminary data on biological 
      // markers of interest.`,
      // `“Our mission is to provide highly 
      // sensitive and specific diagnostic capability to anyone with a 
      // smart device: physician, medical technologist, patient, public 
      // health worker while connecting seamlessly (with adequate 
      // protections) to the internet,” said Vanaja V. Ragavan, MD, 
      // Aviana’s President and Chief Executive Officer. “Recent 
      // investments will allow us to continue development and expand our 
      // sensors for monitoring human health. We plan on working towards 
      // milestones that will allow us to obtain follow on funding for a 
      // full development of our technology."`,
      // `“Our mission is to provide highly 
      // sensitive and specific diagnostic capability to anyone with a 
      // smart device: physician, medical technologist, patient, public 
      // health worker while connecting seamlessly (with adequate 
      // protections) to the internet,” said Vanaja V. Ragavan, MD, 
      // Aviana’s President and Chief Executive Officer. “Recent 
      // investments will allow us to continue development and expand our 
      // sensors for monitoring human health. We plan on working towards 
      // milestones that will allow us to obtain follow on funding for a 
      // full development of our technology.`,
      // `About the Florida Institute`,
      // `Formed by the 
      // Florida Legislature in 2007, the Florida Institute for the 
      // Commercialization of Public Research is a non-profit 
      // organization that works collaboratively with the technology 
      // licensing and commercialization offices of Florida’s state 
      // universities and private research institutions to leverage a 
      // $2.5B+ research base and form investable companies that create 
      // clean jobs in new industries that are driving the global 
      // economy. With funding from the State of Florida through the 
      // Department of Economic Opportunity, and through the generosity 
      // of mentors, advisors and donors, the Institute provides company 
      // building services, and seed funding through the Florida 
      // Technology Seed Capital Fund, to promising Florida startups. 
      // Sixty-four companies have been funded to date, and the 
      // Institute’s economic impact through June 30, 2016 in the State 
      // of Florida was $630 million.`,
      // `About Aviana Molecular 
      // Technologies`,
      // `About Aviana Molecular 
      // Technologies\n\nAviana Molecular Technologies is a point of 
      // care (POC) diagnostic company developing a miniaturized biosensor 
      // capable of attaching to a smartphone/smart device through 
      // Bluetooth or other wireless connections. The company’s 
      // diagnostic system is a simple-to-use, potentially highly 
      // sensitive diagnostic platform that can accurately, within 10 -20 
      // minutes, detect a target infectious disease, biomarkers or 
      // proteins in both clinical (human and animal) and scientific 
      // research settings. Aviana’s biosensor platform uses the latest 
      // developments in cellular communications, semiconductor 
      // electronics, micro-fluidics and manufacturing methods to create 
      // a unique point-of-care diagnostic (POC) platform to detect 
      // biomarkers or infections.`,
      // `CONTACT:\nJane Teague\nChief 
      // Operating Officer\nInstitute for the Commercialization of Public 
      // Research\n561-368-8889\njane.teague@florida-institute.com\n\n
      // SOURCE Florida Institute for the Commercialization of Public 
      // Research`
    ]
  },
  {
    title: "SOUL WINNING",
    imageSrc: fire, // Adjust the path as necessary
    caption: [
      `RCCG Restoration Temple is inviting you to its scheduled Zoom meeting.`,
      `<b>Topic:</b>`,
      `RCCG Restoration Temple's Personal Meeting Room`,

      `<literal><a class='lyme-link' href="https://us02web.zoom.us/j/4804650017?pwd=RHhYWndRRmZoV2JEVmxwODd0MVF0Zz09">Join Zoom Meeting</a></literal>`,
      `<b>Meeting ID:</b>`,
      `480 465 0017`,
      `<b>Passcode:</b>`,
      `4545`,
      `---`,
      `One tap mobile`,
      `+13602095623,,4804650017#,,,,*4545# US`,
      `+13863475053,,4804650017#,,,,*4545# US`,
      `---`,
      ``,
      `Find your local number:`, 
      `<a:same-line>https://us02web.zoom.us/u/kce3YDlA6I<a>`,
      // `<b>Address:</b>`,
      // `RCCG Restoration Temple`,
      // `1892 Eastchester Rd, Bronx, NY 10461`,
      // `<b>Telephone:</b>`,
      // `+234-718-508-2133`,
      // `<b>Email:</b>`,
      // `rccgrestorationtemple@gmail.com`
    ],
//     caption: `Address:
// RCCG Restoration Temple
// 1892 Eastchester Rd, Bronx, NY 10461

// Telephone:
// +234-718-508-2133

// Email:
// rccgrestorationtemple@gmail.com`,
    // buttonText: "READ MORE",
    // link: `${originalPath}/press-release/nasa-awards-grant-to-local-startup-to-turn-space-tech-to-bio-tech`,
    paragraphs: [
      `Address:
RCCG Restoration Temple1892 Eastchester Rd, Bronx, NY 10461`,

`Telephone:
+234-718-508-2133`,

`Email:
rccgjhny@gmail.com`
      // `ORLANDO, Fla., June 6, 2016 /PRNewswire/ — Aviana Molecular 
      // Technologies, (Aviana) a development-stage diagnostic startup 
      // company, received an STTR grant from NASA to develop sensors to be 
      // used on vehicles in extra-terrestrial missions and repurpose them 
      // as biosensors. This grant was awarded in conjunction with the 
      // University of Central Florida (UCF).`,
      // `ORLANDO, Fla., June 6, 2016 /PRNewswire/ — Aviana Molecular 
      // Technologies, (Aviana) a development-stage diagnostic startup 
      // company, received an STTR grant from NASA to develop sensors to be 
      // used on vehicles in extra-terrestrial missions and repurpose them 
      // as biosensors. This grant was awarded in conjunction with the 
      // University of Central Florida (UCF).\n\nDonald Malocha, Ph.D., UCF 
      // professor and Principal Investigator, has spent the last eight 
      // years developing wireless sensors used by the NASA shuttle program 
      // to interrogate many parameters critical to the proper functioning 
      // of the space craft. The recently awarded NASA grant furthers R&D 
      // of these wireless sensors composed of surface acoustic wave (SAW) 
      // devices (commonly used in cell phones), into a new class of 
      // biosensors.`,
      // `“This new award will continue the innovation already 
      // completed and licensed by Aviana from UCF. We plan to expand these 
      // sensors into use for monitoring human health,” said Dr. Vanaja V. 
      // Ragavan, President and CEO of Aviana.`,
      // `Aviana’s biosensor platform 
      // uses the latest developments in cellular communications, 
      // semiconductor electronics, micro-fluidics and manufacturing methods 
      // to create a unique point-of-care diagnostic (POC) platform to detect 
      // biomarkers or infections.`,
      // `Because these biosensors are portable, 
      // cost-effective and versatile, they can be used in both highly 
      // sophisticated health systems and in resource-limited environments 
      // which can fill unmet medical needs in the U.S. and around the world, 
      // where POC diagnosis can positively impact human health.`,
      // `“This 
      // award allows NASA and UCF to work with Aviana to commercialize 
      // crucial work done for the space program into practical sensors to 
      // diagnose and preserve human health,” said Malocha, Pegasus Professor 
      // of Electrical Engineering at UCF.`,
      // `About Aviana Molecular 
      // Technologies`,
      // `Aviana Molecular Technologies, is a 
      // development-stage diagnostic company working on an innovative, 
      // highly sensitive, and user-friendly platform technology, with an 
      // initial interest in developing a point-of-care (POC) diagnostic. 
      // Aviana’s technology is simple, adaptable, and can be used for a 
      // point of care diagnosis for any number of biomarkers or infections. 
      // The platform can be used in both highly sophisticated health systems 
      // but also in resource-limited environments. Aviana believes that its 
      // technology can fill unmet medical needs in the U.S. and around the 
      // world, where POC diagnosis can positively impact human health. For 
      // more information visit, https://avianamolecular.com`,
      // `University of Central Florida`,
      // `nAmerica’s Partnership University: The 
      // University of Central Florida, the nation’s second-largest 
      // university with more than 63,000 students, has grown in size, 
      // quality, diversity and reputation in its first 50 years. Today, the 
      // university offers more than 200 degree programs at its main campus 
      // in Orlando and more than a dozen other locations. UCF is an economic 
      // engine attracting and supporting industries vital to the region’s 
      // future while providing students with real-world experiences that 
      // help them succeed after graduation. For more information, visit 
      // http://today.ucf.edu.`,
      // `SOURCE Aviana Molecular Technologies, LLC`

    ]
  },
  {
    title: "Aviana Molecular Technologies welcomes John M. Starcher, Jr. Esq. as a Member of its Board of Directors",
    imageSrc: "https://bsmhealth.org/wp-content/uploads/Starcher.jpg", // Adjust the path as necessary
    caption: `Aviana Molecular Technologies, LLC, is pleased to announce
    the appointment of John M. Starcher, Jr. Esq. to its Board of
    Directors. Mr. Starcher is currently CEO of Mercy Health and
    oversees development of system strategies, operations for all
    23 Mercy Health hospitals, and the integrated network across Ohio and Kentucky. `,
    buttonText: "READ MORE",
    link: `${originalPath}/press-release/aviana-molecular-technologies-welcomes-john-m-starcher-jr-esq-as-a-member-of-its-board-of-directors`,
    paragraphs: [
      `ORLANDO, Fla., March 13, 2018 /PRNewswire/ — Aviana
      Molecular Technologies, LLC, is pleased to announce
      the appointment of John M. Starcher, Jr. Esq. to its
      Board of Directors. Mr. Starcher is currently CEO of
      Mercy Health and oversees development of system
      strategies, operations for all 23 Mercy Health
      hospitals, and the integrated network across Ohio and
      Kentucky.`,
      `Mr. Starcher was President and CEO of Health
      Management Associates, an acute care delivery system
      with 71 hospitals across 15 states. He guided HMA
      through its successful sale to Community Health
      Systems. Mr. Starcher began his health care career in
      academic medicine, serving six years in leadership
      roles at the Medical College of Ohio, now the
      University of Toledo Medical Center. He has a
      bachelor’s degree in Business Administration from
      Bowling Green State University and a Doctorate in
      Jurisprudence from the University of Toledo. He has
      actively served as a director of over 16 boards.
      `,
      `Aviana has developed a cutting edge platform founded
      on the innovative adaptation of surface acoustic wave
      (SAW) sensors into a novel class of biosensors. The
      platform leverages the latest developments in
      cellular communications, semiconductor electronics,
      microfluidics and manufacturing methods to create a
      unique point-of-care diagnostic platform that is
      portable, cost-effective, and versatile.
      `,
      `“Mr. Starcher’s background in health care delivery is
      vital to the future success of our technology’s
      acceptance by health care providers,” said Dr. Vanaja
      V. Ragavan, President and CEO.
      `,
      `“Mr. Starcher expands the talent of the Aviana Board
      of Directors and we welcome his participation and
      guidance,” said William J. Link, Company Chairman of
      the Board of Directors.
      `,
      `“Aviana’s revolutionary point of care technology is
      poised to make a big difference for patients,” said
      John Starcher.
      `,
      `AMT (http://www.avianamolecular.com/) is a development
      stage diagnostic company working on an innovative,
      highly sensitive, and user-friendly platform
      technology, with an interest in developing a
      point-of-care (POC) diagnostic. AMT’s technology is
      simple, adaptable, and can be used for POC diagnosis
      for any number of biomarkers or infections. The
      platform can be used in both highly sophisticated
      health systems and resource-limited environments.
      Aviana believes that its technology can fill unmet
      medical needs worldwide, where POC diagnosis can
      positively impact human health.
      `,
      `SOURCE Aviana Molecular Technologies, LLC
      `,
    ]
  },
  {
    title: "Aviana Molecular Technologies Welcomes William J. Link, Ph.D. as Chairman of Its Board of Directors",
    imageSrc: "https://winningpitchchallenge.net/wp-content/uploads/2017/03/link.jpg", // Adjust the path as necessary
    caption: `Aviana Molecular Technologies, LLC, a development-stage diagnostic company,
    is very pleased to announce the appointment of Dr. Bill Link as Chairman of its Board
    of Directors. Dr. Link is a leader in the healthcare industry.He is a Managing Director
    of Versant Ventures, a distinguished venture capital firm focused on healthcare.Dr. Link
    has specialized in early-stage investing in medical devices. `,
    buttonText: "READ MORE",
    link: `${originalPath}/press-release/aviana-molecular-technologies-welcomes-william-j-link-ph-d-as-chairman-of-its-board-of-directors`,
    paragraphs: [
      `ORLANDO, FL: June 1, 2016. PR Newswire/US Newswire:
      Aviana Molecular Technologies, LLC, a
      development-stage diagnostic company, is very pleased
      to announce the appointment of Dr. Bill Link as
      Chairman of its Board of Directors.
      `,
      `Dr. Link is a leader in the healthcare industry.He is
      a Managing Director of Versant Ventures, a
      distinguished venture capital firm focused on
      healthcare.Dr. Link has specialized in early-stage
      investing in medical devices.
      `,
      `Prior to co-founding Versant Ventures in 1999, Dr.
      Link was a general partner at Brentwood Venture
      Capital. With more than two decades of operations
      experience in the healthcare industry, he has a
      proven record of building and managing large,
      successful medical product companies.
      `,
      `Aviana Molecular Technologies has developed a cutting
      edge platform founded on the innovative adaptation of
      surface acoustic wave (SAW) sensors, commonly used in
      cellphone communications,into a novel class of
      biosensors.
      `,
      `The platform leverages the latest developments in
      cellular communications, semiconductor electronics,
      microfluidics and manufacturing methods to create a
      unique point-of-care diagnostic platform that is
      portable, cost-effective, and versatile.
      `,
      `“Dr. Link brings his immense experience and expertise
      to bear on the Company’s innovative technologies. Dr.
      Link’s shepherding of technologies to successful
      completion will be critical to the Company’s success,”
      said Dr. Vanaja V. Ragavan, President and CEO.
      `,
      `“I have known Dr. Link for over 30 years and am very
      pleased that he has agreed to join the Board of
      Directors,” said Edward Peterson, the Company’s
      current Chairman of the Board of Directors.
      `,
      `About Aviana Molecular Technologies Aviana Molecular
      Technologies (http://www.avianamolecular.com/) (AMT)
      is a development stage diagnostic company working on
      an innovative, highly sensitive, and user-friendly
      platform technology, with an initial interest in
      developing a point-of-care (POC) diagnostic.
      `,
      `Aviana’s technology is simple, adaptable, and can be
      used for a point of care diagnosis for any number of
      biomarkers or infections. The platform can be used in
      both highly sophisticated health systems but also in
      resource-limited environments.
      `,
      `Aviana believes that its technology can fill unmet
      medical needs in the U.S. and around the world, where
      POC diagnosis can positively impact human health.
      `,
      `CONTACT: Vanaja V. Ragavan, MD President and CEO
      Aviana Molecular Technologies, LLC
      info@avianamolecular.com
      `,
      `SOURCE Aviana Molecular Technologies, LLC, 3251
      Progress Drive, Orlando, FL. 32826
      `

    ]
  },
  {
    title: "Florida Institute Funds Orlando-Based Aviana Molecular Technologies",
    imageSrc: fitLogo, // Adjust the path as necessary
    caption: `The Florida Institute for the Commercialization of Public Research
    (http://www.florida-institute.com/) (the Institute) announced today that it
    has finalized a funding agreement with Aviana Molecular Technologies
    (http://www.avianamolecular.com/) (AMT), an Orlando-based company with 
    technology developed at the University of Central Florida. `,
    buttonText: "READ MORE",
    link: `${originalPath}/press-release/florida-institute-funds-orlando-based-aviana-molecular-technologies`,
    paragraphs: [
      `GAINESVILLE, Fla. and BOCA RATON, Fla., Sept. 24,
      2015 /PRNewswire-USNewswire
      `,
      `The Florida Institute for the Commercialization of
      Public Research (http://www.florida-institute.com/)
      (the Institute) announced today that it has finalized
      a funding agreement with Aviana Molecular
      Technologies (http://www.avianamolecular.com/) (AMT),
      an Orlando-based company with technology developed
      at the University of Central Florida. Aviana is
      developing a smartphone-enabled platform for
      first-level point-of-care diagnostics, allowing rapid
      detection of infections by anyone, anywhere. The
      Institute supports new company creation based on
      publicly-funded research, and bridges early funding
      gaps for companies spinning out of Florida-based
      universities and research institutions.
      `,
      `Aviana's diagnostic device detects infectious agents
      rapidly at the point of care. Its biosensors platform
      can identify the presence of bacteria or virus in
      various biological fluids and complex mixtures loaded
      onto a cartridge containing the Company's proprietary
      sensors. The uniqueness of Aviana's technology is its
      universal ability to be used with existing smartphones
      and other computing platforms, leading to an end
      system that includes a single-use, disposable
      biosensor cartridge. Combined with a reusable portable
      detection reader, the system may be used in any
      healthcare setting or eventually as a personal device.
      "Aviana believes that its technology can provide
      affordable diagnostics in a connected world with rapid
      detection of specific infections within 15 to 20
      minutes," said Vanaja V. Ragavan, MD, Aviana's
      President and Chief Executive Officer. "Such rapid
      and efficient diagnosis of infections can help in
      treatment and spread of diseases." "Aviana's
      technology is simple, adaptable, and can be useful in
      reducing the spread of infections," said Jamie Grooms,
      Institute Chief Executive Officer. "Conceptually, it
      can be developed to be used in both highly
      sophisticated health systems but also in
      resource-limited environments, and the Institute is
      delighted to support the Aviana team as it advances
      the commercialization of this promising new
      technology."
      `,
      `About the Institute Formed by the Florida Legislature
      in 2007, the Florida Institute for the
      Commercialization of Public Research
      (http://www.florida-institute.com/) is a non-profit
      organization that works collaboratively with the
      technology licensing and commercialization offices of
      Florida's state universities and private research
      institutions to leverage a $2B+ research base and
      form investable companies that create clean jobs in
      new industries that are driving the global economy.
      Over 100 new company projects have been identified
      across the state, and the Institute deploys company
      building and funding programs to promising Florida
      startups. Forty-three companies have been funded since
      the program's inception.
      `,
      `About Aviana Molecular Technologies Aviana Molecular
      Technologies (http://www.avianamolecular.com/) (AMT)
      is a development stage diagnostic company working on
      an innovative, highly sensitive, and user friendly
      platform technology, with an initial interest in
      developing a point of care diagnostic of infections
      (POC). Aviana's technology is simple, adaptable, and
      can be useful reducing the spread of infections.
      Conceptually, it can be developed to be used in both
      highly sophisticated health systems but also in
      resource-limited environments. Aviana believes that
      its technology can fill unmet medical needs in the
      U.S. and around the world, where POC diagnosis can
      make a difference in human health.
      `,
      `Contact: Jane Teague Chief Operating Officer
      Institute for the Commercialization of Public Research
      561-368-8889
      jane.teague@florida-institute.com
      (mailto:jane.teague@florida-institute.com)
      `,
      `SOURCE Florida Institute for the Commercialization of
      Public Research RELATED LINKS:
      http://www.florida-institute.com/
      (http://www.florida-institute.com/)
      `

    ]
  },
  // ... other card data ...
];

export default newsData;
