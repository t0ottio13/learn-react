import React, { useState, useMemo } from 'react';

export const UseMemoSample = () => {
    // textを保持するため
    const [text, setText] = useState('');

    // itemsのリストを保持するため
    const [items, setItems] = useState<string[]>([]);

    // ページで値が入力されたら、textをセットする関数
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    // ボタンが押されたときに、textをItemsに追加する関数
    const onClickButton = () => {
        setItems((prevItems) => {
            // 
            // ...の使い方
            //
            // const items = ['a', 'b', 'c']
            //
            // console.log(items) // ['a', 'b', 'c']
            // console.log(...items) // a b c
            // console.log('a', 'b', 'c') // a b c
            //
            // つまり　[]と''を外してくれるやつ
            // https://proglearn.com/2020/04/11/%e3%80%90javascript%e3%80%91-%e3%83%89%e3%83%83%e3%83%88%e3%81%8c3%e3%81%a4-%ef%bc%9f%e3%81%93%e3%82%8c%e3%80%81%e3%81%a9%e3%81%86%e3%82%84%e3%81%a3%e3%81%a6%e4%bd%bf%e3%81%86%e3%81%ae/
            //
            return [...prevItems, text]
        })

        setText('');
    }

    // reduceについて
    // https://www.sejuku.net/blog/69622
    //
    const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0);

    const numberOfCharacters2 = useMemo(() => {
        return items.reduce((sub, item) => sub + item.length, 0);
    }, [items])

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput}/>
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Numner of Characters 1: {numberOfCharacters1}</p>
                <p>Total Numner of Characters 2: {numberOfCharacters2}</p>
            </div>
        </div>
    )
}