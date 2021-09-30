import { DefaultTheme } from "styled-components";
import { dark as darkModal } from "../widgets/Modal/theme";
import { dark as darkAlert } from "components/Alert/theme"
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  modal: darkModal,
  alert: darkAlert
};

export default darkTheme;
