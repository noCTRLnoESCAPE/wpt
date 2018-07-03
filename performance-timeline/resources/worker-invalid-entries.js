let invalid_entries = performance.getEntriesByType('invalid');
if (invalid_entries.length == 0)
  postMessage("SUCCESS");
else
  postMessage("FAILURE");
