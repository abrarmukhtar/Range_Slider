import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import AddFileButton from "./AddFileButton";
import { useFolder } from "../../hooks/useFolder";
import Folder from "./Folder";
import File from "./File";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import { database } from "../../firebase";
import { counter } from "@fortawesome/fontawesome-svg-core";
export default function Dashboard() {
  const { state = {} } = useLocation();

  const { folderId } = useParams();

  let cont = 0;

    const { folder, childFolders, childFiles } = useFolder(
      folderId,
      state.folder
      );
      
  
  // console.log(folderId);
  
  const [countRecord, setCountRecord] =useState(-1);
  const [currentCounter, setCurrentCounter]=useState(-1)
 
 function getData(id){
 
let i = 0;
   database.folders.where("parentId","==",id).get().then(
   
   
    querySnapshot=>{
      // querySnapshot.docs[0].ref.delete();

      // console.log(querySnapshot.docs.map(database.formatDoc).length);
      i = querySnapshot.docs.map(database.formatDoc).length;
       setCountRecord(querySnapshot.docs.map(database.formatDoc).length) 
        
        }
    ).catch(error=>{
      console.log(error);
    })

    return countRecord;
    // 
    // console.log(`${cont} new count`);

  }


  let currtLength =0;
  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder}> </AddFileButton>
          <AddFolderButton currentFolder={folder} />
        </div>

{/* 
        {console.log(childFolders)
        } */}
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => {
              let newC =-1;
              database.folders.where("parentId","==",childFolder.id).get().then(
   
   
                querySnapshot=>{
                  // querySnapshot.docs[0].ref.delete();
            
                  // console.log(querySnapshot.docs.map(database.formatDoc).length);
                   newC= querySnapshot.docs.map(database.formatDoc).length;
                    
                  //  setCountRecord(querySnapshot.docs.map(database.formatDoc).length) 
                    
                  console.log(newC);
                }

                ).catch(error=>{
                  console.log(error);
                })

              return (
                <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
                >
                  {/* <Folder folder={childFolder}/> */}

                  <Folder folder={childFolder} />
                  
                </div>
              );
              

            })}
          </div>
        )}

        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childFile) => {
              return (
                <div
                  key={childFile.id}
                  style={{ maxWidth: "250px" }}
                  className="p-2"
                >
                  {/* <Folder folder={childFile}/> */}
                  <File file={childFile} />
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </>
  );
}
