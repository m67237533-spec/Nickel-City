import React, { useState } from "react";
// TopBar aapka pehle se bana hua include rahega
// import TopBar from "../components/TopBar"; 

const initialStates = [
  {
    id: 1,
    state: "California",
    cities: ["San Diego", "San Jose", "Los Angeles", "San Francisco"],
    ranges: [
      { area: "Less than 3 inches", price: "$100" },
      { area: "Less than 6 inches", price: "$150" },
    ],
  },
  {
    id: 2,
    state: "Alabama",
    cities: ["Huntsville", "Birmingham", "Montgomery"],
    ranges: [
      { area: "", price: "" }
    ],
  },
];

// props mein onBack aur onSave de diya hai taake parent component handle kar sake
export default function EditService({ onBack, onSave }) {
  const [serviceName, setServiceName] = useState("Snow Removal");
  const [cancellationFee, setCancellationFee] = useState("10");
  const [commission, setCommission] = useState("20");
  const [stateBlocks, setStateBlocks] = useState(initialStates);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleStateChange = (blockId, val) => {
    setStateBlocks((prev) =>
      prev.map((b) => (b.id === blockId ? { ...b, state: val, cities: [] } : b))
    );
  };

  const handleCitySelect = (blockId, val) => {
    if (!val) return;
    setStateBlocks((prev) =>
      prev.map((b) => {
        if (b.id === blockId) {
          if (b.cities.includes(val)) return b;
          return { ...b, cities: [...b.cities, val] };
        }
        return b;
      })
    );
  };

  const removeState = (blockId) => {
    setStateBlocks((prev) =>
      prev.map((b) => (b.id === blockId ? { ...b, state: "", cities: [] } : b))
    );
  };

  const removeCity = (blockId, city) => {
    setStateBlocks((prev) =>
      prev.map((b) =>
        b.id === blockId ? { ...b, cities: b.cities.filter((c) => c !== city) } : b
      )
    );
  };

  const removeRange = (blockId, idx) => {
    setStateBlocks((prev) =>
      prev.map((b) =>
        b.id === blockId ? { ...b, ranges: b.ranges.filter((_, i) => i !== idx) } : b
      )
    );
  };

  const addRange = (blockId) => {
    setStateBlocks((prev) =>
      prev.map((b) =>
        b.id === blockId ? { ...b, ranges: [...b.ranges, { area: "", price: "" }] } : b
      )
    );
  };

  const addBlock = () => {
    setStateBlocks((prev) => [
      ...prev,
      { id: Date.now(), state: "", cities: [], ranges: [{ area: "", price: "" }] },
    ]);
  };

  const updateRange = (blockId, idx, field, value) => {
    setStateBlocks((prev) =>
      prev.map((b) =>
        b.id === blockId
          ? {
              ...b,
              ranges: b.ranges.map((r, i) => (i === idx ? { ...r, [field]: value } : r)),
            }
          : b
      )
    );
  };

  const handleDoneClick = () => {
    setShowSuccess(false);
    if (onSave) onSave(); // Agar parent component mein koi function pass kia hai to wo chal jaye
  };

  return (
    <div style={styles.contentWrapper}>
      {/* SUCCESS POPUP MODAL */}
      {showSuccess && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3 style={styles.modalTitle}>Successfully!</h3>
            <p style={styles.modalMsg}>Your service has been updated successfully.</p>
            <button style={styles.doneBtn} onClick={handleDoneClick}>
              Done
            </button>
          </div>
        </div>
      )}

      {/* BACK BUTTON */}
      <button style={styles.backBtn} onClick={onBack}>←</button>

      {/* TITLE & UPDATE BUTTON ROW */}
      <div style={styles.pageHeaderRow}>
        <h2 style={styles.pageTitle}>Edit Snow Removal</h2>
        <button style={styles.updateBtn} onClick={() => setShowSuccess(true)}>
          Update Service
        </button>
      </div>

      {/* MAIN WHITE CARD BOX */}
      <div style={styles.card}>
        {/* ROW 1: INPUT FIELDS */}
        <div style={styles.rowGrid2}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Service Name</label>
            <input
              style={styles.textInput}
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Cancellation Fee</label>
            <div style={styles.inputPrefixWrap}>
              <span style={styles.inputPrefix}>$</span>
              <input
                style={{ ...styles.textInput, paddingLeft: 30 }}
                value={cancellationFee}
                onChange={(e) => setCancellationFee(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* ROW 2: COMMISSION INPUT */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Service Commission</label>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <input
              style={{ ...styles.textInput, width: 90 }}
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
            />
            <span style={styles.percentText}>Percent</span>
          </div>
        </div>

        {/* TABLE HEADERS */}
        <div style={styles.colHeaderRow}>
          <div style={{ width: 180, ...styles.colHeader }}>State</div>
          <div style={{ width: 220, ...styles.colHeader }}>City</div>
          <div style={{ flex: 1, ...styles.colHeader }}>Thickness Range</div>
          <div style={{ flex: 1, ...styles.colHeader }}>Price</div>
          <div style={{ width: 36 }} />
        </div>

        {/* DYNAMIC BLOCKS SECTION */}
        {stateBlocks.map((block) => (
          <div key={block.id} style={styles.blockContainer}>
            <div style={styles.blockRow}>
              
              {/* STATE COLUMN */}
              <div style={{ width: 180 }}>
                <div style={styles.selectWrap}>
                  <select 
                    style={styles.select} 
                    value={block.state} 
                    onChange={(e) => handleStateChange(block.id, e.target.value)}
                  >
                    <option value="">Select state</option>
                    <option value="California">California</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Texas">Texas</option>
                    <option value="New York">New York</option>
                  </select>
                  <span style={styles.selectArrow}>▾</span>
                </div>
                <div style={styles.tagsWrap}>
                  {block.state && (
                    <span style={styles.tag}>
                      {block.state}
                      <span style={styles.tagX} onClick={() => removeState(block.id)}>×</span>
                    </span>
                  )}
                </div>
              </div>

              {/* CITY COLUMN */}
              <div style={{ width: 220 }}>
                <div style={styles.selectWrap}>
                  <select 
                    style={styles.select} 
                    value="" 
                    onChange={(e) => handleCitySelect(block.id, e.target.value)}
                  >
                    <option value="">Select city</option>
                    <option value="San Diego">San Diego</option>
                    <option value="San Jose">San Jose</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Huntsville">Huntsville</option>
                    <option value="Birmingham">Birmingham</option>
                    <option value="Montgomery">Montgomery</option>
                  </select>
                  <span style={styles.selectArrow}>▾</span>
                </div>
                <div style={styles.tagsWrap}>
                  {block.cities.map((city) => (
                    <span key={city} style={styles.tag}>
                      {city}
                      <span style={styles.tagX} onClick={() => removeCity(block.id, city)}>×</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* THICKNESS RANGE COLUMN */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
                {block.ranges.map((r, idx) => (
                  <div key={idx} style={styles.selectWrap}>
                    <select
                      style={styles.select}
                      value={r.area}
                      onChange={(e) => updateRange(block.id, idx, "area", e.target.value)}
                    >
                      <option value="">Select range</option>
                      <option value="Less than 3 inches">Less than 3 inches</option>
                      <option value="Less than 6 inches">Less than 6 inches</option>
                      <option value="Less than 9 inches">Less than 9 inches</option>
                    </select>
                    <span style={styles.selectArrow}>▾</span>
                  </div>
                ))}
              </div>

              {/* PRICE COLUMN */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
                {block.ranges.map((r, idx) => (
                  <div key={idx} style={styles.inputPrefixWrap}>
                    <span style={styles.inputPrefix}>$</span>
                    <input
                      style={{ ...styles.rangeInput, paddingLeft: 24 }}
                      value={r.price.replace('$', '')}
                      placeholder={idx === 0 ? "100" : "150"}
                      onChange={(e) => updateRange(block.id, idx, "price", '$' + e.target.value)}
                    />
                  </div>
                ))}
              </div>

              {/* ACTION DELETE BUTTONS */}
              <div style={{ width: 36, display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
                {block.ranges.map((_, idx) => (
                  <button
                    key={idx}
                    style={styles.removeBtn}
                    onClick={() => removeRange(block.id, idx)}
                  >
                    ✕
                  </button>
                ))}
              </div>
            </div>

            {/* ADD RANGE LINK BUTTON */}
            <div style={styles.addRangeRow} onClick={() => addRange(block.id)}>
              <span style={styles.addRangeText}>Add Range</span>
              <button style={styles.addRangeBtn}>+</button>
            </div>
          </div>
        ))}

        {/* ADD ANOTHER CITY */}
        <div style={{ marginTop: 32 }}>
          <button style={styles.addMoreBtn} onClick={addBlock}>
            Add another City
          </button>
        </div>
      </div>
    </div>
  );
}

// STYLES 
const styles = {
  contentWrapper: {
    flex: 1,
    padding: "32px 40px",
    background: "#f8fafc", 
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    boxSizing: "border-box",
    minHeight: "100%",
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#fff",
    border: "1px solid #e2e8f0",
    fontSize: 16,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    marginBottom: 16,
    outline: "none"
  },
  pageHeaderRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  pageTitle: { fontSize: 22, fontWeight: "700", color: "#0f172a", margin: 0 },
  updateBtn: {
    background: "#1e62c9",
    color: "#fff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: 14,
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(30, 98, 201, 0.2)",
  },
  card: {
    background: "#fff",
    borderRadius: 12,
    padding: "32px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.04)",
    border: "1px solid #f1f5f9",
  },
  rowGrid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
    marginBottom: 20,
  },
  fieldGroup: { marginBottom: 24 },
  label: {
    display: "block",
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 8,
  },
  textInput: {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: 14,
    color: "#334155",
    outline: "none",
    boxSizing: "border-box",
    background: "#fff",
  },
  inputPrefixWrap: {
    position: "relative",
    width: "100%",
  },
  inputPrefix: {
    position: "absolute",
    left: 14,
    top: "50%",
    transform: "translateY(-50%)",
    color: "#64748b",
    fontSize: 14,
  },
  percentText: { fontSize: 14, color: "#475569", fontWeight: "500" },
  colHeaderRow: { 
    display: "flex", 
    gap: 16, 
    marginBottom: 12, 
    borderTop: "1px solid #f1f5f9", 
    paddingTop: 24 
  },
  colHeader: { fontSize: 13, fontWeight: "600", color: "#334155" },
  blockContainer: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: "1px solid #f8fafc"
  },
  blockRow: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
    marginBottom: 12,
  },
  selectWrap: { position: "relative" },
  select: {
    width: "100%",
    padding: "12px 36px 12px 14px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: 13,
    color: "#475569",
    background: "#fff",
    appearance: "none",
    cursor: "pointer",
    outline: "none",
    boxSizing: "border-box",
  },
  selectArrow: {
    position: "absolute",
    right: 14,
    top: "50%",
    transform: "translateY(-50%)",
    color: "#64748b",
    fontSize: 12,
    pointerEvents: "none",
  },
  tagsWrap: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "#1e62c9",
    color: "#fff",
    fontSize: 12,
    padding: "6px 12px",
    borderRadius: "20px",
    fontWeight: "500",
  },
  tagX: {
    background: "rgba(255,255,255,0.25)",
    borderRadius: "50%",
    width: 14,
    height: 14,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 10,
  },
  rangeInput: {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: 13,
    color: "#334155",
    outline: "none",
    boxSizing: "border-box",
  },
  removeBtn: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#0f172a",
    border: "none",
    color: "#fff",
    fontSize: 11,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  addRangeRow: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
    marginTop: 8,
    cursor: "pointer",
    float: "right"
  },
  addRangeText: { fontSize: 13, color: "#1e62c9", fontWeight: "600" },
  addRangeBtn: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "#1e62c9",
    border: "none",
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addMoreBtn: {
    background: "#1e62c9",
    color: "#fff",
    border: "none",
    padding: "14px 28px",
    borderRadius: "8px",
    fontSize: 14,
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(30, 98, 201, 0.15)",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(15, 23, 42, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  modal: {
    background: "#fff",
    borderRadius: 16,
    padding: "36px",
    textAlign: "center",
    width: 360,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
  modalTitle: { fontSize: 20, fontWeight: "700", color: "#0f172a", marginBottom: 8, margin: 0 },
  modalMsg: { fontSize: 14, color: "#64748b", marginBottom: 24, lineHeight: 1.5 },
  doneBtn: {
    background: "#1e62c9",
    color: "#fff",
    border: "none",
    padding: "12px 0",
    width: "100%",
    borderRadius: "8px",
    fontSize: 15,
    fontWeight: "600",
    cursor: "pointer",
  },
};