import { assertEquals } from "../deps.ts";
import g2b from "./mod.ts";

Deno.test("comment", () => {
  assertEquals(g2b("#foo"), "#foo");
  assertEquals(g2b("#"), "#");
  assertEquals(g2b("#\r"), "#\r");
  assertEquals(g2b("#\n"), "#\n");
  assertEquals(g2b("#\r\n"), "#\r\n");
});

Deno.test("negative", () => {
  assertEquals(g2b("!foo"), "!**/foo");
  assertEquals(g2b("!"), "!");
  assertEquals(g2b("! "), "!**/ ");
  assertEquals(g2b("!\n\r\n\r\n"), "!**/\n\r\n\r\n");
  assertEquals(g2b("!\r\n\n\n\n"), "!**/\r\n\n\n\n");
});

Deno.test("negative root", () => {
  assertEquals(g2b("!/foo"), "!foo");
  assertEquals(g2b("!/"), "!");
  assertEquals(g2b("!/ "), "! ");
  assertEquals(g2b("!/\n\r\n\r\n"), "!\n\r\n\r\n");
  assertEquals(g2b("!/\r\n\n\n\n"), "!\r\n\n\n\n");
});

Deno.test("positive", () => {
  assertEquals(g2b("foo"), "**/foo");
  assertEquals(g2b(""), "");
  assertEquals(g2b(" "), "**/ ");
  assertEquals(g2b("\n\r\n\r\n"), "**/\n\r\n\r\n");
  assertEquals(g2b("\r\n\n\n\n"), "**/\r\n\n\n\n");
});

Deno.test("positive root", () => {
  assertEquals(g2b("/foo"), "foo");
  assertEquals(g2b("/"), "");
  assertEquals(g2b("/ "), " ");
  assertEquals(g2b("/\n\r\n\r\n"), "\n\r\n\r\n");
  assertEquals(g2b("/\r\n\n\n\n"), "\r\n\n\n\n");
});
