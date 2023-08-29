
// const currentTime = new Date();
// const hrs = currentTime.getHours();
// const min = currentTime.getMinutes();
// const sec = currentTime.getSeconds();
// console.log(`Current time: ${hrs}:${min}:${sec}`);
// console.log('And here I start my journey!')
const contacts = require("./db/contacts");
const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");
const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
        const list = await contacts.listContacts();
        console.log(list);
        break;
    case 'get':
      const getContacts = await contacts.getContactById(id);
        console.log(getContacts);
        break;
    case 'add':
      const addContact = await contacts.addContact(name, email, phone);
      console.log(addContact);
      break;
    case 'remove':
        const delContact = await contacts.removeContact(id);
        console.log(delContact);
        break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
const array = hideBin(process.argv);
const {argv} = yargs(array);
invokeAction(argv);