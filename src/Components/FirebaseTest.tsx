import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore/lite";
import { db } from "../Firebase/firebase-config";
type Props = {};

export default function FirebaseTest({}: Props) {
  const [firebaseData, setFirebaseData] = useState<any>([]);
  console.log("firebaseData", firebaseData);
  const userCollectionRef = collection(db, "users");

  async function getData() {
    const data = await getDocs(userCollectionRef);
    console.log("data", data);

    const normalData = data.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setFirebaseData(normalData);
  }

  useEffect(() => {
    getData();
  }, []);

  return <div>FirebaseTest</div>;
}
