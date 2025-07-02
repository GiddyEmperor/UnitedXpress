document.getElementById("trackingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const trackingID = document.getElementById("trackingID").value.trim();
  const resultDiv = document.getElementById("result");

  if (trackingID === "") {
    resultDiv.innerHTML = "<p>Please enter a valid tracking ID.</p>";
    return;
  }

  resultDiv.innerHTML = "<p>Searching for your package...</p>";

  setTimeout(() => {
    // Simulated tracking statuses
    const status = [
      "📦 Package received at Lagos hub",
      "🚚 In transit to delivery address",
      "📍 Arrived at local distribution center",
      "✅ Delivered successfully!"
    ];
    
    const randomStatus = status[Math.floor(Math.random() * status.length)];
    resultDiv.innerHTML = `<p><strong>Tracking ID:</strong> ${trackingID}</p><p>Status: ${randomStatus}</p>`;
  }, 1500);
});
