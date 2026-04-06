(() => {
  let enabled = true;

  function applyState() {
    const leaderboard = document.querySelector('[class*="LeaderboardsPreviewWrapper"]');
    if (!leaderboard) return;
    leaderboard.style.display = enabled ? "none" : "";
  }

  // Watch for leaderboard being added/changed by SPA navigation
  const observer = new MutationObserver(applyState);
  observer.observe(document.body, { childList: true, subtree: true });

  // Load initial setting and apply
  chrome.storage.sync.get({ hideLeaderboard: true }, ({ hideLeaderboard }) => {
    enabled = hideLeaderboard;
    applyState();
  });

  // React to toggle changes from the popup
  chrome.storage.onChanged.addListener((changes) => {
    if ("hideLeaderboard" in changes) {
      enabled = changes.hideLeaderboard.newValue;
      applyState();
    }
  });
})();
