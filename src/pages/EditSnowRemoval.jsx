import React, { useState } from "react";

export default function EditSnowRemoval({ service, onBack }) {
  // Inputs ke states - jo ServiceManagement se select hoga uska naam automatically pre-fill ho jayega
  const [serviceName, setServiceName] = useState(service?.title || "Snow Removal");
  const [cancellationFee, setCancellationFee] = useState("10");
  const [commission, setCommission] = useState(service?.commission || "20");
  
  // Screenshot (SS) jaisa strict structure states aur cities ke tags ke sath
  const [stateBlocks, setStateBlocks] = useState([
    {
      id: 1,
      state: "California",
      cities: ["San Diego", "San Jose", "Los Angeles", "San Francisco"],
      ranges: [
        { area: "Less than 3 inches", price: "100" },
        { area: "Less than 6 inches", price: "150" },
      ],
    },
    {
      id: 2,
      state: "Alabama",
      cities: ["Huntsville", "Birmingham", "Montgomery"],
      ranges: [
        { area: "", price: "" } // Initial empty inputs dusre box ke liye jesa SS me hai
      ],
    },
  ]);

  const [showSuccess, setShowSuccess] = useState(false);

  // Handlers for state updates
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

  const addRange = (blockId) => {
    setStateBlocks((prev) =>
      prev.map((b) =>
        b.id === blockId ? { ...b, ranges: [...b.ranges, { area: "", price: "" }] } : b
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

  // Jab user "Add another City" par click karega to poora structured layout dynamic open hoga
  const addBlock = () => {
    setStateBlocks((prev) => [
      ...prev,
      { id: Date.now(), state: "", cities: [], ranges: [{ area: "", price: "" }] },
    ]);
  };

  return (
    <div style={styles.contentWrapper}>
      
      {/* SUCCESS POPUP MODAL */}
      {showSuccess && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3 style={styles.modalTitle}>Successfully!</h3>
            <p style={styles.modalMsg}>Your service has been updated successfully.</p>
            <button style={styles.doneBtn} onClick={() => { setShowSuccess(false); onBack(); }}>
              Done
            </button>
          </div>
        </div>
      )}

      {/* BACK CIRCLE BUTTON */}
      <div style={styles.topNavigationRow}>
        <button style={styles.backCircleBtn} onClick={onBack}>←</button>
      </div>

      {/* PAGE TITLE & UPDATE SERVICE ROW */}
      <div style={styles.pageHeaderRow}>
        <h2 style={styles.pageTitle}>Edit Snow Removal</h2>
        <button style={styles.updateServiceBtn} onClick={() => setShowSuccess(true)}>
          Update Service
        </button>
      </div>

      {/* MAIN WHITE CARD BOX */}
      <div style={styles.mainFormCard}>
        
        {/* ROW 1: INPUT FIELDS GRID (Service Name & Cancellation Fee) */}
        <div style={styles.formGrid2}>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Service Name</label>
            <input
              style={styles.formInput}
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Cancellation Fee</label>
            <div style={styles.prefixWrapper}>
              <span style={styles.inputPrefix}>$</span>
              <input
                style={{ ...styles.formInput, paddingLeft: "34px" }}
                value={cancellationFee}
                onChange={(e) => setCancellationFee(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* ROW 2: SERVICE COMMISSION INPUT */}
        <div style={{ ...styles.inputGroup, marginBottom: "32px" }}>
          <label style={styles.inputLabel}>Service Commission</label>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <input
              style={{ ...styles.formInput, width: "100px", textAlign: "center" }}
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
            />
            <span style={styles.unitText}>Percent</span>
          </div>
        </div>

        {/* TABLE REPEATER HEADERS */}
        <div style={styles.tableHeaderRow}>
          <div style={{ width: "200px", ...styles.thText }}>State</div>
          <div style={{ width: "240px", ...styles.thText }}>City</div>
          <div style={{ flex: 1, ...styles.thText }}>Thickness Range</div>
          <div style={{ flex: 1, ...styles.thText }}>Price</div>
          <div style={{ width: "40px" }} />
        </div>

        {/* DYNAMIC BLOCKS SECTION */}
        {stateBlocks.map((block) => (
          <div key={block.id} style={styles.blockWrapper}>
            <div style={styles.blockFlexRow}>
              
              {/* STATE DROP-DOWN COLUMN */}
              <div style={{ width: "200px" }}>
                <div style={styles.selectContainer}>
                  <select
                    style={styles.customSelect}
                    value={block.state}
                    onChange={(e) => handleStateChange(block.id, e.target.value)}
                  >
                    <option value="">Select state</option>
                    <option value="California">California</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Texas">Texas</option>
                  </select>
                  <span style={styles.dropdownArrow}>▾</span>
                </div>
                <div style={styles.tagFlexContainer}>
                  {block.state && (
                    <span style={styles.blueTag}>
                      {block.state}
                      <span style={styles.tagCloseBtn} onClick={() => removeState(block.id)}>×</span>
                    </span>
                  )}
                </div>
              </div>

              {/* CITY DROP-DOWN COLUMN */}
              <div style={{ width: "240px" }}>
                <div style={styles.selectContainer}>
                  <select
                    style={styles.customSelect}
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
                  <span style={styles.dropdownArrow}>▾</span>
                </div>
                <div style={styles.tagFlexContainer}>
                  {block.cities.map((city) => (
                    <span key={city} style={styles.blueTag}>
                      {city}
                      <span style={styles.tagCloseBtn} onClick={() => removeCity(block.id, city)}>×</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* THICKNESS RANGE SELECTION */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                {block.ranges.map((r, idx) => (
                  <div key={idx} style={styles.selectContainer}>
                    <select
                      style={styles.customSelect}
                      value={r.area}
                      onChange={(e) => updateRange(block.id, idx, "area", e.target.value)}
                    >
                      <option value="">Select range</option>
                      <option value="Less than 3 inches">Less than 3 inches</option>
                      <option value="Less than 6 inches">Less than 6 inches</option>
                      <option value="Less than 9 inches">Less than 9 inches</option>
                    </select>
                    <span style={styles.dropdownArrow}>▾</span>
                  </div>
                ))}
              </div>

              {/* PRICE INPUT COLUMN */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                {block.ranges.map((r, idx) => (
                  <div key={idx} style={styles.prefixWrapper}>
                    <span style={styles.inputPrefix}>$</span>
                    <input
                      style={{ ...styles.formInput, paddingLeft: "26px" }}
                      value={r.price}
                      placeholder={idx === 0 ? "100" : "150"}
                      onChange={(e) => updateRange(block.id, idx, "price", e.target.value)}
                    />
                  </div>
                ))}
              </div>

              {/* ACTION ROUND DELETE BUTTONS */}
              <div style={{ width: "40px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                {block.ranges.map((_, idx) => (
                  <button
                    key={idx}
                    style={styles.roundRemoveBtn}
                    onClick={() => removeRange(block.id, idx)}
                  >
                    ✕
                  </button>
                ))}
              </div>
            </div>

            {/* ADD RANGE ACTION LINK */}
            <div style={styles.addRangeActionRow} onClick={() => addRange(block.id)}>
              <span style={styles.addRangeLabel}>Add Range</span>
              <button style={styles.plusCircleBtn}>+</button>
            </div>
          </div>
        ))}

        {/* ADD ANOTHER CITY TRIGGER (DYNAMIC EXTENSION) */}
        <div style={{ marginTop: "32px", borderTop: "1px solid #f1f5f9", paddingTop: "24px" }}>
          <button style={styles.addAnotherCityBtn} onClick={addBlock}>
            Add another City
          </button>
        </div>

      </div>
    </div>
  );
}

// STYLES PIXEL MATCHED TO SCREENSHOT
const styles = {
  contentWrapper: {
    flex: 1,
    padding: "32px 40px",
    background: "#f8fafc",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    boxSizing: "border-box",
    minHeight: "100%",
  },
  topNavigationRow: {
    marginBottom: "16px"
  },
  backCircleBtn: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    fontSize: "16px",
    color: "#64748b",
    outline: "none"
  },
  pageHeaderRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "28px"
  },
  pageTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1e293b",
    margin: 0
  },
  updateServiceBtn: {
    background: "#1e62c9",
    color: "#ffffff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(30, 98, 201, 0.2)"
  },
  mainFormCard: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "32px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.04)",
    border: "1px solid #f1f5f9"
  },
  formGrid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "28px",
    marginBottom: "24px"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  inputLabel: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#475569"
  },
  formInput: {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#334155",
    background: "#ffffff",
    outline: "none",
    boxSizing: "border-box"
  },
  prefixWrapper: {
    position: "relative",
    width: "100%"
  },
  inputPrefix: {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "14px",
    color: "#64748b",
    fontWeight: "500"
  },
  unitText: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#475569"
  },
  tableHeaderRow: {
    display: "flex",
    gap: "20px",
    paddingBottom: "12px",
    borderBottom: "1px solid #f1f5f9",
    marginBottom: "20px"
  },
  thText: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#475569"
  },
  blockWrapper: {
    marginBottom: "28px",
    paddingBottom: "20px",
    borderBottom: "1px solid #f8fafc"
  },
  blockFlexRow: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start"
  },
  selectContainer: {
    position: "relative",
    width: "100%"
  },
  customSelect: {
    width: "100%",
    padding: "12px 36px 12px 14px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    background: "#ffffff",
    fontSize: "13px",
    color: "#475569",
    appearance: "none",
    outline: "none",
    cursor: "pointer",
    boxSizing: "border-box"
  },
  dropdownArrow: {
    position: "absolute",
    right: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "11px",
    color: "#64748b",
    pointerEvents: "none"
  },
  tagFlexContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "10px"
  },
  blueTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    background: "#1e62c9",
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "500",
    padding: "6px 12px",
    borderRadius: "20px"
  },
  tagCloseBtn: {
    cursor: "pointer",
    fontSize: "12px",
    background: "rgba(255, 255, 255, 0.2)",
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  roundRemoveBtn: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#1e293b",
    border: "none",
    color: "#ffffff",
    fontSize: "11px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  addRangeActionRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "8px",
    marginTop: "16px",
    cursor: "pointer",
    width: "100%"
  },
  addRangeLabel: {
    fontSize: "13px",
    color: "#1e62c9",
    fontWeight: "600"
  },
  plusCircleBtn: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: "#1e62c9",
    border: "none",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  },
  addAnotherCityBtn: {
    background: "#1e62c9",
    color: "#ffffff",
    border: "none",
    padding: "14px 28px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(30, 98, 201, 0.15)"
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(15, 23, 42, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  },
  modal: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "36px",
    textAlign: "center",
    width: "360px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
  },
  modalTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0f172a",
    margin: "0 0 8px 0"
  },
  modalMsg: {
    fontSize: "14px",
    color: "#64748b",
    margin: "0 0 24px 0",
    lineHeight: 1.5
  },
  doneBtn: {
    background: "#1e62c9",
    color: "#ffffff",
    border: "none",
    padding: "12px 0",
    width: "100%",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer"
  }
};