import {Databases, Query} from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID
const  COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client);

export const searchCount = async (searchTerm , movie)=>{

    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID , [
            Query.equal('searchTerm',searchTerm)
        ])
    }catch (error){
        console.log(error)
    }
}