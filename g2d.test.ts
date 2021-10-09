import { assertEquals } from "std/testing/asserts.ts";
import g2b from "/g2d.ts";

Deno.test("comment", () => {
  console.log('g2b("#foo")', g2b("#foo"));
  assertEquals(g2b("#foo"), "#foo");
});

Deno.test("not", () => {
  assertEquals(g2b("!foo"), "!**/foo");
});

Deno.test("not root", () => {
  assertEquals(g2b("!/foo"), "!foo");
});

Deno.test("match", () => {
  assertEquals(g2b("foo"), "**/foo");
});

Deno.test("match root", () => {
  assertEquals(g2b("/foo"), "foo");
});

Deno.test("multiple line", () => {
  assertEquals(g2b("/foo\r\n!bar"), "foo\r\n!**/bar");
  assertEquals(g2b("/foo\n!bar"), "foo\n!**/bar");
});
