import ResponsiveAppBar from "./AppBar";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import '../../src/app/globals.css';
import Test from './lesson'
import Editor from '@monaco-editor/react';
import { Button } from "@mui/material";
import axios from "axios";
import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function GetOptions(urlPostfix: string, params: any) {
  return {
    method: 'GET',
    url: "http://localhost:8000" + urlPostfix,
    params: params
  };
}

export default function MainPage() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [submittedCode, setSubmittedCode] = useState<string>("");

  const [compilerOutput, setCompilerOutput] = useState<string>();
  const [codeOutput, setCodeOutput] = useState<string>();
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(user.email);
      } else {
        setAuthUser(null);
        router.push('/');
      }
    })
  })

  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function showValue() {
    const fetchData = async () => {
      if (editorRef.current) {
        const deleteResult = await axios(GetOptions("/deleteAOut", {}));
        const editorValue = (editorRef.current as any).getValue();
        const compilerResult = await axios(GetOptions("/compile", { code: editorValue }));
        const runResult = await axios(GetOptions("/run", {}));
        const compareResult = await axios(GetOptions("/compare", {
          a: runResult.data,
          b: "Hello, World!"
          // 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 
        }));
        setCompilerOutput(compilerResult.data);
        if(compareResult.data){
          toast.success("Correct Answer");
        }else{
          toast.error("Incorrect Answer");
        }
      }
    };
    fetchData();
  }

  const router = useRouter();
  return (
    <div className="homepage">
      <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />
      <ResponsiveAppBar />
      <div className="mainpage-lessons">
        <div className="lesson-content-layout">
          <Test />
          <Button
            onClick={showValue}
            className="submit-code-button"
            variant="contained"
          >
            SUBMIT CODE
          </Button>
        </div>
        <div className="code-editor-container">
          <></>
          <Editor
            className="editor"
            defaultLanguage="cpp"
            defaultValue={`#include <iostream>

int main() {
  // your code goes here
  return 0;
}
  `}
            theme="vs-dark"
            onMount={handleEditorDidMount}
          />
        </div>
      </div>
    </div>
  );
};
