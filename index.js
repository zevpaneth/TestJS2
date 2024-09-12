document.addEventListener("DOMContentLoaded", function () {
    const storage = JSON.parse(localStorage.getItem("soldiers")) || {};
    let storageIndex = Object.keys(storage).length || 0;
    const submitBtn = document.getElementById("submitBtn");
    const inputFullName = document.getElementById("inputFullName");
    const inputRank = document.getElementById("inputRank");
    const inputPosition = document.getElementById("inputPosition");
    const inputPlatoon = document.getElementById("inputPlatoon");
    const inputMissionTime = document.getElementById("inputMissionTime");
    const inputStatus = document.getElementById("inputStatus");
    const table = document.getElementById("soldierTable");

    const renderTable = () => {
        table.innerText = ""; // Clear existing rows

        // Create table headers if needed
        const headerRow = table.insertRow();
        headerRow.insertCell().textContent = "Full Name";
        headerRow.insertCell().textContent = "Rank";
        headerRow.insertCell().textContent = "Position";
        headerRow.insertCell().textContent = "Platoon";
        headerRow.insertCell().textContent = "Mission Time";
        headerRow.insertCell().textContent = "Status";

        const soldiers = JSON.parse(localStorage.getItem("soldiers")) || {};
        Object.values(soldiers).forEach(soldier => {
            const newRow = table.insertRow();
            newRow.insertCell().textContent = soldier["fullName"];
            newRow.insertCell().textContent = soldier["rank"];
            newRow.insertCell().textContent = soldier["position"];
            newRow.insertCell().textContent = soldier["platoon"];
            newRow.insertCell().textContent = soldier["missionTime"];
            newRow.insertCell().textContent = soldier["status"];
        });
    };

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const soldier = {
            fullName: inputFullName.value,
            rank: inputRank.value,
            position: inputPosition.value,
            platoon: inputPlatoon.value,
            missionTime: inputMissionTime.value,
            status: inputStatus.value,
        };

        storage[storageIndex] = soldier;
        storageIndex++;

        localStorage.setItem("soldiers", JSON.stringify(storage));
        renderTable(); // Update the table
    });

    function sortTable(n, id) {
        const table = document.getElementById(id);
        let rows, switching, i, x, y, shouldSwitch, dir = "asc", switchcount = 0;
        switching = true;

        while (switching) {
            switching = false;
            rows = table.getElementsByTagName("TR");

            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];

                if (dir === "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir === "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount === 0 && dir === "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }

    renderTable(); // Initial render on page load
});
