import * as React from "react"
import { createComponent } from "@lit-labs/react"
import { A2kSelect } from "@a2000/select"
import "@a2000/select/a2k-select.js"

export const SelectComponent = createComponent({
  tagName: "a2k-select",
  elementClass: A2kSelect,
  react: React,
  events: {
    onactivate: "activate",
    onchange: "change",
  },
})