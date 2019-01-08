import CMS from "netlify-cms";
import * as MaterialIconsWidget from "netlify-cms-widget-material-icons";
CMS.registerWidget(
  "material-icons",
  MaterialIconsWidget.Control,
  MaterialIconsWidget.Preview
);
CMS.registerPreviewStyle(
  "https://fonts.googleapis.com/css?family=Material+Icons"
);