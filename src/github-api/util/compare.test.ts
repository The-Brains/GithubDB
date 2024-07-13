import { it, describe, expect } from "bun:test";
import { compare } from "./compare";
const fs = require('fs');
const path = require('path');


function readFileAsBlob(filePath: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err: any, data: Blob) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

describe("compare", () => {
  it("should return true for equal objects", async () => {
    const a = { a: 1, b: 2 };
    const b = { a: 1, b: 2 };

    expect(await compare(a, b)).toBe(true);
  });

  it("should return false for different objects", async () => {
    const a = { a: 1, b: 2 };
    const b = { a: 1, b: 3 };

    expect(await compare(a, b)).toBe(false);
  });

  it("should return true for equal arrays", async () => {
    const a = [1, 2];
    const b = [1, 2];

    expect(await compare(a, b)).toBe(true);
  });

  it("should compare two blobs", async () => {
    const a = new Blob(["test"]);
    const b = new Blob(["test"]);

    expect(await compare(a, b)).toBe(true);
    expect(await compare(a, new Blob(["test2"]))).toBe(false);
  });

  it("should compare two blobs of images", async () => {
    const basePath = path.join(__dirname, 'test-data');
    const dragonPath = path.join(basePath, 'dragon.png');
    const youtubePath = path.join(basePath, 'youtube.png');
  
    const dragonBlob = await readFileAsBlob(dragonPath);
    const youtubeBlob = await readFileAsBlob(youtubePath);
  
    expect(await compare(dragonBlob, dragonBlob)).toBe(true);
    expect(await compare(dragonBlob, youtubeBlob)).toBe(false);
  });
});
