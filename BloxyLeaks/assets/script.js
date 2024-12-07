// Mock data for files (Replace this with actual file retrieval logic if needed)
const files = {
    rbxl: [
        { name: "File1.rbxl", path: "rbxl/File1.rbxl" },
        { name: "File2.rbxl", path: "rbxl/File2.rbxl" },
    ],
    rbxm: [
        { name: "Module1.rbxm", path: "rbxm/Module1.rbxm" },
        { name: "Module2.rbxm", path: "rbxm/Module2.rbxm" },
    ],
};

// Show files based on type
function showFiles(type) {
    const fileContainer = document.getElementById("file-container");
    fileContainer.innerHTML = ""; // Clear previous files

    files[type].forEach(file => {
        const fileItem = document.createElement("div");
        fileItem.className = "file-item";

        fileItem.innerHTML = `
            <p>${file.name}</p>
            <button onclick="downloadFile('${file.path}')">Download</button>
        `;

        fileContainer.appendChild(fileItem);
    });
}

// Filter files by name
function filterFiles() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const fileItems = document.querySelectorAll(".file-item");

    fileItems.forEach(item => {
        const fileName = item.querySelector("p").textContent.toLowerCase();
        if (fileName.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Simulate file download
function downloadFile(path) {
    const a = document.createElement("a");
    a.href = path;
    a.download = path.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
