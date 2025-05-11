// Lista pól tekstowych do zapamiętywania historii
const fieldsToTrack = [
    'protocol_number', 'address', 'ev_number', 'building_name', 
    'owner', 'manager', 'inspector', 'participant'
];

// Funkcja dodająca wiersz do tabeli elementów
function addElementRow() {
    const table = document.querySelector('table:has(#element_1)');
    const rowCount = table.rows.length;
    const row = table.insertRow(-1);
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    
    cell1.innerHTML = `<input type="text" name="element_${rowCount}" id="element_${rowCount}">`;
    cell2.innerHTML = `<input type="text" name="element_status_${rowCount}" id="element_status_${rowCount}">`;
    cell3.innerHTML = `<input type="text" name="element_notes_${rowCount}" id="element_notes_${rowCount}">`;
}

// Funkcja dodająca wiersz do tabeli zaleceń
function addRecommendationRow() {
    const table = document.getElementById('recommendations-table');
    const rowCount = table.rows.length;
    const row = table.insertRow(-1);
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    
    cell1.innerHTML = rowCount;
    cell2.innerHTML = `<input type="text" name="prev_recommendation_${rowCount}" id="prev_recommendation_${rowCount}">`;
    cell3.innerHTML = `<input type="text" name="prev_recommendation_status_${rowCount}" id="prev_recommendation_status_${rowCount}">`;
}

// Funkcja dodająca wiersz do tabeli elementów awaryjnych
function addEmergencyRow() {
    const table = document.getElementById('emergency-table');
    const rowCount = table.rows.length;
    const row = table.insertRow(-1);
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    
    cell1.innerHTML = rowCount;
    cell2.innerHTML = `<input type="text" name="emergency_element_${rowCount}" id="emergency_element_${rowCount}">`;
    cell3.innerHTML = `<input type="text" name="emergency_repair_${rowCount}" id="emergency_repair_${rowCount}">`;
}

// Funkcja dodająca wiersz do tabeli robót remontowych
function addRepairRow() {
    const table = document.getElementById('repairs-table');
    const rowCount = table.rows.length;
    const row = table.insertRow(-1);
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    
    cell1.innerHTML = `<input type="text" name="repair_scope_${rowCount}" id="repair_scope_${rowCount}">`;
    cell2.innerHTML = `<input type="text" name="repair_deadline_${rowCount}" id="repair_deadline_${rowCount}">`;
}

// Funkcja dodająca wiersz do tabeli załączników
function addAttachmentRow() {
    const table = document.getElementById('attachments-table');
    const rowCount = table.rows.length;
    const row = table.insertRow(-1);
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    
    cell1.innerHTML = rowCount;
    cell2.innerHTML = `<input type="text" name="attachment_${rowCount}" id="attachment_${rowCount}">`;
}

// Funkcje dodające wiersze do tabel elementów budynku
function addUndergroundElement() {
    const table = document.getElementById('underground-elements-table');
    const rowCount = table.rows.length;
    const row = table.insertRow(-1);
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    
    cell1.innerHTML = `${rowCount}. <input type="text" name="underground_element_${rowCount}" id="underground_element_${rowCount}" placeholder="Nazwa elementu">`;
    cell2.innerHTML = `<input type="text" name="underground_desc_${rowCount}" id="underground_desc_${rowCount}">`;
    cell3.innerHTML = `<select name="underground_state_${rowCount}" id="underground_state_${rowCount}">
                            <option value="dobry">dobry</option>
                            <option value="dostateczny">dostateczny</option>
                            <option value="niedostateczny">niedostateczny</option>
                            <option value="awaryjny">awaryjny</option>
                        </select>`;
    cell4.innerHTML = `<input type="text" name="underground_recommendations_${rowCount}" id="underground_recommendations_${rowCount}">`;
    cell5.innerHTML = `<input type="text" name="underground_photo_${rowCount}" id="underground_photo_${rowCount}">`;
    cell6.innerHTML = `<input type="text" name="underground_date_${rowCount}" id="underground_date_${rowCount}">`;
}

function addRoofElement() {
    const table = document.getElementById('roof-elements-table');
    const rowCount = table.rows.length;
    const row = table.insertRow(-1);
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    
    cell1.innerHTML = `${rowCount}. <input type="text" name="roof_element_${rowCount}" id="roof_element_${rowCount}" placeholder="Nazwa elementu">`;
    cell2.innerHTML = `<input type="text" name="roof_desc_${rowCount}" id="roof_desc_${rowCount}">`;
    cell3.innerHTML = `<select name="roof_state_${rowCount}" id="roof_state_${rowCount}">
                            <option value="dobry">dobry</option>
                            <option value="dostateczny">dostateczny</option>
                            <option value="niedostateczny">niedostateczny</option>
                            <option value="awaryjny">awaryjny</option>
                        </select>`;
    cell4.innerHTML = `<input type="text" name="roof_recommendations_${rowCount}" id="roof_recommendations_${rowCount}">`;
    cell5.innerHTML = `<input type="text" name="roof_photo_${rowCount}" id="roof_photo_${rowCount}">`;
    cell6.innerHTML = `<input type="text" name="roof_date_${rowCount}" id="roof_date_${rowCount}">`;
}

function addExternalElement() {
    const table = document.getElementById('external-elements-table');
    const rowCount = table.rows.length;
    const row = table.insertRow(-1);
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    
    cell1.innerHTML = `${rowCount}. <input type="text" name="external_element_${rowCount}" id="external_element_${rowCount}" placeholder="Nazwa elementu">`;
    cell2.innerHTML = `<input type="text" name="external_desc_${rowCount}" id="external_desc_${rowCount}">`;
    cell3.innerHTML = `<select name="external_state_${rowCount}" id="external_state_${rowCount}">
                            <option value="dobry">dobry</option>
                            <option value="dostateczny">dostateczny</option>
                            <option value="niedostateczny">niedostateczny</option>
                            <option value="awaryjny">awaryjny</option>
                        </select>`;
    cell4.innerHTML = `<input type="text" name="external_recommendations_${rowCount}" id="external_recommendations_${rowCount}">`;
    cell5.innerHTML = `<input type="text" name="external_photo_${rowCount}" id="external_photo_${rowCount}">`;
    cell6.innerHTML = `<input type="text" name="external_date_${rowCount}" id="external_date_${rowCount}">`;
}

function addInternalElement() {
    const table = document.getElementById('internal-elements-table');
    const rowCount = table.rows.length;
    const row = table.insertRow(-1);
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    
    cell1.innerHTML = `${rowCount}. <input type="text" name="internal_element_${rowCount}" id="internal_element_${rowCount}" placeholder="Nazwa elementu">`;
    cell2.innerHTML = `<input type="text" name="internal_desc_${rowCount}" id="internal_desc_${rowCount}">`;
    cell3.innerHTML = `<select name="internal_state_${rowCount}" id="internal_state_${rowCount}">
                            <option value="dobry">dobry</option>
                            <option value="dostateczny">dostateczny</option>
                            <option value="niedostateczny">niedostateczny</option>
                            <option value="awaryjny">awaryjny</option>
                        </select>`;
    cell4.innerHTML = `<input type="text" name="internal_recommendations_${rowCount}" id="internal_recommendations_${rowCount}">`;
    cell5.innerHTML = `<input type="text" name="internal_photo_${rowCount}" id="internal_photo_${rowCount}">`;
    cell6.innerHTML = `<input type="text" name="internal_date_${rowCount}" id="internal_date_${rowCount}">`;
}

// Zapisanie protokołu do pamięci lokalnej
function saveProtocol() {
    const form = document.getElementById('protocolForm');
    const formData = new FormData(form);
    const data = {};
    
    // Pobieranie wartości pól z formularza
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Pobieranie wartości checkboxów (nie są automatycznie dodawane przez FormData)
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        data[checkbox.name] = checkbox.checked;
    });
    
    // Zapisanie całego formularza
    localStorage.setItem('protocolData', JSON.stringify(data));
    
    // Aktualizacja historii dla śledzonych pól
    fieldsToTrack.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && field.value) {
            // Pobranie istniejącej historii lub utworzenie nowej
            let history = JSON.parse(localStorage.getItem(`${fieldId}_history`)) || [];
            
            // Sprawdzenie czy wartość już istnieje
            if (!history.includes(field.value)) {
                history.push(field.value);
                // Zachowanie tylko ostatnich 10 wartości
                if (history.length > 10) {
                    history = history.slice(-10);
                }
                localStorage.setItem(`${fieldId}_history`, JSON.stringify(history));
                
                // Aktualizacja datalisty
                updateDatalist(fieldId, history);
            }
        }
    });
    
    alert('Protokół został zapisany w pamięci przeglądarki');
}

// Wczytanie protokołu z pamięci lokalnej
function loadProtocol() {
    const savedData = localStorage.getItem('protocolData');
    if (savedData) {
        const data = JSON.parse(savedData);
        const form = document.getElementById('protocolForm');
        
        // Wypełnienie pól tekstowych i select
        for (const key in data) {
            const field = form.elements[key];
            if (field && field.type !== 'checkbox') {
                field.value = data[key];
            }
        }
        
        // Ustawienie checkboxów
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = data[checkbox.name] === true || data[checkbox.name] === 'true';
        });
        
        alert('Protokół został wczytany');
    } else {
        alert('Brak zapisanego protokołu');
    }
}

// Funkcja eksportująca dane formularza do pliku JSON
function exportToJson() {
    const form = document.getElementById('protocolForm');
    const formData = new FormData(form);
    const data = {};
    
    // Pobieranie wartości pól z formularza
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Pobieranie wartości checkboxów
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        data[checkbox.name] = checkbox.checked;
    });
    
    // Utworzenie pliku do pobrania
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = window.URL.createObjectURL(dataBlob);
    
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `protokol_${data.protocol_number || 'kontroli'}.json`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Funkcja importująca dane z pliku JSON
function importFromJson(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                const form = document.getElementById('protocolForm');
                
                // Wypełnienie pól tekstowych i select
                for (const key in data) {
                    const field = form.elements[key];
                    if (field && field.type !== 'checkbox') {
                        field.value = data[key];
                    }
                }
                
                // Ustawienie checkboxów
                const checkboxes = form.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = data[checkbox.name] === true || data[checkbox.name] === 'true';
                });
                
                alert('Protokół został zaimportowany');
            } catch (error) {
                alert('Błąd podczas importowania pliku: ' + error.message);
            }
        };
        reader.readAsText(file);
    }
}

// Czyszczenie formularza
function clearForm() {
    if (confirm('Czy na pewno chcesz wyczyścić formularz? Wszystkie niezapisane dane zostaną utracone.')) {
        document.getElementById('protocolForm').reset();
    }
}

// Aktualizacja datalistów przy załadowaniu strony
function updateDatalistsFromHistory() {
    fieldsToTrack.forEach(fieldId => {
        const history = JSON.parse(localStorage.getItem(`${fieldId}_history`)) || [];
        updateDatalist(fieldId, history);
    });
}

// Funkcja aktualizująca datalisty
function updateDatalist(fieldId, values) {
    const datalist = document.getElementById(`${fieldId}s`); // np. "address" -> "addresses"
    if (datalist) {
        // Wyczyszczenie istniejących opcji
        datalist.innerHTML = '';
        
        // Dodanie nowych opcji
        values.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            datalist.appendChild(option);
        });
    }
}

// Inicjalizacja po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    updateDatalistsFromHistory();
});
