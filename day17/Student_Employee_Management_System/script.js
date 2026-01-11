/*
  CRUD operations against a JSON Server endpoint using Fetch API.
*/

const API_URL = 'http://localhost:3500/records'; // JSON Server endpoint

// Cached DOM elements
let form, tableBody, formTitle, resetBtn, typeSelect;

document.addEventListener('DOMContentLoaded', init);

function init(){
  form = document.getElementById('record-form');
  tableBody = document.querySelector('#records-table tbody');
  formTitle = document.getElementById('form-title');
  resetBtn = document.getElementById('reset-btn');
  typeSelect = document.getElementById('type');

  form.addEventListener('submit', onFormSubmit);
  resetBtn.addEventListener('click', resetForm);
  typeSelect.addEventListener('change', onTypeChange);

  loadRecords();
}

// Fetch and render all records
async function loadRecords(){
  try{
    const res = await fetch(API_URL);
    const data = await res.json();
    renderTable(data);
  }catch(err){
    console.error('Failed to load records', err);
  }
}

// Render records table rows
function renderTable(records){
  if(!records || records.length === 0){
    tableBody.innerHTML = '<tr><td colspan="7" class="empty">No records found.</td></tr>';
    return;
  }

  tableBody.innerHTML = '';
  records.forEach((r, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${idx+1}</td>
      <td>${r.type}</td>
      <td>${r.name}</td>
      <td>${r.email}</td>
      <td>${r.extra || ''}</td>
      <td class="actions">
        <button class="btn-edit" data-id="${r.id}">Edit</button>
        <button class="btn-delete" data-id="${r.id}">Delete</button>
      </td>
    `;

    // Attach handlers for buttons
    tr.querySelector('.btn-edit').addEventListener('click', () => editRecord(r));
    tr.querySelector('.btn-delete').addEventListener('click', () => deleteRecord(r.id));

    tableBody.appendChild(tr);
  });
}

// Form submit: create or update
async function onFormSubmit(e){
  const id = document.getElementById('record-id').value.trim();
  const payload = collectFormData();
  if(!validate(payload)) return;

  try{
    if(id){
      // Update
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      if(!res.ok) throw new Error('Update failed');
    }else{
      // Create
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      if(!res.ok) throw new Error('Create failed');
    }

    resetForm();
    loadRecords();
  }catch(err){
    console.error(err);
    alert('Operation failed. Check console and JSON Server.');
  }
}

// Collect data from form into object
function collectFormData(){
  return {
    type: document.getElementById('type').value,
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    extra: document.getElementById('extra').value.trim()
  };
}

// Basic validation
function validate(data){
  if(!data.name){ alert('Name is required'); return false; }
  if(!validateEmail(data.email)){ alert('Enter a valid email'); return false; }
  return true;
}

function validateEmail(email){
  return /^\S+@\S+\.\S+$/.test(email);
}

// Fill form for editing
function editRecord(record){
  document.getElementById('record-id').value = record.id;
  document.getElementById('type').value = record.type;
  document.getElementById('name').value = record.name;
  document.getElementById('email').value = record.email;
  document.getElementById('extra').value = record.extra || '';
  formTitle.textContent = 'Edit Record';
  window.scrollTo({top:0,behavior:'smooth'});
}

// Delete with confirmation
async function deleteRecord(id){
  if(!confirm('Are you sure you want to delete this record?')) return;
  try{
    const res = await fetch(`${API_URL}/${id}`, {method:'DELETE'});
    if(!res.ok) throw new Error('Delete failed');
    loadRecords();
  }catch(err){
    console.error(err);
    alert('Delete failed. Check console and JSON Server.');
  }
}

// Reset form to initial state
function resetForm(){
  form.reset();
  document.getElementById('record-id').value = '';
  formTitle.textContent = 'Add Record';
}

// Update placeholder label when type changes
function onTypeChange(){
  const t = document.getElementById('type').value;
  const label = document.querySelector('#extra-label');
  label.textContent = (t === 'Student') ? 'Class / Section' : 'Department';
  // put input back into label
  const input = document.getElementById('extra');
  label.appendChild(input);
}

