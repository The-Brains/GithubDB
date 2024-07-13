const deepEqual = require('deep-equal');

// Helper function to compare ArrayBuffers
function areArrayBuffersEqual(buffer1: Buffer | ArrayBuffer, buffer2: Buffer | ArrayBuffer) {
  if (buffer1.byteLength !== buffer2.byteLength) return false;
  const view1 = new Uint8Array(buffer1);
  const view2 = new Uint8Array(buffer2);
  for (let i = 0; i < view1.length; i++) {
    if (view1[i] !== view2[i]) return false;
  }
  return true;
}

// Main function to compare blobs/files
async function compareBlobs(blobA: Blob, blobB: Blob) {
  let bufferA, bufferB;

  if (typeof window === 'undefined') {
    bufferA = Buffer.from(await blobA.arrayBuffer());
    bufferB = Buffer.from(await blobB.arrayBuffer());
  } else {
    // Browser environment
    bufferA = await blobA.arrayBuffer();
    bufferB = await blobB.arrayBuffer();
  }

  return areArrayBuffersEqual(bufferA, bufferB);
}

export async function compare(a: any, b: any): Promise<boolean> {
  if (typeof(a) !== typeof(b)) return false;
  if (a instanceof Blob && b instanceof Blob) return compareBlobs(a, b);
  return deepEqual(a, b);
}
