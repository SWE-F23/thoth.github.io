import ResponsiveAppBar from "./AppBar";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import '../../src/app/globals.css';
import Test from './LessonDemo'
import Editor from '@monaco-editor/react';
import { Button } from "@mui/material";

export default function MainPage() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [submittedCode, setSubmittedCode] = useState<string>("");
  useEffect(() => {
    const listen = onAuthStateChanged(auth,(user) => {
    if (user) {
      setAuthUser(user);
      console.log(user.email);
    } else{
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
    alert(editorRef.current.getValue());
  }

  const router = useRouter();
  return (
    <div className="homepage">
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
            defaultValue="int main() {return 0;}"
            theme="vs-dark"
            onMount={handleEditorDidMount}
          />
        </div>
      </div>
    </div>
  );
};
