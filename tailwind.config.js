module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    fontSize: {
      "5xl": "1.2rem",
      "6xl": "1.5rem",
      "7xl": "3rem",
      "8xl": "4rem",
      "9xl": "6rem",
      "10xl": "7rem",
      xxl: "10rem",
      xxxl: "14rem",
      max: "40rem",
    },
    fontFamily: {
      display: "Playfair Display",
      thai: "Kanit",
      lato: "Lato",
      raleway: "Raleway",
    },
    inset: {
      "-16": "-4rem",
      "-20": "-5rem",
      "-24": "-6rem",
    },
    extend: {
      spacing: {
        "26": "7rem",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem",
        "120": "30rem",
      },
      borderRadius: {
        xl: "1rem",
      },
      backgroundColor: {
        "gray-50": "#FAFAFA",
        "gray-25": "#FCFCFC",
        "gray-10": "#FEFEFE",
      },
      letterSpacing: {
        extra: "0.2em",
      },
    },
    variants: {
      transitionProperty: ["responsive", "hover", "focus"],
      borderWidth: ["responsive", "hover", "focus"],
      borderStyle: ["responsive", "hover", "focus"],
      borderColor: ["responsive", "hover", "focus", "active", "group-hover"],
    },
    plugins: [],
  },
};
