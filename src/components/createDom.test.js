/**
 * @jest-environment jsdom
 */

import createDom from "./createDom.js"; // Update the import path to match your file structure

describe("createDom", () => {
  const pokemonData = {
    name: "Pikachu",
    sprites: { front_default: "image_url" },
    abilities: [
      { ability: { name: "static" } },
      { ability: { name: "lightning-rod" } },
    ],
  };

  const container = createDom(pokemonData);
  const firstChild = container.children[0];
  const secondChild = container.children[1];
  const thirdChild = container.children[2];
  const forthChild = container.children[3];

  test("container nodeName -> DIV", () => {
    expect(container.nodeName).toEqual("DIV");
  });

  test("container className -> pokemon-container", () => {
    expect(container.className).toEqual("pokemon-container");
  });

  test("container id -> container", () => {
    expect(container.id).toEqual("container");
  });

  test("firstChild nodeName -> H2", () => {
    expect(firstChild.nodeName).toEqual("H2");
  });

  test("firstChild innerText -> Pikachu", () => {
    expect(firstChild.innerText).toEqual("Pikachu");
  });

  test("firstChild id -> name", () => {
    expect(firstChild.id).toEqual("name");
  });

  test("secondChild nodeName -> IMG", () => {
    expect(secondChild.nodeName).toEqual("IMG");
  });

  test('secondChild src -> "http://localhost/image_url"', () => {
    expect(secondChild.src).toEqual("http://localhost/image_url");
  });

  test('secondChild alt -> "pokemon"', () => {
    expect(secondChild.alt).toEqual("pokemon");
  });

  test("thirdChild nodeName -> H3", () => {
    expect(thirdChild.nodeName).toEqual("H3");
  });

  test("forthChild nodeName -> UL", () => {
    expect(forthChild.nodeName).toEqual("UL");
  });

  test("forthChild childElementCount -> 2", () => {
    expect(forthChild.childElementCount).toEqual(2);
  });
});
