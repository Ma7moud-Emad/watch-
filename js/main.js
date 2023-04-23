let ProteinSeq = document.getElementById("seq-text");
let predection = document.getElementById("predect");

predection.onclick = function () {
  if (ProteinSeq.value.length > 0) {
    window.alert(`Protein Sequense is  ${ProteinSeq.value}`);
  } else {
    window.alert("Input Is Empty");
  }
};
