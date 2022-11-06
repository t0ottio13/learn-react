import { resolve } from "path";
import React, { useState, useRef } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;

const ImageUploader = () => {
    const inpputImageRef = useRef<HTMLInputElement | null>(null)

    const fileRef = useRef<File | null>(null);

    const [message, setMessage] = useState<string | null>('');

    const onClickText = () => {
        if(inpputImageRef.current !== null){
            inpputImageRef.current.click();
        }
    }

    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if(files !== null && files.length > 0){
            fileRef.current = files[0]
        }
    }

    const onClickUplaod = async () => {
        if(fileRef.current !== null) {
            await sleep(UPLOAD_DELAY);
            setMessage(`${fileRef.current.name}  has been successfully uploaded` )
        }
    }

    return (
        <div>
            <p style={{textDecoration: 'underline'}} onClick={onClickText}>
                画像アップロード
            </p>

            <input
                ref={inpputImageRef}
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                style={{ visibility: 'hidden'}}
            />

            <br/>

            <button onClick={onClickUplaod}>アップロードする</button>
            {message !== null && <p>{message}</p>}
        </div>
    )
}