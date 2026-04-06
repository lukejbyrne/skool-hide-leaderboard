const toggle = document.getElementById("toggle");

chrome.storage.sync.get({ hideLeaderboard: true }, ({ hideLeaderboard }) => {
  toggle.checked = hideLeaderboard;
});

toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ hideLeaderboard: toggle.checked });
});
