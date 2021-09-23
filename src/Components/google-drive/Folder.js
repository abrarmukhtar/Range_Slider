import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { database } from "../../firebase";

export default function Folder({ folder, counter }) {

  console.log(`${counter} of ${folder.name}` );


  function deleteFolder(id) {



    // database.folders.doc(id).delete();

    // console.log(countRecord);

    // console.log(parentRecords);

  }

  return (
    <>
      <div
        // onMouseOver={() => setShow(true)}
        // onMouseLeave={() => setShow(false)}
      >
        <Button
          to={{
            //pathname is property of useLocation inwhich current location store
            pathname: `/folder/${folder.id}`,
            state: { folder: folder },
          }}
          variant="outline-dark"
          className="text-trancate w-100"
          as={Link}
        >
          <FontAwesomeIcon icon={faFolder} className="mr-2" />
          {folder.name}
        </Button>
        {counter === -1 && (
          <Button onClick={() => deleteFolder(folder.id)}> Delete </Button>
        )}
      </div>
    </>
  );
}
