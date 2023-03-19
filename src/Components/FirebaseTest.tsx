import { FormEvent, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../Firebase/firebase-config";

// import data from "../German-words-data.json";

export default function FirebaseTest() {
  const [firebaseData, setFirebaseData] = useState<any>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    getLiveData();
  }, []);

  async function getLiveData() {
    onSnapshot(collection(db, "users"), (snapshot) => {
      let newData: any = [];
      snapshot.docs.map((element) => {
        let newElement = { id: element.id, ...element.data() };
        newData.push(newElement);
      });
      setFirebaseData(newData);
    });
  }

  async function createUser() {
    const docToAdd = { name: name, age: age };
    const docRef = await addDoc(collection(db, "users"), docToAdd);
  }

  async function deleteUser(id: string) {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  async function updateAge(id: string, age: number) {
    const newFields = { age: age + 1 };
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, newFields);
  }

  function onSubmitFunc(e: FormEvent) {
    e.preventDefault();
    setAge(0);
    setName("");
    createUser();
  }

  return (
    <div>
      FirebaseTest
      <div className="m-5 ">
        <form className="border-8" onSubmit={onSubmitFunc}>
          <div className="flex flex-col">
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="new name"
              />
            </label>
            <label htmlFor="age">
              <input
                name="age"
                id="age"
                type="number"
                placeholder="new age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.valueAsNumber);
                }}
              />
            </label>
          </div>

          <button type="submit" className="bg-orange-600 p-5 hover:bg-red-800">
            create user
          </button>
        </form>
      </div>
      {firebaseData.map((element: any) => {
        return (
          <div className="p-4" key={element.id}>
            <div>
              {element.name} : {element.age}
            </div>
            <button
              className="border-2 bg-gray-200 p-2 hover:bg-gray-400"
              onClick={() => {
                updateAge(element.id, element.age);
              }}
            >
              increase age
            </button>
            <button
              className="border-2 bg-gray-200 p-2 hover:bg-gray-400"
              onClick={() => {
                deleteUser(element.id);
              }}
            >
              deleteUser
            </button>
          </div>
        );
      })}
    </div>
  );
}
