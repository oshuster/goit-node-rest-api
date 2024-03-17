import path from "path";
import { Contact } from "./schemas/contactsSchemas.js";

const filePath = "./db/contacts.json";
const contactsPath = path.resolve(filePath);

async function listContacts() {
  return Contact.find({});
}

async function getContactById(contactId) {
  return Contact.findById(contactId);
}

async function removeContact(contactId) {
  return Contact.findByIdAndDelete(contactId);
}

async function addContact(body) {
  return Contact.create(body);
}

async function updateContactById(contactId, body) {
  return Contact.findByIdAndUpdate(contactId, body, {
    returnDocument: "after",
  });
}

async function updateFavoriteById(contactId, status) {
  const contactStatus = { favorite: status };
  return Contact.findByIdAndUpdate(contactId, contactStatus, {
    returnDocument: "after",
  });
}

export {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
  updateFavoriteById,
};
