import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { textDiff } from "@/text-diff.ts";

describe("textDiff", () => {
  it("should return expected difference between two strings", () => {
    expect(textDiff("hola", "hoia")).toStrictEqual([true, true, false, true]);
    expect(textDiff("", "hoia")).toStrictEqual([false, false, false, false]);
    expect(textDiff("hola", "hola")).toStrictEqual([true, true, true, true]);
  });
});
