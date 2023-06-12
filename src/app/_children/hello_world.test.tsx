// import { JSDOM } from "jsdom";
import { Window } from "happy-dom";
import { describe, it } from "std/testing/bdd.ts";
import { assertEquals } from "std/testing/asserts.ts";
import React from "react";
import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./hello_world.tsx";

// const jsdom = new JSDOM();
// globalThis.document = jsdom.window.document;
const window = new Window();
globalThis.document = window.document as unknown as Document;

describe("HelloWorld", () => {
  it("rendered text", () => {
    render(<HelloWorld />);

    assertEquals(!!screen.findByText("Hello World!"), true);
  });
});
