function isString(val) {
  return val.startsWith("'");
}

function isDate(val) {
  return val.match(/\d+-\d+-\d+T.+/g);
}

function isBoolean(val) {
  return val.match(/^[TF]$/);
}

function isFloat(val) {
  return val.includes('.');
}

// Returns header as object, headerOffset as number (start of data, or end of file)
export function parseFITSHeader(buffer) {
  const iLength = buffer.byteLength;
  let iOffset = 0;
  const header = {};
  const headerUnitChars = 80;
  const fitsHeaderByteMultiples = 2880;

  while (iOffset < iLength) {
    const line = buffer.slice(iOffset, iOffset + headerUnitChars);
    const headerUnit = String.fromCharCode.apply(null, new Uint8Array(line));
    if (headerUnit.startsWith('END')) break;

    const hdu = headerUnit.split(/[=/]/);
    const key = hdu[0];
    let val = hdu[1];
    if (key.length > 0 && val) {
      val = val.trim();
      if (isString(val)) {
        val = val.replace(/'/g, '').trim();
        if (isDate(val)) {
          val = Date.parse(val);
        }
      } else if (isBoolean(val)) {
        val = val.includes('T');
      } else if (isFloat(val)) {
        val = parseFloat(val);
      } else {
        val = parseInt(val, 10);
      }
      header[key.trim()] = val;
    }
    iOffset += headerUnitChars;
  }

  if (typeof header.BSCALE === 'undefined') header.BSCALE = 1;
  if (typeof header.BZERO === 'undefined') header.BZERO = 0;

  iOffset += fitsHeaderByteMultiples - (iOffset % fitsHeaderByteMultiples);

  return [header, iOffset];
}

export function parseFITSImage(
  buffer,
  headerOffset,
  bitpixHeader,
  width,
  height
) {
  const datatype = bitpixHeader > 0 ? 'Uint' : 'Float';
  const dataBits = Math.abs(bitpixHeader);
  const dataBytes = dataBits / 8;
  const pixels = width * height;
  const dataView = new DataView(buffer, headerOffset);
  // the window object contains the constructors for Uint16Array and other global classes
  const rawImageData = new window[`${datatype}${dataBits}Array`](pixels);

  for (let i = 0; i < pixels; i += 1) {
    rawImageData[i] = dataView[`get${datatype}${dataBits}`](i * dataBytes);
  }
  return rawImageData;
}

export function extractKeogramSlice(rawImageData, imgWidth) {
  const center = Math.floor(imgWidth / 2);
  return rawImageData.filter((element, index) => index % imgWidth === center);
}
