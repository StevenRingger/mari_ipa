import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import { configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";
import '@storybook/addon-console';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

addParameters({
  options: {
    theme: create({
      base: "dark",
      brandTitle: "Storybook"
      // brandImage: "logo/logo_black.ico"
    })
  },
  backgrounds: [
    { name: "white", value: "#fff" },
    { name: "ligh grey", value: "#CDCDCD" },
    { name: "grey", value: "#888" },
    { name: "dark grey", value: "#2f2f2f" },
    { name: "black", value: "#000" },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
    { name: "noser", value:"#3b76d9"}
  ]
});

// automatically import all files ending in *.stories.js
configure(require.context("../src/", true, /\.story\.js$/), module);
