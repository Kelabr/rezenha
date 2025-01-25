import { db } from "./firebaseConfig";
import {collection, getDocs} from 'firebase/firestore'

const Consult = async() =>{

    let Data = []

    const docRef = collection(db,'cards')
    const getData = await getDocs(docRef)

    getData.forEach((value)=>{
        Data.push(value.data())
    })

    return Data

}


export {Consult}