/**
 * FoodPlanner saveData.js
 * Provides functions to save/load data to a JSON file,
 * upload (replace) and download the JSON file in browser.
 */

// Example data structure
let foodData = {
    meals: [],
    groceries: []
};

// Save data to localStorage (as a fallback for file operations)
function saveData() {
    localStorage.setItem('foodPlannerData', JSON.stringify(foodData));
}

// Load data from localStorage
function loadData() {
    const data = localStorage.getItem('foodPlannerData');
    if (data) {
        foodData = JSON.parse(data);
    }
}

// Download JSON file
function downloadJSON() {
    const dataStr = JSON.stringify(foodData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'foodPlannerData.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Upload and replace JSON file
function uploadJSON(inputElement) {
    const file = inputElement.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            foodData = JSON.parse(e.target.result);
            saveData();
            alert('Data uploaded and replaced successfully!');
        } catch (err) {
            alert('Invalid JSON file.');
        }
    };
    reader.readAsText(file);
}

// Example HTML elements for upload/download
// Add these to your HTML file:
// <input type="file" id="uploadInput" accept="application/json" />
// <button onclick="downloadJSON()">Download Data</button>
// <button onclick="document.getElementById('uploadInput').click()">Upload Data</button>
// <script src="saveData.js"></script>

// Attach upload handler
document.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.getElementById('uploadInput');
    if (uploadInput) {
        uploadInput.addEventListener('change', () => uploadJSON(uploadInput));
    }
    loadData();
});