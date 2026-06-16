import React, { useState } from "react";

export default function EditSnowRemoval({ service, onBack }) {
  const [serviceName, setServiceName] = useState(service?.title || "Snow Removal");
  const [cancellationFee, setCancellationFee] = useState("10");
  const [commission, setCommission] = useState(service?.commission || "20");

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
      ranges: [{ area: "", price: "" }],
    },
  ]);

  const [showSuccess, setShowSuccess] = useState(false);

  const handleStateChange = (blockId, val) => setStateBlocks((prev) => prev.map((b) => (b.id === blockId ? { ...b, state: val, cities: [] } : b)));
  const handleCitySelect = (blockId, val) => {
    if (!val) return;
    setStateBlocks((prev) => prev.map((b) => (b.id === blockId && !b.cities.includes(val) ? { ...b, cities: [...b.cities, val] } : b)));
  };
  const removeState = (blockId) => setStateBlocks((prev) => prev.map((b) => (b.id === blockId ? { ...b, state: "", cities: [] } : b)));
  const removeCity = (blockId, city) => setStateBlocks((prev) => prev.map((b) => (b.id === blockId ? { ...b, cities: b.cities.filter((c) => c !== city) } : b)));
  const addRange = (blockId) => setStateBlocks((prev) => prev.map((b) => (b.id === blockId ? { ...b, ranges: [...b.ranges, { area: "", price: "" }] } : b)));
  const removeRange = (blockId, idx) => setStateBlocks((prev) => prev.map((b) => (b.id === blockId ? { ...b, ranges: b.ranges.filter((_, i) => i !== idx) } : b)));
  const updateRange = (blockId, idx, field, value) => setStateBlocks((prev) => prev.map((b) => (b.id === blockId ? { ...b, ranges: b.ranges.map((r, i) => (i === idx ? { ...r, [field]: value } : r)) } : b)));
  const addBlock = () => setStateBlocks((prev) => [...prev, { id: Date.now(), state: "", cities: [], ranges: [{ area: "", price: "" }] }]);

  return (
    <div style={styles.contentWrapper}>
      {/* SUCCESS POPUP MODAL */}
      {showSuccess && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div style={styles.successIconBox}>✓</div>
            <h3 style={styles.modalTitle}>Successfully!</h3>
            <p style={styles.modalMsg}>Your service has been updated successfully.</p>
            <button style={styles.doneBtn} onClick={() => { setShowSuccess(false); onBack(); }}>Done</button>
          </div>
        </div>
      )}

      <div style={styles.topNavigationRow}><button style={styles.backCircleBtn} onClick={onBack}>←</button></div>
      <div style={styles.pageHeaderRow}>
        <h2 style={styles.pageTitle}>Edit Snow Removal</h2>
        <button style={styles.updateServiceBtn} onClick={() => setShowSuccess(true)}>Update Service</button>
      </div>

      <div style={styles.mainFormCard}>
        <div style={styles.formGrid2}>
          <div style={styles.inputGroup}><label style={styles.inputLabel}>Service Name</label><input style={styles.formInput} value={serviceName} onChange={(e) => setServiceName(e.target.value)} /></div>
          <div style={styles.inputGroup}><label style={styles.inputLabel}>Cancellation Fee</label><div style={styles.prefixWrapper}><span style={styles.inputPrefix}>$</span><input style={{ ...styles.formInput, paddingLeft: "34px" }} value={cancellationFee} onChange={(e) => setCancellationFee(e.target.value)} /></div></div>
        </div>

        <div style={{ ...styles.inputGroup, marginBottom: "32px" }}><label style={styles.inputLabel}>Service Commission</label><div style={{ display: "flex", alignItems: "center", gap: "12px" }}><input style={{ ...styles.formInput, width: "100px", textAlign: "center" }} value={commission} onChange={(e) => setCommission(e.target.value)} /><span style={styles.unitText}>Percent</span></div></div>

        <div style={styles.tableHeaderRow}>
          <div style={{ width: "200px", ...styles.thText }}>State</div><div style={{ width: "240px", ...styles.thText }}>City</div><div style={{ flex: 1, ...styles.thText }}>Thickness Range</div><div style={{ flex: 1, ...styles.thText }}>Price</div><div style={{ width: "40px" }} />
        </div>

        {stateBlocks.map((block) => (
          <div key={block.id} style={styles.blockWrapper}>
            <div style={styles.blockFlexRow}>
              <div style={{ width: "200px" }}><div style={styles.selectContainer}><select style={styles.customSelect} value={block.state} onChange={(e) => handleStateChange(block.id, e.target.value)}><option value="">Select state</option><option value="California">California</option><option value="Alabama">Alabama</option></select><span style={styles.dropdownArrow}>▾</span></div><div style={styles.tagFlexContainer}>{block.state && <span style={styles.blueTag}>{block.state}<span style={styles.tagCloseBtn} onClick={() => removeState(block.id)}>×</span></span>}</div></div>
              <div style={{ width: "240px" }}><div style={styles.selectContainer}><select style={styles.customSelect} value="" onChange={(e) => handleCitySelect(block.id, e.target.value)}><option value="">Select city</option><option value="San Diego">San Diego</option><option value="Los Angeles">Los Angeles</option></select><span style={styles.dropdownArrow}>▾</span></div><div style={styles.tagFlexContainer}>{block.cities.map((city) => (<span key={city} style={styles.blueTag}>{city}<span style={styles.tagCloseBtn} onClick={() => removeCity(block.id, city)}>×</span></span>))}</div></div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>{block.ranges.map((r, idx) => (<div key={idx} style={styles.selectContainer}><select style={styles.customSelect} value={r.area} onChange={(e) => updateRange(block.id, idx, "area", e.target.value)}><option value="">Select range</option><option value="Less than 3 inches">Less than 3 inches</option><option value="Less than 6 inches">Less than 6 inches</option></select><span style={styles.dropdownArrow}>▾</span></div>))}</div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>{block.ranges.map((r, idx) => (<div key={idx} style={styles.prefixWrapper}><span style={styles.inputPrefix}>$</span><input style={{ ...styles.formInput, paddingLeft: "26px" }} value={r.price} onChange={(e) => updateRange(block.id, idx, "price", e.target.value)} /></div>))}</div>
              <div style={{ width: "40px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>{block.ranges.map((_, idx) => (<button key={idx} style={styles.roundRemoveBtn} onClick={() => removeRange(block.id, idx)}>✕</button>))}</div>
            </div>
            <div style={styles.addRangeActionRow} onClick={() => addRange(block.id)}><span style={styles.addRangeLabel}>Add Range</span><button style={styles.plusCircleBtn}>+</button></div>
          </div>
        ))}
        <div style={{ marginTop: "32px", borderTop: "1px solid #f1f5f9", paddingTop: "24px" }}><button style={styles.addAnotherCityBtn} onClick={addBlock}>Add another City</button></div>
      </div>
    </div>
  );
}

const styles = {
  contentWrapper: { flex: 1, padding: "12px 0px", fontFamily: "'Inter', sans-serif", boxSizing: "border-box" },
  // Side padding kam karke 10px kar di hai
  topNavigationRow: { marginBottom: "16px", padding: "0 10px" },
  backCircleBtn: { width: "36px", height: "36px", borderRadius: "50%", background: "#b4b8bd", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" },
  pageHeaderRow: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px", padding: "0 10px" },
  pageTitle: { fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: 0 },
  updateServiceBtn: { background: "#1e62c9", color: "#ffffff", border: "none", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: "600", cursor: "pointer" },
  mainFormCard: { padding: "0px", background: "#fff", borderRadius: "0px" },
  formGrid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginBottom: "24px", padding: "0 10px" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "8px", padding: "0 10px" },
  inputLabel: { fontSize: "13px", fontWeight: "600", color: "black" },
  formInput: { width: "100%", padding: "12px 16px", border: "1px solid #cbd5e1", borderRadius: "8px", fontSize: "14px" },
  prefixWrapper: { position: "relative" },
  inputPrefix: { position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#64748b" },
  unitText: { fontSize: "14px", fontWeight: "500", color: "black" },
  tableHeaderRow: { display: "flex", gap: "20px", paddingBottom: "12px", borderBottom: "1px solid #f1f5f9", marginBottom: "20px", padding: "0 10px" },
  thText: { fontSize: "13px", fontWeight: "600", color: "black" },
  blockWrapper: { marginBottom: "28px", paddingBottom: "20px", borderBottom: "1px solid #f8fafc", padding: "0 10px" },
  blockFlexRow: { display: "flex", gap: "20px", alignItems: "flex-start" },
  selectContainer: { position: "relative", width: "100%" },
  customSelect: { width: "100%", padding: "12px 36px 12px 14px", border: "1px solid #cbd5e1", borderRadius: "8px", appearance: "none", cursor: "pointer" },
  dropdownArrow: { position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" },
  tagFlexContainer: { display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" },
  blueTag: { display: "inline-flex", alignItems: "center", gap: "6px", background: "#1e62c9", color: "#ffffff", fontSize: "12px", padding: "6px 12px", borderRadius: "20px" },
  tagCloseBtn: { cursor: "pointer", background: "rgba(255, 255, 255, 0.3)", borderRadius: "50%", width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center" },
  roundRemoveBtn: { width: "26px", height: "26px", borderRadius: "50%", background: "#1e293b", border: "none", color: "#fff", cursor: "pointer" },
  addRangeActionRow: { display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px", marginTop: "16px", cursor: "pointer" },
  addRangeLabel: { fontSize: "13px", color: "#1e62c9", fontWeight: "600" },
  plusCircleBtn: { width: "24px", height: "24px", borderRadius: "50%", background: "#1e62c9", border: "none", color: "#fff", cursor: "pointer" },
  addAnotherCityBtn: { background: "#1e62c9", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", marginLeft: "10px" },
  overlay: { position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, backdropFilter: "blur(2px)" },
  modal: { background: "#ffffff", borderRadius: "24px", padding: "40px", textAlign: "center", width: "400px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" },
  successIconBox: { width: "64px", height: "64px", background: "#f0fdf4", color: "#22c55e", borderRadius: "50%", fontSize: "32px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" },
  modalTitle: { fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" },
  modalMsg: { fontSize: "14px", color: "#64748b", margin: "0 0 24px 0" },
  doneBtn: { background: "#1e62c9", color: "#ffffff", border: "none", padding: "14px 0", width: "100%", borderRadius: "12px", fontSize: "16px", fontWeight: "700", cursor: "pointer" }
};