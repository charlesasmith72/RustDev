Below is an updated snippet that:

1. **Reads and displays** the two non-section headers (magic + version).  
2. **Parses every** numbered section (0–13) exactly as before.  
3. **Logs** the result via `console.table`.

```html

const sectionNames = {
  0: 'custom',
  1: 'type',
  2: 'import',
  3: 'function',
  4: 'table',
  5: 'memory',
  6: 'global',
  7: 'export',
  8: 'start',
  9: 'element',
  10: 'code',
  11: 'data',
  12: 'dataCount',
  13: 'tag'
};

// read unsigned LEB128
function readVarUint(bytes, offset) {
  let result = 0, shift = 0, pos = offset;
  while (true) {
    const byte = bytes[pos++];
    result |= (byte & 0x7F) << shift;
    if ((byte & 0x80) === 0) break;
    shift += 7;
  }
  return { value: result, length: pos - offset };
}

async function parseWasm(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  const buf = await res.arrayBuffer();
  const bytes = new Uint8Array(buf);

  const parts = [];
  let idx = 0;

  // 1) Magic header
  {
    const slice = bytes.slice(0, 4);
    parts.push({
      id: idx++,
      name: 'magic',
      length: 4,
      body: Array.from(slice).map(b => b.toString(2).padStart(8,'0')).join(' ')
    });
  }

  // 2) Version
  {
    const slice = bytes.slice(4, 8);
    parts.push({
      id: idx++,
      name: 'version',
      length: 4,
      body: Array.from(slice).map(b => b.toString(2).padStart(8,'0')).join(' ')
    });
  }

  // 3) Numbered sections
  let offset = 8;
  while (offset < bytes.length) {
    const secId = bytes[offset++];
    const { value: size, length: sizeLen } = readVarUint(bytes, offset);
    offset += sizeLen;

    const payload = bytes.slice(offset, offset + size);
    offset += size;

    parts.push({
      id: idx++,
      name: sectionNames[secId] || `unknown(${secId})`,
      length: size,
      body: Array.from(payload).map(b => b.toString(2).padStart(8,'0')).join(' ')
    });
  }

  return parts;
}

(async () => {
  try {
    const structure = await parseWasm('/wasm/vdom/vdom.wasm');
    console.table(structure, ['id','name','length','body']);
  } catch (e) {
    console.error(e);
  }
})();


```

---

## Core parts every WebAssembly binary contains

1. **Magic header**  
   - 4 bytes: `0x00 0x61 0x73 0x6d` (“`\0asm`”)  
2. **Version**  
   - 4-byte little-endian uint32 (currently `0x01 0x00 0x00 0x00`)  
3. **Sections** (each with a one-byte ID, a LEB128-encoded size, then its payload):  
   - **Custom (0)** – arbitrary user data  
   - **Type (1)** – function signature declarations  
   - **Import (2)** – imported functions, tables, memories, globals  
   - **Function (3)** – function signatures (by index into Type) for module-defined functions  
   - **Table (4)** – table definitions (e.g. `funcref`)  
   - **Memory (5)** – linear memory definitions  
   - **Global (6)** – global variable definitions  
   - **Export (7)** – module exports (functions, tables, memories, globals)  
   - **Start (8)** – optional start function index  
   - **Element (9)** – element segments for table initialization  
   - **Code (10)** – function bodies (locals + opcodes + `end`)  
   - **Data (11)** – data segments for memory initialization  
   - **DataCount (12)** – bulk-memory proposal helper  
   - **Tag (13)** – exception-handling proposal  
4. **Module payload ordering rules**  
   - Sections **1–11** must appear in increasing order.  
   - Custom sections (ID 0) may appear anywhere.  

Together, these constitute the **complete binary layout** of a core WebAssembly module.
