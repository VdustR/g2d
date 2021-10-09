import { assertEquals } from "std/testing/asserts.ts";
import detectEol from "/detect_eol.ts";

Deno.test("detect eol", () => {
  assertEquals(detectEol(""), "\n");
  assertEquals(detectEol("foo\nbar"), "\n");
  assertEquals(detectEol("foo\rbar"), "\r");
  assertEquals(detectEol("foo\r\nbar"), "\r\n");
  assertEquals(detectEol("foo\r\nbar\n"), "\n");
  assertEquals(detectEol("\r\n\r\n"), "\r\n");
  assertEquals(detectEol("foo\r\r\nbar\n"), "\n");
});
