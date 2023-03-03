import React from "react";
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socialIcons = [
  {
    icon: <FaFacebook className="socijala"></FaFacebook>,
    label: "facebook",
    url: "https://m.facebook.com/cveticizavasusavrsenusvadbu/?ref=bookmarks&mds=%2Fa%2Fpages%2Fchoose_photo_upload%2F%3FpageID%3D1471747599599619&",
  },
  {
    icon: <FaPinterest className="socijala"></FaPinterest>,
    label: "pinterest",
    url: "https://www.pinterest.com/SvadbeniCvet/",
  },
  {
    icon: <FaInstagram className="socijala"></FaInstagram>,
    label: "instagram",
    url: "https://www.instagram.com/svadbeni_cvet/",
  },
  {
    icon: <FaYoutube className="socijala"></FaYoutube>,
    label: "youtube",
    url: "https://www.youtube.com/channel/UC86annL_cXXyT4AeKOv2N4A?view_as=subscriber",
  },
];

export default socialIcons;
