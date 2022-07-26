import { db } from "../firebase-config";


import {
     collection,
     getDocs,
      getDoc ,
       addDoc,
        updateDoc,
         deleteDoc,
          doc
         } from "firebase/firestore";
const employeecollectionRef = collection(db, "Employees");
 class employeedataservice{
    addEmployee = (newemployee) => {
        return addDoc(employeecollectionRef , newemployee);
    };
    updateEmployees = (id, updateEmployee) => {
        const employeeDoc = doc(db, "Employees" , id);
        return updateDoc (employeeDoc, updateEmployee);

    };
    deleteemployee = (id) => {
        const employeeDoc = doc(db, "Employees", id);
        return deleteDoc(employeeDoc);
    };
    getAllEmployees = () => {
        return getDoc(employeecollectionRef);
    };
    getEmployee = (id) => {
        const employeeDoc = doc(db, "Employees", id);
        return getDocs(employeeDoc);
    }
    

 }
 export default new employeedataservice();