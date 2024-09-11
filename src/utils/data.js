import alexGreenwood from "../assets/alex-greenwood.svg";
import leahWilliamson from "../assets/leah-williamson.svg";
import bookingIasi from "../assets/booking-iasi.svg";
import urbanOasis from "../assets/urban-oasis.svg";

const projectsData = [
  {
    name: "Alex Greenwood",
    firstname: "Alex",
    lastname: "Greenwood",
    keywords: [
      "Proffesional Football Player",
      "Defender",
      "England",
      "Manchester City",
    ],
    skills: [
        "UX/UI Design",
        "Web Design",
        "Wireframing",
        "Figma"
    ],
    description:
      "This site embraces a minimalist yet sophisticated design, inspired by Awwwards-style aesthetics. Through careful selection of fonts, imagery, and overall style, the website aims to convey a sense of familiarity while maintaining a respectful distance.",
    month: "JULY",
    year: "2024",
    details: "The objective of this application was to determine whether an AI model like ChatGPT could generate a functional full-stack application from scratch. ChatGPT was used to generate the initial codebase, including backend routes, database schemas, and frontend components.",
    socials: {
        behance: {
            name: "Behance",
            link: "https://www.behance.net/gallery/203914117/ALEX-GREENWOOD-WEBSITE"
        },
        instagram: {
            name: "Instagram",
            link: "https://www.instagram.com/p/C9xWaPBoH-t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        }
    },
    image: alexGreenwood,
  },
  {
    name: "Leah Williamson",
    firstname: "Leah",
    lastname: "Williamson",
    keywords: [
      "Proffesional Football Player",
      "Defender",
      "England",
      "Arsenal",
    ],
    skills: [
        "UX/UI Design",
        "Web Design",
        "Wireframing",
        "Figma"
    ],
    description:
      "Leah Cathrine Williamson OBE is an English professional footballer who plays for Women's Super League club Arsenal and captains the England women's national team.",
    month: "APRIL",
    year: "2024",
    details: "This website is a conceptual project dedicated to one of my favorite footballers. Developed as a side project, it represents the final version, combining aesthetics and functionality to capture the essence of the player.",
    socials: {
        behance: {
            name: "Behance",
            link: "https://www.behance.net/gallery/197462525/Leah-Williamson"
        },
        instagram: {
            name: "Instagram",
            link: "https://www.instagram.com/p/C9t-Mmyoybn/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
        }
    },
    image: leahWilliamson,

  },
  {
    name: "Booking Iasi",
    firstname: "Booking",
    lastname: "Iasi",
    keywords: [
      "Fullstack Application",
      "Romania",
      "Iasi",
      "SCRUM Master",
    ],
    description:
      "This project is developed as part of the Software Engineering class at the Faculty of Computer Science, Alexandru Ioan Cuza University in Iași. It aims to provide an intuitive and efficient booking system for various locations within Iași.",
    month: "FEBRUARY - JUNE",
    year: "2024",
    details: "The system features user profile creation, 3D visualization of exteriors and interiors of locations, and deployment on a local server using Docker. This project adheres to strict CSP (Content Security Policy) rules with nonce-based fetching to ensure security and reliability.",
    socials: {
        figma: {
            name: "Figma",
            link: "https://www.figma.com/design/dQbhAKhZoPeAJJ9U2W6lzW/IP?node-id=0-1&t=LSVl7INaSIUFY7Vw-1"
        },
        github: {
            name: "Github",
            link: "https://github.com/vladsuper5555/BookingIasi"
        }
    },
    image: bookingIasi,

  },
  {
    name: "Urban Oasis",
    firstname: "Urban",
    lastname: "Oasis",
    keywords: [
      "Fullstack Application",
      "Urban",
      "Green",
      "Spaces",
    ],
    description:
      "Urban Oasis is a multi-page web application designed with an Awwwards-style minimalist approach to provide an exceptional user experience (UX) and user interface (UI). The app aims to showcase urban green spaces, gardening tips, community stories, and more.",
    month: "JULY - SEPTEMBER",
    year: "2024",
    details: "The objective of this application was to determine whether an AI model like ChatGPT could generate a functional full-stack application from scratch. ChatGPT was used to generate the initial codebase, including backend routes, database schemas, and frontend components.",
    socials: {
        behance: {
            name: "Behance",
            link: "https://www.behance.net/gallery/203169693/Urban-Oasis-Breathe-Life-Into-Your-City"
        },
        github: {
            name: "Github",
            link: "https://github.com/elizadoltu/urban-oasis"
        },
        instagram: {
            name: "Instagram",
            link: "https://www.instagram.com/p/C9j-FQMoUDR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        }
    },
    image: urbanOasis,

  },
];

export default projectsData;
