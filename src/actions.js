import 'firebase/firestore'
import * as firebase from 'firebase'
import {firebaseApp} from './firebase'

const db = firebase.firestore(firebaseApp)

export const getDocuments = async collectionName => {
  const result = {statusResponse: false, data: null, error: null}

  try {
    const snapshot = await db.collection(collectionName).get()
    result.statusResponse = true
    result.data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
  } catch (error) {
    result.error = error
  }

  return result
}

export const addDocument = async (data, collectionName) => {
  const result = {statusResponse: false, data: null, error: null}

  try {
    const response = await db.collection(collectionName).add(data)
    result.data = {id: response.id}
    result.statusResponse = true
  } catch (error) {
    result.error = error
  }

  return result
}

export const getDocumentBy = async (docId, collectionName) => {
  const result = {statusResponse: false, data: null, error: null}

  try {
    const response = await db.collection(collectionName).doc(docId).get()
    result.statusResponse = true
    result.data = {id: response.id, ...response.data()}
  } catch (error) {
    result.error = error
  }

  return result
}

export const updateDocument = async (docId, data, collectionName) => {
  const result = {statusResponse: false, data: null, error: null}

  try {
    await db.collection(collectionName).doc(docId).update(data)
    result.statusResponse = true
  } catch (error) {
    result.error = error
  }

  return result
}

export const deleteDocument = async (docId, collectionName) => {
  const result = {statusResponse: false, data: null, error: null}

  try {
    await db.collection(collectionName).doc(docId).delete()
    result.statusResponse = true
  } catch (error) {
    result.error = error
  }

  return result
}
