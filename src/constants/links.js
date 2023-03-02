import React from "react";

import {
  FaHome,
  FaSmileWink,
  FaMagic,
  FaPenNib,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  {
    path: "/",
    label: "početna",
    icon: <FaHome></FaHome>,
  },
  {
    path: "/about",
    label: "o nama",
    icon: <FaSmileWink></FaSmileWink>,
  },
  {
    path: "/gallery",
    label: "galerija",
    icon: <FaMagic></FaMagic>,
  },
  {
    path: "/blog",
    label: "blog",
    icon: <FaPenNib></FaPenNib>,
  },

  {
    path: "/contact",
    label: "kontakt",
    icon: <FaEnvelope></FaEnvelope>,
  },
];

export default links;
