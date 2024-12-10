import conf from "../conf/conf";
import { Client,ID ,Databases, Storage, Query  } from "appwrite";



export class BlogService {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        }catch(e){
            console.log(e);
        }
    }

    async updatePost(slug,{title,content, featuredImage, status, userId}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        }catch(e){
            console.log(e);
        }
    }

    async deletePost(slug){
        try{
              await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
        
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async getActivePosts(query=[Query.equal('status','active')]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                query,
            );
        }catch(e){
            console.log(e);
            return false;
        }

    }

    async uploadImage(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        }catch(e){
            console.log(e);
            return false;
        }

    }

    async deleteImage(fileId){
        try{
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            
        }catch(e){
            console.log(e);
            return false;
        }
    }

    getImagePreview(fileId){
        try{
            return this.bucket.getFileView( 
                conf.appwriteBucketId,
                fileId);
        }catch(e){
            console.log(e);
            return false;
        }
    }

 

}

const blogService = new BlogService()
export default blogService