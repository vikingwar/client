import { scales, variants } from "./types"

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
}

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "#BC3553",
    color: "#fcf6d5",
    ":hover": {
      backgroundColor: "#fcf6d5",
      color: "#BC3553",
      border: "2px solid",
      borderColor: "#BC3553",
    },
  },
  [variants.SECONDARY]: {
    backgroundColor: "#eadfc3",
    border: "2px solid",
    borderColor: "0ea79b",
    boxShadow: "none",
    color: "#0ea79b",
    ":disabled": {
      backgroundColor: "#eadfc3",
    },
    ":hover": {
      backgroundColor: "#0ea79b",
      color: "#eadfc3",
      borderColor: "#0ea79b",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    boxShadow: "0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset",
    backgroundColor: "#fcf6d5",
    color: "#bc3554",
    ":disabled": {
      backgroundColor: "#EBEBEB",
      color: "#ABAACB",
    },
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "text",
    boxShadow: "none",
  },
}
