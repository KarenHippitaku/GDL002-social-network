const firestore = () => {
  return {
    collection: (nameCollection) => {
      return {
        add: (odjData) => {
          return new Promise((resolve) => {
            resolve('el usuario fue verificado')
          })
        }
      }
    }
  }
}

const firebase = {
  firestore: firestore
}

export default jest.fn(() => {
  return firebase;
})

// const firebase = {
//   firestore:() => {},
// }
