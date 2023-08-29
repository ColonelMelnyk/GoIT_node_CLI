const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");
const contactsPath = path.join(__dirname, "contacts.json") ;
function listContacts() {
    // ...твій код. Повертає масив контактів.
  }
  
  function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту. 
  }