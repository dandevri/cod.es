const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

let db;

window.onload = function() {
 let request = window.indexedDB.open('notes', 1);

 request.onerror = function() {
     console.log('Database failed to open');
 }

 request.onsuccess = function() {
     console.log('Database opened successfully');
     db = request.result;
     displayData();
 }

 request.onupgradeneeded = function(e) {
     let db = e.target.result;
     let objectStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });

     objectStore.createIndex('title', 'title', { unique: false });
     objectStore.createIndex('body', 'body', { unique: false });

     console.log('Database setup complete');
 }

 form.onsubmit = addData;

 function addData(e) {
     e.preventDefault();

     let newItem = { title: titleInput.value, body: bodyInput.value };
     let transaction = db.transaction(['notes'], 'readwrite');
     let objectStore = transaction.objectStore('notes');

     var request = objectStore.add(newItem);
     request.onsuccess = function () {
         // Clear the form, ready for adding the next entry
         titleInput.value = '';
         bodyInput.value = '';
     };

     transaction.oncomplete = function () {
         console.log('Transaction completed: database modification finished.');

         // update the display of data to show the newly added item, by running displayData() again.
         displayData();
     };

     transaction.onerror = function () {
         console.log('Transaction not opened due to error');
     };
 }

    // Define the displayData() function
    function displayData() {
        // Here we empty the contents of the list element each time the display is updated
        // If you ddn't do this, you'd get duplicates listed each time a new note is added
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        // Open our object store and then get a cursor - which iterates through all the
        // different data items in the store
        let objectStore = db.transaction('notes').objectStore('notes');
        objectStore.openCursor().onsuccess = function (e) {
            // Get a reference to the cursor
            let cursor = e.target.result;

            // If there is still another data item to iterate through, keep running this code
            if (cursor) {
                // Create a list item, h3, and p to put each data item inside when displaying it
                // structure the HTML fragment, and append it inside the list
                let listItem = document.createElement('li');
                let h3 = document.createElement('h3');
                let para = document.createElement('p');

                listItem.appendChild(h3);
                listItem.appendChild(para);
                list.appendChild(listItem);

                // Put the data from the cursor inside the h3 and para
                h3.textContent = cursor.value.title;
                para.textContent = cursor.value.body;

                // Store the ID of the data item inside an attribute on the listItem, so we know
                // which item it corresponds to. This will be useful later when we want to delete items
                listItem.setAttribute('data-note-id', cursor.value.id);

                // Create a button and place it inside each listItem
                let deleteBtn = document.createElement('button');
                listItem.appendChild(deleteBtn);
                deleteBtn.textContent = 'Delete';

                // Set an event handler so that when the button is clicked, the deleteItem()
                // function is run
                deleteBtn.onclick = function (e) {
                    deleteItem(e);
                };

                // Iterate to the next item in the cursor
                cursor.continue();
            } else {
                // Again, if list item is empty, display a 'No notes stored' message
                if (!list.firstChild) {
                    let listItem = document.createElement('li');
                    listItem.textContent = 'No notes stored.'
                    list.appendChild(listItem);
                }
                // if there are no more cursor items to iterate through, say so
                console.log('Notes all displayed');
            }
        };
    }

    function deleteItem(e) {
        // retrieve the name of the task we want to delete. We need
        // to convert it to a number before trying it use it with IDB; IDB key
        // values are type-sensitive.
        let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));

        // open a database transaction and delete the task, finding it using the id we retrieved above
        let transaction = db.transaction(['notes'], 'readwrite');
        let objectStore = transaction.objectStore('notes');
        let request = objectStore.delete(noteId);

        // report that the data item has been deleted
        transaction.oncomplete = function () {
            // delete the parent of the button
            // which is the list item, so it is no longer displayed
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            console.log('Note ' + noteId + ' deleted.');

            // Again, if list item is empty, display a 'No notes stored' message
            if (!list.firstChild) {
                let listItem = document.createElement('li');
                listItem.textContent = 'No notes stored.';
                list.appendChild(listItem);
            }
        };
    }
}