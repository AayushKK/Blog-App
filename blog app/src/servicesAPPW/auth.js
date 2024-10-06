import conf from "../conf/conf";
import { Client,Account,ID  } from "appwrite";
export class AuthService {
     client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        const UserAccount = await this.account.create(ID.unique(),email,password,name);       
        if (UserAccount) {
            return this.login({email,password});
        }
        else{
            return UserAccount;
        }
    }
      
    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password);
        }
        catch(e){
            console.log(e);  // use throw (e);
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(e){
           console.log(e); 
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSession();
        }
        catch(e){
            console.log(e);
        }
    }


}
const authService = new AuthService();
export default authService;